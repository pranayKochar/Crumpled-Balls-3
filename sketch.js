/* var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground */
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ground;
var paper;
var bin;
var slingshot

function preload(){
	
}

function setup() {
	createCanvas(800, 550);

	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,height,800,20);
	 
	paper = new Paper(100,350,30);

	bin = new Bin(650,530);

	slingshot = new Slingshot(paper.body,{x: 130,y:400})

	Engine.run(engine);
  
}


function draw()	 {
  rectMode(CENTER);
  background(255);

  ground.display();
  paper.display();
  bin.display();
  slingshot.display();
}

function mouseDragged() {
	Matter.Body.setPosition(paper.body,{x: mouseX, y: mouseY});
  }
  
  function mouseReleased() {
	slingshot.fly();
  }
  
  function keyPressed() {
	if (keyCode === 32) {
		slingshot.attach(paper.body);
	}
  }
/* function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-170});

	}
} */


