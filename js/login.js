// step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address from the email field
    // always remember to use .value from an input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value
    // step 3: get password
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value
    
    // DANGER: DO NOT VERIFY email and password on the client side
    // step 4: verify email and password
    if (email === 'sontan@baap.com' && password === 'secret'){
        console.log('valid user')
    }
    else {
        console.log('invalid user')
    }
})