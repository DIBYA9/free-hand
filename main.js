canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
random_number=Math.floor(Math.random()*5);
console.log(random_number);
rover_w=100;
rover_h=90;
rover_image="rover.png";
backgroundimage=images[random_number];

roverx=10;
rovery=10;
function add(){
    backimg=new  Image();
    backimg.onload=uploadbackground;
    backimg.src=backgroundimage;
    roverimg=new  Image();
    roverimg.onload=uploadrover;
    roverimg.src=rover_image;
}
function uploadbackground(){
ctx.drawImage(backimg,0,0,canvas.width,canvas.height);

}
function uploadrover(){
    ctx.drawImage(roverimg,roverx,rovery,rover_w,rover_h);
}
window.addEventListener("keydown",key_down);
function key_down(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
if(keypressed=='38'){
    up();
    console.log("up");
}
if(keypressed=='40'){
    down();
    console.log("down");
}
if(keypressed=='37'){
    left();
    console.log("left");
}
if(keypressed=='39'){
    right();
    console.log("right");
}
}
function up() {
    if(rovery>=0){
        rovery=rovery-10;
        console.log("when up is pressed x="+roverx+"y="+rovery);
        uploadbackground();
        uploadrover();


    }
}
function down() {
    if(rovery<=500){
        rovery=rovery+10;
        console.log("when down is pressed x="+roverx+"y="+rovery);
        uploadbackground();
        uploadrover();
        

    }
}
function right() {
    if(roverx<=700){
        roverx=roverx+10;
        console.log("when right is pressed x="+roverx+"y="+rovery);
        uploadbackground();
        uploadrover();
        

    }
}
function left() {
    if(roverx>=0){
        roverx=roverx-10;
        console.log("when left is pressed x="+roverx+"y="+rovery);
        uploadbackground();
        uploadrover();
        

    }
}