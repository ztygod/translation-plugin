chrome.runtime.onMessage.addListener(async (message, sender, senderResponse) => {
    if (message.type === "TRANSLATE_TEXT") {
        const translatedText = await translateWithDeepSeek(message.text);
        senderResponse({ translatedText });
    }
    return true;
})

async function translateWithDeepSeek(text) {
    const url = "http://localhost:11434/api/generate";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: text
        }),
    });

    if (!response.ok) {
        throw new Error("DeepSeek调用失败");
    }

    const data = await response.json();

    return data.translatedText || "翻译失败";
}