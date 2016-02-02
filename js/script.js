$(document).ready(function() {
		    $("#Eliza").click(function() {
		        $("#Eliza").show();
		        $("#Princess").hide();
		        $("#Catsby").hide();
		    });  
		    $("#Princess").click(function() {
		        $("#Eliza").hide();
		        $("#Princess").show();
		        $("#Catsby").hide(); 
		        });
		    $("#Catsby").click(function() {
		        $("#Eliza").hide();
		        $("#Princess").hide();
		        $("#Catsby").show();  
		    });
		});