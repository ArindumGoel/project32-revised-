class Stand {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.width = width;
      this.height = height;
      this.stand = Bodies.rectangle(x,y,this.width,this.height,options);
      World.add(world, this.stand);
    }
    display(){
      var pos =this.stand.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y,this.width,this.height);
    }
  };
