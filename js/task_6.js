const inputValidation = document.querySelector("#validation-input");
console.log(inputValidation);

inputValidation.addEventListener("focus", () => {
  inputValidation.classList = "";
});

inputValidation.addEventListener("blur", onInputValidation);

function onInputValidation() {
  if (inputValidation.value.length !== Number(inputValidation.dataset.length)) {
    inputValidation.classList.add("invalid");
  } else {
    inputValidation.classList.add("valid");
  }
}
