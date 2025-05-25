// chrome.runtime.onInstalled.addListener(() => {
//   chrome.contextMenus.create({
//     id: "summarize",
//     title: "Summarize this text",
//     contexts: ["selection"]
//   });
// });

// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   if (info.menuItemId === "summarize") {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       func: summarizeSelectedText,
//     });
//   }
// });

// function summarizeSelectedText() {
//   const selectedText = window.getSelection().toString();
//   if (!selectedText) return;

//   fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "Bearer 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"
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [
//         { role: "system", content: "Summarize the following text:" },
//         { role: "user", content: selectedText }
//       ]
//     })
//   })
//     .then(res => res.json())
//     .then(data => {
//       const summary = data.choices[0].message.content;
//       alert("Summary:\n" + summary);
//     })
//     .catch(err => alert("Error summarizing text: " + err.message));
// }
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "summarize",
    title: "Summarize this text",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "summarize") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => window.getSelection().toString(),
    }, async (results) => {
      if (chrome.runtime.lastError) {
        console.error("Script execution failed:", chrome.runtime.lastError);
        return;
      }

      const selectedText = results[0]?.result;
      if (!selectedText || selectedText.trim().length === 0) {
        console.warn("No text selected to summarize.");
        return;
      }

      console.log("Selected Text:", selectedText);

      try {
        // 🔑 Replace this with your OpenAI API key
        const OPENAI_API_KEY = "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";

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `Summarize this:\n\n${selectedText}` }],
            max_tokens: 100,
          }),
        });

        const result = await response.json();
        console.log("API Response:", result);

        const summary = result?.choices?.[0]?.message?.content;

        if (summary) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (msg) => alert("📌 Summary:\n\n" + msg),
            args: [summary],
          });
        } else {
          console.error("Unexpected response structure:", result);
        }
      } catch (error) {
        console.error("❌ Error summarizing text:", error);
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => alert("An error occurred while summarizing. Please try again later."),
        });
      }
    });
  }
});
