"use strict";

// get elements
const formEl = document.getElementById("form");
const usernameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const mobileEl = document.getElementById("mobile");
const passwordEl = document.getElementById("password");

// global variables

// functions
function init() {}

function showError(inputEl, message) {
  // ERROR LOGIC
  // 1- select the formControl of inputEl
  // parentElement
  const formControlEl = inputEl.parentElement;
  // 2- add className error to form-control
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
  formControlEl.classList.add("success");
}

function checkRequired(inputName, inputEl) {
  if (inputName === "") {
    showError(inputEl, `${inputEl.name} is Mandatory`);
  } else {
    showSuccess(inputEl);
  }
}

//event listeners
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameEl.value.trim();
  const email = emailEl.value.trim();
  const mobile = mobileEl.value.trim();
  const password = passwordEl.value.trim();
  checkRequired(username, usernameEl);
  checkRequired(email, emailEl);
  checkRequired(mobile, mobileEl);
  checkRequired(password, passwordEl);
});

// initial settings
init();
