let circles = [];
let amount = 0;
let max_radius = 0;


function setup() {
  createCanvas(1080, 1920);
  amount = 10000;
  max_radius = 600;
  circles = new Circles(amount, max_radius);
  circles.setCircles();

  

}

function draw() {
  background(0);
  for (circle of circles.getCircles()) {
    circle.draw();
  }
}

function mousePressed() {
  amount = round(random(10, 10000));
  circles.clearCircles();
  circles.setAmount(amount);
  circles.setCircles();
}


