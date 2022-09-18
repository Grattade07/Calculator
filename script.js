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

display.append(displayValue);
