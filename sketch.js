function setup() {
  createCanvas(1000, 800);
  background("rgba(196,11,11,0.82)");
}

function draw() {
  
  fill ("brown");
  stroke ("lightwhite");
  if (mouseIsPressed)
  rect(mouseX,mouseY,100,60);
   
}
