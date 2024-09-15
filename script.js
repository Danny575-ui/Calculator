let a = [];
let k = 0;

function clickedOne() {
  a[k] = 1;
  document.getElementById("result").innerHTML = a[k];
  k++;
}

function clickedTwo() {
  a[k] = 2;
  document.getElementById("result").innerHTML = a[k];
  k++;
}

function clickedThree() {
  a[k] = 3;
  document.getElementById("result").innerHTML = a[k];
  k++;
}

function clickedFour() {
  a[k] = 4;
  document.getElementById("result").innerHTML = a[k];
  k++;
}

function clickedFive() {
  a[k] = 5;
  document.getElementById("result").innerHTML = a[k];
  k++;
}

function clickedSix() {
  a[k] = 6;
  document.getElementById("result").innerHTML = a[k];
  k++;
}

function clickedSeven() {
  a[k] = 7;
  document.getElementById("result").innerHTML = a[k];
  k++;
}

function clickedEight() {
  a[k] = 8;
  document.getElementById("result").innerHTML = a[k];
  k++;
}

function clickedNine() {
  a[k] = 9;
  document.getElementById("result").innerHTML = a[k];
  k++;
}

function clickedZero() {
  if (a[k--] == "/") {
    document.getElementById("result").innerHTML = "Undefined";
    a = [];
    k = 0;
  } else {
    a[k] = 0;
    document.getElementById("result").innerHTML = a[k];
    k++;
  }
}

function clickedPlus() {
  if (a[k--] == "+" || a[k--] == "-" || a[k--] == "*" || a[k--] == "/") {
    document.getElementById("result").innerHTML = "Improper question format";
    a = [];
    k = 0;
  } else {
    a[k] = "+";
    document.getElementById("result").innerHTML = a[k];
    k++;
  }
}

function clickedMinus() {
  if (a[k--] == "+" || a[k--] == "-" || a[k--] == "*" || a[k--] == "/") {
    document.getElementById("result").innerHTML = "Improper question format";
    a = [];
    k = 0;
  } else {
    a[k] = "-";
    document.getElementById("result").innerHTML = a[k];
    k++;
  }
}

function clickedMult() {
  if (a[k--] == "+" || a[k--] == "-" || a[k--] == "*" || a[k--] == "/") {
    document.getElementById("result").innerHTML = "Improper question format";
    a = [];
    k = 0;
  } else {
    a[k] = "*";
    document.getElementById("result").innerHTML = a[k];
    k++;
  }
}

function clickedDiv() {
  if (a[k--] == "+" || a[k--] == "-" || a[k--] == "*" || a[k--] == "/") {
    document.getElementById("result").innerHTML = "Improper question format";
    a = [];
    k = 0;
  } else {
    a[k] = "/";
    document.getElementById("result").innerHTML = a[k];
    k++;
  }
}

function clickedEqualto() {
  a[k] = "=";
  document.getElementById("result").innerHTML = a[k];
  k++;
}

function clickedAllclear() {
  a = [];
  document.getElementById("result").innerHTML = 0;
  k = 0;
}
