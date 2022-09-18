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

display.textContent = displayValue ;

const padNum = document.querySelectorAll(".num");

//Edited method to remove current value on display and replace with new displayValue

padNum.forEach((button) => {
    button.addEventListener("click", () => {
    if (display.textContent === "0") {
        console.log(display.textContent)
        console.log(typeof(button.textContent));
    displayValue = button.textContent;
    return display.textContent = displayValue;
    } else {
        displayValue += button.textContent
        return display.textContent = displayValue;
    }
})
});