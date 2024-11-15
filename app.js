// List of random statements
const statements = [
    "English is easy to learn.",
    "Money is more important than love.",
    "Students should be required to study English in elementary school.",
    "Violence is sometimes necessary.",
    "Personality is more important than beauty.",
    "People who live in apartments shouldn't own pets.",
    "No job is perfect.",
    "Everyone is good at something.",
    "We are not alone in the universe.",
    "Life was better 20 years ago.",
    "The most important thing about a job is the salary.",
    "You can know a lot about a person from the clothes he or she wears.",
    "Teachers should be able to use physical punishment.",
    "Global warming isn't real.",
    "There are actions we can take to stop global warming.",
    "There are no such things as ghosts.",
    "Everyone has the right to have an opinion even if the opinion is false according to well-known facts.",
    "People get offended too easily nowadays.",
    "What goes around comes around. (If you do good, good will come to you / If you do bad, bad things will happen to you.)",
    "Parents should never hit their children.",
    "Table manners and etiquette have become less important in the 21st century.",
    "Smoking marijuana should be legal.",
    "Police officers should not carry guns.",
    "Criminals who take a life (kill someone) should spend their entire life behind bars.",
    "Graffiti is art, not crime.",
    "Prisoners are sent to jail to be reeducated.",
    "Men should open doors for women.",
    "Men and women can never really be equal.",
    "Women are better at teaching children than men are.",
    "Men are smarter than women.",
    "Companies should have quotas on their executive boards to make them 50% female.",
    "At a bar, men should initiate conversation with women (and not the other way around).",
    "People who get plastic surgery usually look worse later in life.",
    "Nowadays, people are too dependent on medicine.",
    "This country's healthcare system needs a lot of improvement.",
    "If you feel unwell, you should go to the doctor.",
    "Western medicine is more effective than Eastern medicine.",
    "People who use acupuncture are crazy.",
    "People should be more concerned about their health.",
    "Beauty products, vitamins, and mineral supplements generally provide the benefits they promise.",
    "Home remedies can be just as useful as medicine from a pharmacy.",
    "Obesity is a disease.",
    "Humans shouldn't drink the milk of other animals such as cows.",
    "There should be an extra tax on unhealthy food.",
    "Worrying about cancer can give you cancer.",
    "Life would be better without government or rules.",
    "People should be able to criticize the government.",
    "The government has the right to monitor phone calls and e-mails.",
    "The government should increase environmental regulations on businesses.",
    "Women should be allowed to wear a niqab (or face veil) to civic ceremonies.",
    "We should tax the rich to help the poor.",
    "New Canadians who become terrorists should lose their citizenship and be sent back to where they came from.",
    "The government should be stricter on immigration.",
    "Canada should not participate in the war against ISIS.",
    "Voting for a political party that is unlikely to win the election is wasting your vote."
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
