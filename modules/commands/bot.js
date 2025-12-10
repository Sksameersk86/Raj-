const fs = require("fs");
const path = require("path");

const genderHelper = global.gender || require("../../utils/gender");
const { resolveUserProfile } = genderHelper;

const RESPONSE_DELAY_MS = 1500;
const handledMessages = new Map();
let repliesCache = null;

function shouldTrigger(body = "") {
  if (!body) return false;
  return /\bbot\b/i.test(body);
}

function cleanupHandledMap() {
  const now = Date.now();
  for (const [key, timestamp] of handledMessages.entries()) {
    if (now - timestamp > 5 * 60 * 1000) {
      handledMessages.delete(key);
    }
  }
}

function markHandled(messageID) {
  if (!messageID) return;
  handledMessages.set(messageID, Date.now());
  cleanupHandledMap();
}

function wasHandled(messageID) {
  if (!messageID) return false;
  cleanupHandledMap();
  return handledMessages.has(messageID);
}

function loadReplies() {
  if (repliesCache) return repliesCache;
  const botRepliesPath = path.join(__dirname, "noprefix", "bot-reply.json");
  repliesCache = JSON.parse(fs.readFileSync(botRepliesPath, "utf8"));
  return repliesCache;
}

function pickReply({ senderID, gender }) {
  const replies = loadReplies();
  let category = "default";
  if (senderID === "100037743553265") category = "100037743553265";
  else if (gender === 2 || gender?.toString().toUpperCase() === "MALE") category = "MALE";
  else if (gender === 1 || gender?.toString().toUpperCase() === "FEMALE") category = "FEMALE";

  let list = replies[category];
  if (!Array.isArray(list) || list.length === 0) {
    list = replies.default || [];
  }

  if (!Array.isArray(list) || list.length === 0) {
    return "Hello! 👋";
  }

  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

async function sendReply({ api, message }) {
  const { threadID, messageID, senderID, body } = message;
  if (!shouldTrigger(body) || wasHandled(messageID)) {
    return;
  }

  markHandled(messageID);

  const profile = await resolveUserProfile({ userID: senderID, threadID, api });
  const replyText = pickReply({ senderID, gender: profile.gender });
  const userName = profile.name || "User";

  return api.sendMessage({
    body: `🥀${userName}😗, ${replyText}`,
    mentions: [{ tag: userName, id: senderID }]
  }, threadID, undefined, messageID);
}

module.exports = {
  config: {
    name: "bot",
    description: "Quick reply when someone says bot",
    usage: "",
    credit: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    hasPrefix: false,
    permission: "PUBLIC",
    cooldown: 1,
    category: "SYSTEM"
  },

  run: async function({ api, message }) {
    return sendReply({ api, message });
  },

  handleEvent: async function({ api, message }) {
    if (!message?.body || wasHandled(message.messageID)) return;
    await new Promise(resolve => setTimeout(resolve, RESPONSE_DELAY_MS));
    if (wasHandled(message.messageID)) return;
    return sendReply({ api, message });
  }
};
