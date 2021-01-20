class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.traj = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    var position = [this.body.position.x,this.body.position.y];
    this.traj.push(position);
    //console.log(this.traj);

    // this.traj = [[100,200],[110,220],[130,230],[140,250]]

    for(var i = 0; i<this.traj.length; i++){
      image(this.smokeImage,this.traj[i][0], this.traj[i][1] );
      // this.traj[0][0], this.traj[0][1];
      //this.traj[1][0], this.traj[1][1];
      // this.traj[2][0], this.traj[2][1];
    }
  }
}
