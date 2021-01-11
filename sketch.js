
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var boy, boyIMG;
var stone;
var tree;
var ground;
var man1, man2, man3, man4, man5;
var launcher;

function preload()
{
	boyIMG = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(150,650,50,50);
	boy.addImage(boyIMG);
	boy.scale = 0.1

	stone = new Stone(100,600,50);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });

	man1 = new Mango(620, 500, 40);
	man2 = new Mango(540, 480, 40);
	man3 = new Mango(680, 470, 40);
	man4 = new Mango(580, 430, 40);
	man5 = new Mango(630, 430, 40);

	tree = new Tree(600,530,370,370);

	ground = new Ground(400, 695, 900, 20);

	launcher = new Launcher(stone.body,{x: 100, y: 600});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 

  drawSprites();

  stone.display();

  tree.display();

  man1.display();
  man2.display();
  man3.display();
  man4.display();
  man5.display();



  ground.display();

  launcher.display();

  detectCollision(stone, man1);
  detectCollision(stone, man2);
  detectCollision(stone, man3);
  detectCollision(stone, man4);
  detectCollision(stone, man5);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}


function detectCollision(stone1, mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=mango.r + stone1.r){
		Matter.Body.setStatic(mango.body, false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 100, y:600})
		launcher.attach(stone.body)
	}
}



