const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
    name: "update",
    version: "2.0.0",
    permission: "OWNER",
    hasPrefix: true,
    credit: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "Updates the bot files. Use '/update' for runtime update, '/update full' for GitHub sync.",
    category: "SYSTEM",
    usages: "[full]",
    cooldown: 5,
};

// REPLACE THIS WITH YOUR RAW REPOSITORY URL
const REPO_BASE_URL = "https://gitlab.com/priyanshufsdev/priyanshu-fb-bot/-/raw/main/";

function parseSemver(version) {
    if (typeof version !== "string") return [0, 0, 0];
    return version.split(".").map(num => parseInt(num, 10) || 0);
}

function compareSemver(a, b) {
    const [aMaj, aMin, aPatch] = parseSemver(a);
    const [bMaj, bMin, bPatch] = parseSemver(b);
    if (aMaj !== bMaj) return aMaj - bMaj;
    if (aMin !== bMin) return aMin - bMin;
    return aPatch - bPatch;
}

function normalizeManifest(remoteManifest) {
    if (!remoteManifest) return [];
    if (Array.isArray(remoteManifest.versions)) {
        return remoteManifest.versions.filter(entry => entry?.version && Array.isArray(entry.files));
    }
    if (remoteManifest.version && Array.isArray(remoteManifest.files)) {
        return [remoteManifest];
    }
    return [];
}

module.exports.run = async ({ api, message, args }) => {
    const { threadID, messageID, senderID } = message;

    if (REPO_BASE_URL === "YOUR_REPO_RAW_URL_HERE") {
        return api.sendMessage("⚠️ Please configure the REPO_BASE_URL in modules/commands/update.js first!", threadID, messageID);
    }

    try {
        // api.sendMessage("Checking for updates...", threadID, messageID);

        // 1. Fetch remote update.json
        const remoteManifestUrl = `${REPO_BASE_URL}update.json`;
        const { data: remoteManifest } = await axios.get(remoteManifestUrl);

        // 2. Read local package.json
        const packageJsonPath = path.resolve(__dirname, '../../package.json');
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const localVersion = packageJson.version;

        const manifestEntries = normalizeManifest(remoteManifest).sort((a, b) => compareSemver(b.version, a.version));

        if (manifestEntries.length === 0) {
            return api.sendMessage("❌ Remote manifest does not contain any valid versions.", threadID, messageID);
        }

        const newerEntries = manifestEntries.filter(entry => compareSemver(entry.version, localVersion) > 0);

        if (newerEntries.length === 0) {
            return api.sendMessage(`✅ You are already on the latest version (${localVersion}).`, threadID, messageID);
        }

        const versionsToApply = [...newerEntries].sort((a, b) => compareSemver(a.version, b.version));
        const filesToUpdate = new Set();
        versionsToApply.forEach(entry => (entry.files || []).forEach(file => filesToUpdate.add(file)));

        const changelogLines = versionsToApply.map(entry => `• v${entry.version}: ${entry.changelog || "No changelog provided."}`);
        const updatePlan = {
            targetVersion: versionsToApply[versionsToApply.length - 1].version,
            files: Array.from(filesToUpdate),
            changelogLines
        };

        // 3. Compare versions already done; ask for confirmation
        const isFullUpdate = args[0] === "full";
        const filesList = updatePlan.files.length > 0
            ? updatePlan.files.map(file => `• ${file}`).join("\n")
            : "• No files listed in manifest.";

        const msg = `🚀 Updates available up to v${updatePlan.targetVersion}\n\n📝 Changes since v${localVersion}:\n${changelogLines.join("\n") || "• No changelog entries."}\n\n📂 Files to update (${updatePlan.files.length}):\n${filesList}\n\nReply "yes" to update runtime files.${isFullUpdate ? "\n(This will also push changes to your GitHub repo)" : ""}`;

        return api.sendMessage(msg, threadID, (err, info) => {
            if (err) return console.error(err);

            const replies = global.client.replies.get(threadID) || [];
            replies.push({
                messageID: info.messageID,
                command: this.config.name,
                expectedSender: senderID,
                data: { updatePlan, isFullUpdate }
            });
            global.client.replies.set(threadID, replies);
        }, messageID);

    } catch (error) {
        console.error("Update check failed:", error);
        api.sendMessage(`❌ Check failed: ${error.message}`, threadID, messageID);
    }
};

