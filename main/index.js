const { app } = require("@electron/remote");
app.whenReady().then(() => {
  console.log("app ready");
});