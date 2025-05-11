// Ensure the user is logged in before they can access the dashboard
function checkLogin() {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "login.html"; // Redirect to login if not logged in
    }
}

// View Meal Plan
function viewMealPlan() {
    window.location.href = "mealPlans.html"; // Redirect to meal plans page
}

// View Blood Sugar Tracking
function viewBloodSugar() {
    window.location.href = "bloodSugar.html"; // Redirect to blood sugar tracking page
}

// View Exercise Plan
function viewExercisePlan() {
    window.location.href = "exercisePlans.html"; // Redirect to exercise plans page
}

// View Appointments
function viewAppointments() {
    window.location.href = "appointments.html"; // Redirect to appointments page
}

// Logout function to clear session
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html"; // Redirect to login page
}

// Call checkLogin on page load to ensure user is authenticated
document.addEventListener('DOMContentLoaded', checkLogin);
