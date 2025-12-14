<div align="center">

<!-- Animated Soft Gradient Header with Smooth Wave -->
<img src="https://capsule-render.vercel.app/api?type=soft&color=gradient&customColorList=24&height=180&section=header&text=PRIYANSHU%20FB%20BOT&fontSize=55&fontColor=fff&animation=twinkling&fontAlignY=45" width="100%" />

<!-- Animated Gradient Line -->
<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%" />

<!-- Smooth Animated Subtitle -->
<br>
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=600&size=22&duration=2500&pause=500&color=9D4EDD&center=true&vCenter=true&width=800&lines=Professional+Facebook+Messenger+Automation;140%2B+Commands+%7C+Real-Time+MQTT+%7C+MongoDB;Built+for+Communities+%26+Power+Users" alt="Typing SVG" />
</a>
<br><br>

<!-- Animated Robot GIF -->
<img src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif" width="400" />

<br><br>

<!-- Premium Gradient Badges with Glow Effect -->
<p>
  <img src="https://img.shields.io/badge/Node.js-v20+-43853D?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Database-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/140+-Commands-A855F7?style=for-the-badge&logo=stackblitz&logoColor=white" />
  <img src="https://img.shields.io/badge/MIT-License-3B82F6?style=for-the-badge&logo=opensourceinitiative&logoColor=white" />
</p>

<!-- Animated Tech Stack -->
<p>
  <img src="https://skillicons.dev/icons?i=nodejs,mongodb,express,js,git&theme=dark&perline=5" alt="Tech Stack" />
</p>

<!-- Stats Badges -->
<p>
  <img src="https://img.shields.io/badge/Platform-GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-Active-00C853?style=for-the-badge&logo=statuspage&logoColor=white" />
</p>

<!-- Community Join Section -->
<br>
<img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.png" width="80" />
<br><br>
<a href="https://m.me/j/AbZrTwa47MZstkC1/">
  <img src="https://img.shields.io/badge/Join%20Community-Priyanshu%20Bot%20Group-0078FF?style=for-the-badge&logo=messenger&logoColor=white" />
</a>
<br>
<sub>Need help or want to connect with other users? Join our Messenger community!</sub>
<br><br>

<!-- Animated Wave Line -->
<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%" />

</div>

<!-- Gradient Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="30"> Overview

<div align="center">
  <img src="https://img.shields.io/badge/Made%20with-❤️%20by%20Priyanshu%20Rajput-FF6B6B?style=for-the-badge" />
</div>

<br>

