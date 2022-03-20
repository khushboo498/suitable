$(document).ready(function(){
	// whole jquery code will go here
	// contact popup
	$("#contact-button").click(function(){
 		$("#contact-popup").show();
	});

	$("#close-popup").click(function(){
 		$("#contact-popup").hide();
	})


	// demo-form

	$("#demo-button").click(function(){
		$("#demo-form").show();
	});

	$("#close-demo").click(function(){
		$("#demo-form").hide();
	});

	// banner
	$("#demo-button-banner").click(function(){
		$("#demo-form").show();
	});
	// requstdemo
	$("#demo-button-request").click(function(){
		$("#demo-form").show();
	});
});


