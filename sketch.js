//defined variables at top are global scope
let r = 96;
let g = 81;
let b = 196;
let phase = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  newColor = color(96, 81, 196);
  background(0, 0, 0);
  phase+=0.1;
  phase=phase%31;

  // shapeGroup(0, 0, 0, 255, 0);
  // shapeGroup(100, 100, r, g, b);
  // shapeGroup(200, 200, 20, 60, 100);

  moon(100, 100, r, g, b, phase);
   fill(20);
  // ellipse(mouseX, mouseY, 300, 300);
  // fill(r, g, b);
  // ellipse(mouseX+50, mouseY, 300, 300);
  // fill(20);
  // ellipse(mouseX+100, mouseY, 300, 300);

  // moon(100, 100, r, g, b, 15);
  
}

//x y red green and blue are our function's parameters
//these parameters only exist in this function and are not global
//they can be passed to draw by calling them in the shapeGroup 
//function in draw above
function shapeGroup(x, y, red, green, blue) {
  fill(red, green, blue);
  ellipse(x+200, y+200, 200, 200);
  ellipse(x+400, y+400, 400, 400);
  rect(x+400, y+400, 100, 100);
  print("shapeGroup is running");
}

function moon(x, y, red, green, blue, phase) {
  //write code that will draw a moon in a different phase
  //like 30 different phases or something
  fill(red, green, blue); 

  if ((phase >= 0) & (phase < 5)) {
    ellipse(x+300, y+300, 300, 300);
    fill(0);
    ellipse((x+300)-((phase)*20), y+300, 300, 300);
    }  
  // if ((phase > 4) & (phase < 15)) {
  //   ellipse(x+300, y+300, 300, 300);
  //   fill(0);
  //   ellipse((x+300)-((phase)*20), y+300, 300, (300+(phase*15)));
  //   }  
  if ((phase > 4) & (phase < 8)) {
    ellipse(x+300, y+300, 300, 300);
    fill(0);
    ellipse((((x+300) + (phase * 10))-((phase)*20)), y+300, (300-(phase*20)), (300+(phase*20)));
    }  
    if (phase === 8) {
    ellipse(x+300, y+300, 300, 300);
    fill(0);
    rect(x+150, y+150, 150, 300);
    }
    if ((phase > 8) & (phase < 15)) {
    ellipse(x+300, y+300, 300, 300);
    fill(0);
    ellipse((((x+300) + (phase * 10))-((phase)*20)), y+300, (300-(phase*20)), (300+(phase*20)));
    }  
  if ((phase > 15) & (phase < 21)) {
    ellipse(x+300, y+300, 300, 300);
    fill(0);
    ellipse((x+600)-((phase-15)*20), y+300, 300, (300+(phase*15)));  
  }
  if (phase === 21) {
    ellipse(x+300, y+300, 300, 300);
    fill(0);
    rect(x+300, y+150, 150, 300);
    }
  if ((phase > 21) & (phase <= 30)) {
    ellipse(x+300, y+300, 300, 300);
    fill(0);
    ellipse((x+600)-((phase-15)*20), y+300, 300, 300);  
  }
  if (phase === 15) {
    b = 0;
    ellipse(x+300, y+300, 300, 300);
    fill(0);
    ellipse((x+300)-((phase)*20), y+300, 300, 300);
  }
  print("moon is running");
}