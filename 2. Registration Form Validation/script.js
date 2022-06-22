const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const image = document.getElementById('image');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'inputBox error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'inputBox success';
}


// check email validity

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(input.value)) {
        showSuccess(input); 
    }else {
        showError(input, 'Email is inalid');
    }
}

// check image extension and size
function checkImage(input) {
    validFormat = ['jpeg', 'jpg', 'png'];

    const extensionIndex = image.value.lastIndexOf('.') + 1;
    const extension = image.value.substring(extensionIndex);
    // console.log(extension);

    if(validFormat.includes(extension.toLowerCase())) {
        console.log(1024**2);
        if(parseFloat(image.files[0].size/(1024**2)) <= 2) {
            showSuccess(input);
        }
        else {
            showError(input, 'Image size is larger than 2 Mb');
        }
    }
    else {
        showError(input, 'Invalid file format. Choose a .jpg or .png file');
    }
}

//check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } 
    else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be within ${max} characters`);
    }
    else {
        showSuccess(input);
    }
}

//Match passwords
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

//Get field name using id
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listerners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkRequired([username, email, image, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkImage(image);
    checkPasswordsMatch(password, password2);
})