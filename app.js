let usernameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.pass');
let submitButton = document.querySelector('.submitbtn');
let userNlogin = document.querySelector('.userNlogin');
let passwordLogin = document.querySelector('.passlogin');
let loginButton = document.querySelector('.loginbtn');

const User = {
    usernames: [],
    passwords: []
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    if ( usernameInput.value.trim() == '' || passwordInput.value.trim() == '' ) 
    {
        alert('Please Fill in data in inputs');
        return;
    }
    
    else if ( User.usernames.indexOf(usernameInput.value) !== -1 ) {
        alert('Username is already taken');
        return;
    }
    else {
    User.usernames.push(usernameInput.value)
    User.passwords.push(passwordInput.value);
    localStorage.setItem("userData", JSON.stringify(User));    
    }
    
})

loginButton.addEventListener('click', (e, inputUsername, inputPassword) => {
    e.preventDefault();
    console.log('clicked')
    let userData = localStorage.getItem("userData");
    let parsedData = JSON.parse(userData);
    let password = '';
    let username = '';
    inputUsername = userNlogin.value;
    inputPassword = passwordLogin.value;

    if (inputUsername == '' || inputPassword == '' ) {
        alert('Please Fill in data in inputs');
        return;
    } 

    else {

        let passwordArrayLength = parsedData.passwords.length;
        for (let i = 0; i < passwordArrayLength; i++) {
            password = parsedData.passwords[i];
            if (password == inputPassword) {
                break;
            }
        }
        let usernameArrayLength = parsedData.usernames.length;
        for (let i = 0; i < usernameArrayLength; i++) {
            username = parsedData.usernames[i];
            if (username == inputUsername) {
                break;
            }
        }
        checkPasswordMatch(username, password, inputUsername, inputPassword);
    }
    
})

function checkPasswordMatch(userName, password, inputUsername, inputPassword) {
    (userName == inputUsername && password == inputPassword) ? alert('You have been loged in successfully') : alert('Login failed');
}