const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ground;
var polygon;
var bg;

function preload(){
  bg = loadImage("Bg.jpg")
  }

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2,585,width,20);
  stand1 = new Ground(555,330,290,15);
  stand2 = new Ground(950,250,330,15); 
 

  // level 4
  block1 = new Block(457,285,80);
  block2 = new Block(495,285,80);
  block3 = new Block(533,285,80);
  block4 = new Block(571,285,80);
  block5 = new Block(610,285,80);
  block6 = new Block(650,285,80);

  block14 = new Block2(820,220,55);  
  block15 = new Block2(870,220,55);
  block16 = new Block2(920,220,55);
  block17 = new Block2(970,220,55);
  block18 = new Block2(1020,220,55);
  block19 = new Block2(1070,220,55);

  //level 3
  block7 = new Block(514,226,80);
  block8 = new Block(550,226,80);
  block9 = new Block(589,226,80);
  //block10 = new Block(635,245,40,50);

  block20 = new Block2(893,175,55);
  block21 = new Block2(946,175,55);
  block22 = new Block2(996,175,55);
 // block23 = new Block2(1010,165,55);

  //level 2
  block11 = new Block(533,166,80);
  block12 = new Block(570,166,80);
  
  block24 = new Block2(920,130,55);
  block25 = new Block2(971,130,55);

  //level 1
  block13 = new Block(551,110,70);

  block26 = new Block2(946,85,55);
 
  polygon = new Polygon(50,200,30);

  slingshot = new Slingshot(polygon.body,{x:100,y:130})
  Engine.run(engine);


}

function draw() {


  background(bg);
  //Add code for displaying text here!


  textFont("Berlin Sans FB");
  textSize(30);
  fill("white");
  text("Drag the Hexagonal stone to launch it towards the blocks!",20,50);
  text("Press Space to retry!",20,90)
 

  ground.display();
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  //block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
 // block23.display();
  block24.display();
  block25.display();
  block26.display();

  polygon.display();

  detectCollision(polygon,block1);
  detectCollision(polygon,block2);
  detectCollision(polygon,block3);
  detectCollision(polygon,block4);
  detectCollision(polygon,block5);
  detectCollision(polygon,block6);
  detectCollision(polygon,block7);
  detectCollision(polygon,block8);
  detectCollision(polygon,block9);
  detectCollision(polygon,block11);
  detectCollision(polygon,block12);
  detectCollision(polygon,block13);
  detectCollision(polygon,block14);
  detectCollision(polygon,block15);
  detectCollision(polygon,block16);
  detectCollision(polygon,block17);
  detectCollision(polygon,block18);
  detectCollision(polygon,block19);
  detectCollision(polygon,block20);
  detectCollision(polygon,block21);
  detectCollision(polygon,block22);
  
  detectCollision(polygon,block24);
  detectCollision(polygon,block25);
  detectCollision(polygon,block26);
  

  slingshot.display();
  
}

function detectCollision(polygons,block) {
  blockBodyPosition = block.body.position
  polygonsBodyPosition = polygons.body.position

  var distance = dist(polygonsBodyPosition.x,polygonsBodyPosition.y,blockBodyPosition.x,blockBodyPosition.y);

  if (distance<=block.r+polygons.r) {
    Matter.Body.setStatic(block.body,false)
  }
  }



function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
if (keyCode === 32){
  Matter.Body.setPosition(polygon.body,{x:100,y:130});
  slingshot.attach(polygon.body);
}
}
