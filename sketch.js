
var inc = 0.1;
var vectorScale = 10;
var cols, rows;
var fr;

/**
 * 
 */
function setup() {
    createCanvas(windowWidth*.5, windowHeight*.5);
    pixelDensity(1);
    cols = floor(width / vectorScale);
    rows = floor(height / vectorScale);
    fr = createP('');
}


function draw() {
    clear();
    var yoff = 0;
    for (var y = 0; y < width; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            var angle = noise(xoff, yoff) * TWO_PI;
            //var index = (x + y * width) * 4;
            var v = p5.Vector.fromAngle(angle);
            //stroke(0);

            push();
            translate(x * vectorScale, y * vectorScale);
            rotate(v.heading());
            line(0, 0, vectorScale, 0);
            pop();

            xoff += inc;
        }
        yoff += inc;
    }
    noLoop();
    fr.html(floor(frameRate()));
}