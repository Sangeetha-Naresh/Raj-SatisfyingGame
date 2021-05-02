
function Block2(x,y,w,h){
var options = {
friction: 0.3,
restitution:0.6

}
          
 this.body=Bodies.rectangle(x,y,width,height,options);
 this.width=w;
 this.height=h;
 World.add(world,this.body);
    

   this.show = function()
    {
       
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
         rotate(angle);
          rectMode(CENTER);
        //fill("white");
        rect(0,0,this.width,this.height);

        pop();
        }
    
      }


 