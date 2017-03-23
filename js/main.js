console.log("im not crazy");

let sqrs = document.getElementsByTagName("td");
let choice;
let gameover = false;
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
		checkMatch(i);
		});
	}
	document.getElementById("x-choice").addEventListener("click", function() {
		console.log('x works');
		choice = 'X';
		console.log(choice + ' choice works');
	});
	document.getElementById("o-choice").addEventListener("click", function() {
		console.log('o works');
		choice = 'O';
		console.log(choice + ' choice works');
	});



}

function checkMatch () {
	if (sqrs[0].innerHTML==="X" && sqrs[1].innerHTML==="X" && sqrs[2].innerHTML==="X") {
		console.log("x wins");
		alert("X has one");
	} else if (sqrs[0].innerHTML==="O" && sqrs[1].innerHTML==="O" && sqrs[2].innerHTML==="O") {
		console.log("O wins");
	} else if (sqrs[3].innerHTML==="X" && sqrs[4].innerHTML==="X" && sqrs[5].innerHTML==="X") {
		console.log("X wins");
	} else if (sqrs[3].innerHTML==="O" && sqrs[4].innerHTML==="O" && sqrs[5].innerHTML==="O") {
		console.log("O wins");
	} else if (sqrs[6].innerHTML==="X" && sqrs[7].innerHTML==="X" && sqrs[8].innerHTML==="X") {
		console.log("X wins");
	} else if (sqrs[6].innerHTML==="X" && sqrs[7].innerHTML==="X" && sqrs[8].innerHTML==="X") {
		console.log("X wins");
	}
}


addClick();
// sqrs.addEventListener("click", function() {
// 	console.log(this);
// });	