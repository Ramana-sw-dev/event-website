function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    if (name === "" || email === "") {
        message.innerText = "Please fill all fields!";
        message.style.color = "red";
        return false;
    }

    message.innerText = "Registration Successful!";
    message.style.color = "green";
    return false; // important (prevents page refresh)
}