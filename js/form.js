// Name input
const inputName = document.querySelector("#name");
inputNameCheck = false;
let errorName = document.querySelector(".error__name");
inputName.addEventListener("keyup", function (event) {
  if (
    inputName.value.replace(/\s+/g, "").length >= 4 &&
    !inputName.value.includes(" ")
  ) {
    if (/^[A-Za-z]{3,}$/.test(inputName.value)) {
      errorName.textContent = "";
      inputName.style.borderColor = "#ccc";
      inputNameCheck = true;
      btn();
    }
  } else {
    errorName.textContent = "Name is not valid";
    inputName.style.borderColor = "red";
    inputNameCheck = false;
    btn();
  }
});
inputName.addEventListener("blur", function () {
  if (inputName.value == "") {
    errorName.textContent = "Name is not valid";
    inputName.style.borderColor = "red";
    inputNameCheck = false;
    btn();
  }
});
// Surname input
const inputSurname = document.querySelector("#surname");
let errorSurname = document.querySelector(".error__surname");
let inputSurnameCheck = false;
inputSurname.addEventListener("keyup", function (event) {
  if (
    inputSurname.value.replace(/\s+/g, "").length >= 5 &&
    !inputSurname.value.includes(" ")
  ) {
    if (/^[A-Za-z]{5,}$/.test(inputSurname.value)) {
      errorSurname.textContent = "";
      inputSurname.style.borderColor = "#ccc";
      inputSurnameCheck = true;
      btn();
    }
  } else {
    errorSurname.textContent = "Surname is not valid";
    inputSurname.style.borderColor = "red";
    inputSurnameCheck = false;
    btn();
  }
});
inputSurname.addEventListener("blur", function () {
  if (inputSurname.value == "") {
    errorSurname.textContent = "Surname is not valid";
    inputSurname.style.borderColor = "red";
    inputSurnameCheck = false;
    btn();
  }
});
// Date input
const inputDate = document.querySelector("#date");

let errorDate = document.querySelector(".error__date");
let inputDateCheck = false;
inputDate.addEventListener("change", function (event) {
  if (
    new Date(inputDate.value).getTime() - 24 * 60 * 60 - new Date().getTime() >
    0
  ) {
    inputDate.style.borderColor = "#ccc";
    errorDate.textContent = "";
    inputDateCheck = true;
    btn();
  } else {
    errorDate.textContent = "Date is not valid";
    inputDate.style.borderColor = "red";
    inputDateCheck = false;
    btn();
  }
});
inputDate.addEventListener("click", function () {
  errorDate.textContent = "Date is not valid";
  inputDate.style.borderColor = "red";
  inputDateCheck = false;
  btn();
});
// Street input
const inputStreet = document.querySelector("#street");
let errorStreet = document.querySelector(".error__street");
let inputStreetCheck = false;
inputStreet.addEventListener("keyup", function (event) {
  if (inputStreet.value.replace(/\s+/g, "").length >= 5) {
    if (/^[0-9a-zA-Z\s]{5,}$/.test(inputStreet.value)) {
      errorStreet.textContent = "";
      inputStreet.style.borderColor = "#ccc";
      inputStreetCheck = true;
      btn();
    }
  } else {
    errorStreet.textContent = "Sreet is not valid";
    inputStreet.style.borderColor = "red";
    inputStreetCheck = false;
    btn();
  }
});
inputStreet.addEventListener("blur", function () {
  if (inputStreet.value == "") {
    errorStreet.textContent = "Sreet is not valid";
    inputStreet.style.borderColor = "red";
    inputStreetCheck = false;
    btn();
  }
});
// House input
const inputHouse = document.querySelector("#house");
let errorHouse = document.querySelector(".error__house");
let inputHouseCheck = false;
inputHouse.addEventListener("keyup", function (event) {
  if (
    inputHouse.value.replace(/\s+/g, "").length > 0 &&
    !inputHouse.value.includes(" ")
  ) {
    if (/^[1-9]+[0-9]*$/.test(inputHouse.value)) {
      errorHouse.textContent = "";
      inputHouseCheck = true;

      inputHouse.style.borderColor = "#ccc";
      btn();
    }
  } else {
    inputHouse.style.borderColor = "red";
    errorHouse.textContent = "House number is only positive number";
    inputHouseCheck = false;
    btn();
  }
});
inputHouse.addEventListener("blur", function () {
  if (inputHouse.value == "") {
    inputHouse.style.borderColor = "red";
    errorHouse.textContent = "House number is not valid";
    inputHouseCheck = false;
    btn();
  }
});
// Flat number input
const inputFlat = document.querySelector("#flat");
let errorFlat = document.querySelector(".error__flat");
let inputFlatCheck = false;
inputFlat.addEventListener("input", function (event) {
  if (
    inputFlat.value.length === 0 ||
    !/(?!.*-$)^[1-9]+[-0-9]*$/.test(inputFlat.value)
  ) {
    errorFlat.textContent = "Flat number is positive number and Dash";
    inputFlatCheck = false;
    btn();
    console.log("hello");
  }
  if (inputFlat.value.replace(/\s+/g, "").length > 0) {
    if (/(?!.*-$)^[1-9]+[-0-9]*$/.test(inputFlat.value)) {
      errorFlat.textContent = "";
      inputFlat.style.borderColor = "#ccc";
      inputFlatCheck = true;
      btn();
      //   console.log(!/^[A-Za-z]*$/.test(inputFlat.value));
    }
  } else {
    errorFlat.textContent = "Flat number is positive number and Dash";
    inputFlatCheck = false;
    btn();
  }
});
inputFlat.addEventListener("blur", function () {
  if (inputFlat.value == "") {
    errorFlat.textContent = "Flat number is not valid";
    inputFlatCheck = false;
    btn();
  }
});
// Radio  input

