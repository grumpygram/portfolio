"use strict";

/*let font;
let particles = [];
let particlesMax;

//PRELOAD
function preload() {
    font= loadFont('resources/fonts/FwTRIAL-Pangea-Medium.otf');

}

//SETUP
function setup() {
    createCanvas(500, 200);

}

//DRAW
function draw() {
    background(230);

    push();
    fill('#1D3354');
    textFont(font);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GRAEME PETERS", width/2, height/2);
    pop();

    particlesMax = 20;

    for (let i = 0; i < particlesMax; i++) {
        let particleX = random(450, 550);
        let particleY = random(80, 120);

        ellipse(particleX, particleY, 2, 2);
    }
}
    */
let font;

let particles = [];
let center;
let maxDistance = 200;
let particlesMax = 50;

function preload() {
    font= loadFont('resources/fonts/FwTRIAL-Pangea-Medium.otf');
}

function setup() {
  createCanvas(600, 200);
  center = createVector(width / 2, height / 2);
  for (let i = 0; i < particlesMax; i++) {
    particles.push(new particle());
  }
}

function draw() {
  background(240);

    particleCreator();
    
    push();
    fill('#1D3354');
    textFont(font);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GRAEME PETERS", width/2, height/2);
    pop();

}

function particleCreator() {
    for (let i of particles) {
    i.update();
    i.display();
    };
}

class particle {
  constructor() {
    this.reset();
  }

  reset() {
    // Start near the center
    let angle = random(TWO_PI);
    let r = random(5, 20);
    this.pos = p5.Vector.add(center, p5.Vector.fromAngle(angle).mult(r));
    this.dir = p5.Vector.sub(this.pos, center).normalize();
    this.speed = random(0.5, 1.2);
    this.size = 4;
  }

  update() {
    this.pos.add(p5.Vector.mult(this.dir, this.speed));
    if (p5.Vector.dist(this.pos, center) > maxDistance) {
      this.reset();
    }
  }

  display() {
    fill('#1D3354');
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}

function mouseClicked() {
    particleCreator();
}