
var inc = 0.5;

function setup() {
    createCanvas(400, 400);
}


function draw() {
    

    var yoff = 0;
    loadPixels();
    for (var y = 0; y < width; y++) {
        var xoff = 0;
        for (var x = 0; x < height; x++) {
            var r = noise(xoff, yoff) * 255
            var index = (x + y * width) * 4;
            pixels[index] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;

            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels();
}