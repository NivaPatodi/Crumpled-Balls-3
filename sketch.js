const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper, paperIMG;
var dustbin, dustbinIMG;
var bg, bgImg;
var ground;
var launcher;

function preload()
{
	bgIMG = loadImage("bg3.jpg");	
	DustbinIMG = loadImage("dustbin.png");
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100, 635, 20);
	
	dustbin1 = new Dustbin(650, 670, 125, 270);
	dustbin2 = new Dustbin(577, 615, 75, 180);
	dustbin3 = new Dustbin(723, 615, 75, 180);	

	ground1 = new Ground(400, 675, 800, 50);
	ground2 = new Ground(400, 25, 800, 50);
	ground3 = new Ground(25, 350, 50, 700);
	ground4 = new Ground(775, 350, 50, 700);

	launcher1 = new Launcher(paper.body,{x:200,y:400});

	Engine.run(engine);  
}


function draw() 
{
	if (bgIMG)
		background(bgIMG);

	Engine.update(engine);

  	rectMode(CENTER);
	
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	image(DustbinIMG, 600, 528, 120, 120);

	paper.display();

	ground1.display();
	//ground2.display();
	//ground3.display();
	//ground4.display();

	launcher1.display();

  	//drawSprites(); 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position, {x:45, y:-105});
	}
}

function mouseDragged()
{
    Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY});
}

function mouseReleased()
{
    launcher1.fly();
}