var Walker = function(x, y, c) {
    this.position = new PVector(x, y);
    this.colour = c;
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(this.colour, random(255),random(255));
    point(this.position.x, this.position.y);
};

Walker.prototype.walk = function() {
    var StepSize = new PVector(random(-5, 5),random(-5, 5));
    this.position.add(StepSize);
};
var w = [];
var i = 0;
mouseClicked = function(){
    w[i] = new Walker(mouseX, mouseY, random(255));
    i++;
};

draw = function() {
    for (var z = 0; z <w.length; z++){
        w[z].walk();
        w[z].display();
    }
    
};
