console.log("im not crazy");

let sqrs = document.getElementsByTagName("td");
let choice = 'X';
let gameover = false;
let xActive = true;
let oActive = false;
const moves = [];

function addClick() {
	for (var i = 0; i < sqrs.length; i++) {
	    sqrs[i].addEventListener('click', function() {
			console.log(this);
			console.log(this.innerHTML);
			// if (!this.innerHTML){
			// 	this.innerHTML = "X";
			// } else if (this.innerHTML === 'X'){
			// 	this.innerHTML = "O";
			// } else if (this.innerHTML === 'O') {
			// 	this.innerHTML = "";
			// }
			this.innerHTML = choice;
			moves.push(this.getAttribute('id'));
			if (moves.length >= 3){
				checkMatch();
			}

		});
	}
	document.getElementById("x-choice").addEventListener("click", function() {
		console.log('x works');
		choice = 'X';
		console.log(choice + ' choice works');
		xActive = true;
		oActive = false;
		if (xActive === true) {
			this.style.backgroundColor = "#333";
			this.style.color = "#fff";
		} 
		document.getElementById("o-choice").style.backgroundColor = "#48fdff";
		document.getElementById("o-choice").style.color = "#333";

	});
	document.getElementById("o-choice").addEventListener("click", function() {
		console.log('o works');
		choice = 'O';
		console.log(choice + ' choice works');
		xActive = false;
		oActive = true;
		if (oActive === true) {
			this.style.backgroundColor = "#333";
			this.style.color = "#fff";
		}
		document.getElementById("x-choice").style.backgroundColor = "#48fdff";
		document.getElementById("x-choice").style.color = "#333";
	});



}

function checkMatch () {


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


addClick();
// sqrs.addEventListener("click", function() {
// 	console.log(this);
// });	