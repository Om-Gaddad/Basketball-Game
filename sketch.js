const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var gameState;

var engine, world;

function setup() {
  createCanvas(1000,400);
  
 	engine = Engine.create();
 	world = engine.world;

   gameState = "onSling";

  ball = new Ball(200,200);

  box1 = new Box(800,100);
  box2 = new Box(900,100);
  box3 = new Box2(850,125);
  stick = new Pole(900,230);

  ground = new Ground(400,380,1600,80);

  slingshot = new Slingshot(ball.bodies,{x:200,y:200});
   
  Engine.run(engine);
}

function draw() {
  background("brown");  
  drawSprites();

  ball.display();
  ground.display();
  slingshot.display();
  box1.display();
  box2.display();
  box3.display();
  stick.display();

  stroke(20);
  textSize(30);
  text("Shoot the ball into the hoop!",200,100);

  Engine.update(engine);
}


function mouseDragged(){
  if(gameState !== "launched"){
    Matter.Body.setPosition(ball.bodies,{x: mouseX, y: mouseY});
  }
}

function mouseReleased(){
    slingshot.detach();
    gameState = "launched"
}

