$(document).ready(function(){

	var WindowHeight = $(window).height();
	$("#full").css("height", WindowHeight);
	$(window).on('resize', function(event){
		var rWindowHeight = $(window).height();

		$("#full").css("height", rWindowHeight);


	});



	mobileButtons();
});

function mobileButtons(){
	// STOP POINT 11/27 @ 12pm -- CONTINUED 11/27 @ 9pm
	$(".row.mobileTitle").on('click', function(event){
		
		var father = $(this).parent();
		if(!father.hasClass("active")){
			console.log("non-active");
			var active = father.parent().find('.active');
			
			father.addClass("active", 1000);
			active.removeClass("active", 1000);

		}else{

			console.log("active");
		}

	});

}