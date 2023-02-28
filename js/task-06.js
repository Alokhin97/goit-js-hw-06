const validationInput = document.querySelector('input[data-length="6"]');
validationInput.addEventListener("blur", (event) => {
  if (event.currentTarget.dataset.length != event.currentTarget.value.length) {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  } else {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
});
