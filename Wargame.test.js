import { expect } from "chai";
import Deck from "./Wargame2.1.js";

describe('Deck',()=>{
    it('should create a deck of 52 cards', () =>{
        const warGame = new Deck();
        warGame.createDeck();
        console.log('warGame.deck', warGame.deck.length);
        expect(warGame.deck.length).to.equal(52)
    })
})