var myRover = {
  direction: "Start",

  _image: "Start.png",
  get image () { return this._image; },
  set image (path) {
    document.getElementById("myRover").src = path;
    this._image = path;
  },

  _x: parseInt(window.getComputedStyle(document.getElementById("myRover")).left.replace('p','').replace('x','')),
  _y: parseInt(window.getComputedStyle(document.getElementById("myRover")).bottom.replace('p','').replace('x','')),
  get x () { return this._x; },
  set x (newX) {
    if      (newX > -76) { newX = -724; }
    else if (newX < -724) { newX = -76; }
    document.getElementById("myRover").style.left = newX;
    this._x = newX;
  },
  get y () { return this._y; },
  set y (newY) {
    if      (newY > 656) { newY = 8; }
    else if (newY < 8) { newY = 656; }
    document.getElementById("myRover").style.bottom = newY;
    this._y = newY;
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
    switch(inputDirection) {
      case 'N':
      rover.y += 72;
      break;
      case 'E':
      myRover.image = "images/Moving-E.png";
      rover.x += 72;
      break;
      case 'S':
      rover.y -= 72;
      break;
      case 'W':
      myRover.image = "images/Moving-W.png";
      rover.x -= 72;
      break;
    }
  }
}

document.onkeyup = inputCommand;

var directions = ["W", "N", "E", "S"];

function inputCommand(e) {
  var code = e.keyCode;
  if (code > 36 && code < 41){
    move(myRover, directions[code - 37]);
  }
}
