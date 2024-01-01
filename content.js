chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "changeFont") {
    const selectedFont = request.font || "Arial, sans-serif";
    document.body.style.fontFamily = selectedFont;
  }
});
