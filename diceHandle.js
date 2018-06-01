var DiceHandle = function () {
    this.dice = [];
}

DiceHandle.prototype.diceNumber = function () {
    return this.dice.length;
}

DiceHandle.prototype.roll = function () {
    return this.dice.reduce((sum, die) => sum + die.roll);
}

DiceHandle.prototype.addDice = function (aDie) {
    this.dice.push(aDie);
}
