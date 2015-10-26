onload=init;

function init() {
    createAMover();
}
function createAMover(){
    //make a div to be a shape
    var mover = document.createElement("div");
    mover.style.width = "50px";
    mover.style.height = "50px";
    mover.style.background = "#9c9";
    mover.style.position = "absolute";
    mover.style.left = "50px";
    mover.style.top = "50px";
    //mover.id = "Gus";
   //attach it as child of the body, which makes it appear
    document.body.appendChild(mover);
    //move the mover every so often
    setInterval( function(){
        moveABit();
    }, 1000/30);
}
/**
 * this method displaces the mover a little
 */
function moveABit(){
    //make a short var to represent that mover
    var mov = document.getElementsByTagName("div")[0];
    mov.style.left = parseInt(mov.style.left)+4 + "px";
}