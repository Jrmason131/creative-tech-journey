let scale = 0.005;   // zoom on the landscape
let roots = 20;     // how many roots
let spacing = 19;   // gap between root starts
let swing = 1.5;    // how far a root can lean each step

function setup() {
  createCanvas(400, 400);
  background(240);
  stroke(44, 106, 72, 120);

  for (let r = 0; r < roots; r++) {          // outer loop: one pass per root
    let x = 20 + r * spacing;                // each root starts in its own place
    let y = 0;

    for (let step = 0; step < 400; step++) { // inner loop: 400 steps down
      strokeWeight(map(y, 0, height, 3, .5));
      point(x, y);
      let sway = map(noise(x * scale, y * scale), 0, 1, -swing, swing);
      x += sway;
      y += 1;} 
    
  }
}