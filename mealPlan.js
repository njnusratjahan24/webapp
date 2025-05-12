// Dummy meal plan data based on age, weight, and pregnancy week
const mealPlans = [
    {
        ageRange: [18, 25],
        weightRange: [50, 70],
        weekRange: [1, 12],
        meals: ["Oatmeal with fruit", "Grilled chicken salad", "Vegetable stir-fry", "Greek yogurt with nuts"]
    },
    {
        ageRange: [26, 35],
        weightRange: [71, 90],
        weekRange: [13, 26],
        meals: ["Quinoa with veggies", "Turkey sandwich", "Salmon with broccoli", "Cottage cheese and berries"]
    },
    {
        ageRange: [36, 45],
        weightRange: [91, 110],
        weekRange: [27, 40],
        meals: ["Brown rice with tofu", "Baked fish with greens", "Whole grain pasta", "Chia seed pudding"]
    },
    {
        ageRange: [18, 45],
        weightRange: [50, 110],
        weekRange: [1, 40],
        meals: ["Protein smoothie", "Lentil soup", "Chicken and brown rice", "Fruit and nut mix"]
    }
];

// Generate meal plan based on user input
function getMealPlan() {
    const age = parseInt(document.getElementById("age").value);
    const weight = parseInt(document.getElementById("weight").value);
    const week = parseInt(document.getElementById("week").value);

    // Input validation
    if (isNaN(age) || isNaN(weight) || isNaN(week) || age <= 0 || weight <= 0 || week <= 0) {
        alert("Please enter valid numbers for age, weight, and pregnancy week.");
        return;
    }

    let selectedMeals = [];

    // Find a matching meal plan
    for (const plan of mealPlans) {
        if (age >= plan.ageRange[0] && age <= plan.ageRange[1] &&
            weight >= plan.weightRange[0] && weight <= plan.weightRange[1] &&
            week >= plan.weekRange[0] && week <= plan.weekRange[1]) {
            selectedMeals = plan.meals;
            break;
        }
    }

    // Display the meal plan
    const mealPlanDiv = document.getElementById("mealPlan");
    const mealList = document.getElementById("mealList");
    mealList.innerHTML = "";

    if (selectedMeals.length > 0) {
        selectedMeals.forEach(meal => {
            const listItem = document.createElement("li");
            listItem.textContent = meal;
            mealList.appendChild(listItem);
        });
        mealPlanDiv.classList.remove("hidden");
    } else {
        alert("No meal plan found for the given input.");
        mealPlanDiv.classList.add("hidden");
    }
}

// Back to Dashboard function
function goBack() {
    window.location.href = "dashboard.html";
}
