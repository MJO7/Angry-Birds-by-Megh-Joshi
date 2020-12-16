class Chain {
constructor(bodyA , pointB , length , stiffness){

    var options={
        
bodyA:bodyA,
pointB:pointB,
length:length,
stiffness:stiffness,

    }
this.chain = Constraint.create(options)
this.pointB = pointB
this.image1 = loadImage("sprites/sling1.png")
this.image2 = loadImage("sprites/sling2.png")
this.image3 = loadImage("sprites/sling3.png")

World.add(world , this.chain);

}
display(){image(this.image1 , 200,20)
    image(this.image2 , 170 , 20)
    
    if(this.chain.bodyA){
var posA = this.chain.bodyA.position;
var posb = this.pointB
strokeWeight(3)
stroke(48,23,8)
line(posA.x+25 , posA.y+25,posb.x-10 , posb.y)
line(posA.x+25 , posA.y+25 , posb.x+30 , posb.y)
        }
}
fly(){
this.chain.bodyA = null

}
attach(body){
   this.chain.bodyA=body 
}
}