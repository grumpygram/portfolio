"use strict";

let shape;
let canvasWidth;
let canvasHeight;

//PRELOAD
function preload() {
    shape = loadModel(`resources/objects/lamp_2.obj`, true);
}

//SETUP
function setup() {
    canvasWidth = (windowWidth*0.8);
    canvasHeight = (windowHeight*0.8);

    //CANVAS
    let canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
    canvas.parent("object-holder");

}


//DRAW
function draw() {
    background(100);

    // Enable orbiting with the mouse.
    orbitControl(2, 2, 0);
    angleMode(DEGREES);

    let l1x = mouseX - canvasWidth/2;
    let l1y = mouseY - canvasHeight/2;
    let v1 = createVector(-l1x, -l1y, -200);
    v1.normalize();

    let l2x = mouseX - canvasWidth/2;
    let l2y = mouseY - canvasHeight/2;
    let v2 = createVector(l2x, l2y, 200);
    v2.normalize();

    //pointLight(255, 255, 0, 100, 0, 0);
    noStroke();

    // Draw the plane
    push();
        //light
        ambientLight(255)
        ambientMaterial(200);
        //plane
        translate(0, 200);
        rotateX(90);
        plane(500);
    pop();

    // Draw the shape
    push();
        //light
        directionalLight(200, 200, 200, v1);
        directionalLight(200, 200, 200, v2);
        ambientLight(100, 100, 0)
        ambientMaterial(240);
        //shape
        rotateZ(180);
        model(shape);
    pop();

    scale(0, 0, 0);
}

function windowResized() {
    canvasWidth = (windowWidth*0.8);
    canvasHeight = (windowHeight*0.8);

    resizeCanvas(canvasWidth, canvasHeight);
}