var mouseevent="empty";
var last_x,last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
last_x=currentx;
last_y=currenty;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}