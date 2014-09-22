/**
 * @author Aaron Pollon
 */
var count = 0;



function buttonClicked(){
	count++;
	var output = document.getElementById("message");
	output.innerHTML = "Current Count: " + count;
}


window.onload = function(){
var button = document.getElementById("clickme");

button.onclick = buttonClicked;
};


