console.log("JS file is connected to HTML! Woo!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardOne === cardTwo || cardThree === cardFour) {
	alert("You found a match!");
}
else {
	console.log("Sorry, try again.")
};*/

var newCards = document.getElementById('game-board')


var createCards = function() {
	for(var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		board.appendChild(newCard);
	};
}

createCards();

