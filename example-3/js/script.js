//name for the movement interval so we can clear it
var move_timer;
//var to store how many px to move him each "frame"
var distance_per_frame;
//set up a counter var so that I can count how many steps mover has taken, and stop him after 30:
var timer_counter = 0;

onload=init;

function init() {
    createAMover();
    //whenever user clicks, make mover start a trip toward where mouse is (or was)
    document.onclick = function(evt){
        causeMoverTrip(evt);
    }
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
}
/**
 * this method displaces the mover a little
 */
function moveABit(){
    //keep track that he's moved a step
    timer_counter++;
    //make a short var to represent that mover
    var mov = document.getElementsByTagName("div")[0];
    mov.style.left = parseInt(mov.style.left)+distance_per_frame + "px";
    //if he's taken 30 steps, stop moving
    if(timer_counter >=30){
        clearInterval(move_timer);
        timer_counter = 0;
    }
}
/** 
 * this method make it calculate how far 
 * to get to cursor, and starts the moveABit
 *
 * @param evt the click event, to get cursor pos
 */
function causeMoverTrip(evt){
    //make all browsers understand the event
    evt = (evt || event);
    //store the x position of the cursor
    var destination_x = evt.clientX;
    //calculate the the overall distance the mover has to travel, subtracting the DIV's X from the mouse's X, converting DIV's X to an integer
    var mov = document.getElementsByTagName("div")[0];
    var x_distance = destination_x - parseInt(mov.style.left);
    //divide that distance by how many steps we want it to take. That's how much to move in one step:
    distance_per_frame = x_distance/30;
    //reset counter and interval for a new trip
    clearInterval(move_timer);
    timer_counter = 0;
    move_timer = setInterval( function(){
        moveABit();
    }, 1000/30);
}