const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('password-check');

form.addEventListener( "submit", e => { e.preventDefault(); checkInputs() });


function checkInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();


    if(usernameValue === "") setErrorFor(username, 'Username can\'t be blank' );
    else setSuccessFor(username);

    if(emailValue === "") setErrorFor(email, 'Email can\'t be blank' );
    else if(!isEmail(emailValue)) setErrorFor(email, "Email is invalid");
    else setSuccessFor(email);

    if(passwordValue === "") setErrorFor(password, 'Password can\'t be blank' );
    else setSuccessFor(password);

    if(passwordCheckValue === "") setErrorFor(passwordCheck, 'You have to confirm your password' );
    else if(passwordValue == "") setErrorFor(passwordCheck, 'Enter your password first, then confirm it' );
    else if(passwordValue !== passwordCheckValue) setErrorFor(passwordCheck, 'Password check doesn\'t match' );
    else setSuccessFor(passwordCheck);
}

function setErrorFor(input, message) {
    const formControll = input.parentElement;
    const small = formControll.querySelector('small');

    small.innerText = message;

    formControll.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControll = input.parentElement;

    formControll.className = 'form-control success';
}

function isEmail(email) {
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
}