function addition(a, b) {
    console.log(a + b);
}

function subtraction(a, b) {
    console.log(a - b);
}

function multiply(a, b) {
    console.log(a * b);
}

function divide(a, b) {
    console.log (a / b);
}

function operate(operator, a, b) {
    if (operator === "+") {
        console.log(addition(a,b))
    } else if (operator === "-") {
        console.log(subtraction(a,b))
    } else if (operator === "*") {
        console.log(multiply(a,b))
    } else if (operator === "/") {
        console.log(divide(a,b))
    }
}

const display = document.querySelector('#display');

let displayValue = 0;

display.textContent = displayValue;

const padNum = document.querySelectorAll(".num");

padNum.forEach((button) => {
    button.addEventListener("click", () => {
    if (display.textContent === "0") {
    displayValue = button.textContent;
    return display.textContent = displayValue;
    } else {
        displayValue += button.textContent
        return display.textContent = displayValue;
    }
})
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    resetNum()
});

function resetNum() {
    displayValue = 0;
    return display.textContent = displayValue;
}
const storedNum = document.querySelector("#prevNum");

let firstNum = 0;

storedNum.textContent = firstNum;

const operators = document.querySelectorAll(".opr");

operators.forEach((button) => {
    button.addEventListener("click", () => {
        firstNum = displayValue;
        resetNum()
        return display.textContent = displayValue,
                storedNum.textContent = `${firstNum} ${button.textContent}`;
    })
})