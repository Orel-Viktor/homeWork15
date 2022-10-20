"use strict";
import "./style.css";

function Validation({
  input,
  validLeter,
  validDigit,
  validSymbol,
  validAmount,
}) {
  const myInput = document.querySelector(input);
  const letterRoot = document.querySelector(validLeter);
  const digitRoot = document.querySelector(validDigit);
  const symbolRoot = document.querySelector(validSymbol);
  const amountRoot = document.querySelector(validAmount);

  this.validation = function () {
    myInput.addEventListener("input", () => {
      this.value = myInput.value;
      const regEx =
        /^(?=.*\d)(?=.*[A-Z])(?=.*[!?;:()"-.])[\da-zA-Z!?;:()"-.]{8}$/;
      let res = this.value.match(regEx);
      this.initVaild();
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
  };

  this.initVaild = () => {
    this.bigLetterValidation();
    this.digitValidation();
    this.symbolValidation();
    this.amountValidation();
  };
  this.bigLetterValidation = () => {
    const regBigLetter = /(?=.*[A-Z])/;
    let resBigLetter = this.value.match(regBigLetter);
    if (resBigLetter) {
      letterRoot.style.color = "green";
    } else {
      letterRoot.style.color = "black";
    }
  };

  this.digitValidation = () => {
    const regDigit = /(?=.*\d)/;
    let resDigit = this.value.match(regDigit);
    if (resDigit) {
      digitRoot.style.color = "green";
    } else {
      digitRoot.style.color = "black";
    }
  };

  this.symbolValidation = () => {
    const regSymbol = /(?=.*[!?;:()"-.])/;
    let resSymbol = this.value.match(regSymbol);
    if (resSymbol) {
      symbolRoot.style.color = "green";
    } else {
      symbolRoot.style.color = "black";
    }
  };
  this.amountValidation = () => {
    const regAmount = /.{8}/;
    let resAmount = this.value.match(regAmount);
    if (resAmount) {
      amountRoot.style.color = "green";
    } else {
      amountRoot.style.color = "black";
    }
  };
}

let inputFirst = new Validation({
  input: ".js--input",
  validLeter: ".js--big-letter",
  validDigit: ".js--one-digit",
  validSymbol: ".js--symbol",
  validAmount: ".js--amount",
});
inputFirst.validation();

let inputSecond = new Validation({
  input: ".js--input2",
  validLeter: ".js--big-letter2",
  validDigit: ".js--one-digit2",
  validSymbol: ".js--symbol2",
  validAmount: ".js--amount2",
});
inputSecond.validation();
