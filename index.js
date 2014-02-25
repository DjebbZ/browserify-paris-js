var id = require("./js/identity");
console.log("id", id(3));

if (false) {
    require("./js/conditional")();
}

var globalVar = require("./js/globalVar.js");
console.log("globalVar", globalVar);
console.log("window.globalVar", window.globalVar);
console.log("global.globalVar", global.globalVar);

var modulePattern = require("./js/module-pattern");
console.log("modulePattern", modulePattern);
console.log("window.modulePattern", window.modulePattern);

var makeButton = require("./js/ui/button");
makeButton(document.body);
