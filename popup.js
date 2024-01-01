document.addEventListener("DOMContentLoaded", function () {
  const fontButtons = document.querySelectorAll(".fontButton");
  fontButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedFont = this.getAttribute("data-font");
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "changeFont",
          font: selectedFont,
        });
      });
    });
  });
});
