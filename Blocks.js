class Block{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("Block1.png");
		this.Visibility = 255
		this.body=Bodies.circle(this.x, this.y, this.r-50, options)
		World.add(world, this.body);
	}

	display()
	{
		console.log(this.body.speed)
		
	    if(this.body.speed<3){
		var blockPos=this.body.position;	
		push()
		translate(blockPos.x, blockPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r, this.r)
		pop()

		}
		else{
			World.remove(world,this.body);
			push();
			this.Visibility = this.Visibility-10
			tint(255,this.Visibility);
			image(this.image,this.body.position.x,this.body.position.y,80,80);
			pop()
		}
 }
}