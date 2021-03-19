class Ball {

    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction': 1.0,
            'density':1.0 
        }
        this.bodies = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.bodies);
    }

    display(){
        var pos = this.bodies.position;
        // pos.x = mouseX;
        // pos.y = mouseY;
        var angle = this.bodies.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("orange");
        rect(0,0,this.width,this.height);
        pop();
    }
}