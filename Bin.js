class Bin {
    constructor(x,y){

        var options={
            'restitution': 0.8,
            'friction': 1,
            'density': 1.0
        }
        
        this.body1 = Bodies.rectangle(x, y, 200, 20, options);
        this.width1 = 200;
        this.height1 = 20;

        this.body2 = Bodies.rectangle(this.body1.position.x - 100, this.body1.position.y - 75, 20, 175, options);
        this.width2 = 20;
        this.height2 = 150;

        this.body3 = Bodies.rectangle(this.body1.position.x + 100, this.body1.position.y - 75, 20, 175, options);
        this.width3 = 20;
        this.height3 = 150;

        this.image = loadImage("Pics/dustbingreen.png");

        Matter.Body.setStatic(this.body1, true);
        Matter.Body.setStatic(this.body2, true);
        Matter.Body.setStatic(this.body3, true);

        World.add(world, this.body1);
        World.add(world, this.body2);
        World.add(world, this.body3);
    }
    display() {
        var pos1 = this.body1.position;

        rectMode(CENTER);
        imageMode(CENTER);
        fill('#FFD700');
        rect(pos1.x, pos1.y, this.width1, this.height1);
        rect(pos1.x - 100, pos1.y - 75, this.width2, this.height2);
        rect(pos1.x + 100, pos1.y - 75, this.width3, this.height3);
        image(this.image, pos1.x, pos1.y - 100, 240, 220);
    }
}