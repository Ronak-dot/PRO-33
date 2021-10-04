class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }
    attach(body){
        this.string.bodyA = body;
    }
    
    fly(){
        this.string.bodyA = null;
    }

    display(){
        //image(this.string1,200,20);
        //image(this.string2,170,20);
        if(this.string.bodyA){
            var pointA = this.string.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.string3,pointA.x + 25, pointA.y -10,15,30); 
            pop();
        }
    }
    
}