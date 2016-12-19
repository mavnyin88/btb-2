// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for this video: https://youtu.be/Cl_Gjj80gPE

var yoff = 0.0;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  fill(random(250),random(250),random(250));
}

function draw() {
  background(0);
  // text("Casper",300,300);
  // textSize(32);
  push();
  translate(width / 2, height / 2);

  var radius = 170;

  beginShape();
  var xoff = 0;
    text("Hello");
  for (var a = 0; a < TWO_PI; a += 0.1) {
    var offset = map(noise(xoff, yoff), 0, 1, -30, 30);
    var r = radius + offset;
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
    xoff += 0.1;
    // ellipse(x, y, 10, 10);
  }
  endShape();
  pop();
  yoff += 0.01;
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};