let inputRadioCash = document.querySelector("#cash");
let inputRadioCard = document.querySelector("#card");

let errorRadio = document.querySelector(".error__radio");
let inputRadioCheck = false;
inputRadioCard.addEventListener("click", function (event) {
  if (inputRadioCard.checked || inputRadioCash.checked) {
    errorRadio.textContent = "";
    inputRadioCheck = true;
    btn();
  } else {
    errorRadio.textContent = "Please Choose payment";
    inputRadoCheck = false;
    btn();
  }
});
inputRadioCash.addEventListener("click", function (event) {
  if (inputRadioCard.checked || inputRadioCash.checked) {
    errorRadio.textContent = "";
    inputRadioCheck = true;
    btn();
  } else {
    errorRadio.textContent = "Please Choose payment";
    inputRadoCheck = false;
    btn();
  }
});

// gifts start

const gift_pack = document.querySelector(".gift_pack");
const gift_postcard = document.querySelector(".gift_postcard");
const gift_discount = document.querySelector(".gift_discount");
const gift_pen = document.querySelector(".gift_pen");
gift_pack.addEventListener("click", giftsCheck);
gift_discount.addEventListener("click", giftsCheck);
gift_postcard.addEventListener("click", giftsCheck);
gift_pen.addEventListener("click", giftsCheck);
let giftCount = false;
function giftsCheck() {
  if (gift_pack.checked && gift_postcard.checked) {
    gift_discount.disabled = true;
    gift_pen.disabled = true;
    giftCount = true;
    btn();
  }
  if (gift_pack.checked && gift_discount.checked) {
    gift_postcard.disabled = true;
    gift_pen.disabled = true;
    giftCount = true;
    btn();
  }
  if (gift_pack.checked && gift_pen.checked) {
    gift_discount.disabled = true;
    gift_postcard.disabled = true;
    giftCount = true;
    btn();
  }

  if (gift_discount.checked && gift_pen.checked) {
    gift_pack.disabled = true;
    gift_postcard.disabled = true;
    giftCount = true;
    btn();
  }

  if (gift_pen.checked && gift_postcard.checked) {
    gift_pack.disabled = true;
    gift_discount.disabled = true;
    giftCount = true;
    btn();
  }
  if (gift_discount.checked && gift_postcard.checked) {
    gift_pack.disabled = true;
    gift_pen.disabled = true;
    giftCount = true;
    btn();
  }
  if (
    gift_pack.checked &&
    !gift_postcard.checked &&
    !gift_discount.checked &&
    !gift_pen.checked
  ) {
    gift_postcard.disabled = false;
    gift_discount.disabled = false;
    gift_pen.disabled = false;
    giftCount = false;
    btn();
  }
  if (
    !gift_pack.checked &&
    gift_postcard.checked &&
    !gift_discount.checked &&
    !gift_pen.checked
  ) {
    gift_pack.disabled = false;
    gift_discount.disabled = false;
    gift_pen.disabled = false;
    giftCount = false;
    btn();
  }
  if (
    !gift_pack.checked &&
    !gift_postcard.checked &&
    gift_discount.checked &&
    !gift_pen.checked
  ) {
    gift_postcard.disabled = false;
    gift_pack.disabled = false;
    gift_pen.disabled = false;
    giftCount = false;
    btn();
  }
  if (
    !gift_pack.checked &&
    !gift_postcard.checked &&
    !gift_discount.checked &&
    gift_pen.checked
  ) {
    gift_postcard.disabled = false;
    gift_discount.disabled = false;
    gift_pack.disabled = false;
    giftCount = false;
    btn();
  }
}

// Submit btn
const orderBtn = document.querySelector("#order");
orderBtn.textContent = "Fill in form";
const contentWrapper = document.querySelector(".container");
const hidden = document.querySelector(".hidden");
function btn() {
  if (
    inputNameCheck &&
    inputSurnameCheck &&
    inputDateCheck &&
    inputStreetCheck &&
    inputHouseCheck &&
    inputFlatCheck &&
    giftCount &&
    inputRadioCheck
  ) {
    orderBtn.disabled = false;
    orderBtn.style.cursor = "pointer";
    orderBtn.textContent = "Submit";
    orderBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const orderedStreet = document.querySelector(".order__street");
      const orderedFlat = document.querySelector(".order__flat");
      const orderedName = document.querySelector(".order__name");
      orderedStreet.innerHTML = `Your Address : ${inputStreet.value}`;
      orderedFlat.innerHTML = `Your flat  ${inputFlat.value}`;
      orderedName.innerHTML = `Your Full Name:${inputName.value} ${inputSurname.value}`;
      contentWrapper.classList.replace("container", "hidden");
      hidden.classList.replace("hidden", "address__wrapper");
    });
  } else {
    orderBtn.style.cursor = "not-allowed";
    orderBtn.textContent = "Fill in form";
    orderBtn.disabled = true;
  }
}

window.onload = function () {
  inputName.focus();
  inputName.value = "";
  inputName.textContent = "";
  inputSurname.textContent = "";
  inputSurname.value = "";
  inputStreet.textContent = "";
  inputStreet.value = "";
  inputHouse.textContent = "";
  inputHouse.value = "";
  inputFlat.value = "";
  inputDate.value = "";
  orderBtn.disabled = true;
  orderBtn.textContent = "Fill in form";
};
