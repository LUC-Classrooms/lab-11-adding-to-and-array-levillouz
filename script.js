
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1); //create a new array

function setup() { //runs once
  createCanvas(500, 300); // create a p5 canvas
  dots[0] = new Dot(width/2, height/2); // initial location of first array at center
}

function draw() {
  background(200); // draws grey background
  
  for(let i = 0; i < dots.length; i++){ // repeat through each dot in the dots array
    dots[i].move(); // moves the dot
    dots[i].display(); // displays the dot
  }
  textSize(24); // creates text on the canvas
  fill(100, 0, 200); // makes text purple
  text("'dots' array length: " + dots.length, 100, 100); // text content

}

function mousePressed(){ // function called when mouse is pressed
  let obj = new Dot(mouseX, mouseY); // creates new dot at position of mouse
  dots.push(obj); // creates new dot with each push of mouse

}


function Dot(X, Y){ // constructor for creating dots
  
  this.x = X; // x coordinate of dot
  this.y = Y; // y coordinate of dot
  this.w = random (20, 50); // dot width
  this.sx = random(-5, 5); // speed of dot in x direction
  this.sy = random(-5, 5); // speed of dot in y direction
  this.r = random(0, 255); // red dot
  this.g = random(0, 255); // green dot
  this.b = random(0, 255); // blue dot
  
  this.display = function(){ // display the dot
    fill(this.r, this.g, this.b); // sets fill color to dot color
    ellipse(this.x, this.y, this.w, this.w); // draw the dot as an ellipse at its position with width and height equal to 'w'
  }
  
  this.move = function(){ // moves dot
    this.x += this.sx; // update the x-coordinate based on the x-speed
    this.y += this.sy; // update the y-coordinate based on the y-speed
    
    if (this.x < 0 || this.x > width){ // if the dot goes beyond canvas boundaries horizontally
        this.sx *= -1; // reverse its x-speed to make it bounce
    }
    if (this.y < 0 || this.y > height){ // if the dot goes beyond canvas boundaries vertically

        this.sy *= -1; // reverse its yspeed to make it bounce
    }
  }
    
}
