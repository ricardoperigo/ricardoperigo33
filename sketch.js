let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(400, 400);
  background("BLACK");
cor = color(random(0, 255),random(0, 250), 250);

posicaoHorizontal = 200;
posicaoVertical = 200;
}
 
function draw() {
  
    fill(cor);
    circle(posicaoHorizontal, posicaoVertical, 50);
  
 
    if (mouseX < posicaoHorizontal) {
  posicaoHorizontal = posicaoHorizontal - 1;
  }
  
    if (mouseX > icaoHorizontal) {
  posicaoHorizontal = posicaoHorizontal + 1;
  }
    
    if (mouseX < posicaoVertical) {
  posicaoVertical = posicaoVertical --;
  }
 
  if (mouseX < posicaoVertical) {
  posicaoVertical = posicaoVertical ++;
  }
  
  }