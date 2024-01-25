const inputValue = document.getElementsByClassName("buttonValue");
let inputChange = document.getElementsByClassName("inputChange");
const multiplyValue = document.getElementsByClassName("multiplyValue");
const resultValue = document.getElementsByClassName("result");

let number = "";
let operator = "*";

for (let i = 0; i < inputValue.length; i++) {
  inputValue[i].addEventListener("click", () => {
    for (let j = 0; j < inputValue.length + 1; j++) {
      inputChange[j].textContent += inputValue[i].value;
    }
    number += inputValue[i].value;
    for (let k = 0; k < inputValue.length + 1; k++) {
      let resultExp = number + operator + multiplyValue[k].textContent;
      result[k].textContent = eval(resultExp);
    }
    inputValueField.value += inputValue[i].value;
  });
}

const buttonValueField = document.getElementById("buttonValueField");
const inputValueField = document.getElementById("inputValueField");

buttonValueField.addEventListener("click", () => {
  let numberField = inputValueField.value;
  for (let i = 0; i < inputValue.length + 1; i++) {
    inputChange[i].textContent = numberField;
    let resultExp = numberField + operator + multiplyValue[i].textContent;
    result[i].textContent = eval(resultExp);
  }
});
