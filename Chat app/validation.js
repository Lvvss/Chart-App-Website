function printError(elemId,hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validateSignUpInputCredentials(){
        username=document.getElementById("name").value;
        email=document.getElementById("email_address").value;
        password=document.getElementById("password").value;
        confirmpassword=document.getElementById("confirm_password").value;
        var nameErr = emailErr = passwordErr = confirmPasswordErr = true;


    if(username == ""){
        printError("nameErr","Please enter your name");
    } else{
        var regex = /^[A-Za-z ]+$/;
        if(regex.test(username) === false){
            printError("nameErr","Please enter a valid Name");
        }else{
            printError("nameErr"," ");
            nameErr = false;
        }
    }

    if(email == ""){
        printError("emailErr", "Please enter your email address");
    } else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false){
            printError("emailErr","Please enter a valid email address");
          }  else{
        printError("emailErr","");
        emailErr = false;
            }
    }

    if(password == ""){
        printError("passwordErr", "Please enter your password");
    } else{
        printError("passwordErr","");
        passwordErr = false;
    }

    if(confirmpassword == ""){
        printError("confirmPasswordErr", "Please enter your password");
    } else{
        printError("confirmPasswordErr","");
        confirmPasswordErr = false;
    }

    if((nameErr || emailErr || passwordErr || confirmPasswordErr) == true){
        return false;
    }else{
        return true;
    }
}
function validateLoginInputCredentials() {
    //event.preventDefault();

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    var emailErr = passwordErr = true;

    // Validate the email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }
      // Validate the password
      if (password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    
    if ((emailErr || passwordErr) == true) {
        return false;
    } else {
        return true;
    }
}

    
    