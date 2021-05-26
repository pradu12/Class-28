class Chain{
    constructor(ba,pb){
        var option = {
            bodyA:ba,
            pointB:pb,
            stiffness:0.04,
            length: 10
        }
        this.chain = Constraint.create(option);
        World.add(world,this.chain);

    }
    display(){
        strokeWeight(4);
        if(this.chain.bodyA){
            line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y);
        }
        

    }
    fly(){
        this.chain.bodyA=null;
    }
}