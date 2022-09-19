function addition(a, b) {
    return (a + b);
}

function subtraction(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function operate(a, operator, b) {
    if (operator === "+") {
       return addition(a,b)
    } else if (operator === "-") {
        return subtraction(a,b)
    } else if (operator === "*") {
        return multiply(a,b)
    } else if (operator === "/") {
        return divide(a,b)
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

function resetStoredNum () {
    firstNum = 0;
    return storedNum.textContent = firstNum;
}

function resetAll() {
    displayValue = 0;
    firstNum = 0;
    return display.textContent = displayValue,
            storedNum.textContent = firstNum;
}
const storedNum = document.querySelector("#prevNum");

let firstNum = 0;

let selectedOpr = "";

storedNum.textContent = firstNum;

const operators = document.querySelectorAll(".opr");

operators.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNum === 0) {
        firstNum = displayValue;
        selectedOpr = button.textContent;
        resetNum()
        return display.textContent = displayValue,
                storedNum.textContent = `${firstNum} ${selectedOpr}`;
        } else if (displayValue === 0 && selectedOpr === "/") {
            return alert("It's not possible to divide by zero");
        } else if (firstNum !== 0) {
            firstNum = operate(Number(firstNum), selectedOpr, Number(displayValue));
            firstNum = +firstNum.toFixed(3);
            selectedOpr = button.textContent;
            resetNum();
            return storedNum.textContent = `${firstNum} ${selectedOpr}`;    
        }
    })
});

const solution = document.querySelector(".equ");

solution.addEventListener("click", () => {
    displayValue = operate(Number(firstNum), selectedOpr, Number(displayValue));
    displayValue = +displayValue.toFixed(3);
    resetStoredNum();
    return display.textContent = displayValue;
})

const clearAll = document.querySelector(".clearAll");

clearAll.addEventListener("click", () => {
    resetAll();
});

const decimal = document.querySelector(".dec");

decimal.addEventListener("click", () => {
    if (display.textContent.includes(".")) {
        return
    } else {
        displayValue += decimal.textContent
        return display.textContent = displayValue;
    }
    }
);