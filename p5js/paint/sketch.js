let color = 'red'

function setup() {
  createCanvas(400, 400);
  background(240);
  slider = createSlider(1, 25, 10);
  slider.position(300, 10);
  slider.style('width', '80px');
  textSize(10);
  text('Click and drag the mouse to draw.', 10, 10);
  text('Move the slider to make the pen bigger or smaller.', 10, 20);
  text('Press the following keys to change color:', 10, 30);
  text('r = red', 10, 40);
  text('o = orange', 10, 50);
  text('y = yellow', 70, 40);
  text('g = green', 70, 50);
  text('b = blue', 130, 40);
  text('p = purple', 130, 50);
  text('k = pink', 190, 40);
  line(0,71,400,71);
}

function draw() {
  stroke(color);
  let size = slider.value();
  strokeWeight(size);
  if (mouseIsPressed === true) {
    if (mouseY > 71) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}

function keyPressed() {
  //r
  if (keyCode === 82) {
    color = 'red';
  }
  //o
  if (keyCode === 79) {
    color = 'orange';
  }
  //y
  if (keyCode === 89) {
    color = 'yellow';
  }
  //g
  if (keyCode === 71) {
    color = 'green';
  }
  //b
  if (keyCode === 66) {
    color = 'blue';
  }
  //p
  if (keyCode === 80) {
    color = 'purple';
  }
  //k
  if (keyCode === 75) {
    color = 'pink';
  }
}