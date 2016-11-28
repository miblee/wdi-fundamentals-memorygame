console.log("JS file is connected to HTML! Woo!");
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  };
}


function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161485_960_720.png'>"; // king
	}
	else {
		this.innerHTML = "<img src='https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161484_960_720.png'>"; //queen
	}

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  }
  else {
    alert("Sorry, try again.");
  }
}

createBoard();

/* ---------------------------------------- */

/* var createBoard = function() {
	for(var i=0; i<cards.length; i++) {
		cardElement.setAttribute('data-card', cards[i]);
	}
}

/*if (cardOne === cardTwo || cardThree === cardFour) {
	alert("You found a match!");
}
else {
	console.log("Sorry, try again.")
};*/

/*

var newCards = document.getElementById('game-board')


var createCards = function() {
	for(var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		board.appendChild(newCard);
	};
}

createCards(); */

