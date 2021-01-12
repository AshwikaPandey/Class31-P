class Ball{
constructor(x,y,width,height){
var options={
    isStatic:true
}
   
this.body= Bodies.circle(x,y,10,options)
this.radius= 10
World.add(world,this.body)
}
display(){

    var pos = this.body.position
      ellipseMode(RADIUS)
      ellipse(0,0,this.width,this.height)
}
}