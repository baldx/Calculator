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
}

function inputOperator(operator) {
    if (firstOperator != null && secondOperand === null) {
        secondOperator = operator;
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        displayValue = roundAccurately(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    }
    else if (firstOperator != null && secondOperand != null) {
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        displayValue = roundAccurately(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    }
    else {
        firstOperator = operator;
        firstOperand = displayValue;
    }
}

function equals() {
    if (firstOperator === null) {
        displayValue = displayValue;
    }
    else if (secondOperator != null) {
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator)
        if (result === "x") {
            displayValue = "x";
        }
        else {
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
    else {
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator)
        if (result === "x") {
            displayValue = "x";
        }
        else {
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
}

function percent(num) {
    displayValue = (num/100).toString();
}

function clear() {
    displayValue = 0;
}

function switchSign(num) {
    if (displayValue > 0) {
        displayValue = (num*-1).toString();
    }
    else if (displayValue < 0) {
        displayValue = (num*-1).toString();
    }
    else displayValue = 0;
}

function addComma(dot) {
    if (displayValue === firstOperand || displayValue === secondOperand) {
        displayValue = "0";
        displayValue += dot;
    }
    else if (!displayValue.includes(dot)) {
        displayValue += dot;
    }
}

function clickButton() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            if (buttons[i].classList.contains("operand")) {
                inputOperand(buttons[i].value);
                updateDisplay();
            }
            else if (buttons[i].classList.contains("operator")) {
                inputOperator(buttons[i].value);
            }
            else if (buttons[i].classList.contains("equals")) {
                equals(buttons[i].value);
                updateDisplay();
            }
            else if (buttons[i].classList.contains("percent")) {
                percent(displayValue);
                updateDisplay();
            }
            else if (buttons[i].classList.contains("clear")) {
                clear();
                updateDisplay();
            }
            else if (buttons[i].classList.contains("sign")) {
                switchSign(displayValue);
                updateDisplay();
            }
            else if (buttons[i].classList.contains("comma")) {
                addComma(buttons[i].value);
                updateDisplay();
            }
        })
    }
}

function updateDisplay() {
    const display = document.getElementById("display");
    display.innerText  = displayValue;
    if (display.length > 15) {
        display.innerText = displayValue.substring(0, 14);
    }
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + "e" + places) + "e-" + places)
}

clickButton();
updateDisplay();