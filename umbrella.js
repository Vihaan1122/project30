class umbrella
{
    constructor(x,y)
    {
        var options={
            isStatic:true
        }
        this.image=loadImage("images/Walking Frame/walking_1.png");
        this.umb=Bodies.circle(x,y,50,options);
        this.radius=50;
        World.add(world,this.umb);
    }
    display()
        {
            var pos=this.umb.position
            imageMode(CENTER)
            image(this.image,pos.x,pos.y+70,300);


        }
    
}