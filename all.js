const account = document.querySelector(".mail");
const password = document.querySelector(".password");
const send = document.querySelector(".send");

send.addEventListener("click", logIn);

function logIn() {
  if (account.value.trim() === "" || password.value.trim() === "") {
    alert("請輸入完整資訊!!");
    return;
  } else {
    account.value = "";
    password.value = "";
    alert("您已登入成功!!");
    // console.log("點擊成功");
  }
}
