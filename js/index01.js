var a = document.querySelector("#myNavbar .nav");
var bric = document.querySelector(".bricks");
var bod = document.querySelector("body");
a.onclick = function(e){
    console.dir(e.target.innerHTML);
    if(e.target.innerHTML != "벽돌")return;
    event.preventDefault();
    var canvas = document.createElement("canvas");
    canvas.id = "myCanvas";
    canvas.style.width="480";
    canvas.style.height="320";
    bric.innerHTML +='<canvas id="myCanvas" width="480" height="320"></canvas>';
    bod.innerHTML +='<script src="js/bricks.js"></script>';
}