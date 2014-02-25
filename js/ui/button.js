// Module that encapsulate a basic "button" ui-component

// Inject styles !
require("./button.css");

// Function that creates a button with a simple behaviour
module.exports = function(context) {

    var button = document.createElement("button");
    button.innerHTML = "I'm a button !";
    // This class is styled by the injected styles !
    // True encapsulation FTW.
    button.classList.add('button');

    button.addEventListener('click', function(e) {
        alert("I'm a button !");
    });

    context.appendChild(button);
};
