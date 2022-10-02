class plane {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h);
        World.add(world, this.body);
    }
    remove() {
        setTimeout(() => {
          Matter.World.remove(world, boats[index].body);
        }, 2000);
      }
    
    display() {
        var pos = this.body.position;
        image(planeImg, this.x, this.y, this.w, this.h);
    }
}