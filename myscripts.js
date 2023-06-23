//variables and constants
let num1 = 0;
let operator = null;
let num2 = 0;
let result = 0;
let lastInput = "none";
let number = null;
let operated = false;
const numbers = Array.from(document.getElementsByClassName("number"));
const operators = Array.from(document.getElementsByClassName("operator"));
const clear = document.getElementById("clear");
const display = document.getElementById("display");
display.innerText = " ";
const equals = document.getElementById("equals");

//math functions

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      number = add(num1, num2);
      number = +number.toFixed(2);
      break;
    case "-":
      number = subtract(num1, num2);
      number = +number.toFixed(2);
      break;
    case "*":
      number = multiply(num1, num2);
      number = +number.toFixed(2);
      break;
    case "/":
      number = divide(num1, num2);
      number = +number.toFixed(2);
      break;
  }
  return number;
}

//button event listeners

numbers.forEach((button) => {
  button.addEventListener("click", function () {
    if (lastInput === "none" && operated === false) {
      num1 = Number(button.innerText);
      display.innerText = num1;
      lastInput = "number";
    } else if (lastInput === "number" && operator === null) {
      num1 = Number(`${num1}${button.innerText}`);
      display.innerText = num1;
      lastInput = "number";
    } else if (lastInput === "operator") {
      num2 = Number(button.innerText);
      display.innerText = num2;
      lastInput = "number";
    } else if (lastInput === "number" && operator !== null) {
      num2 = Number(`${num2}${button.innerText}`);
      display.innerText = num2;
      lastInput = "number";
    }
  });
});

operators.forEach((button) => {
  button.addEventListener("click", function () {
    if (lastInput === "number" && operator === null) {
      operator = button.innerText;
      display.innerText = operator;
      lastInput = "operator";
    } else if (lastInput === "number" && operator !== null) {
      result = operate(num1, operator, num2);
      display.innerText = result;
      lastInput = "operator";
      operator = button.innerText;
      num1 = result;
    } else if (lastInput === "none" && operator !== null) {
      operator = button.innerText;
      display.innerText = operator;
      lastInput = "operator";
    }
  });
});

equals.addEventListener("click", function () {
  if (lastInput === "number" && operator !== null) {
    result = operate(num1, operator, num2);
    display.innerText = result;
    lastInput = "none";
    num1 = result;
    operated = true;
  } else if (lastInput === "none") {
    result = operate(result, operator, num2);
    display.innerText = result;
    num1 = result;
  }
});

clear.addEventListener("click", function () {
  num1 = 0;
  operator = null;
  num2 = 0;
  result = 0;
  lastInput = "none";
  number = 0;
  display.innerText = " ";
  operated = false;
});