function preload() {
  myFont = loadFont('Pixeled.ttf');
}
let s = "EYES";

function setup() {
  createCanvas(1920, 1080);
  textFont(myFont);
  textSize(50);
  textAlign(CENTER, CENTER);
}

function draw() {
  

  let x = int(random(-150, width));
  let y = int(random(-150, height));
  let w = int(random(50, 150));
  let h = int(random(50, 150));
  let g = int(random(0, 255));
  if(mouseIsPressed){
  textSize((w + h) / 5);
  fill(g);
  rect(x, y, w, h);
  fill(0);
  text(s, x + w / 2, y + h / 2);
}
}

