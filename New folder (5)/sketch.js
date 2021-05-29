const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var rock1;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  boggie1 = new boggie(200,340,70,70);
  boggie2 = new boggie(330,340,70,70);
  boggie3 = new boggie(460,340,70,70);
  rock1 = new Rock(1025,340,100,100);

  Chain = new SlingShot(boggie1.body,boggie2.body);
  Chain2 = new SlingShot(boggie2.body,boggie3.body);


}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  text(mouseX+","+mouseY,100,100);
  boggie1.show();
  boggie2.show();
  boggie3.show();
  rock1.show();
  Chain.show();
  Chain2.show();

 
  }

  function keyPressed(){
   
    if(keyDown(RIGHT_ARROW)){
      Matter.Body.applyForce(boggie3.body,{x:boggie3.body.position.x,y:boggie3.body.position.y},{x:0.5,y:0}) 

    }

  }

  
