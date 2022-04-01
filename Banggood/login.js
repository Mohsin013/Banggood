document.querySelector(".registerTag").addEventListener('click', function() {
    document.querySelector(".form-type-1").style.display = "none";
    document.querySelector(".form-type-2").style.display = "flex";


})


////reloading page on click signup after viewing register page...
function reload() {
    location.href = "login.html"
}

////Intializing the USERS DATA 
var userData = JSON.parse(localStorage.getItem("userData")) || [];


/////////adding user account details in the local storage.
///////////////
document.querySelector(".createAcc").addEventListener("click", function() {

    var emailIdCreated = document.querySelector("#emailID-2").value;
    var passIdCreated = document.querySelector("#password-2").value;

    var obj = { emailIdCreated: emailIdCreated, passIdCreated: passIdCreated };

    if (document.querySelector("#accept").value == 'yes') {
        userData.push(obj);
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Congratulation!🎊🎉You have registered")

        ////////////////////////////////////
        // adding another variable to show if the user name inplace of the "signin" in nav bar
        localStorage.setItem("USERNAME", JSON.stringify(emailIdCreated));
        window.history.go(-1);

    } else {
        alert('Firstly, CheckIn the Terms and Conditions!')
    }



})

/////////////////
///////setting up checkBox////
//////////////////////////////
function acceptTerms() {
    document.querySelector("#accept").value = 'yes'
}
//////////


/////////
/////adding signIn functionality//
/////////////////////////
document.querySelector(".signIn").addEventListener('click', function(e) {
    e.preventDefault();
    var email = document.querySelector('#emailID-1').value;
    var password = document.querySelector('#password-1').value;

    for (let i = 0; i < userData.length; i++) {
        if (userData[i].emailIdCreated == email && userData[i].passIdCreated == password) {

            // adding another variable to show if the user name inplace of the "signin" in nav bar
            localStorage.setItem("USERNAME", JSON.stringify(email));
            window.history.go(-1);

            flag = 'true';
            localStorage.setItem("flag", JSON.stringify(flag));
            location.href = "address.html";
            break;
        } else {
            // console.log("yes rendering!!");
            document.querySelector(".wrongEM").querySelector.textContent = "";


            document.querySelector(".wrongEM").textContent = "Request parameter Error"
                // document.querySelector('.wrongEM').append(div);
        }
    }
})

var flag = localStorage.setItem('flag', JSON.stringify(flag)) || 'false';