class Chain{
    constructor(ba,bb){
        var option = {
            bodyA:ba,
            bodyB:bb,
            stiffness:0.04,
            length: 10
        }
        this.chain = Constraint.create(option);
        World.add(world,this.chain);

    }
    display(){
        strokeWeight(4);
        line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);

    }
}