module.exports.handleReply = async ({ api, message, replyData }) => {
    const { threadID, messageID, body } = message;
    const { updatePlan, isFullUpdate } = replyData;

    if (body.toLowerCase() !== "yes") {
        return api.sendMessage("❌ Update cancelled.", threadID, messageID);
    }

    api.unsendMessage(message.messageReply.messageID);
    api.sendMessage(`🔄 Starting ${isFullUpdate ? "FULL" : "RUNTIME"} update to v${updatePlan.targetVersion}...`, threadID, messageID);

    try {
        // --- RUNTIME UPDATE ---
        let updatedFiles = [];
        let failedFiles = [];
        let fileContents = {}; // Store content for GitHub push

        for (const fileRelativePath of updatePlan.files) {
            try {
                const fileUrl = `${REPO_BASE_URL}${fileRelativePath}`;
                const localFilePath = path.resolve(__dirname, '../../', fileRelativePath);

                // Ensure directory exists
                const dir = path.dirname(localFilePath);
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }

                // Download file
                const response = await axios({
                    method: 'get',
                    url: fileUrl,
                    responseType: 'arraybuffer' // Use arraybuffer to handle all file types correctly
                });

                const content = response.data;
                fs.writeFileSync(localFilePath, content);

                updatedFiles.push(fileRelativePath);

                // Store for GitHub push if needed (convert to base64 for GitHub API)
                if (isFullUpdate) {
                    fileContents[fileRelativePath] = Buffer.from(content).toString('base64');
                }

            } catch (err) {
                console.error(`Failed to update ${fileRelativePath}:`, err);
                failedFiles.push(fileRelativePath);
            }
        }

        // Update local package.json
        const packageJsonPath = path.resolve(__dirname, '../../package.json');
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        packageJson.version = updatePlan.targetVersion;
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

        let reportMsg = `✅ Runtime Update Complete!\n🆕 Version: ${updatePlan.targetVersion}\n📂 Updated: ${updatedFiles.length}`;
        if (failedFiles.length > 0) reportMsg += `\n⚠️ Failed: ${failedFiles.length}`;

        // --- GITHUB UPDATE (Full Mode) ---
        if (isFullUpdate && updatedFiles.length > 0) {
            api.sendMessage("☁️ Pushing changes to GitHub...", threadID, messageID);
            try {
                const configPath = path.resolve(__dirname, '../../config.json');
                const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
                const { token, owner, repo } = config.github || {};

                if (!token || !owner || !repo || token === "YOUR_GITHUB_TOKEN") {
                    reportMsg += "\n\n❌ GitHub Push Failed: Missing or invalid GitHub config.";
                } else {
                    // Push each file
                    let pushedCount = 0;
                    for (const filePath of updatedFiles) {
                        const contentBase64 = fileContents[filePath];
                        await pushToGitHub(token, owner, repo, filePath, contentBase64, `Auto-update to v${updatePlan.targetVersion}`);
                        pushedCount++;
                    }
                    reportMsg += `\n\n☁️ GitHub Sync: ${pushedCount} files pushed.`;
                }
            } catch (ghErr) {
                console.error("GitHub push failed:", ghErr);
                reportMsg += `\n\n❌ GitHub Push Error: ${ghErr.message}`;
            }
        }

        api.sendMessage(reportMsg, threadID, messageID);

    } catch (error) {
        console.error("Update execution failed:", error);
        api.sendMessage(`❌ Update failed: ${error.message}`, threadID, messageID);
    }
};

// Helper function to push to GitHub
async function pushToGitHub(token, owner, repo, path, contentBase64, message) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const headers = {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json"
    };

    try {
        // 1. Get current file SHA (if it exists)
        let sha;
        try {
            const { data } = await axios.get(url, { headers });
            sha = data.sha;
        } catch (e) {
            if (e.response && e.response.status !== 404) throw e;
            // File doesn't exist, so no SHA needed
        }

        // 2. Create/Update file
        await axios.put(url, {
            message,
            content: contentBase64,
            sha
        }, { headers });

    } catch (error) {
        throw new Error(`Failed to push ${path}: ${error.response?.data?.message || error.message}`);
    }
}
