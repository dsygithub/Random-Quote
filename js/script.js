// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
	{
	quote : "All our dreams can come true if we have the courage to pursue them.",
	source : "Walt Disney"
	},
	{
	quote : "Someone is sitting in the shade today because someone planted a tree a long time ago.",
	source : "Warren Buffett"
	},
	{
	quote : "I’d rather live with a good question than a bad answer.",
	source : "Aryeh Frimer"
	},
	{
	quote : "You either die a hero, or you live long enough to see yourself become the villain.",
	source : "Batman"
	},
	{
	quote : "Winter is coming...",
	source : "Eddard Stark"
	}
];

//Below is the function to get a random object by getting random number for the objects array index number
function getRandomQuote() {
	var randomIndexNum = Math.floor(Math.random() * (4 - 0 + 1)) + 0; //4 is max and 0 is min
	return quotes[randomIndexNum];
}

//Below is the function that receives the random quote and displays it to the html document
function printQuote(){
	var randomObject = getRandomQuote();
	console.log(randomObject);
	document.getElementById("quote-box").innerHTML = '<p class="quote">' + randomObject.quote + '</p><p class="source">' + randomObject.source + '</p>'
}











