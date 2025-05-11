// Simulated local storage for users
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
}

// Register a new user
function registerUser() {
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users"));

    // Check if username already exists
    if (users.some(user => user.username === username)) {
        alert("Username already exists!");
        return;
    }

    // Add new user to local storage
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    window.location.href = "login.html";
}

// Login user with session tracking
function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login successful!");
        localStorage.setItem("loggedIn", true); // Track login session
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        alert("Invalid username or password.");
    }
}

// Check if the user is logged in (for protected pages)
function checkLogin() {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "login.html"; // Redirect to login if not logged in
    }
}

// Logout function to clear session
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html"; // Redirect to login page
}
