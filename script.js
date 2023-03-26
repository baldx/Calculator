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


function operate(x, y, op) {
    if (op === "+") return x + y;
    else if (op === "-") return x - y;
    else if (op === "*") return x * y;
    else if (op === "/") return x / y;
}

function inputOperand(operand) {
    if (firstOperator === null) {
        if (displayValue === "0" || displayValue === 0) {
            displayValue = operand;
        }
        else if (displayValue === firstOperand) {
            displayValue = operand;
        }
        else {
            displayValue += operand;
        }
    }
    else {
        if (displayValue === firstOperand) {
            displayValue = operand;
        }
        else {
            displayValue += operand;
        }
    }
    console.log(operand);
}

function clickButton() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            if (buttons[i].classList.contains("operand")) {
                
            }
        })
    }
}




function updateDisplay() {
    const display = document.getElementById("display");
    display.innerText  = displayValue;
    if (display.length > 17) {
        display.innerText = displayValue.substring(0, 16);
    }
}


updateDisplay();