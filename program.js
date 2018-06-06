//PROGRAM
var low = [];
var loa = [];
var loa1 = []; 
var loa2 = [];
var myarray = [];
var index = 0;
var x = 0;



function checkwordsleft(element) {
	return element == null;
}


function letsstart() {
	if (low.every(checkwordsleft) == true) {
			alert("GG MATE GAME OVER. PRESS F5 TO RESTART");
			//clear the shown synonyms
			document.getElementById("possibilities").innerHTML = "&nbsp;";
			document.getElementById("possibilitiesloa2").innerHTML = "&nbsp;";

			document.getElementById("synonyms").value = "";
			document.getElementById("correctorwrong").innerHTML = "&nbsp;";
	} else {

		function RndNumber() {
			return Math.floor(Math.random() * (59 - 1) ) + 1;	
		}
		x = RndNumber();
	
		//check whether there are words left to use
		

		if (low[x] == null) {
			while (low[x] == null) {
				function RndNumber() {
					return Math.floor(Math.random() * (59 - 1) ) + 1;	
				}
				x = RndNumber();
			
			}
			index = x; 
			console.log(index);
			document.getElementById("word").innerHTML = low [index];

			//clear the shown synonyms
			document.getElementById("possibilities").innerHTML = "&nbsp;";
			document.getElementById("possibilitiesloa2").innerHTML = "&nbsp;";
			
			document.getElementById("synonyms").value = "";
			document.getElementById("correctorwrong").innerHTML = "&nbsp;";

			//pop values from the array
			delete low[x];

		
		} else {
			index = x; 
			console.log(index);
			document.getElementById("word").innerHTML = low [index];
	
			//clear the shown synonyms
			document.getElementById("possibilities").innerHTML = "&nbsp;";
			document.getElementById("possibilitiesloa2").innerHTML = "&nbsp;";
			
			document.getElementById("synonyms").value = "";
			document.getElementById("correctorwrong").innerHTML = "&nbsp;";

			//pop values from the array
			delete low[x];
						
		}
	}
}	
	


function checksyn() {
	if (document.getElementById("synonyms").value == loa[index] || 
	    document.getElementById("synonyms").value == loa1[index] ||
	    document.getElementById("synonyms").value == loa2[index]) {
		document.getElementById("correctorwrong").innerHTML = "CORRECT!";
	}
	else {
		document.getElementById("correctorwrong").innerHTML = "NOPE BIATCH TRY AGAIN";
	}
}

function showsyn() {
	document.getElementById("possibilities").innerHTML = loa[index];
	if (loa1[index] != "") {
		document.getElementById("possibilities").innerHTML += " / ";
		document.getElementById("possibilities").innerHTML += loa1[index];
		 if (loa2[index] != "") {
			document.getElementById("possibilitiesloa2").innerHTML = " / ";
			document.getElementById("possibilitiesloa2").innerHTML = loa2[index];
		 }
	} else {}
}
