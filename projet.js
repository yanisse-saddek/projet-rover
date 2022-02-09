const prompt = require('prompt')

var travelLog = []
var grid = [
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ]
];
var rover = {
    direction: "N",
    x: 0,
    y: 0,
}
function getEntrie(){
    prompt.start()
    prompt.get('commands', (err, result) =>{
        commands = result.commands;
        pilotRover(commands)
    })
}
console.log(rover)

function turnRight(rover){
    if(rover.direction =="N"){
         rover.direction ="E"
    }
    else if(rover.direction == "E"){
        rover.direction = "E";
    }
    else if(rover.direction =="S"){
        rover.direction = "W"
    }
    else if(rover.direction =="w"){
        rover.direction = "N"
    }
    moveForward(rover)
}
grid[rover.y][rover.x] = rover.direction
console.table(grid)

function turnLeft(rover){
    if(rover.direction === "N"){
        rover.direction = "W"
    }
    else if(rover.direction === "W"){
        rover.direction = "S"
    }
    else if(rover.direction === "S"){
        rover.direction = "E"
    }
    else if(rover.direction === "E"){
        rover.direction = "N"
    }
    moveForward(rover)
}
function moveForward(rover){
    if(rover.direction == "N"  && rover.y < 9){
        rover.y += 1;
        rover.x = rover.x
    }else if(rover.direction == "S" && rover.y > 0){
        rover.y -= 1
        rover.x = rover.x
    }else if(rover.direction == "E" && rover.x < 9){
        rover.y = rover.y
        rover.x += 1
    }else if(rover.direction == "W" && rover.x > 0 ){
        rover.y = rover.y
        rover.x -= 1
    }
    console.log('y', rover.y, 'x', rover.x)
    grid[rover.y][rover.x] = rover.direction
    
    if(rover.direction == "W"){
        grid[rover.y][rover.x+1] = ""
    }
    if(rover.direction == "E"){
        grid[rover.y][rover.x-1] = ""
    }
    if(rover.direction == "N"){
        grid[rover.y-1][rover.x] = ""
    }
    if(rover.direction == "S"){
        grid[rover.y+1][rover.x] = ""
    }
    

    console.table(grid)
}




function pilotRover(commands){
        if (commands == "l"){
            turnLeft(rover)
        }
        if (commands == "r"){
            turnRight(rover)
        }
        if (commands == "f"){
            moveForward(rover)
        }
    console.log(travelLog)
    getEntrie()
}

getEntrie()