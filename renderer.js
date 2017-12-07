// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {desktopCapturer} = require('electron');

function pollForDesktopCapturer() {
    desktopCapturer.getSources({types: ['window', 'screen']}, function(error, sources) {
        console.log("Got sources - ", sources);
        setInterval(pollForDesktopCapturer, 5000);
    });
}

pollForDesktopCapturer();