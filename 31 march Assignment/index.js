const form = document.querySelector(".form");
const username = form.username;
const email = form.email;
const password = form.password;
const password2 = form.password2;

form.addEventListener("submit", (e) => {
    console.log(form.value);
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    console.log(password2.value);
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if (usernameValue === '' && usernameValue.length < 6) {
        setError(username, 'Username cannot be blank and shoud be greater than 6 characters');
    } else {
        setSuccess(username)
    }

    if (emailValue === '') {
        setError(email, 'not a valid email');
    } else {
        setSuccess(email)
    }

}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  //regex to verify email address, learn in next class
}
