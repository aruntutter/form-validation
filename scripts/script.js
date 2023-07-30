"use strict";

// get elements
const formEl = document.getElementById("form");
const usernameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const mobileEl = document.getElementById("mobile");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirm-password");

// functions
function init() {}

function showError(inputEl, message) {
  // ERROR LOGIC
  // 1- select the formControl of inputEl
  // parentElement
  const formControlEl = inputEl.parentElement;
  // 2- add className error to form-control
  formControlEl.classList.remove("success");
  formControlEl.classList.add("error");
  // 3- select the small element inside formControlEl of username
  const smallEl = formControlEl.querySelector(".form-small");
  // 4- add error message to small element
  smallEl.innerText = message;
}

function showSuccess(inputEl) {
  // SUCCESS LOGIC
  // 1- select the formControl of inputEl
  // parentElement
  const formControlEl = inputEl.parentElement;
  // 2- add className success to form-control
  formControlEl.classList.remove("error");
  formControlEl.classList.add("success");

  console.log(`${inputEl.name}: ${inputEl.value}`);
}

function checkRequired(inputEl) {
  if (inputEl.value.trim() === "") {
    showError(inputEl, `${inputEl.name} is Mandatory`);
  } else {
    showSuccess(inputEl);
  }
}

function checkLength(inputEl, minLength, maxLength) {
  if (inputEl.value.length >= minLength && inputEl.value.length <= maxLength) {
    showSuccess(inputEl);
  } else if (inputEl.value.length < minLength) {
    showError(
      inputEl,
      `${inputEl.name} should be a minimum of ${minLength} characters`
    );
  } else if (inputEl.value.length > maxLength) {
    showError(
      inputEl,
      `${inputEl.name} should be a maximum of ${maxLength} characters`
    );
  }
}

function isValidEmail(str) {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(str);
}

//event listeners
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameEl.value.trim();
  const email = emailEl.value.trim();
  const mobile = mobileEl.value.trim();
  const password = passwordEl.value.trim();
  const confirmPassword = confirmPasswordEl.value.trim();

  // check required part
  checkRequired(usernameEl);
  checkRequired(emailEl);
  checkRequired(mobileEl);
  checkRequired(passwordEl);

  // check verified length
  // username 5 - 12 char
  checkLength(usernameEl, 5, 12);
  // password 8 - 14 char
  checkLength(passwordEl, 8, 14);

  // mobile
  checkLength(mobileEl, 10, 10);

  // Email validation
  if (isValidEmail(email)) {
    showSuccess(emailEl);
  } else {
    showError(emailEl, "enter a valid email address");
  }

  // compare password & confirm password
  // str should be equal

  if (confirmPassword.length === 0) {
    showError(confirmPasswordEl, "confirm password is required");
  } else if (password === confirmPassword) {
    // showSuccess(password);
    showSuccess(confirmPasswordEl);
  } else {
    showError(confirmPasswordEl, "password & confirm password not matching");
  }
});

// initial settings
init();
