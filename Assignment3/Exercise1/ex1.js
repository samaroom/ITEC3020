function myFunction() { 
      var x = document.getElementById("myText").value; 
      var lettergrade; //placeholder for each response of if statement
      if(x <= 39){
      lettergrade = "Your grade is a F.";
  	  }
  	  	else if(x <= 49 ){
  	  		lettergrade = "Your grade is an E.";
  	  	}
  	  	else if(x <= 54 ){
  	  		lettergrade = "Your grade is a D.";
  	  	}
  	  	else if(x <= 59 ){
  	  		lettergrade = "Your grade is a D+.";
  	  	}
  	  	else if(x <= 64 ){
  	  		lettergrade = "Your grade is a C.";
  	  	}
  	  	else if(x <= 69 ){
  	  		lettergrade = "Your grade is a C+.";
  	  	}
  	  	else if(x <= 74 ){
  	  		lettergrade = "Your grade is a B.";
  	  	}
  	  	else if(x <= 79 ){
  	  		lettergrade = "Your grade is a B+.";
  	  	}
  	  	else if(x <= 89 ){
  	  		lettergrade = "Your grade is a A.";
  	  	}
  	  	else if(x <= 100 ){
  	  		lettergrade = "Your grade is a A+.";
  	  	}


  	  document.getElementById("demo").innerHTML = lettergrade;
  	 }


