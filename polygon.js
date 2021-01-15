class poly{

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        this.image= loadImage("sprites/polygon.png")    
        World.add(world, this.body);
    }

    display() {

        
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        //strokeWeight(2);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);

    }
}