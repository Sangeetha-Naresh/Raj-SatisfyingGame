class Box
{
    constructor(x,y,width,height)
    {
        var options =
         {
                 restitution: 0,
                 density: 10.0,
                 friction:1000000000000000000000000000000000.0
                
               

         }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display()
    {
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
      angleMode(RADIANS)
        rotate(angle);
        rectMode(CENTER);
       // fill("white");
        rect(0,0,this.width,this.height);

        pop();
    }

  
}