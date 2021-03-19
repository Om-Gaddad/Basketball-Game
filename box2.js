class Box2{

    constructor(x,y){
        var options = {
            'isStatic': true,
            'restitution':0.8,
            'friction': 1.0,
            'density':1.0 
        }
        this.bodies = Bodies.rectangle(x,y,70,20,options);
        // this.width = 50;
        // this.height = 50;
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
        fill("black");
        rect(0,0,70,20);
        pop();
    }
}