function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg");

    if (name === "" || email === "") {
        msg.innerText = "Please fill all fields!";
        msg.className = "error";
    } else {
        msg.innerText = "Registration Successful!";
        msg.className = "success";
    }
}