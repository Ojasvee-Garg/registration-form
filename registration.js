window.addEventListener('load', function() {
    console.log('All assets are loaded')
    console.log(document.getElementById('form'));

    let form = window.document.getElementById('form');

form.addEventListener('submit', e => {


//let username = document.getElementById('username');
//let email = document.getElementById('email');
//let password = document.getElementById('password');
//let password2 = document.getElementById('password2');

    console.log("Inside event listerner");
    e.preventDefault(); //to prevent form from submitting
    validateInputs();
});
}); 

function setError(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

function setSuccess(element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}

function isValidEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validateInputs(){
    let usernameValue = username.value.trim(); //trim() to remove the white space
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    if (usernameValue === '' || usernameValue == null){
        setError(username, 'username cannot be blank')
    } else {
        setSuccess(username);
    }

    if (emailValue === '' || emailValue == null){
        setError(email, 'valid email is required')
    } else if (!isValidEmail(emailvalue)){
        setError(email, 'valid email is required')
    }else{
        setSuccess(email);
    }

    if (passwordValue === '' || passwordValue == null){
        setError(password, 'valid password is required')
    } 
    else if(passwordValue.length < 8){
        setError(password, 'passwordmust be at least 8 characters')
    }    
    else {
        setSuccess(password);
    }

    if (password2Value === '' || password2Value == null){
        setError(password2, 'Please confirm your password')
    }else if(password2Value !== passwordValue){
        setError(password2, 'Please does not match')
    } 
    else {
        setSuccess(password2);
    }
}
