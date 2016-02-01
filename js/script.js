$(document).ready(function() {
		    $("#Eliza").click(function() {
		        $("#ElizaPic").show();
		        $("#PrincessPic").hide();
		        $("#CatsbyPic").hide();
		        $("#ElizaBio").show();
		        $("#PrincessBio").hide();
		        $("#CatsbyBio").hide();
		    });  
		    $("#Princess").click(function() {
		        $("#ElizaPic").hide();
		        $("#PrincessPic").show();
		        $("#CatsbyPic").hide(); 
		        $("#ElizaBio").hide();
		        $("#PrincessBio").show();
		        $("#CatsbyBio").hide();
		        });
		    $("#Catsby").click(function() {
		        $("#ElizaPic").hide();
		        $("#PrincessPic").hide();
		        $("#CatsbyPic").show();  
		        $("#ElizaBio").hide();
		        $("#PrincessBio").hide();
		        $("#CatsbyBio").show();
		    });
		});