document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userType = document.getElementById("userType").value;
  const rememberMe = document.getElementById("rememberMe").checked;
  const errorMsg = document.getElementById("error-msg");

  // Dummy credentials for demo
  const validEmail = "test@example.com";
  const validPassword = "1234";

  if (email === validEmail && password === validPassword) {
    errorMsg.style.color = "green";
    errorMsg.textContent = "Login successful! Redirecting...";

    // Store login state and role
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userType", userType);

    // Save email if "Remember Me" checked
    if (rememberMe) {
      localStorage.setItem("rememberEmail", email);
    } else {
      localStorage.removeItem("rememberEmail");
    }

    setTimeout(() => {
      window.location.href = "players.html";
    }, 1000);
  } else {
    errorMsg.style.color = "red";
    errorMsg.textContent = "Invalid email or password.";
  }
});

// Autofill remembered email on load
window.addEventListener("DOMContentLoaded", function () {
  const savedEmail = localStorage.getItem("rememberEmail");
  if (savedEmail) {
    document.getElementById("email").value = savedEmail;
    document.getElementById("rememberMe").checked = true;
  }
});
