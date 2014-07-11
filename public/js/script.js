// declare initialize variables
var playerList = [];	// create array for list of players/objects

// maybe move player addition to list into initialize
var player1 = new Player('alBundy');	// initialize player
playerList.push(player1);	// add player to list

// deck of cards constructor
function DeckOfCards() {
	// create a deck of cards and shuffle
	this.shuffleDeck = function() {
		var suits = ["C", "D", "H", "S"];
		this.cards = [];
		var newCards = [];

		for (key in suits) {
			for (var i=1;i<14;i++) {
				newCards.push(suits[key]+i);
			}
		}
				
		for (i=0;i<52;i++) {
			var length = newCards.length;
			var randomCard = Math.floor(Math.random()*length);
			this.cards.push(newCards[randomCard]);
			newCards.splice(randomCard, 1);
		}
		console.log(this.cards);
	}
	
	// method to deal one card
	this.dealCard = function() {
		return this.cards.pop();
	}

	// shuffle deck on object instance
	this.shuffleDeck();
}

// constructor for player/dealer object
function Player(name) {
	this.name = name;
	this.cards =[];
}

// game loop //
function gameLoop() {
	
	console.log(playerList[1].cards);	
	
	// insurance condition
	var last = playerList.length-1;
	var dealerShowCard = playerList[last].cards[1].slice(1);
	if (dealerShowCard == "1") {
		console.log('insurance');
		// code for insurance case
	}

	// player hand calculation
	for (player in playerList) {
		var temp = handCalc(playerList[player].cards);
		console.log(temp);
		if (temp == 21)
			console.log('blackjack');
	}
}

// calculate hand value
function handCalc(cards) {
	var hand = 0;
	
	// determine value of a card
	function getCardValue(card) {
		var value = card.slice(1);
		value = parseInt(value);
		if (value == 1)	// for Ace
			value = 11;
		else if (value > 10)	// for face cards
			value = 10;
		return value;
	}
	
	for (key in cards) {
		console.log(cards[key]);
		hand += getCardValue(cards[key]);
	}

	// case of double Aces
	hand = 12;
	
	return hand;
}


///// game start ////
function initialize() {
	
	// initialize deck of cards
	var deck = new DeckOfCards();
		
	var dealer = new Player('dealer');
	playerList.push(dealer);

	// deal 2 cards to players and dealer
	for (var i=1;i<3;i++) {
		//playerList[0].cards.push(deck.dealCard());
		for (key in playerList) {
			playerList[key].cards.push(deck.dealCard());
		}
	}
	
	//console.log(playerList[0].cards);
	//console.log(playerList[1].cards);
	//console.log(deck.cards.length);
	gameLoop();
}


initialize();

// testing purposes
//var deck = new DeckOfCards();

//console.log(deck.dealCard());
//console.log(deck.dealCard());
//console.log(deck.dealCard());
