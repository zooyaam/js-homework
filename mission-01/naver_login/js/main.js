const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*
요구사항
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

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

function validateEmail() {
  if (!emailReg(userEmail.value)) {
    userEmail.classList.add("is--invalid");
  } else {
    userEmail.classList.remove("is--invalid");
  }
}

userEmail.addEventListener("input", validateEmail);

// 2. pw 정규표현식을 사용한 validation
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function validatePw() {
  if (!pwReg(userPassword.value)) {
    userPassword.classList.add("is--invalid");
  } else {
    userPassword.classList.remove("is--invalid");
  }
}

userPassword.addEventListener("input", validatePw);

// 3. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
let emailSubmit = userEmail.value === user.id;
let pwSubmit = userPassword.value === user.pw;

function handleSubmit() {
  if (userEmail && userPassword) {
    window.location.href = "welcome.html";
  }
}
