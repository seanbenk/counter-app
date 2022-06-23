const numberDisplay = document.querySelector("#number");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const resetButton = document.querySelector("#reset");

let number = 0;

function add() {
  number++;
  update();
}

function subtract() {
  number--;
  update();
}

function update() {
  numberDisplay.textContent = number;
}

function reset() {
  number = 0;
  update();
}

window.addEventListener("load", update);
addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
resetButton.addEventListener("click", reset);
