class Card {                                                //* create template for a single playing card
	constructor(suit, value){
		this.suit = suit;
		this.value = value;
        
	}
}

class Deck {                                                //*creates an empty arrays to be filled with all 52 cards
	constructor(){
		this.deck = [];
		
	}

	createDeck(){   
        console.log('create deck');                                        //* this method creates a deck of cards
        let suits = ["♠", "♣", "♥", "♦"];
		let cardObject = {                                     //* using an object to give a value to J, Q, K, A
			'2': 2,
			'3': 3,
			'4': 4,
			'5': 5,
			'6': 6,
			'7': 7,
			'8': 8,
			'9': 9,
			'10':10,
			'J': 11,
			'Q': 12,
			'K': 13,
			'A': 14	
		};

        for (let j = 0; j < Object.keys(cardObject).length; j++) {         //* looping through the object creating element and key variable to hold value
            const key = Object.keys(cardObject)[j];
            const element = cardObject[key];
          
            for (let i = 0; i < suits.length; i++) {                //* looping through each suit and pushing an card as object with rank, value and suits properties
              const suit = suits[i];
              this.deck.push({
                rank: key,
                value: element,
                suits: suit,
              });
            }
          }
    }

    shuffle(){                                                  //* shuffle all created object in deck array
		for(let i = this.deck.length -1; i > 0; i--){
			const j = Math.floor(Math.random() * (i + 1));
			[this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
		}
	}
}

class Player{                                                     //* Player class blueprint to give each player a name a hand of cards and their score
    constructor(name, hand, score){
        this.name = name;
        this.hand = hand;
        this.score = score;
    }
}

class Game{                                                         //* this class represents the game itself

    playgame(){                                                   //* method initializes an instance of class Deck  deals cards to each player and plays the game until a winner is determined
        const cards = new Deck();
        cards.createDeck();
        cards.shuffle()

        let player1 = new Player('Bob', cards.deck.splice(0, 26), 0)      //* takes the first 26 cards of the deck's array
        let player2 = new Player('Frank', cards.deck, 0)                      //*takes remaing cards of array

        for(let i = 0; i < player1.hand.length; i++){                   //* a for loop with a nested conditonal that compares each player's card on each iteration
            if(player1.hand[i].value > player2.hand[i].value){
                player1.score++
                console.log(`${player1.name}'s card value: ${player1.hand[i].value} vs. ${player2.name}'s card value: ${player2.hand[i].value} \n ${player1.name} wins a point \n ${player1.name}: ${player1.score} VS. ${player2.name}: ${player2.score}`)
            }else if(player1.hand[i].value < player2.hand[i].value ){
                player2.score++
                console.log(`${player1.name}'s card value: ${player1.hand[i].value} vs. ${player2.name}'s card value: ${player2.hand[i].value} \n ${player2.name} wins a point \n ${player1.name}: ${player1.score} VS. ${player2.name}: ${player2.score}`)

            }else{
                console.log('Draw')
                console.log(`${player1.name}'s card value: ${player1.hand[i].value} vs. ${player2.name}'s card value: ${player2.hand[i].value} \n ${player1.name}: ${player1.score} VS. ${player2.name}: ${player2.score}`)
            }
        }

        if(player1.score > player2.score){                                     //* after all cards have been play, this conditonal will compare final player's score to determine a winner
            console.log(`${player1.name}: ${player1.score} VS. ${player2.name} ${player2.score} \n ${player1.name} is the Winner!!!`)
        }else if(player2.score > player1.score){
            console.log(`${player1.name}: ${player1.score} VS. ${player2.name} ${player2.score} \n ${player2.name} is the Winner!!!`)
        }else{
            console.log(`${player1.name}: ${player1.score} VS. ${player2.name} ${player2.score} \n Is a Draw!`)
        }
    }
}

const game = new Game();
game.playgame()

export default Deck;