class Box{
constructor(x,y,width,height){
    this.body=Bodies.rectangle(x,y,width,height,{restitution:1})
    this.height=height;
    this.width=width;
   World.add(world,this.body)
}
display(){
    var pos=this.rectangle.position
    var angle=this.rectangle.angle
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    rectMode(CENTRE)
    fill(255);
    rect(0,0,this.width,this.height);
    pop();
}
}