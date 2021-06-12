import Deck from './Deck.js'
import Card from './Card.js'
import Hand from './Hand.js'

// GAME START
console.log("Game Start")

// Your game logic here.
let deck = new Deck()
console.log(deck)

let player1 = [];
let player2 = [];

for (let i = 0; i < 4; i++) {
    player1.push(deck.deal());
	player2.push(deck.deal());
}
    
player1.forEach((card) => {
  // console.log(`Player1: ${card.value()} ${card.suitValue()}`);
});

player2.forEach((card) => {
  // console.log(`Player2: ${card.value()} ${card.suitValue()}`);
});

let player1Hand = new Hand(player1);
let player2Hand = new Hand(player2);
	
console.log(player1Hand);
console.log(player2Hand);
	
33	let value1 = player1Hand.value();
34	let value2 = player2Hand.value();
35	
36	console.log(`Player 1's hand value: ${player1Hand.value()}`);
37	console.log(`Player 2's hand value: ${player2Hand.value()}`);
38	
39	if (value1 > value2) {
40	  console.log("Player 1 wins!");
41	} else if (value1 === value2) {
42	  console.log("It's a tie!");
43	} else {
44	  console.log("Player 2 wins!");
45	}