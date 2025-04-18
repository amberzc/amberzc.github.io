document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  const validEmail = "test@example.com";
  const validPassword = "1234";

  if (email === validEmail && password === validPassword) {
    errorMsg.style.color = "green";
    errorMsg.textContent = "Login successful!";
    // Optional: hide form after login
    // document.getElementById("loginForm").style.display = "none";
  } else {
    errorMsg.style.color = "red";
    errorMsg.textContent = "Invalid email or password.";
  }
});
