// Attach login logic
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const userTypeInput = document.getElementById("userType");
  const rememberMeInput = document.getElementById("rememberMe");
  const errorMsg = document.getElementById("error-msg");

  // Autofill remembered email
  const savedEmail = localStorage.getItem("rememberEmail");
  if (savedEmail) {
    emailInput.value = savedEmail;
    rememberMeInput.checked = true;
  }

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    const userType = userTypeInput.value;
    const rememberMe = rememberMeInput.checked;

    // ✅ Demo login credentials
    const validEmail = "test@example.com";
    const validPassword = "1234";

    if (email === validEmail && password === validPassword) {
      // Show message
      errorMsg.style.color = "green";
      errorMsg.textContent = "Login successful! Redirecting...";

      // Store login and role info
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userType", userType);

      // Remember email if checked
      if (rememberMe) {
        localStorage.setItem("rememberEmail", email);
      } else {
        localStorage.removeItem("rememberEmail");
      }

      // Redirect after short delay
      setTimeout(() => {
        window.location.href = "players.html";
      }, 1000);
    } else {
      errorMsg.style.color = "red";
      errorMsg.textContent = "Invalid email or password.";
    }
  });
});
