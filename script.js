document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  const validEmail = "test@example.com";
  const validPassword = "1234";

  if (email === validEmail && password === validPassword) {
    errorMsg.style.color = "green";
    errorMsg.textContent = "Login successful! Redirecting...";

    // ✅ Save login flag
    localStorage.setItem("loggedIn", "true");

    // ✅ Redirect to players.html after a short delay
    setTimeout(() => {
      window.location.href = "players.html";
    }, 1000); // 1 second delay to show message

  } else {
    errorMsg.style.color = "red";
    errorMsg.textContent = "Invalid email or password.";
  }
});
