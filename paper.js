class Paper {
     constructor(x, y, radius ){
        var options = {
            isStatic: false,
            friction:0.5,
            density:0.5,
            restitution:0.3}

         this.radius = radius
         this.x = x;
         this.y = y;
        this.body = Bodies.circle(x, y, radius/2 , options);
       
        World.add(world, this.body);}
    
      
        display(){
            push();
            rectMode(CENTER);
            translate(this.body.position.x, this.body.position.y);
            fill("red");
            ellipse(0 , 0 , this.radius);
            
            pop();
        }
    
}