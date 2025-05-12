// Dummy data for problem-solution matching
const adviceData = [
    {
        problem: "high blood sugar",
        do: "Drink plenty of water and monitor your levels.",
        dont: "Avoid high-carb foods and sugary drinks."
    },
    {
        problem: "low blood sugar",
        do: "Consume a small portion of fast-acting carbs (like fruit juice).",
        dont: "Do not skip meals or delay eating."
    },
    {
        problem: "fatigue",
        do: "Take a short nap and stay hydrated.",
        dont: "Avoid caffeine and strenuous exercise."
    },
    {
        problem: "nausea",
        do: "Eat small, frequent meals and stay hydrated.",
        dont: "Avoid spicy or greasy foods."
    },
    {
        problem: "headache",
        do: "Rest in a dark, quiet room and drink water.",
        dont: "Avoid stress and bright lights."
    },
    {
        problem: "back pain",
        do: "Apply a warm compress and practice gentle stretching.",
        dont: "Avoid heavy lifting and prolonged sitting."
    }
];

// Get advice based on the user's problem
function getAdvice() {
    const problem = document.getElementById("problem").value.toLowerCase();

    if (!problem) {
        alert("Please enter your problem.");
        return;
    }

    const result = adviceData.find(item => problem.includes(item.problem));

    const adviceDiv = document.getElementById("chatResponse");
    const adviceText = document.getElementById("advice");

    if (result) {
        adviceText.innerHTML = `<strong>What to Do:</strong> ${result.do}<br><strong>What Not to Do:</strong> ${result.dont}`;
    } else {
        adviceText.textContent = "Sorry, no specific advice found for your problem. Please consult your healthcare provider.";
    }

    adviceDiv.classList.remove("hidden");
}

// Back to Dashboard function
function goBack() {
    window.location.href = "dashboard.html";
}
