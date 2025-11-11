// List of random statements (neutral and classroom-friendly)
const statements = [
  "English is fun to learn.",
  "Money can help people live better.",
  "It’s good to learn another language.",
  "Sometimes rules can change.",
  "Being kind is better than looking good.",
  "Pets make homes happier.",
  "No job is perfect.",
  "Everyone is good at something.",
  "Maybe there is life on other planets.",
  "Life was easier a long time ago.",
  "Liking your job is more important than money.",
  "You can learn a lot from how people act.",
  "Teachers should be strict sometimes.",
  "The weather is changing around the world.",
  "We can help the Earth in small ways.",
  "Ghost stories are fun, but not real.",
  "Everyone should share their ideas nicely.",
  "People get upset too easily sometimes.",
  "If you are kind, people will be kind to you.",
  "Parents should teach with love, not anger.",
  "Good manners are still important.",
  "Some people use special medicine to feel better.",
  "Police should try not to use violence.",
  "Big crimes need big punishments.",
  "Graffiti can be art or a problem.",
  "Prison should help people become better.",
  "Helping others shows respect.",
  "Everyone should be treated the same.",
  "Teaching young kids needs patience.",
  "Smart people can be smart in different ways.",
  "Workplaces should be fair.",
  "It’s okay to talk to new people.",
  "Changing how you look doesn’t always help.",
  "People use too much medicine today.",
  "Doctors should help everyone.",
  "If you feel sick, rest or see a doctor.",
  "Old and new medicine can both help.",
  "Natural treatments can help sometimes.",
  "People should care about their health.",
  "Healthy habits are important.",
  "Home tricks can help small problems.",
  "Being too heavy can be bad for health.",
  "Only humans drink milk when they are grown up.",
  "Unhealthy food should cost more.",
  "Stress can make people sick.",
  "Rules help people live together.",
  "People should share their ideas freely.",
  "Technology helps keep people safe.",
  "Companies should help the Earth.",
  "People should wear what they like.",
  "We should help people who need it.",
  "People who do bad things should be punished fairly.",
  "Countries should welcome new people with rules.",
  "Countries should solve problems with peace.",
  "Every vote is important."
];
// Function to get a random statement
function getRandomStatement() {
    const randomIndex = Math.floor(Math.random() * statements.length);
    return statements[randomIndex];
}

// Function to update the displayed statement
function updateStatement() {
    const statementElement = document.getElementById('statement');
    statementElement.textContent = getRandomStatement();
}

// Event listeners for the buttons
document.getElementById('agreeBtn').addEventListener('click', function() {
    alert("You agreed!"); // Handle the response
    updateStatement(); // Update the statement
});

document.getElementById('disagreeBtn').addEventListener('click', function() {
    alert("You disagreed!"); // Handle the response
    updateStatement(); // Update the statement
});

// Initialize the first random statement
updateStatement();
