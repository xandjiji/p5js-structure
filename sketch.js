var canvasWidth = 600;
var canvasHeight = 600;

var initialPattern = generatePattern();
let newPattern = rotatePattern(initialPattern, 90);

console.log(initialPattern);
console.log(newPattern);

function setup() {
    var canvas = createCanvas(canvasWidth, canvasHeight);

    canvas.position(0, 100);
    canvas.center('horizontal')
}

function draw() {
    background(255, 204, 100);
    

    drawPattern(initialPattern);

    let newPattern = rotatePattern(initialPattern);
    drawPattern(newPattern);

}

function drawPattern(pattern) {
    for(let i = 0; i < pattern.length; i++) {
        rect(300 + pattern[i].x, 300 + pattern[i].y, 1, 1);
    }
}

function rotatePattern(pattern) {
    
    let newPattern = clonePattern(pattern);

    // rotating
    for(let i = 0; i < newPattern.length; i++) {
        newPattern[i].x = newPattern[i].y * -1;
        newPattern[i].y = newPattern[i].x;
    }

    // translating

    let offsetX = Math.abs(pattern[pattern.length-1].x) - Math.abs(newPattern[0].x);
    let offsetY = Math.abs(pattern[pattern.length-1].y) - Math.abs(newPattern[0].y);

    for(let i = 0; i < newPattern.length; i++) {
        /* newPattern[i].x = newPattern[i].x + Math.abs(offsetX);
        newPattern[i].y = newPattern[i].y + Math.abs(offsetY); */
        newPattern[i].x += 50;
    }

    return newPattern;
}

function clonePattern(pattern) {

    let newPattern = [];

    for(let i = 0; i < pattern.length; i++) {
        let newCoord = Object.assign({}, pattern[i]);
        newPattern.push(newCoord);
    }

    return newPattern;
}

function generatePattern() {
    let x = 0;
    let y = 0;
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
