var mouseevent=" ";
var last_position_x,last_position_y;

canvas =document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="red";


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseevent=="mouseDown"){
        ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(current_mouse_x,current_mouse_y,20,0,2*Math.PI);
ctx.moveTo(last_position_x,last_position_y);
//ctx.lineTo(current_mouse_x,current_mouse_y);//
ctx.stroke();
    }

    last_position_x=current_mouse_x;
    last_position_y=current_mouse_y;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseLeave";
}
//additional activity//
function clear_Canvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}


