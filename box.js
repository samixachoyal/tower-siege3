class Box{

constructor(x,y,width,height){

var options={
isStatic:false
}
this.visibility=225;
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world, this.body);
}

display(){
    if(this.body.speed<3){
var box =this.body.position;
var angle = this.body.angle;
push();
translate(box.x,box.y);
rotate(angle)
rectMode(CENTER);
rect(0,0, this.width, this.height);
pop();
}
else{
    World.remove(world,this.body);
    push();
    this.visibility = this.visibility - 5;
    tint(225,this.visibility);
    pop();

}
}
score(){
    if(this.visibility < 0 && this.visibility>-105){
        score++;
    }
}
}