**Priyanshu FB Bot** is a full-featured Messenger automation platform by **Priyanshu Rajput**.  
It runs on top of **Node.js**, **MongoDB**, and the battle-tested [`fca-priyansh`](https://www.npmjs.com/package/fca-priyansh) engine.  
The bot authenticates using **Facebook cookies (appstate.json)** and ships with more than **140 commands** covering moderation, engagement, AI utilities, and automation workflows.

> ✅ **Recommended reference**: see [`DOCS.md`](./DOCS.md) for architectural deep dives, module structure, and extension guides.

<!-- Rainbow Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30"> Key Capabilities

<div align="center">

| 🎯 **Domain** | ⚡ **Highlights** |
|:---:|:---|
| <img src="https://img.shields.io/badge/🎮-Command%20Engine-6366F1?style=flat-square" /> | Prefix-based + no-prefix triggers, aliases, per-command permissions, cooldowns |
| <img src="https://img.shields.io/badge/🔄-Event%20Automation-10B981?style=flat-square" /> | Joins/leaves, nicknames, thread analytics, appstate hot reload, auto-sync |
| <img src="https://img.shields.io/badge/💾-Data%20Layer-F59E0B?style=flat-square" /> | MongoDB models for users, threads, currencies, anti-change, audit |
| <img src="https://img.shields.io/badge/💰-Economy%20System-EF4444?style=flat-square" /> | Levels, EXP, bank, inventory, configurable rewards |
| <img src="https://img.shields.io/badge/🛡️-Admin%20Ops-8B5CF6?style=flat-square" /> | Ban/unban users/threads, runtime updates, deployment helpers, logging |
| <img src="https://img.shields.io/badge/🌐-Web%20Preview-06B6D4?style=flat-square" /> | Live stats dashboard, uptime monitor, Render-ready server |
| <img src="https://img.shields.io/badge/🚀-Update%20Pipeline-EC4899?style=flat-square" /> | Runtime update + `/update full` GitHub sync via manifest control |

</div>

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif" width="25"> Architecture at a Glance

```mermaid
graph TB
    subgraph "🚀 Entry Points"
        A[📄 index.js] --> B[🔌 start.js]
        B --> C[📡 MQTT Listener]
    end
    
    subgraph "🎮 Modules"
        D[📦 modules/commands<br/>140+ Commands]
        E[📢 modules/events<br/>Event Automation]
    end
    
    subgraph "🔧 Handlers"
        F[⚙️ handles/<br/>Command Router]
        G[💬 Reply Handler]
        H[👍 Reaction Handler]
        I[🗄️ Database Sync]
    end
    
    subgraph "📊 Data Layer"
        J[👤 User Schema]
        K[💬 Thread Schema]
        L[💰 Currency Schema]
        M[🔒 Anti-Change]
    end
    
    C --> D & E
    D & E --> F
    F --> G & H & I
    I --> J & K & L & M
    
    style A fill:#6366F1,color:#fff
    style B fill:#8B5CF6,color:#fff
    style C fill:#EC4899,color:#fff
    style D fill:#10B981,color:#fff
    style E fill:#F59E0B,color:#000
    style F fill:#06B6D4,color:#fff
```

<details>
<summary><b>📁 Quick Structure Reference</b></summary>

| 📍 Path | 📝 Purpose |
|:---|:---|
| `index.js` / `start.js` | Runtime boot + MQTT listener |
| `modules/commands` | 140+ modular command files |
| `modules/events` | Event-driven automation |
| `handles/` | Core routers (command + reply + reaction + database sync) |
| `models/` | Mongoose schemas (users, threads, currencies, anti-change) |
| `utils/` | Logger, loader, permissions, server, API wrappers |

</details>

> 📖 Dive deeper in [`DOCS.md`](./DOCS.md) → Sections **2–7** cover structure, handlers, database schemas, and API helpers.

<!-- Gradient Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media.giphy.com/media/jSKBmKkvo2dPQQtsR1/giphy.gif" width="30"> Getting Started

### 📋 Prerequisites

<div align="center">

| 🔧 Requirement | 📝 Details |
|:---|:---|
| <img src="https://img.shields.io/badge/Node.js-v20+-339933?style=flat-square&logo=nodedotjs&logoColor=white" /> | LTS recommended |
| <img src="https://img.shields.io/badge/MongoDB-Cluster-47A248?style=flat-square&logo=mongodb&logoColor=white" /> | Cluster or self-hosted instance |
| <img src="https://img.shields.io/badge/Facebook-Account-1877F2?style=flat-square&logo=facebook&logoColor=white" /> | Valid cookies (`appstate.json`) |
| <img src="https://img.shields.io/badge/Port-3000/3002-FF6B6B?style=flat-square&logo=port&logoColor=white" /> | Open inbound port for preview server |

</div>

### 📥 Installation

```bash
# Clone the repository
git clone https://gitlab.com/priyanshufsdev/priyanshu-fb-bot.git

# Navigate to directory
cd priyanshu-fb-bot

# Install dependencies
npm install
```

### 📁 Configuration Checklist

<div align="center">

| 📄 **File** | 🎯 **Purpose** |
|:---|:---|
| `config.json` | Prefix, owners/admins, Mongo URI, server toggles, GitHub sync, session scheduler |
| `appstate.json` | Facebook cookies (export via browser tools) |
| `update.json` | Manifest for runtime + `/update full` sync |
| `docs/*.md` | Extension/reference guides |

</div>

<details>
<summary><b>⚙️ Core config.json Fields</b></summary>

```jsonc
{
  "ownerID": "100037743553265",      // 👑 Bot owner Facebook ID
  "adminIDs": ["10008...", "61580..."], // 🛡️ Moderators
  "supportIDs": [],                  // 🤝 Support team
  
  "prefix": "/",                     // 🎮 Command prefix
  "commandEnabled": true,            // ✅ Commands toggle
  "eventEnabled": true,              // ✅ Events toggle
  "debug": false,                    // 🐛 Debug mode
  
  "mongoURI": "mongodb+srv://...",   // 💾 Database connection
  
  "sessionManagement": {             // 🔄 Auto refresh settings
    "autoSaveAppstate": true,
    "refreshIntervalMinutes": 10
  },
  
  "server": {                        // 🌐 Web preview settings
    "port": 3000,
    "autoUptimeMonitoring": true
  },
  
  "github": {                        // 🐙 GitHub sync config
    "token": "github_pat_xxx",
    "owner": "itsmepriyansh",
    "repo": "bot-test"
  }
}
```

</details>

### ▶️ Running Locally

```bash
# 🚀 Production boot
npm start

# 🔄 Development with hot reload (optional)
npm run dev
```

### ☁️ Deploying on Render (or any PaaS)

<table>
<tr>
<td>

**Step 1** 📤
```
Push repo to GitHub/GitLab
```

</td>
<td>

**Step 2** 🔗
```
Create Web Service → attach repository
```

</td>
</tr>
<tr>
<td>

**Step 3** 📋
```
Render auto-reads render.yaml
```

</td>
<td>

**Step 4** ⚙️
```
Set NODE_ENV=production
```

</td>
</tr>
</table>

> **Step 5**: Ensure `appstate.json` + `config.json` are present (use Render disk or env injection)

> 💡 **Render-friendly perks**: built-in `server` module exposes preview, uptime ping, and environment checks.

<!-- Rainbow Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="30"> How the Bot Operates

<div align="center">

```mermaid
flowchart LR
    subgraph "1️⃣ Authentication"
        A[🍪 appstate.json] --> B[🔐 Cookie Login]
    end
    
    subgraph "2️⃣ Connection"
        B --> C[📡 MQTT Socket]
        C --> D[🔄 Auto Refresh]
    end
    
    subgraph "3️⃣ Processing"
        C --> E[💬 Messages]
        E --> F[🎮 Commands]
        E --> G[📢 Events]
    end
    
    subgraph "4️⃣ Storage"
        F & G --> H[💾 MongoDB]
    end
    
    style A fill:#FF6B6B,color:#fff
    style B fill:#6366F1,color:#fff
    style C fill:#10B981,color:#fff
    style D fill:#F59E0B,color:#000
    style E fill:#8B5CF6,color:#fff
    style F fill:#EC4899,color:#fff
    style G fill:#06B6D4,color:#fff
    style H fill:#47A248,color:#fff
```

</div>

<details>
<summary><b>1️⃣ Cookie-based Login</b></summary>

Priyanshu FB Bot authenticates with a Facebook session exported to `appstate.json`.  
- Export via browser dev tools or extensions (use the same device/browser as your usual Messenger login).  
- Keep `appstate.json` private—anyone with it can hijack the bot session.

</details>

<details>
<summary><b>2️⃣ Realtime MQTT Listener</b></summary>

`fca-priyansh` maintains an MQTT socket to Messenger.  
- `sessionManagement` in `config.json` refreshes cookies periodically (`autoSaveAppstate`, `dtsgRefreshHours`, `maxReconnectAttempts`).  
- Hot reload is triggered whenever `appstate.json` changes on disk.

</details>

<details>
<summary><b>3️⃣ Command + Event Pipeline</b></summary>

- Messages flow through `handles/handleCommand.js`.  
- Replies and reactions are tracked via `global.client.replies`/`reactions` for multi-step flows.  
- Events (joins/leaves, nickname edits, etc.) emit into `modules/events`.

</details>

<details>
<summary><b>4️⃣ Data Synchronization</b></summary>

MongoDB models keep track of threads, users, anti-change locks, and currency stats.  
- `handleDatabase.js` + `handleCreateDatabase.js` automatically sync new groups.  
- `/syncthreads` forces a manual rescan if needed.

</details>

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media.giphy.com/media/WFZvB7VIXBgiz3oDXE/giphy.gif" width="30"> Configuration Reference

<div align="center">

| ⚙️ **Field** | 📝 **Description** | 💡 **Example** |
|:---|:---|:---|
| `mongoURI` | MongoDB connection string (SRV or classic) | `mongodb+srv://user:pass@cluster0.mongodb.net/fb_bot` |
| `prefix` | Primary command prefix | `/` |
| `ownerID` | Facebook ID of the owner | `"100037743553265"` |
| `adminIDs` | Array of moderators with elevated rights | `["10008...", "61580..."]` |
| `server.port` | Web preview + uptime port (auto fallback to 4001 if busy) | `4000` |
| `server.autoUptimeMonitoring` | Ping Render/uptime robot automatically | `true` |
| `sessionManagement.refreshIntervalMinutes` | How often to refresh tokens | `10` |
| `github.token/owner/repo` | Used when `/update full` pushes to GitHub | `"github_pat_xxx"` / `"itsmepriyansh"` / `"bot-test"` |
| `spamBanSettings` | Anti-spam auto-ban thresholds | `maxCommands`, `timeWindow`, `banDuration` |
| `facebookToken` | Optional graph token for helper APIs | string |
| `botNickname` | Display nickname used by helper commands | `"Priyanshu FB Bot"` |

</div>

> 💡 **Tip:** Whenever you change `config.json`, restart the bot so the new schedule/server settings take effect.

<!-- Gradient Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="30"> Usage Highlights

### 🎮 Sample Command Categories

<div align="center">

| 🏷️ Category | 📋 Commands |
|:---:|:---|
| <img src="https://img.shields.io/badge/⚙️-Core-6366F1?style=flat-square" /> | `/help`, `/bot`, `/ping`, `/update` |
| <img src="https://img.shields.io/badge/💰-Economy-10B981?style=flat-square" /> | `/daily`, `/bank`, `/work`, `/pay` |
| <img src="https://img.shields.io/badge/🎵-Media%20+%20AI-EC4899?style=flat-square" /> | music, lyrics, downloader suites, AI chat bridge |
| <img src="https://img.shields.io/badge/🛡️-Admin-EF4444?style=flat-square" /> | `/admin ban user`, `/threadlock`, `/syncthreads`, `/runtime` |
| <img src="https://img.shields.io/badge/🔧-Utility-F59E0B?style=flat-square" /> | `/prefix`, `/uptime`, `/stats`, `/feedback` |

</div>

### 🔄 Runtime Update Flow

```bash
# 📥 Runtime manifest sync
/update

# 🐙 Compare with GitHub repo + push back via API
/update full
```

> The command inspects `update.json`, downloads changed files, bumps `package.json`, and—if `github` config is set—pushes the updated set back to the remote repository.

<!-- Rainbow Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media.giphy.com/media/fYSnHlufseco8Fh93Z/giphy.gif" width="30"> Documentation & Extension

<div align="center">

| 📚 Resource | 📝 Description |
|:---|:---|
| [`DOCS.md`](./DOCS.md) | **Primary guide** - Sections 3–5 cover handler architecture, command/event templates, and reply systems |
| `NSFW_FEATURE.md` | NSFW feature documentation |
| `PAGINATION_SOLUTION.md` | Pagination implementation guide |
| `FCA_BROADCAST_SYSTEM.md` | Broadcast system documentation |
| `PriyanshFca_Database/*` | Database documentation |

</div>

<details>
<summary><b>🚀 Recommended Flow for New Commands</b></summary>

```
1️⃣ Copy the template in DOCS.md §4.1
2️⃣ Register under modules/commands/<category>/
3️⃣ Use global.handleReply for interactive flows
```

</details>

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media.giphy.com/media/j2pOGeGYKe2xCCKwfi/giphy.gif" width="30"> Security & Best Practices

<div align="center">

| 🔒 Practice | 📝 Details |
|:---:|:---|
| <img src="https://img.shields.io/badge/🍪-Protect%20appstate.json-EF4444?style=flat-square" /> | Treat it like a password. Rotate frequently if sharing repos. |
| <img src="https://img.shields.io/badge/👤-Dedicated%20Accounts-6366F1?style=flat-square" /> | Use dedicated Facebook accounts for bots; avoid personal profiles to reduce risk of locks. |
| <img src="https://img.shields.io/badge/🔐-Lock%20MongoDB-47A248?style=flat-square" /> | Use IP whitelists or VPC peering. |
| <img src="https://img.shields.io/badge/🛡️-Limit%20Admins-F59E0B?style=flat-square" /> | Anyone listed in `adminIDs` can run owner-level commands. |
| <img src="https://img.shields.io/badge/🌐-Enable%20Auth-8B5CF6?style=flat-square" /> | Use Render auth or reverse proxies when exposing the preview dashboard publicly. |

</div>

<!-- Gradient Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media.giphy.com/media/kH1DBkPNyZPOk0BxrM/giphy.gif" width="30"> Troubleshooting

<div align="center">

| 🚨 **Symptom** | ❓ **Possible Cause** | ✅ **Suggested Fix** |
|:---|:---|:---|
| `Appstate - Your Cookie Is Wrong` | Expired or malformed `appstate.json` | Re-export cookies, ensure JSON array format |
| `MessageID should be of type string` | Host API lacks `editMessage` support | Bot now falls back automatically; ensure latest code |
| `/update full` always says up-to-date | Repo manifest already matches | Check `update.json` + remote `package.json`; ensure `github.owner/repo` configured |
| Mongo connection refused | Wrong `mongoURI` or network restrictions | Test with `mongosh`, update connection string |
| Preview port busy | Local port conflict | Change `server.port` or free port 3000/3002 |

</div>

<!-- Rainbow Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30"> Maintainer

<div align="center">

<!-- Animated Gradient Line -->
<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%" />

<br>

<!-- Animated Developer Card -->
<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=24&height=100&text=Priyanshu%20Rajput&fontSize=35&fontColor=fff&animation=twinkling" width="70%" />

<br>

<!-- Subtitle -->
<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=500&size=18&duration=3000&pause=1000&color=A855F7&center=true&vCenter=true&repeat=true&width=450&height=40&lines=Full-Stack+Automation+Engineer;Community+Builder;Open+Source+Enthusiast" alt="Typing SVG" />

<br><br>

<!-- Animated Social Icons with Hover Effect -->
<p align="center">
  <a href="https://facebook.com/priyanshu.rajput.official" target="_blank">
    <img src="https://files.catbox.moe/sdxsnp.gif" alt="Facebook" width="48" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://instagram.com/pri_yanshu12" target="_blank">
    <img src="https://files.catbox.moe/mfoqbf.gif" alt="Instagram" width="48" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://t.me/priyanshrajput" target="_blank">
    <img src="https://files.catbox.moe/l9297f.gif" alt="Telegram" width="48" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://gitlab.com/priyanshufsdev" target="_blank">
    <img src="https://files.catbox.moe/w35fa3.gif" alt="GitLab" width="48" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/priyanshufsdev" target="_blank">
    <img src="https://cdnl.iconscout.com/lottie/premium/thumb/github-logo-animation-gif-download-10490199.gif" alt="GitHub" width="48" />
  </a>
</p>

<br><br>

<!-- Contact Animation -->
<img src="https://user-images.githubusercontent.com/74038190/216649426-0c2ee152-84d8-4707-85c4-27a378d2f78a.gif" width="180" />

<br>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=16&duration=4000&pause=1000&color=10B981&center=true&vCenter=true&repeat=true&width=400&height=35&lines=Let's+collaborate+on+amazing+projects!;DMs+are+always+open" alt="Typing SVG" />

<br>

<!-- Animated Gradient Line -->
<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%" />

</div>

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif" width="30"> License

<div align="center">

<img src="https://img.shields.io/badge/MIT-License-6366F1?style=for-the-badge&logo=opensourceinitiative&logoColor=white" />

**MIT © Priyanshu Rajput**

<br>

<img src="https://img.shields.io/badge/⚠️-Use%20Responsibly-FF6B6B?style=flat-square" />

*Respect Facebook's platform policies and community guidelines when deploying Priyanshu FB Bot.*

</div>

<!-- Animated Footer -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer&animation=twinkling" width="100%" />

<div align="center">

**⭐ Star this repo on GitLab if you found it helpful! ⭐**

<a href="https://gitlab.com/priyanshufsdev/priyanshu-fb-bot">
  <img src="https://img.shields.io/badge/View%20on-GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white" />
</a>

</div>