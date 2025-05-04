// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const userTypeInput = document.getElementById("userType");
  const rememberMeCheckbox = document.getElementById("rememberMe");
  const errorMsg = document.getElementById("error-msg");

  // Load saved email if "Remember Me" was checked before
  const rememberedEmail = localStorage.getItem("rememberEmail");
  if (rememberedEmail) {
    emailInput.value = rememberedEmail;
    rememberMeCheckbox.checked = true;
  }

  // Handle form submission
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const userType = userTypeInput.value;
    const rememberMe = rememberMeCheckbox.checked;

    // Example valid credentials — replace with real ones for production
    const validEmail = "test@example.com";
    const validPassword = "Ocuscope1234";

    // Validate login
    if (email === validEmail && password === validPassword) {
      errorMsg.style.color = "green";
      errorMsg.textContent = "✅ Login successful! Redirecting...";

      // Save login state and user type
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userType", userType);

      // Save or remove remembered email
      if (rememberMe) {
        localStorage.setItem("rememberEmail", email);
      } else {
        localStorage.removeItem("rememberEmail");
      }

      // Redirect to players.html after 1 second
      setTimeout(() => {
        window.location.href = "players.html";
      }, 1000);
    } else {
      errorMsg.style.color = "red";
      errorMsg.textContent = "❌ Invalid email or password.";
    }
  });
});
