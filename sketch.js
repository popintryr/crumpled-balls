
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{


	
}





function setup() {
	createCanvas(2000,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600 , 490 , 1200 , 20);

     paper = new Paper (100, 470 ,55);

     part1 = new Dustbin(800 , 100 , 100, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  ground.display();
  paper.display();
  part1.display();
  

  keyPressed();
  drawSprites();
 
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body , paper.body.position , {x:0 ,  y: -6})
  };
};


