var myRover = {
  direction: "Start",
  get image () {  //string:path to the image
    return document.getElementById("myRover").src;
  },
  set image (path) {
    document.getElementById("myRover").src = path;
  },
  get x () {      //int:x-position
    return document.getElementById("myRover").left;
  },
  set x (newX) {
    document.getElementById("myRover").left = newX + "px";
  },
  get y () {      //int:y-position
    console.log("y is  " + document.getElementById("myRover").style.bottom);
    return document.getElementById("myRover").style.bottom.slice(0,-2);
  },
  set y (newY) {
    console.log("Registered " + newY.toString() + "px");
    document.getElementById("myRover").bottom = newY + "px"; //"px" not needed?
  }
};

function move(rover, inputDirection) {
  if (rover.direction == "W" && inputDirection == "E"){
    rover.direction = "E";
    rover.image = "images/From-W-Turn-E.png";
  }
  else if (rover.direction == "E" && inputDirection == "W") {
    rover.direction = "W";
    rover.image = "images/From-E-Turn-W.png";
  }
  else if (rover.direction != inputDirection){
    rover.direction = inputDirection;
    rover.image = "images/" + inputDirection + ".png";
  }
  else {
    console.log("Here");
    switch(inputDirection) {
      case 'N':
      rover.y += 72;
      console.log("Logged North");
      break;
      case 'E':
      rover.x += 72;
      break;
      case 'S':
      rover.y -= 72;
      break;
      case 'W':
      rover.x -= 72;
      break;
    }
  }
}

var directions = ["W", "N", "E", "S"];

function inputCommand(e) {
  var code = e.keyCode;
  if (code > 36 && code < 41){
    move(myRover, directions[code - 37]);
  }
}

document.onkeyup = inputCommand;
