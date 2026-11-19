// Scratchpad for Two Gardeners. Build the real one at editor.p5js.org

let rx, ry;          // random gardener
let nxoff = 0;       // noise gardener
let nyoff = 1000;

function setup() {
  createCanvas(400, 400);
  background(240);
  rx = width / 2;
  ry = height / 2;
}
function draw() {
  // random gardener
  stroke(184, 57, 95, 90);
  strokeWeight(2);
  point(rx, ry);
  rx += random(-2, 2);
  ry += random(-2, 2);
  rx = constrain(rx, 0, width);
  ry = constrain(ry, 0, height);

  // noise gardener
  let x = map(noise(nxoff), 0, 1, 0, width);
  let y = map(noise(nyoff), 0, 1, 0, height);
  stroke(44, 106, 72, 90);
  point(x, y);
  nxoff += 0.01;
  nyoff += 0.01;
}