"use strict";
import "./style.css";

function Validation({ input, validLeter, vallidDigit, validAmount, }) {
  const myInput = document.querySelector(input);
  const inputLetter = document.querySelector(validLeter);
  const inputDigit = document.querySelector(vallidDigit);
  const inputAmount = document.querySelector(validAmount);

  myInput.addEventListener("input", () => {
    this.value = myInput.value;
    const regEx = /^(?=.*\d)(?=.*[A-Z])[\da-zA-Z!?;:()"-.]{8}$/;
    let res = this.value.match(regEx);
    const regBigLetter = /(?=.*[A-Z])/
    let resBigLetter = this.value.match(regBigLetter)
    
    console.log(res);
    console.log(this.value);
    
    if (resBigLetter) {
      inputLetter.style.color = 'green'
     
    }else {
      inputLetter.style.color = 'black'
     
    }
    if (this.value === "") {
      myInput.classList.remove("invalid");
      myInput.classList.remove("valid");
      return;
    }
    if (!res) {
      myInput.classList.add("invalid");
      return;
    }
    if (res) {
      myInput.classList.remove("invalid");
      myInput.classList.add("valid");
    }
  });

}

let inputFirst = new Validation(
  {
    input: '.js--input',
    validLeter: '.js--big-letter',
    vallidDigit: '.js--one-git',
    validAmount: '.js--digit'
  });

