// alert(3);
// console.log(3);
var fs = require('fs')
// var cat = fs.readFileSync(__dirname + '/cat.jpg', 'hex')
// cat = new Buffer(cat.toString(), 'hex').toString('base64')
// cat = new Buffer.from(cat.toString(), 'hex').toString('base64');
// cat = new Buffer.from(cat.toString(), 'hex');

// const imagePath = __dirname + '/cat.jpg';
// const imageBuffer = fs.readFileSync(imagePath);

const _path = __dirname + '/cat.jpg';
var _img = fs.readFileSync(_path).toString('base64');
const buffer = Buffer.from(_img);

// console.log(buffer);
cat = 'data:image/jpeg;base64,' + buffer.toString();
var img = document.createElement('img')
img.setAttribute('src', cat)
img.setAttribute('class', 'cat-picture')
document.body.appendChild(img)
module.exports = img