function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log("got a response "+this.readyState);
    if (this.readyState == 4 && this.status == 200) {

    	  //    document.getElementById("demo").innerHTML =
    	  //    this.responseText;

    	      jsonToTable(this.responseText);
    	    }
  };

  xhttp.open("PUT", "/serviceInfos", true);
  xhttp.send();
}

function jsonToTable(jsonStr) {
  var x, i, xmlDoc, txt;

  txt="<table>";
  var myArray = JSON.parse(jsonStr);
  for (var i=0; i < myArray.length; i++) {
	  txt+="<tr><td>" + myArray[i].name + "</td><td>" + myArray[i].version + "</td><td>" + myArray[i].status +"</td></tr>";
  }
  txt+="</table>";

  document.getElementById("demo").innerHTML = txt;
}

function stopService() {
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    console.log("got a response "+this.readyState);
	    if (this.readyState == 4 && this.status == 200) {

	    	  //    document.getElementById("demo").innerHTML =
	    	  //    this.responseText;

	    	      jsonToTable(this.responseText);
	    	    }
	  };

	  xhttp.open("PUT", "/stopService", true);
	  xhttp.send();
	}

