class Box {

    constructor(x, y, width, height) {
        var options = {

            isStatic: true,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02,

        }

        this.body = Bodies.rectangle(x, y, width,height, options);
        this.visibility= 255;
        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
    // console.log(this.body.speed);
        var pos = this.body.position;
        strokeWeight(2);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
         if(this.body.speed < 3){

            
         }

         else{

         World.remove(world,this.body);

         push();

         this.visibility= this.visibility-5
         tint(255,this.visibility);
         pop()
         }
    }
}