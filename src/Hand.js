class Hand {
  constructor(cards){
    this.cards = cards
  }
  value(){
    let sum = 0
    this.cards.forEach(() => {
      if (this.cards.rank === "J") return (sum += 11);
      if (this.cards.rank === "Q") return (sum += 12);
      if (this.cards.rank === "K") return (sum += 13);
      if (this.cards.rank === "A") return (sum += 14);
      sum += this.cards.value();
    })
    return sum;
  }
}

export default Hand
