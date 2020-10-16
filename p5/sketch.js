function setup() {
    createCanvas(400, 400);  //x, y
    background(200)
  }
  
  //the draw function is called repeatedly, over and over...forever
  function draw() {
    fill(150)          //fills rectangle
    stroke(0)        //border
    rect(20, 20, 130)   //x, y, size
    
    point(100, 100); 
    point(101, 101)    //creates point, this one's white
    
    fill(255)
    stroke(0)
    ellipse(mouseX, mouseY, 50)
  }