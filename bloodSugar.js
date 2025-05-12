// Dummy data for blood sugar level advice
const bloodSugarAdvice = [
    {
        range: [70, 99],
        food: "No specific food restrictions. Maintain a balanced diet.",
        exercise: "Light to moderate exercises (e.g., walking, stretching).",
        activity: "Normal daily activities are recommended."
    },
    {
        range: [100, 125],
        food: "Limit sugary foods and refined carbs.",
        exercise: "Moderate exercise like brisk walking. Avoid intense workouts.",
        activity: "Avoid prolonged sitting and heavy lifting."
    },
    {
        range: [126, 180],
        food: "Avoid sugary drinks, white bread, and processed foods.",
        exercise: "Light physical activities like yoga. Avoid high-intensity training.",
        activity: "Avoid stress and physically demanding tasks."
    },
    {
        range: [181, 300],
        food: "Strictly avoid sweets, sodas, and high-carb meals.",
        exercise: "Only light movements. Avoid vigorous activities.",
        activity: "Rest and hydrate. Monitor sugar levels regularly."
    },
    {
        range: [301, 500],
        food: "Seek immediate medical attention. Do not consume any sugary items.",
        exercise: "No exercise recommended. Rest until glucose levels stabilize.",
        activity: "Avoid any physical or mental stress."
    }
];

// Get advice based on blood sugar level
function getBloodSugarAdvice() {
    const sugarLevel = parseInt(document.getElementById("sugarLevel").value);

    if (isNaN(sugarLevel) || sugarLevel <= 0) {
        alert("Please enter a valid blood sugar level.");
        return;
    }

    let selectedAdvice = null;

    // Find a matching advice based on blood sugar level
    for (const advice of bloodSugarAdvice) {
        if (sugarLevel >= advice.range[0] && sugarLevel <= advice.range[1]) {
            selectedAdvice = advice;
            break;
        }
    }

    const adviceSection = document.getElementById("adviceSection");
    const foodAdvice = document.getElementById("foodAdvice");
    const exerciseAdvice = document.getElementById("exerciseAdvice");
    const activityAdvice = document.getElementById("activityAdvice");

    if (selectedAdvice) {
        foodAdvice.innerHTML = `<strong>Foods to Avoid:</strong> ${selectedAdvice.food}`;
        exerciseAdvice.innerHTML = `<strong>Exercises to Avoid:</strong> ${selectedAdvice.exercise}`;
        activityAdvice.innerHTML = `<strong>Activities to Avoid:</strong> ${selectedAdvice.activity}`;
        adviceSection.classList.remove("hidden");
    } else {
        alert("Blood sugar level out of range. Please seek medical advice.");
        adviceSection.classList.add("hidden");
    }
}

// Back to Dashboard function
function goBack() {
    window.location.href = "dashboard.html";
}
