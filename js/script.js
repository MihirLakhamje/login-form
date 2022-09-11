let email = document.getElementById("email");
let password = document.getElementById("password");

let errorText = document.getElementById("validation");

let successColor = "#20a931";
let errorColor = "#ff1f1f";

function submitbtn(){
    let splchar = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(password.value == ""){
        alert("Must required password.");
    }
    else{

        if(password.value.length <= 5){
            alert("Password should be minimum length 6 characters with some special character.");
            
            if(!password.value.match(splchar)){
                alert("password must have some special character.");
            }
            
        }
        else{
            alert("You have successfully logged in.");
        }
    }   
    
    password.value = "";
    password.focus();
}
