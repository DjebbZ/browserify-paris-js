var id = require("./js/identity");
// console.log("id", id(3));

// if (false) {
//     require("./js/conditional")();
// }

// var url = require('url');
// console.log("location", location.href);
// console.log("parsed location", url.parse(location.href));
// console.log("parsed web url", url.parse("https://example.com/page1?nodejs=true&browserify=true", true));

var globalVar = require("./js/globalVar.js");
console.log("globalVar", globalVar);
console.log("window.globalVar", window.globalVar);
console.log("global.globalVar", global.globalVar);

// var modulePattern = require("./js/module-pattern");
// console.log("modulePattern", modulePattern);
// console.log("window.modulePattern", window.modulePattern);

var makeButton = require("./js/ui-components/button");
var makeButton2 = require("./js/ui-components/button");
makeButton(document.body);

var amd = require("./js/amd");
console.log("amd", amd);

module.exports = "standalone";
