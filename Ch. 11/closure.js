/**
 * @author Aaron Pollon
 */

window.onload = function(){
	var count = 0;
	var output = document.getElementById("message");
	var button = document.getElementById("clickme");
			
	button.onclick = function (){
		count++;
		output.innerHTML = "Current Count: " + count;
	};		
};

