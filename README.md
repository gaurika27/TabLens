# 📑 TabLens – AI-Powered Webpage Summarizer 

**TabLens** is a lightweight, AI-powered Chrome Extension that summarizes web content (news articles, blogs, documentation, etc.) with just one click. It integrates with **Google Gemini API** to offer **brief**, **detailed**, or **bullet-point** summaries right inside your browser.

---

## ✨ Features

-  Summarize any webpage in seconds
-  Powered by Gemini 1.5 Flash API
-  Choose between **Brief**, **Detailed**, and **Bullet** summaries
-  One-click **Copy to Clipboard**
-  Easy setup with Gemini API Key
-  Works on all websites

---

## 📸 Preview


---

## 🛠️ Tech Stack

- HTML + CSS + JavaScript
- Chrome Extension (Manifest V3)
- Google Gemini API (via REST)

---

## 📦 Installation

### 🔧 Load Unpacked in Chrome

1. Clone the repository:
   ```bash
   git clone https://github.com/gaurika27/TabLens.git
   cd TabLens
   ```
2. Go to chrome://extensions/

3. Enable Developer Mode (top-right corner)

4. Click "Load Unpacked" and select the TabLens folder

5. A new tab will open for API key setup

---

## 🔑 Get Your Gemini API Key
1. Visit: Google AI Studio

2. Sign in and create an API key

3. Copy the key and paste it into TabLens options page

---

## 🧠 How It Works
  - Extracts readable content using a content script
  - Sends content + summary style to Gemini API
  - Shows AI-generated summary inside the popup
  - Supports 3 styles: brief, detailed, bullet points
  - Summary is easily copyable via one click

---

## ⚙️ Summary Modes
|Type |	Description|
|------|-----------|
Brief	| 2-3 sentence high-level overview
Detailed |	Longform summary covering all major points
Bullets	| 5-7 short key insights in dash - format

---

## 🗂️ Folder Structure
```graphql
TabLens/
├── background.js        # Triggers API key prompt on install
├── content.js           # Grabs page content
├── popup.html           # Main popup interface
├── popup.js             # Summarization logic + API interaction
├── options.html         # Gemini API key input UI
├── options.js           # Key save/load handler
├── manifest.json        # Chrome extension config
├── icon.png             # Icon for Chrome toolbar
└── README.md            # This file
```

---
