let a = [];
let k = 0;
let b = [];
let num = 0;

function clickedOne() {
  appendNumber(1);
}

function clickedTwo() {
  appendNumber(2);
}

function clickedThree() {
  appendNumber(3);
}

function clickedFour() {
  appendNumber(4);
}

function clickedFive() {
  appendNumber(5);
}

function clickedSix() {
  appendNumber(6);
}

function clickedSeven() {
  appendNumber(7);
}

function clickedEight() {
  appendNumber(8);
}

function clickedNine() {
  appendNumber(9);
}

function clickedZero() {
  appendNumber(0);
}

function appendNumber(value) {
  a[k] = value;
  document.getElementById("result").innerHTML = a[k];
  k++;
}

function clickedPlus() {
  appendOperator("+");
}

function clickedMinus() {
  appendOperator("-");
}

function clickedMult() {
  appendOperator("*");
}

function clickedDiv() {
  appendOperator("/");
}

function appendOperator(operator) {
  if (k === 0 || typeof a[k - 1] === "string") {
    document.getElementById("result").innerHTML = "Improper question format";
    resetCalculator();
  } else {
    a[k] = operator;
    document.getElementById("result").innerHTML = a[k];
    k++;
  }
}

function clickedEqualto() {
  num = joinDigits();
  solveExpression();
}

function clickedAllclear() {
  resetCalculator();
  document.getElementById("result").innerHTML = 0;
}

function resetCalculator() {
  a = [];
  b = [];
  k = 0;
  num = 0;
}

function joinDigits() {
  let temp = "";
  let l = 0;

  for (let i = 0; i < k; i++) {
    if (typeof a[i] === "number") {
      temp += a[i];
    }
    if (a[i] === "+" || a[i] === "-" || a[i] === "*" || a[i] === "/") {
      b[l++] = parseFloat(temp);
      b[l++] = a[i];
      temp = "";
    }
  }

  if (temp) {
    b[l] = parseFloat(temp);
  }

  num = l - 1;

  return num;
}

function solveExpression() {
  if (b.length === 0) {
    document.getElementById("result").innerHTML = "Error: Empty Expression";
    resetCalculator();
    return;
  }

  let result = b[0];

  for (let i = 1; i < b.length; i += 2) {
    let operator = b[i];
    let nextNumber = b[i + 1];

    switch (operator) {
      case "+":
        result += nextNumber;
        break;
      case "-":
        result -= nextNumber;
        break;
      case "*":
        result *= nextNumber;
        break;
      case "/":
        if (nextNumber === 0) {
          document.getElementById("result").innerHTML = "Undefined";
          resetCalculator();
          return;
        }
        result /= nextNumber;
        break;
      default:
        document.getElementById("result").innerHTML = "Error: Unknown operator";
        resetCalculator();
        return;
    }
  }

  document.getElementById("result").innerHTML = result;
  resetCalculator();
}
