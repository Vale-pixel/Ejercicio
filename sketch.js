let circulo = new Calida (100,100,255,0,0);
let cuadrado = new Calidad1_5(100,200,0,255,0);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  

  rectMode(CENTER);
  fill(0,0,255);
  rect(width/2,height/2,50,50);

  fill(0,255,0);
  textSize(12);
  text("holi",50,50);

  circulo.mostrar();
  cuadrado.mostrar();




}
