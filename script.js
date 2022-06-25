const errorMessageEl = document.querySelector(".passwords-match");

function toggleError() {
    const passInput1El1 = document.getElementById('password1');
    const passInput1El2 = document.getElementById('password2');
    if (passInput1El1.value && passInput1El1.classList.contains('error')) {
        passInput1El1.classList.remove('error');
    } else if (!passInput1El1.value && !passInput1El1.classList
        .contains('error')) {
        passInput1El1.classList.add('error');
    }
    if (passInput1El2.value && passInput1El2.classList.contains('error')) {
        passInput1El2.classList.remove('error');
    } else if (!passInput1El2.value && !passInput1El2.classList
        .contains('error')) {
        passInput1El2.classList.add('error');
    }
}

function showErrorMessage() {
    const pass1 = document.getElementById('password1').value;
    const pass2 = document.getElementById('password2').value;
    if (pass1 !== pass2) {
        console.dir(errorMessageEl);
        errorMessageEl.hidden = false;
    } else {
        errorMessageEl.hidden = true;
    }
}

document.addEventListener('input', toggleError);
document.addEventListener('input', showErrorMessage);