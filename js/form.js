const inputName = document.querySelector("#name");
inputName.addEventListener("keyup", function (event) {
  let errorName = document.querySelector(".error__name");
  errorName.style.color = "red";

  if (inputName.value.replace(/\s+/g, "").length > 4) {
    if (/^[A-Za-z]{4,}$/.test(inputName.value)) {
      errorName.style.color = "green";
      errorName.textContent = "Name is valid";
    }
  } else {
    errorName.style.color = "red";
    errorName.textContent = "Name is not valid";
  }
});

window.onload = function () {
  inputName.value = "";
  errorName.textContent = "";
};
