let picture = require("cat-picture");
let src = picture.src;
picture.remove();
let image = require("lightning-image-poly");
window.addEventListener('load', (event) => {
  console.log('Page is fully loaded');
  let viz = new image("#visualization", null, [src], { hullAlgorithm: 'convex' });
});
