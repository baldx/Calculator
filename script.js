let displayValue = 0;
let firstOperator = null;
let secondOperator = null;
let firstOperand = "";
let secondOperand = "";
let result = null;
const buttons = document.querySelectorAll("button");

window.addEventListener("keydown", function(e) { //keydown event
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`); //declared key, declaration is button[data-key attribute] and calls back the keycode
    key.click(); 
});

function updateDisplay() {
    const display = document.querySelector("#display");
    display.innerText  = displayValue;
    if (display.length > 17) {
        display.innerText = displayValue.substring(0, 9);
    }
}
