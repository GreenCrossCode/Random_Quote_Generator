// Array of all the quotes
const quotes = [
    "Nothing is impossible, the word itself says 'I’m possible'. - Audrey Hepburn",
    "Here comes the sun. And I say, it’s all right. - The Beatles",
    "I’d rather regret the things I’ve done than the things I haven’t done. - Lucille Ball",
    "A dead end is just a good place to turn around. - Naomi Judd", 
    "You can, you should, and if you’re brave enough to start, you will. - Stephen King",
    "You are never too old to set another goal or to dream a new dream. - C. S. Lewis",
    "It's never to late to be what you might have been. George Eliot",
    "If you spend too much time thinking about a thing, you'll never get it done. - Bruce Lee",
    "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
    "Keep your face to the sunshine and you cannot see a shadow. - Helen Keller",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Those who don't believe in magic will never find it. — Roald Dahl",
    "No act of kindness, no matter how small, is ever wasted. — Aesop",
    "Choose to be optimistic, it feels better. — Dalai Lama",
    "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen. — Winston Churchill"
];

// Function to generate and display a random quote
function displayQuote() {
    // Generate a random index
    const index = Math.floor(Math.random() * quotes.length);

    // Get the quote element
    const quoteElement = document.getElementById("quote");

    // Set the quote text
    quoteElement.textContent = quotes[index];
}

// Event listener for new quote button
const newQuoteButton = document.getElementById("new-quote");
newQuoteButton.addEventListener("click", displayQuote);

// Display initial quote on page load
displayQuote();