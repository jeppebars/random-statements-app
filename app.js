// List of random statements (neutral and classroom-friendly)
const statements = [
    "English is an easy language to learn.",
    "Money can make life easier.",
    "Learning a second language is important.",
    "Sometimes rules need to be flexible.",
    "Kindness is more important than appearance.",
    "Every home should have at least one pet.",
    "No job is perfect.",
    "Everyone is talented in their own way.",
    "There might be life on other planets.",
    "Life seemed simpler in the past.",
    "Enjoying your work is more important than the salary.",
    "You can tell a lot about a person from how they behave.",
    "Teachers should be strict when necessary.",
    "The climate is changing around the world.",
    "People can help protect the environment in small ways.",
    "Ghost stories are fun, but they aren't real.",
    "Everyone should be allowed to share their opinion respectfully.",
    "People get offended too easily sometimes.",
    "What goes around comes around.",
    "Parents should teach their children using patience, not anger.",
    "Good manners are still important today.",
    "Using marijuana for medical reasons can be helpful.",
    "Police officers should be trained to use non-violent methods first.",
    "Serious crimes deserve serious consequences.",
    "Graffiti can be both art and vandalism, depending on how it’s done.",
    "The purpose of prison is to help people change for the better.",
    "Helping others is a sign of respect, no matter the gender.",
    "Everyone should be treated equally.",
    "Teaching young children takes patience and care.",
    "Intelligence comes in many forms.",
    "Workplaces should be fair to everyone.",
    "It’s okay to start a conversation with someone you don’t know.",
    "Changing your appearance doesn’t always make you happier.",
    "People rely too much on medicine these days.",
    "Healthcare should be available to everyone.",
    "If you feel sick, it’s good to rest or see a doctor.",
    "Traditional and modern medicine both have value.",
    "Natural treatments can sometimes be effective.",
    "People should care more about their health.",
    "Healthy habits make a big difference.",
    "Home remedies can be helpful for small problems.",
    "Being overweight can affect your health.",
    "Humans are the only animals that drink milk as adults.",
    "Unhealthy food should cost more than healthy food.",
    "Stress can make people sick.",
    "Rules help keep society organized.",
    "People should be free to share their opinions.",
    "Technology helps governments keep people safe.",
    "Businesses should help protect the environment.",
    "People should be able to wear what they want.",
    "We should all help people who have less than we do.",
    "People who do bad things should face fair consequences.",
    "Countries should welcome new people but also set clear rules.",
    "Nations should focus on solving problems peacefully.",
    "Every vote is important, no matter who you vote for."
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
