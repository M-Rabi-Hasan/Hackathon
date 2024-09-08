// Grab form elements and resume display sections
var nameInput = document.getElementById('name');
var contactInput = document.getElementById('contact');
var educationInput = document.getElementById('education-input'); // renamed to avoid conflict
var skillsInput = document.getElementById('skills');
var workInput = document.getElementById('work');
var updateButton = document.getElementById('update-resume');
// Grab resume display elements
var displayName = document.getElementById('display-name');
var displayContact = document.getElementById('display-contact');
var displayEducation = document.getElementById('display-education');
var displaySkills = document.getElementById('display-skills');
var displayWork = document.getElementById('display-work');
// Function to update resume dynamically
updateButton.addEventListener('click', function () {
    console.log("Update Button Clicked"); // Debugging to ensure the click is fired
    // Update name
    displayName.textContent = nameInput.value || "Rabi Hassan";
    // Update contact information
    displayContact.textContent = contactInput.value || "rabihassanshaikh3@gmail.com | Phone: 03131289017";
    // Update education section
    var educationList = educationInput.value
        ? educationInput.value.split(',').map(function (item) { return item.trim(); })
        : ["Intermediate from science (Pre engineering)", "Bachelor's degree in BBA (continue)"];
    displayEducation.innerHTML = educationList.map(function (item) { return "<li>".concat(item, "</li>"); }).join('');
    // Update skills section
    var skillsValue = skillsInput.value;
    console.log("Skills Input:", skillsValue); // Debug log to check the skills input
    if (skillsValue) {
        var skillsList = skillsValue.split(',').map(function (skill) { return skill.trim(); }); // Split by comma and trim each skill
        displaySkills.innerHTML = skillsList.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
    }
    else {
        // If no skills are provided, display default skills
        displaySkills.innerHTML = "<li>HTML</li><li>CSS</li><li>TypeScript</li><li>React</li><li>Next.js</li><li>MySQL</li>";
    }
    // Update work experience section
    var workList = workInput.value
        ? workInput.value.split(',').map(function (work) { return work.trim(); })
        : ["(Next.JS) Internship at Systems Limited"];
    displayWork.innerHTML = workList.map(function (work) { return "<li>".concat(work, "</li>"); }).join('');
});
