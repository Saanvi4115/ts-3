class Block{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        World.add(world,this.body);

        this.Visibility=255; 
    }
    display(){
        //console.log(this.body.speed);
    if(this.body.speed<3.5){
        push()
        translate(this.body.position.x, this.body.position.y)
        fill("pink")
        rect(0,0,this.width,this.height)
        pop()
    }
    else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility-3;
        pop();
    }

}
   score(){
       if(this.visibility<0 && this.visibility>-105){
       score++;
       } 
   }
}