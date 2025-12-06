userObj = []

function signUp() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    if (email.value === "" || password.value === "") {
        Toastify({
            text: "Email or password cannot be empty",
            duration: 3000,
            position: "center",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #ce0808ff, #8e0000ff)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }
    else {
        var userExist = false
        for (let i = 0; i < userObj.length; i++) {

            if (userObj[i].email == email.value) {
                userExist = true
                break
            }

        }
        if (userExist == true) {
            Toastify({
                text: "This email is already registered",
                duration: 3000,
                position: "center",
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #ce0808ff, #8e0000ff)",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        }
        else {
            Toastify({
                text: "User sign up successful",
                duration: 3000,
                position: "center",
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #1de703ff, #0fd83aff)",
                },
                onClick: function () { } // Callback after click
            }).showToast();
            userObj.push({
                email: email.value,
                password: password.value
            })
            email.value = ""
            password.value = ""
            localStorage.setItem("USERDATA",JSON.stringify(userObj) )
        }
    }
    // console.log(userObj)
}

function setData(){
    var users = localStorage.getItem("USERDATA")
    // console.log(users)
    // console.log(JSON.parse(users))
    userObj = JSON.parse(users)
}

setData()