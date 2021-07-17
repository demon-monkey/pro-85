canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_height= 225;
greencar_width= 150;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=50;
greencar_y=500;

function add() {
	bg_img=new Image();
	bg_img.onload=upload_bg;
	bg_img.src=background_image;
	g_img=new Image();
	g_img.onload= upload_greencar;
	g_img.src=greencar_image;
}

function upload_bg() {
	ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);

}

function upload_greencar() {
	ctx.drawImage(g_img,greencar_x,greencar_y,greencar_width,greencar_height);

	
}





window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function down()
{
	
	if(greencar_y<900){
		greencar_y=greencar_y+10;
		upload_bg();
		upload_greencar();

	}
}

function right()
{
	if(greencar_x<900){
		greencar_x=greencar_x+10;
		upload_bg();
		upload_greencar();

	}
}

function up()
{
	if(greencar_y>0){
		greencar_y=greencar_y-10;
		upload_bg();
		upload_greencar();

	}
}

function left()
{
	if(greencar_x>0){
		greencar_x=greencar_x-10;
		upload_bg();
		upload_greencar();

	}
}
