let circles = [];
let amount = 0;
let max_radius = 0;


function setup() {
  createCanvas(400, 400);
  amount = 2000;
  max_radius = 50;
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
  amount = round(random(10, 500));
  console.log(amount, circles.getAmount());
  circles.setAmount(amount);
  circles.setCircles();
  console.log(amount, circles.getAmount());
}


