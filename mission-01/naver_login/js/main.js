const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

// querySelector
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const button = document.querySelector(".btn-login");

// email과 password의 정규표현식
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 1. email 정규표현식을 사용한 validation
function validateEmail() {
  if (!emailReg(userEmail.value)) {
    userEmail.classList.add("is--invalid");
  } else {
    userEmail.classList.remove("is--invalid");
  }
}

userEmail.addEventListener("input", validateEmail);

// 2. pw 정규표현식을 사용한 validation
function validatePw() {
  if (!pwReg(userPassword.value)) {
    userPassword.classList.add("is--invalid");
  } else {
    userPassword.classList.remove("is--invalid");
  }
}

userPassword.addEventListener("input", validatePw);

// 3. 로그인 버튼을 클릭시 조건처리
let emailSubmit = userEmail.value === user.id;
let pwSubmit = userPassword.value === user.pw;

function handleSubmit() {
  if (emailSubmit && pwSubmit) {
    window.location.href = "welcome.html";
  } else if (!emailSubmit) {
    alert("이메일을 다시 입력하세요");
  } else if (!pwSubmit) {
    alert("비밀번호를 다시 입력하세요");
  }
}

button.addEventListener("click", handleSubmit);

validateEmail();
validatePw();
idPwInput();
