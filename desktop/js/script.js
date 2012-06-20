/*	INITS and CUSTOM SCRIPTS			 					 					   														*/

$(document).ready(function(){
		
		//Anything slider initialize
		$(function () {
			$('#slider').anythingSlider({
				startPanel          : 1,
				autoPlay			: true,
				delay				: 10000,
				buildStartStop      : false,
				navigationFormatter : function(index, panel){ // Format navigation labels with text
			    return []
			    [index - 1];
			  }
			});
		});
		
});