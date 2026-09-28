// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Chuol R. Deng",        // TODO: Add your name
        title: "Mr.",      // TODO: Add your professional title
        email: "chuolrdeng@berkeley.edu", // TODO: Add your email
        location: "Berkeley, CA",  // TODO: Add your location
        bio: "I am a passionate web developer with a strong foundation in JavaScript and a keen interest in creating interactive user experiences." // TODO: Add your bio
    },
    
    // Skills as an array
    skills: [
        "AI and Data Analystics",   // TODO: Replace with your actual skills
        "Frontend and Backend Development",  // TODO: Add more skills
        "Database Design and Management",    // TODO: Students should have at least 5 skills
        "User Experience (UX) Design",       // TODO: Add more skills
        "Version Control with Git",          // TODO: Add more skills
        // TODO: Add more skills - aim for 5-7 skills total
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "Naath AI Project", // TODO: Add your project title
            description: "Building an LLm model for the Nuer language to help preserve and promote the language.", // TODO: Add your project description
            technologies: ["HTML", "CSS"], // Array of technologies used
            completionDate: "2025-08-15",   // When you completed it
            featured: true                   // Is this a featured project?
        },
        {
            title: "AI and Data Consluting Project", 
            description: "I helped a client analyze their data and create a predictive model to improve their business decisions.",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2025-09-01",
            featured: false
        }
        // TODO: Add more projects during class
    ],
    
    // Contact and availability information
    availability: {
        freelance: true,    // TODO: Set to true if available for freelance work
        fullTime: false,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
// console.log("Owner name:", portfolio.owner.name);
// console.log("First skill:", portfolio.skills[0]);
// console.log("Number of projects:", portfolio.projects.length);

// TODO: Students will learn to access nested properties
// console.log("Email:", portfolio.owner.email);
// console.log("Second project:", portfolio.projects[1]);
// console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
// let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
// console.log("Summary:", summary);