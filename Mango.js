class Mango{
    constructor(x, y, r) {

        var options = {
            'restitution':0,
            'isStatic' : true,
            'friction':1
            
        }


        this.x = x;
        this.y=y;
        this.r=r;
        this.image = loadImage("images/mango.png");
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
        
        World.add(world, this.body);

      }
      display(){
        
        push();
        rotate(this.body.angle)
        fill(255,0,255)
        translate(this.body.position.x, this.body.position.y);
        image(this.image, 0, 0, this.r, this.r);
        imageMode(CENTER);
        ellipseMode(CENTER);
        pop();
      }

}