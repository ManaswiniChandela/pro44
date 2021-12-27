
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
playerRunning=loadAnimation("c1.gif.gif");
wizardRunning=loadAnimation("c2.gif.gif");
coinMoving=loadAnimation("c3.gif.gif");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  player=createSprite(500,300,150,150);
  player.addAnimation("running",playerRunning);
  player.scale=1.5;
  wizard=createSprite(300,300,200,200);
  wizard.addAnimation("running",wizardRunning);
  wizard.scale=2.0;
  coin=createSprite(700,300,100,100);
  coin.addAnimation("moving",coinMoving);
  coin.scale=0.5;
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



