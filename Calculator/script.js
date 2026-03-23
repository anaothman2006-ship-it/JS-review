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
    const input = event.target.textContent;
    if (operator) {
        if (secondNumber === "0") {
            if (input === "0") return;
            secondNumber = input;
        } else {
        secondNumber += input;
        }
        display.textContent = secondNumber;
    } else {
       if (firstNumber === "0") {
        if (input === "0") return;
        firstNumber = input;
        } else {
        firstNumber += input;
        }
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
    const input = event.target.textContent;
    if (!firstNumber) {
        firstNumber = display.textContent;
        operator = input;
    }
    if (firstNumber && !secondNumber) {
        operator = input;
        display.textContent = operator;
    } else if (firstNumber && operator && secondNumber) {
        let result = operate(+firstNumber, operator, +secondNumber);
        firstNumber = result;
        operator = input;
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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function handleKeyPress(event) {
    if (numbers.includes(event.key)) {
        updateNumbers(event);
    }
}

window.addEventListener("keydown", handleKeyPress)