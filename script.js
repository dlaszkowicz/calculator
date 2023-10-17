let fNum = 0;
let sNum = 0;
let operator = "";
const add = document.querySelector(".add");
const substract = document.querySelector(".substract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const numbers = document.querySelectorAll(".numButton");
const mainScreen = document.querySelector(".main");
const upperScreen = document.querySelector(".upper");
const clear = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equal = document.querySelector(".equal");

function addFun(x, y) {
  mainScreen.textContent = x + y;
  upperScreen.textContent = "";
  operator = "";
}
function substractFun(x, y) {
  mainScreen.textContent = x - y;
  upperScreen.textContent = "";
  operator = "";
}
function multiplyFun(x, y) {
  mainScreen.textContent = x * y;
  upperScreen.textContent = "";
  operator = "";
}
function divideFun(x, y) {
  mainScreen.textContent = x / y;
  upperScreen.textContent = "";
  operator = "";
}
function operateFun(op, x, y) {
  if (op === "add") {
    addFun(x, y);
  } else if (op == "substract") {
    substractFun(x, y);
  } else if (op == "multiply") {
    multiplyFun(x, y);
  } else if (op == "divide") {
    divideFun(x, y);
  }
}
function display() {
  numbers.forEach((number) =>
    number.addEventListener("click", function () {
      if (mainScreen.textContent == "0") {
        mainScreen.textContent = "";
      }
      if (mainScreen.textContent.length < 9) {
        mainScreen.textContent += number.textContent;
      }
    })
  );
}
display();
add.addEventListener("click", function () {
  if (operator == "") {
    upperScreen.textContent = mainScreen.textContent + " + ";
    operator = "add";
    fNum = Number(mainScreen.textContent);
    mainScreen.textContent = "";
  }
});
substract.addEventListener("click", function () {
  if (operator == "") {
    upperScreen.textContent = mainScreen.textContent + " - ";
    operator = "substract";
    fNum = Number(mainScreen.textContent);
    mainScreen.textContent = "";
  }
});
multiply.addEventListener("click", function () {
  if (operator == "") {
    upperScreen.textContent = mainScreen.textContent + " * ";
    operator = "multiply";
    fNum = Number(mainScreen.textContent);
    mainScreen.textContent = "";
  }
});
divide.addEventListener("click", function () {
  if (operator == "") {
    upperScreen.textContent = mainScreen.textContent + " / ";
    operator = "divide";
    fNum = Number(mainScreen.textContent);
    mainScreen.textContent = "";
  }
});
clear.addEventListener("click", function () {
  upperScreen.textContent = "";
  mainScreen.textContent = "0";
  operator = "";
});
clear.addEventListener("click", function () {
  upperScreen.textContent = "";
  mainScreen.textContent = "0";
  operator = "";
});
deleteButton.addEventListener("click", function () {
  mainScreen.textContent = mainScreen.textContent.slice(0, -1);
});
equal.addEventListener("click", function () {
  sNum = Number(mainScreen.textContent);
  operateFun(operator, fNum, sNum);
});
