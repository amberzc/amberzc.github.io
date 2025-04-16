document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from submitting the usual way
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");
  
    // Fake credentials for demonstration
    const validEmail = "test@example.com";
    const validPassword = "1234";
  
    if (email === validEmail && password === validPassword) {
      window.location.href = "home.html";
    } else {
      errorMsg.textContent = "Invalid email or password.";
    }
  });
  