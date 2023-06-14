var _img = document.getElementById('image');
var FrontButton = document.getElementById('FrontButton')
var RightButton = document.getElementById('RightButton')
var LeftButton = document.getElementById('LeftButton')
var BackButton = document.getElementById('BackButton')
var newImg = new Image;
newImg.onload = function() {
    _img.src = this.src;
}

var LastScene = "Images/Start.jpeg"
var CurrentScene = "Images/Start.jpeg"

function GoLeft() {
    var Result = ImgInfo[CurrentScene]["Left"]
    if (Result !== undefined) {
        LastScene = CurrentScene
        CurrentScene = Result
    }
    newImg.src = CurrentScene
}

function GoRight() {
    var Result = ImgInfo[CurrentScene]["Right"]
    if (Result !== undefined) {
        LastScene = CurrentScene
        CurrentScene = Result
    } 
    newImg.src = CurrentScene
}

function GoFront() {
    var Result = ImgInfo[CurrentScene]["Front"]
    if (Result !== undefined) {
        LastScene = CurrentScene
        CurrentScene = Result
    } 
    newImg.src = CurrentScene
}

function GoBack() {
    var Result = ImgInfo[CurrentScene]["Back"]
    if (Result !== undefined) {
        LastScene = CurrentScene
        CurrentScene = Result
    } 
    newImg.src = CurrentScene
}

LeftButton.onclick = GoLeft
FrontButton.onclick = GoFront
RightButton.onclick = GoRight
BackButton.onclick = GoBack

var ImgInfo = {
    "Images/Start.jpeg": {"Front" : "Images/1.jpeg"},
    "Images/1.jpeg" :{"Front" : "Images/2.jpeg", "Back":"Images/Start.jpeg"},
    "Images/2.jpeg" :{"Right":"Images/3.jpeg", "Back":"Images/1.jpeg"},
    "Images/3.jpeg" : {"Back" : "Images/2.jpeg"}
}

//*    "Images/Start.jpeg": {"Front" : "Images/1.jpeg"},
//"Images/1.jpeg" :{"Right":"Images/2.jpeg", "Left":"Images/3.jpeg", "Back":"Images/Start.jpeg"},
//"Images/2.jpeg" :{"Left" : "Images/1.jpeg"},
//"Images/3.jpeg" : {"Right" : "Images/1.jpeg"}