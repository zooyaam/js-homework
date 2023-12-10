const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

// querySelector
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const button = document.querySelector(".btn-login");

// 1. email 정규표현식을 사용한 validation
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function handleInputEmail() {
  if (!emailReg(userEmail.value)) {
    userEmail.classList.add("is--invalid");
  } else {
    userEmail.classList.remove("is--invalid");
  }
}

userEmail.addEventListener("input", handleInputEmail);

// 2. pw 정규표현식을 사용한 validation
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function handleInputPw() {
  if (!pwReg(userPassword.value)) {
    userPassword.classList.add("is--invalid");
  } else {
    userPassword.classList.remove("is--invalid");
  }
}

userPassword.addEventListener("input", handleInputPw);
