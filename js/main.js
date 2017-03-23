console.log("im not crazy");

var sqrs = document.getElementsByTagName("td");
var choice = 'X';
var gameover = false;
var xActive = true;
var oActive = false;
var moves = [];

// resetBoard function resets game board
function resetBoard() {
	console.log('reset');

	// Loop through all squares to reset their background and text content
	for (var i = 0; i < sqrs.length; i++) {
		sqrs[i].innerHTML = "";	
		sqrs[i].style.backgroundColor = "#fff";
	}

	// Reset moves
	moves = [];
	// Reset xActive to defualt of true
	xActive = true;
	// Reset oActive to defualt of false
	oActive = false;
	// Resets choice to defult of 'X'
	choice = "X";

	// Reset choice buttons
	document.getElementById('x-choice').style.backgroundColor = "#333";
	document.getElementById('x-choice').style.color = "#fff";
	document.getElementById('o-choice').style.backgroundColor = "#48fdff";
	document.getElementById('o-choice').style.color = "#333";
};

function addChoiceClick() {
	document.getElementById("x-choice").addEventListener("click", function() {
		console.log('x works');
		// Set choice to 'X'
		choice = 'X';
		console.log(choice + ' choice works');
		// Set xActive to true
		xActive = true;
		// Set oActive to false
		oActive = false;
		// If xActive is true set background to #333 and color to #fff
		if (xActive === true) {
			this.style.backgroundColor = "#333";
			this.style.color = "#fff";
		} 
		// Toggle and swap colors with opposing button
		document.getElementById("o-choice").style.backgroundColor = "#48fdff";
		document.getElementById("o-choice").style.color = "#333";

	});

	// Assign event listener to #o-choice
	document.getElementById("o-choice").addEventListener("click", function() {
		console.log('o works');
		// Set choice to 'O'
		choice = 'O';
		console.log(choice + ' choice works');
		// Set xActive to false
		xActive = false;
		// Set oActive to true
		oActive = true;
		// If oActive is true set background to #333 and color to #fff
		if (oActive === true) {
			this.style.backgroundColor = "#333";
			this.style.color = "#fff";
		}
		// Toggle and swap colors with opposing button
		document.getElementById("x-choice").style.backgroundColor = "#48fdff";
		document.getElementById("x-choice").style.color = "#333";
	});
	// Select and Assign event listener to #reset the Reset Button
	let reset = document.getElementById("reset");
	reset.addEventListener('click', function() {
		// Call resetBoard() function to reset board
		resetBoard();
	});
}


function addClick() {
	// Loops through all squares to set an event listener
	for (var i = 0; i < sqrs.length; i++) {
		// Adds event listener
		sqrs[i].addEventListener('click', function() {
			console.log(this);
			console.log(this.innerHTML);
			// If there is no text in the current target square we can set the text to the users choice
			if (!this.innerHTML) {
				// Assigns users choice to target square
				this.innerHTML = choice;
				// Pushes the target squares id into moves ie. 1, 2, 3
				moves.push(this.getAttribute('id'));
				// If choice is X set background to #ff61d2
				// If choice is O set background to #ccb225
				if (choice === 'X')	{
					this.style.backgroundColor = "#FF61D2";
				} else {
					this.style.backgroundColor = "#CCB225";
				}
			}
			// If moves have greater than 3 moves start testing if there is a match
			if (moves.length >= 3){
				checkMatch();
			}
		});
	}
	// Call addChoiceClick to add click event listener to choice button
	addChoiceClick();
}

// checkMatch checks if a user has chosen a winning combination
function checkMatch () {
	// All winnint comindations
	if (sqrs[0].innerHTML==="X" && sqrs[1].innerHTML==="X" && sqrs[2].innerHTML==="X") {
		console.log("x wins");
		alert("X has one");
		xWin = true;
	} else if (sqrs[0].innerHTML==="O" && sqrs[1].innerHTML==="O" && sqrs[2].innerHTML==="O") {
		console.log("O wins");
		alert("O has one");
	} else if (sqrs[3].innerHTML==="X" && sqrs[4].innerHTML==="X" && sqrs[5].innerHTML==="X") {
		console.log("X wins");
		alert("X has one");
    } else if (sqrs[3].innerHTML==="O" && sqrs[4].innerHTML==="O" && sqrs[5].innerHTML==="O") {
	 	console.log("O wins");
		alert("O has one");
	} else if (sqrs[6].innerHTML==="X" && sqrs[7].innerHTML==="X" && sqrs[8].innerHTML==="X") {
		console.log("X wins");
		alert("X has one");
	} else if (sqrs[6].innerHTML==="O" && sqrs[7].innerHTML==="O" && sqrs[8].innerHTML==="O") {
	 	console.log("O wins");
		alert("O has one");
	} else if (sqrs[0].innerHTML==="X" && sqrs[3].innerHTML==="X" && sqrs[6].innerHTML==="X") {
	 	console.log("X wins");
		alert("X has one");
	} else if (sqrs[0].innerHTML==="O" && sqrs[3].innerHTML==="O" && sqrs[6].innerHTML==="O") {
	 	console.log("O wins");
		alert("O has one");
	} else if (sqrs[1].innerHTML==="X" && sqrs[4].innerHTML==="X" && sqrs[7].innerHTML==="X") {
	 	console.log("X wins");
		alert("X has one");
	} else if (sqrs[1].innerHTML==="O" && sqrs[4].innerHTML==="O" && sqrs[7].innerHTML==="O") {
	 	console.log("O wins");
		alert("O has one");
	}  else if (sqrs[2].innerHTML==="X" && sqrs[5].innerHTML==="X" && sqrs[8].innerHTML==="X") {
	 	console.log("X wins");
		alert("X has one");
	} else if (sqrs[2].innerHTML==="O" && sqrs[5].innerHTML==="O" && sqrs[8].innerHTML==="O") {
	 	console.log("O wins");
		alert("O has one");
	} else if (sqrs[0].innerHTML==="X" && sqrs[4].innerHTML==="X" && sqrs[8].innerHTML==="X") {
	 	console.log("X wins");
		alert("X has one");
	} else if (sqrs[0].innerHTML==="O" && sqrs[4].innerHTML==="O" && sqrs[8].innerHTML==="O") {
	 	console.log("O wins");
		alert("O has one");
	} else if (sqrs[2].innerHTML==="X" && sqrs[4].innerHTML==="X" && sqrs[6].innerHTML==="X") {
	 	console.log("X wins");
		alert("X has one");
	} 
	else if (sqrs[2].innerHTML==="O" && sqrs[4].innerHTML==="O" && sqrs[6].innerHTML==="O") {
	 	console.log("O wins");
		alert("O has one");
	}
}

// Call addClick() to start adding click listeners
addClick();
