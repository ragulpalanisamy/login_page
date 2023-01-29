function show(){
  var password = document.getElementById("password");
  var icon = document.querySelector(".fas")

  // ========== Checking type of password ===========
  if(password.type === "password"){
    password.type = "text";
  }
  else {
    password.type = "password";
  }
};

// Get the login button and form elements
const loginBtn = document.getElementById("login-btn");
const loginForm = document.getElementById("login-form");

// Add an event listener to the login button
loginBtn.addEventListener("click", function() {
  // Get the login details from the form
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  // Validate the login details
  if (email === "test@example.com" && password === "password") {
    // Redirect to the dashboard page
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login details. Please try again.");
  }
});
