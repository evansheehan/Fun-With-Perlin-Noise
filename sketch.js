
var inc = 0.01;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    loadPixels();
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var randVal = random(255);
            var index = x + y * 4;
            pixels[index] = randVal;
            pixels[index + 1] = randVal;
            pixels[index + 2] = randVal;
            pixels[index + 3] = 255;
        }
    }
    updatePixels();
}