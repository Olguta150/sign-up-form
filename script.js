let pwd = document.getElementById('pwd');
let confirmPwd = document.getElementById("confirm-password");
let pwdValidation = document.querySelector(".pass-validation");
pwdValidation.textContent = '';

function validatePassword() {
    if(confirmPwd.value !== pwd.value) {
        pwdValidation.textContent = '* Password do not match';
        pwd.style.border = "1px solid rgb(207, 5, 5)";
        pwd.style.outline = "none";
        confirmPwd.style.border = "1px solid rgb(207, 5, 5)";
        confirmPwd.style.outline = "none";
    } else if(confirmPwd.value === pwd.value) {
        pwdValidation.textContent = '';
        pwd.style.border = "1px solid rgb(5, 117, 5)";
        pwd.style.outline = "none";
        confirmPwd.style.border = "1px solid rgb(5, 117, 5)";
        confirmPwd.style.outline = "none";
    }
}


pwd.onchange = validatePassword;
confirmPwd.onkeyup = validatePassword;