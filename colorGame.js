var numSquares = 6
var colors = generateRandomColors(numSquares);

var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var displayColor = document.getElementById("displayColor");
var displayMsg = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



displayColor.textContent = pickedColor;
for(var i = 0; i < squares.length ; i++){
	//assign each of the array colors to the squares
	squares[i].style.backgroundColor = colors[i];

	//define a var that captures the background color the user clicks on
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			displayMsg.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		} else{
			this.style.backgroundColor = "#232323";
			displayMsg.textContent = "Try Again";
		}
	});
}

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	//generate 3 random colors
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	//choose a pickedColor randomly
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	//change the colors of the first 3 squares to the generated random colors
	for(var i = 0 ; i < squares.length ; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else
		squares[i].style.display = "none";
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	//generate 6 random colors
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	//choose a pickedColor randomly
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	//change the colors of the first 3 squares to the generated random colors
	for(var i = 0 ; i < squares.length ; i++) {
		squares[i].style.background = colors[i]
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//generate 6 random colors
	colors = generateRandomColors(numSquares);
	//pick a color among them randomly
	pickedColor = pickColor();
	//change the pickedColor variable that is displayed
	displayColor.textContent = pickedColor;
	this.textContent = "New Colors";
	//change the colors of all the squares with the newly generated ones
	for(var i = 0 ; i < squares.length ; i++) {
		squares[i].style.background = colors[i]
	}
	h1.style.background = "steelblue";

	displayMsg.textContent = "";
})

function changeColors(color) {
	for(var i = 0 ; i < squares.length ; i++) {
		squares[i].style.background = color;
	}	
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//define an array
	var arr = [];
	//loop through the array to add random colors
	for(var i = 0 ; i < num ; i++) {
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor(){
	//generate a random shade of red between 0 and 255
	var r =Math.floor(Math.random() * 256);
	//generate a random shade of green between 0 and 255
	var g =Math.floor(Math.random() * 256);
	//generate a random shade of blue between 0 and 255
	var b =Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}




