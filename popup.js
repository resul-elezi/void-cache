'use strict';

document.getElementById("clearCache").addEventListener("click", () => {
    chrome.browsingData.remove({}, { "cache": true }, () => {
        alert("Cache has been deleted!");
    });
});
