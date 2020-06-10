function Particle() {
    this.pos = createVector(random(width),random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 4;
    this.prevPosition = this.pos.copy();


    this.update = function() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.follow = function(vectors) {
        var x = floor(this.pos.x / vectorScale);
        var y = floor(this.pos.y / vectorScale);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
    }

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.show = function() {
        stroke(0, 5);
        strokeWeight(1);
        line(this.pos.x, this.pos.y, this.prevPosition.x, this.prevPosition.y);
        this.updatePrev();
    }

    /**
     * Function that allows particles to pass from one edge of the canvas to the opposite edge.
     */
    this.edges = function() {
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
        } 
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }

        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
    }

    this.updatePrev = function() {
        this.prevPosition.x = this.pos.x;
        this.prevPosition.y = this.pos.y;
    }
}