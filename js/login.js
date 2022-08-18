// add click event handeler with submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // get the email address inside the email input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  // get password
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  if (email === "mahfuj0172@gmail.com" && password === "mahfuj") {
    window.location.href = "start.html";
  } else {
    alert(
      "Email and password Not match!! please enter right email and password."
    );
  }
});
