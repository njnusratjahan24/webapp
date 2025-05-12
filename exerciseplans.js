// Dummy exercise plan data based on age, weight, and pregnancy week
const exercisePlans = [
    {
        ageRange: [18, 25],
        weightRange: [50, 70],
        weekRange: [1, 12],
        exercises: ["Gentle Yoga", "Walking (20 minutes)", "Pelvic Tilts", "Breathing Exercises"]
    },
    {
        ageRange: [26, 35],
        weightRange: [71, 90],
        weekRange: [13, 26],
        exercises: ["Prenatal Pilates", "Low-Impact Aerobics", "Swimming (15 minutes)", "Leg Lifts"]
    },
    {
        ageRange: [36, 45],
        weightRange: [91, 110],
        weekRange: [27, 40],
        exercises: ["Stretching Routine", "Chair Exercises", "Light Resistance Training", "Deep Breathing"]
    },
    {
        ageRange: [18, 45],
        weightRange: [50, 110],
        weekRange: [1, 40],
        exercises: ["Moderate Walking", "Light Yoga", "Prenatal Dance", "Kegel Exercises"]
    }
];

// Generate exercise plan based on user input
function getExercisePlan() {
    const age = parseInt(document.getElementById("age").value);
    const weight = parseInt(document.getElementById("weight").value);
    const week = parseInt(document.getElementById("week").value);

    // Input validation
    if (isNaN(age) || isNaN(weight) || isNaN(week) || age <= 0 || weight <= 0 || week <= 0) {
        alert("Please enter valid numbers for age, weight, and pregnancy week.");
        return;
    }

    let selectedExercises = [];

    // Find a matching exercise plan
    for (const plan of exercisePlans) {
        if (age >= plan.ageRange[0] && age <= plan.ageRange[1] &&
            weight >= plan.weightRange[0] && weight <= plan.weightRange[1] &&
            week >= plan.weekRange[0] && week <= plan.weekRange[1]) {
            selectedExercises = plan.exercises;
            break;
        }
    }

    // Display the exercise plan
    const exercisePlanDiv = document.getElementById("exercisePlan");
    const exerciseList = document.getElementById("exerciseList");
    exerciseList.innerHTML = "";

    if (selectedExercises.length > 0) {
        selectedExercises.forEach(exercise => {
            const listItem = document.createElement("li");
            listItem.textContent = exercise;
            exerciseList.appendChild(listItem);
        });
        exercisePlanDiv.classList.remove("hidden");
    } else {
        alert("No exercise plan found for the given input.");
        exercisePlanDiv.classList.add("hidden");
    }
}

// Back to Dashboard function
function goBack() {
    window.location.href = "dashboard.html";
}
