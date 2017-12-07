# electron-crash-demo

Run
1) npm install
2) npm run start

In renderer.js, I am polling for ```desktopCapturer.getSources``` for every 5 seconds to get list of sources. 
Let the app be running and try to perform other activites on the system and after a while, the electron app crashes.
