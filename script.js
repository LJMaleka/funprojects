// Define an array of symptoms and their corresponding diagnoses
const symptoms = [
	{
		name: "Fever",
		diagnosis: "You may have a viral or bacterial infection. Please see a doctor."
	},
	{
		name: "Cough",
		diagnosis: "You may have a respiratory infection. Please see a doctor."
	},
	{
		name: "Headache",
		diagnosis: "You may be experiencing tension headaches. Please try to relax and reduce stress."
	},
	{
		name: "Nausea",
		diagnosis: "You may have food poisoning or a stomach virus. Please see a doctor."
	},
	{
		name: "Fatigue",
		diagnosis: "You may be experiencing fatigue due to lack of sleep or stress. Try to rest and reduce stress."
	},
	{
		name: "Muscle pain",
		diagnosis: "You may have strained or overused your muscles. Try to rest and reduce physical activity."
	}
];

// Define a function that compares the user's symptoms with the array and returns the appropriate diagnosis
function diagnose(symptoms) {
	let diagnosis = "";

	// Check if the user has any symptoms from the array
	symptoms.forEach(function(symptom) {
		const match = symptoms.find(function(item) {
			return item.name === symptom;
		});

		if (match) {
			diagnosis += `${match.diagnosis}\n`;
		}
	});

	// Check for any underlying conditions or risk factors
	if (age > 60) {
		diagnosis += "You may be at higher risk for certain age-related conditions. Please see a doctor.";
	}

	if (race === "Black") {
		diagnosis += "You may be at higher risk for certain health conditions. Please see a doctor.";
	}

	if (bmi > 30) {
		diagnosis += "You may be at higher risk for certain health conditions related to obesity. Please see a doctor.";
	}

	if (gender === "Female" && location === "North America") {
		diagnosis += "You may be at higher risk for certain health conditions related to women's health. Please see a doctor.";
	}

	return diagnosis;
}

// Define a function that is triggered when the form is submitted
function onSubmit(event) {
	event.preventDefault();

	// Get the values from the form
	const symptoms = Array.from(document.getElementById("symptoms").selectedOptions).map(function(option) {
		return option.value;
	});

	const age = parseInt(document.getElementById("age").value);
	const race = document.getElementById("race").value;
	const bmi = parseInt(document.getElementById("bmi").value);
	const gender = document.querySelector('input[name="gender"]:checked').value;
	const location = document.getElementById("location").value;

	// Call the diagnose function and display the result
	const result = diagnose(symptoms);
	alert(result);
}

// Attach the onSubmit function to the form submit event
const form = document.getElementById("symptom-form");
form.addEventListener("submit", onSubmit);

  