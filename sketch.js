var canvasWidth = 600;
var canvasHeight = 600;

var initialPattern = generatePattern();

function setup() {
    var canvas = createCanvas(canvasWidth, canvasHeight);

    canvas.position(0, 100);
    canvas.center('horizontal')
}

function draw() {
    background(255, 204, 100);
    

    drawPattern();
}

function drawPattern() {
    for(let i = 0; i < initialPattern.length; i++) {
        rect(initialPattern[i].x, initialPattern[i].y, 1, 1);
    }
}

function generatePattern() {
    let x = canvasWidth / 2;
    let y = canvasHeight / 2;
    let pattern = [];

    pattern.push({x, y});

    for(let i = 0; i < 9; i++) {

        let lastElement = pattern[pattern.length - 1];
        let mutant = mutate(lastElement);
        pattern.push(mutant);
    }

    return pattern;
}


function rng() {
    return Math.round(Math.random() * 2) -1;
}

function mutate(input) {

    let x = input.x + rng();
    let y = input.y + rng();

    return {x, y};
}
