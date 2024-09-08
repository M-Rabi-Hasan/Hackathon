// Grab form elements and resume display sections
const nameInput = document.getElementById('name') as HTMLInputElement;
const contactInput = document.getElementById('contact') as HTMLInputElement;
const educationInput = document.getElementById('education-input') as HTMLInputElement; // renamed to avoid conflict
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const workInput = document.getElementById('work') as HTMLInputElement;
const updateButton = document.getElementById('update-resume') as HTMLButtonElement;

// Grab resume display elements
const displayName = document.getElementById('display-name') as HTMLElement;
const displayContact = document.getElementById('display-contact') as HTMLElement;
const displayEducation = document.getElementById('display-education') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;
const displayWork = document.getElementById('display-work') as HTMLElement;

// Function to update resume dynamically
updateButton.addEventListener('click', () => {
    console.log("Update Button Clicked"); // Debugging to ensure the click is fired

    // Update name
    displayName.textContent = nameInput.value || "Rabi Hassan";

    // Update contact information
    displayContact.textContent = contactInput.value || "rabihassanshaikh3@gmail.com | Phone: 03131289017";

    // Update education section
    const educationList = educationInput.value 
        ? educationInput.value.split(',').map(item => item.trim()) 
        : ["Intermediate from science (Pre engineering)", "Bachelor's degree in BBA (continue)"];
    
    displayEducation.innerHTML = educationList.map(item => `<li>${item}</li>`).join('');
    
    // Update skills section
    const skillsValue = skillsInput.value;
    console.log("Skills Input:", skillsValue);  // Debug log to check the skills input
    
    if (skillsValue) {
        const skillsList = skillsValue.split(',').map(skill => skill.trim());  // Split by comma and trim each skill
        displaySkills.innerHTML = skillsList.map(skill => `<li>${skill}</li>`).join('');
    } else {
        // If no skills are provided, display default skills
        displaySkills.innerHTML = "<li>HTML</li><li>CSS</li><li>TypeScript</li><li>React</li><li>Next.js</li><li>MySQL</li>";
    }

    // Update work experience section
    const workList = workInput.value 
        ? workInput.value.split(',').map(work => work.trim()) 
        : ["(Next.JS) Internship at Systems Limited"];
    
    displayWork.innerHTML = workList.map(work => `<li>${work}</li>`).join('');
});
