function validateForm(event) {
             
    event.preventDefault(); // Prevent form submission

    var isFormValid = true;

       // Call the individual validation functions (&= bitwisw AND operator)
    isFormValid &= validateUsername();
    isFormValid &= validatePassword();
    isFormValid &= validateConfirmPassword();
    isFormValid &= validateEmail();
    isFormValid &= validateContact();

    return isFormValid;
}  

    
    function validateUsername() {

        var username = document.getElementById("username").value;
        var usernameErrorElement = document.getElementById("usernameError");
        usernameErrorElement.textContent = "";

        if (username === "") {

            usernameErrorElement.textContent = "Username is required";
            
        } else if (/\d/.test(username)) {

            usernameErrorElement.textContent = "Username should not contain numbers";
            
        }

        return true;
        
    }

    function validatePassword() {

        var password = document.getElementById("password").value;
        var passwordErrorElement = document.getElementById("passwordError");
        passwordErrorElement.textContent = "";

        if (password === "") {

            passwordErrorElement.textContent = "Password is required";

        } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {

            passwordErrorElement.textContent = "Password must contain at least one number and one alphabet";

        } else if (password.length <= 8) {

            passwordErrorElement.textContent = "Password must be greater than 8 characters";
        }

        return true;

    }

    function validateConfirmPassword() {

       var password = document.getElementById("password").value;
       var confirmPassword = document.getElementById("confirmpassword").value;
       var confirmPasswordErrorElement = document.getElementById("confirmpasswordError");
       confirmPasswordErrorElement.textContent = "";

    if (confirmPassword === "") {

        confirmPasswordErrorElement.textContent = "Please confirm your password";

        
    } else if (password !== confirmPassword) {

        confirmPasswordErrorElement.textContent = "Passwords do not match";
       
    }

    return true;
}

function validateEmail() {

    var email = document.getElementById("email").value;
    var emailErrorElement = document.getElementById("emailError");
    emailErrorElement.textContent = "";

    if (email === "") {

        emailErrorElement.textContent = "Email is required";

    } else {

            // Regular expression for email validation
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                emailErrorElement.textContent = "Invalid email format";
            }
        }

        return true;
    }

function validateContact() {

    var contact = document.getElementById("contact").value;
    var contactErrorElement = document.getElementById("contactError");
    contactErrorElement.textContent = "";

    if (contact === "") {

        contactErrorElement.textContent = "Contact number is required";

    } else if (!/^\d+$/.test(contact)) {

        contactErrorElement.textContent = "Contact number should contain only numbers";

    }else if (!/^\d{10}$/.test(contact)) {

        contactErrorElement.textContent = "Contact number should be exactly 10 digits";
    }
    
    return true;
}