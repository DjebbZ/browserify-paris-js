var id = require("./js/identity");
console.log("id", id(3));

if (false) {
    require("./js/conditional")();
}

var url = require('url');
console.log("location", location.href);
console.log("parsed location", url.parse(location.href));
console.log("parsed web url", url.parse("https://example.com/page1?nodejs=true&browserify=true", true));

var globalVar = require("./js/globalVar.js");
console.log("globalVar", globalVar);
console.log("window.globalVar", window.globalVar);
console.log("global.globalVar", global.globalVar);
