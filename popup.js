'use strict';

document.getElementById("clearCache").addEventListener("click", () => {
    chrome.browsingData.remove({}, { "cache": true }, () => {
        alert("Cache wurde gelöscht!");
    });
});
