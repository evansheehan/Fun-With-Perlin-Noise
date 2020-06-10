
var inc = 0.05;
var vectorScale = 10;
var cols, rows;
var fr;
var zoff = 0;

var particles = [];
var flowfield = [];

var numParticles = 1000;

/**
 * 
 */
function setup() {
    createCanvas(windowWidth*.5, windowHeight*.5);
    // createCanvas(400, 400);
    pixelDensity(1);
    cols = floor(width / vectorScale);
    rows = floor(height / vectorScale);
    fr = createP('');

    flowfield = new Array(cols*rows);

    for (var i = 0; i < numParticles; i++) {
        particles[i] = new Particle();
    }
    
}


function draw() {
    //clear();
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            var index = x + y * cols;
            var angle = noise(xoff, yoff, zoff) * TWO_PI;
            var v = p5.Vector.fromAngle(angle);
            v.setMag(0.2);
            flowfield[index] = v;
            stroke(0, 50);

            // push();
            // strokeWeight(1);
            // translate(x * vectorScale, y * vectorScale);
            // rotate(v.heading());
            // line(0, 0, vectorScale, 0);
            // pop();

            xoff += inc;
        }
        yoff += inc;
        zoff += 0.00001;
    }

    for ( var i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
    }
    
    fr.html(floor(frameRate()));
}