var Die = function (faces) {
    this.faces = faces || 6;
}

Die.prototype.roll = function() {
    return Math.floor(Math.random() * Math.floor(this.faces + 1));
}
