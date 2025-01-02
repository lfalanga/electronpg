let fs = require("fs");
let picture = require("cat-picture");
let src = picture.src;
let image = require("lightning-image-poly");
const { BrowserWindow } = require("@electron/remote");

let win = new BrowserWindow({ width: 800, height: 600 });
win.loadURL('https://github.com');

console.log("remote:", remote);

window.addEventListener("load", (event) => {
  console.log("Page is fully loaded");
  picture.remove();
  let viz = new image("#visualization", null, [src], {
    hullAlgorithm: "convex",
  });
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode == 80) save();
});

function save() {
  remote.getCurrentWebContents().printToPDF(
    {
      portrait: true,
    },
    function (err, data) {
      fs.writeFile("annotation.pdf", data, function (err) {
        if (err) alert("error generating pdf! " + err.message);
        else alert("pdf saved!");
      });
    }
  );
}
