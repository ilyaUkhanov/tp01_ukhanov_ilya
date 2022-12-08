import {} from "./styles/main.less";

function onDocReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function checkIsFormValid(form) {
    const passwordElement = form.querySelector('input[name="password"]');
    const password = passwordElement.value;
    console.log("password", password);

    if(password === "" || password.length < 8) {
        passwordElement.classList.add("is-invalid");
        return false;
    }


    return true;
}

function isFormValidListener() {
    const form = document.querySelector('.mainForm')  
        form.addEventListener('submit', function (event) {
            console.log("VALID", checkIsFormValid(form));
          if (!form.checkValidity() || !checkIsFormValid(form)) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false);
}

onDocReady(() => {
    isFormValidListener();
});