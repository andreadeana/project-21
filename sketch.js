
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var left;
var right;



function setup() {
	createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  ground =new Ground(1000/2,480,1000,20);
  right = new Ground(550,395,10,150);
  left = new Ground(800,395,10,150);

	var ballOptions={
      isStatic:false,
	  restitution:1,
	  friction:0,
	  density:1.2,


	}

	//Create the Bodies Here.
  ball=Bodies.circle(400/2,400/2,10,ballOptions) 
  World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background("black");

  ground.show();
  left.show();
  right.show();

  ellipse(ball.position.x,ball.position.y,20,20)

  Engine.update(engine);
  
 
}

function keyPressed(){
 if (keyCode===32){
  Matter.Body.applyForce(ball,ball.position,{x:10,y:-10});
 }
}