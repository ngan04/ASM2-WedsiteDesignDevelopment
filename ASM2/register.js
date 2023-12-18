const inputUsernameRegister = document.querySelector("#usernameInput");
const inputPasswordRegister = document.querySelector("#passwordInput");
const btnRegister = document.querySelector("#signupButton");

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsernameRegister.value === "" || inputPasswordRegister.value === "") {
    alert("Vui lòng không để trống");
  } else {
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Success");
    window.location.href = "1.html"; // Chuyển hướng sang trang 1.html sau khi đăng ký thành công
  }
});
