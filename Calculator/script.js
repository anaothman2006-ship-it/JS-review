const digits = document.querySelectorAll(".number-btn");
const operators = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelector(".equal-btn");
const decimalBtn = document.querySelector(".decimal-btn");
const backSpaceBtn = document.querySelector(".back-space-btn");
const clearBtn = document.querySelector(".clear-btn");
const display = document.querySelector(".display")


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "You can't divide by zero, you dummy";
    } else {
        return a / b;
    }
}

function operate(a, operator, b) {
    switch (operator) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "/": return divide(a, b);
        case "*": return multiply(a, b);
    }
}

let firstNumber = "";
let operator = null;
let secondNumber = "";

function reset() {
    firstNumber = "";
    operator = null;
    secondNumber = "";
}

function updateNumbers(event) {
    if (operator) {
        if (event.target.textContent === "0" && !secondNumber) return;
        secondNumber += event.target.textContent;
        display.textContent = secondNumber;
    } else {
        if (event.target.textContent === "0" && !firstNumber) return;
        firstNumber += event.target.textContent;
        display.textContent = firstNumber;
    }
}

digits.forEach(digit => {
    digit.addEventListener("click", updateNumbers);
});


function roundResult(result) {
    return Math.round(result * 1000) / 1000;
}


function updateOperators(event) {
    if (!firstNumber) {
        firstNumber = display.textContent;
        operator = event.target.textContent
    }
    if (firstNumber && !secondNumber) {
        operator = event.target.textContent;
        display.textContent = operator;
    } else if (firstNumber && operator && secondNumber) {
        let result = operate(+firstNumber, operator, +secondNumber);
        firstNumber = result;
        operator = event.target.textContent;
        display.textContent = roundResult(result);
        secondNumber = "";
    }
}

operators.forEach(op => {
    op.addEventListener("click", updateOperators);
});

function calculate() {
    if (firstNumber && operator && secondNumber) {
        let result = operate(+firstNumber, operator, +secondNumber);
        if (typeof result === "string") {
            display.textContent = result;
            reset()
        } else {
        firstNumber = result;
        display.textContent = roundResult(firstNumber);
        reset();
    }
    }
}

equalBtn.addEventListener("click", calculate);

function backSpace() {
    if (secondNumber) {
        secondNumber = secondNumber.slice(0, -1);
        display.textContent = secondNumber;
        if (!secondNumber) display.textContent = operator;
    } else if (!secondNumber && operator) {
        operator = null;
        display.textContent = firstNumber;
    } else if (firstNumber && !operator) {
        firstNumber = firstNumber.slice(0, -1);
        display.textContent = firstNumber;
        if (!firstNumber) display.textContent = "0";
    }
}

backSpaceBtn.addEventListener("click", backSpace);


function clearDisplay() {
    reset();
    display.textContent = "0";
}

clearBtn.addEventListener("click", clearDisplay);


function addDecimal() {
    if (!firstNumber) {
        firstNumber += "0."
        display.textContent = firstNumber;
    } else if (operator && !secondNumber) {
        secondNumber += "0.";
        display.textContent = secondNumber;
    }
    else if(secondNumber && !secondNumber.includes(".")) {
        secondNumber += "."
        display.textContent = secondNumber
    } else if (firstNumber && !secondNumber && !firstNumber.includes(".")) {
        firstNumber += ".";
        display.textContent = firstNumber;
    }
}

decimalBtn.addEventListener("click", addDecimal);