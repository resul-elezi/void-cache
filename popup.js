'use strict';

document.getElementById("clear-cache").addEventListener("click", () => {
    chrome.browsingData.remove({}, { "cache": true }, () => {
        alert("Cache has been deleted!");
    });
});
