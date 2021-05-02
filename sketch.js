const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Composites = Matter.Composites
const Composite = Matter.Composite


var engine, world
var h;
var boy
var ground1
var circles = []
var checkpoint1
var gamestate,
  start,play,end

function preload(){


  sound=loadSound("sound/sound.mp3")
  sound2 = loadSound("sound/sound2.wav")
  sound3 = loadSound("sound/sounddddd.wav")




}
function setup()
  {
  createCanvas(1200,800);
  
 engine=Engine.create();
  world = engine.world;
  
if(gamestate === start){


  var optionse = {
  isStatic:true,
  frication:1000000,
  density:1
 }
 rectMode(CENTER)
  ground1= Bodies.rectangle(600,560,1400,100,optionse)
  World.add(world,ground1)
  

   var optionss= {
     restitution:0.7,
     friction:0.1,
     density: 25
   }
  
    rectMode(CENTER)
   hi2 = Bodies.circle(100,80,25,optionss)
   hi2.radius = 25
   World.add(world,hi2)
   

   var static = {
   isStatic: true, 
   }
   border = Bodies.rectangle(5,390,50,400,static)
   
   
   World.add(world,border)

  


    border2 = Bodies.rectangle(1200,250,50,400,static)
    border2.width = width
    World.add(world,border2)
    
    

   object1  = new Box(700,10,50,500)
   //object2 = new Block(970,160,25,10)
   object2 = new Box(800,140,50,200)
   rectMode(CENTER)
   object33 = new Box (900,160,50,150)
   
   
   //checkpoint1 = createSprite(1100,290,20,20);

   var render = Render.create({


    element:document.body,
    engine : engine,

    options: {
      width:1200,
      height: 800,
      wireframes: false
    }

    });

    Render.run(render);
  }



   }
   
  

function draw() {

 
  background(rgb(24,24,29))
  Engine.update(engine);
  rectMode(CENTER)


 
  fill("black")
  noStroke();
  fill(rgb(24,24,29))
  rect(border.position.x,border.position.y,50,400)
  rect(border2.position.x,border.position.y,50,400)
  fill("yellow")
  detectcollision(hi2,object1)
  
 fill(rgb(216,17,89))
  object1.display();
  fill(rgb(255,188,69))

 object2.display();
 fill(rgb(216,17,89))
 object33.display();
 
 // ground.display();

fill(rgb(255,69,0))
 //circles.push(new Circle1(10,100,random(10,20)))
  circles.push(new Circle1(1100,100,random(20,20)))
  //rectMode(CENTER)
  
  fill(rgb(0,150,255))
   for(var i = 0; i < circles.length; i++){
   

  
     circles[i].display();

}







   fill(rgb(46,43,68))

   rect(ground1.position.x,ground1.position.y,1400,100)
   fill("orange")
   fill("cyan")
   ellipseMode(RADIUS)
   ellipse(hi2.position.x,hi2.position.y,25)
   
   //stroke ("cyan")
   fill("white")
   textSize(15)
   text("Hello,  welcome to my  game ",220,30)
   text("To start click on the ARROW keys to move ",220,50)
   text("and 'A' to jump",220,70)

   fill("white")
   text("Satisfying game ",300,100)

   fill("white")
   noStroke();
   textSize(25)
   text("Exit",1100,100)

   textSize(20)
   fill("white ")
   text("get to the other sides and find the way out ",200,150)
   
  





  
 
 
  }














function keyPressed(){
  if (keyCode === RIGHT_ARROW ) {
    Matter.Body.applyForce(hi2 , {x: hi2.position.x, y: hi2.position.y}, {
      x: 600,
      y: 0
    });
  }


  if (keyCode === LEFT_ARROW ) {
    Matter.Body.applyForce(hi2 , {x: hi2.position.x, y: hi2.position.y}, {
      x: -600,
      y: 0
    });
  }


  if (keyCode === 65) {
    Matter.Body.applyForce(hi2 , {x: hi2.position.x, y: hi2.position.y}, {
      x: 0,
      y: -900
    });
  }

  if (keyCode === DOWN_ARROW ) {
    Matter.Body.applyForce(hi2 , {x: hi2.position.x, y: hi2.position.y}, {
      x: 0,
      y: 200
    });
  }

  
  if ( hi2.position.y <230 ) {
    Matter.Body.applyForce(hi2 , {x: hi2.position.x, y: hi2.position.y}, {
      x: 0,
      y: 1100
    });
  
    if ( hi2.position.y  >= 351 ) {
      Matter.Body.applyForce(hi2 , {x: hi2.position.x, y: hi2.position.y}, {
        x: 0,
        y: 0
      });
    }
  }




  


}

function mouseDragged(){


//boxes.push(new Block(mouseX,mouseY,20,20))
 



}

function detectcollision(hi2,object1){
	
  hi2Position=hi2.position
  object1Position= object1.body.position
  
  var distance=dist(hi2Position.x, hi2Position.y, object1Position.x, object1Position.y)
  
  	if(distance<=object1.width+hi2.radius)
    {
    
  	  sound3.play();
      textSize(20)
     
    }

  }

 

  
