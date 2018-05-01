class Card {
    constructor(suit, value, face )
    {
        this.suit = suit;
        this.value = value;
        this.face = face;
    }
}

class Deck
{
    constructor()
    {
        this.cards = [];
        this.reset();
    }
    reset()
    {
        this.cards = [];
        let suits = ["Club", "Diamond", "Heart", "Spade"];
        let cardInfo = { "Ace":1,
                        "Two":2,
                        "Three":3,
                        "Four":4, 
                        "Five":5, 
                        "Six":6,
                        "Seven":7, 
                        "Eight":8, 
                        "Nine":9, 
                        "Ten":10, 
                        "Jack":11, 
                        "King":12, 
                        "Queen":13 }
        for(let suit of suits)
        {
            for(let card in cardInfo)
            {
                let newCard = new Card(suit, cardInfo[card], card)
                console.log("we just made a card");
                console.log(newCard);
                this.cards.push(newCard);

            } 
        }
    }

    //Deck should be able to shuffle
    shuffle(shuffles =7)
    {
        let s =0;
        while(s <= shuffles)
        {
            //from the back moving to the front
            for (let i = this.cards.length-1; i > 0; i--) { 
            
            //randomly select a card that has not been selected yet
                let rdx = Math.floor(Math.random() * 52)
            //swap it into our randomly assembled deck part of the region area thing
                let temp = this.cards[rdx];
                this.cards[rdx] = this.cards[i];
                this.cards[i] = temp;
            }
            s++;
        }
        
    }

    //The deck should be able to deal a random card
    deal () {
        //deal should return the card that was dealt and remove it from the 
        return this.cards.shift();
    }
}


//create a Player class, The Player should have the following functionality:

class Player{

    constructor(name){
        this.name = name;
        this.hand = [];
    }

    takeACard(targetDeck) {
        let newCard = targetDeck.deal();
        this.hand.push(newCard);
    }

    discard(idx) {
        idx = idx % this.hand.length;
        return this.hand.splice(this.hand[idx]);

    }

}

// let bob = new Deck();
// let b = new Deck();
// b.shuffle();
let bob = new Deck();
let rob = new Player("rooob");
// rob.takeACard(bob);
// console.log(rob);
rob.discard(1000000);




//forof loop - userful for iterating through arrays; give you the values of the array instead of the indices
//for in loop - 