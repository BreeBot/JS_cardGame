class Card {
 constructor(rank, suit){
  this.rank = rank
  this.suit = suit
 }

 value(){
  return this.rank
 }

 suitValue() {
  return this.suit
 }
}

export default Card
