let diceHandler = new DiceHandle();
diceHandler.addDice(new Die());
diceHandler.addDice(new Die());
console.assert(diceHandler.diceNumber() === 2);
