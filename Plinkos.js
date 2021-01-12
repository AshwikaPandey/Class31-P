class Plinkos{
    constructor(x,y,width,height){
        var options={
         restitution:0,
         friction:1
        }
        this.body= Bodies.circle(x,y,10,options)
        this.radius= 10;
        this.color = color(random("blue"),random("red"),random("yellow"))
        World.add(world,this.body)
    }
    display(){
      var pos = this.body.position
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      noStroke()
      fill(this.color)
      ellipseMode(RADIUS)
      ellipse(0,0,this.radius,this.radius)

     pop()
    }
}