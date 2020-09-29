class BoxPink {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, 30,40, options);

        //NameSpacing(renaming width and height)
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;
        strokeWeight(2);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);

    }
}