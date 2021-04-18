//the var's are defined
var canvas = new fabric.Canvas("myCanvas");
var player_y = 10;
var player_x = 10;
var block_image_width = 30;
var block_image_height = 30;
var block_image_object = "";
var player_object = "";
//function player_update()
function player_update(){
    fabric.Image.fromURL('player.png',function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top:player_y, // Y
        left:player_x // X
         });
        canvas.add(player_object);
    });
}
//function new_image has var get_image
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y, // Y
        left:player_x // X
         });
        canvas.add(block_image_object);
    });
}
//we are listening to my_keydown through windows
window.addEventListener("keydown",my_keydown);
//we are defining the function my_keydown
function my_keydown(e){
    //code for every keys
    keypressed = e.keyCode;
    //shift and p pressed at the same time
    if(e.shiftKey == true && keypressed == "80"){
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("span_height").innerHTML = block_image_height;
        document.getElementById("span_width").innerHTML = block_image_width;
    }
    //shift and m pressed at the same time
    if(e.shiftKey == true && keypressed == "77"){
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("span_height").innerHTML = block_image_height;
        document.getElementById("span_width").innerHTML = block_image_width;
    }
    //up arrow key is pressed
    if(keypressed == "38"){
        up();
        console.log("up");
    }
    //down arrow key is pressed
    if(keypressed == "40"){
        down();
        console.log("down");
    }
    //left arrow key is pressed
    if(keypressed == "37"){
        left();
        console.log("left");
    }
    //right arrow key is pressed
    if(keypressed == "39"){
        right();
        console.log("right");
    }
    //when t is pressed we are calling function new_image with the image
    if(keypressed == "84"){
        new_image("trunk.jpg");
        console.log("t");
    }
    //when d is pressed we are calling function new_image with the image
    if(keypressed == "68"){
        new_image("dark_green.png");
        console.log("d");
    }
    //when l is pressed we are calling function new_image with the image
    if(keypressed == "76"){
        new_image("light_green.png");
        console.log("l");
    }
    //when g is pressed we are calling function new_image with the image
    if(keypressed == "71"){
        new_image("ground.png");
        console.log("g");
    }
    //when w is pressed we are calling function new_image with the image
    if(keypressed == "87"){
        new_image("wall.jpg");
        console.log("w");
    }
    //when y is pressed we are calling function new_image with the image
    if(keypressed == "89"){
        new_image("yellow_wall.png");
        console.log("y");
    }
    //when r is pressed we are calling function new_image with the image
    if(keypressed == "82"){
        new_image("roof.jpg");
        console.log("r");
    }
    //when r is pressed we are calling function new_image with the image
    if(keypressed == "67"){
        new_image("cloud.jpg");
        console.log("c");
    }
    //when u is pressed we are calling function new_image with the image
    if(keypressed == "85"){
        new_image("unique.png");
        console.log("u");
    }
}
//function up is defined
function up(){
    if(player_y > 0){
        player_y= player_y-block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
//function down is defined
function down(){
    if(player_y <450){
        player_y = player_y+block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
//function left is defined
function left(){
    if(player_x >=0){
        player_x = player_x-block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
//function right is defined
function right(){
    if(player_x <850){
        player_x = player_x+block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}