const Engine = Matter.Engine;//properties denote the dot operator
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(390,100,400,50);
  World.add(world,ground);

  console.log(ground);
  console.log(ground.position.x);

}

function draw(){

  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(200,200,50,50);
}