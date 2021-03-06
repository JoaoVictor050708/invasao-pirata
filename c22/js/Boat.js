class Boat{
    constructor(x,y,w,h,boatPos){


        var options={
            isStatic:true
        }

        this.w=w
        this.h=h
        this.boatPos=boatPos

        this.image=loadImage("./assets/boat.png");
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }
    display(){
        var angle=this.body.angle
        var pos=this.body.position

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,this.boatPos,this.w,this.h)
        pop()
    }
}