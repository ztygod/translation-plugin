document.addEventListener("mouseup", () => {
    const selectText = window.getSelection().toString().trim();
    if (selectText) {
        chrome.runtime.sendMessage({ type: "TRANSLATE_TEXT", text: selectText }, (response) => {
            if (response?.translatedText) {
                showPopup(response.translatedText);
            }
        })
    }
})

function showPopup(translatedText) {
    let popup = document.getElementById("translate-popup");
    if (!popup) {
        popup = document.createElement("div");
        popup.id = "translated-popup";
        document.body.appendChild(popup);
    }
    popup.innerText = translatedText;
    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.right = "20px";
    popup.style.padding = "10px";
    popup.style.background = "rgba(0,0,0,0.8)";
    popup.style.color = "#fff";
    popup.style.borderRadius = "5px";
    popup.style.zIndex = "10000";
    setTimeout(() => popup.remove(), 5000);
}