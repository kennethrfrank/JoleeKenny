$(document).ready(function(){

	// var mobileActive = $(".mobile.tablet.only.sixteen.wide.column.center.active");
	// 	$.ajax({
	// 		type: "POST",
	// 		dataType: "HTML",
	// 		data: {
	// 			section: mobileActive.attr("id")
	// 		},
	// 		url: '@Url.Action("GetLatestPost","Blog")',
	// 		sucess: function(html){
	// 			mobileActive.append(html); HTML BEING POST
	// 		}
	// 	});
	var WindowHeight = $(window).height();
	$("#full").css("height", WindowHeight);
	$(window).on('resize', function(event){
		var rWindowHeight = $(window).height();

		$("#full").css("height", rWindowHeight);


	});

	allButtons();
	
	mobileButtons();
});

function allButtons(){
	$("#logo").on("click", function(event){
		location.reload();
	});
}

function mobileButtons(){
	// STOP POINT 11/27 @ 12pm -- CONTINUED 11/27 @ 9pm
	$(".row.mobileTitle").on('click', function(event){
		
		var father = $(this).parent();
		if(!father.hasClass("active")){
			// $.ajax({
			// 	type: "POST",
			// 	dataType: "HTML",
			// 	url: '@Url.Action("GetLatestPost", "Blog")',
			// 	data: {
			// 		section: father.attr("id")
			// 	},
			// 	success: function(data){
			// 		// DATA BEING BLOG POST
			// 		father.append(data);
			// 	},
			// 	error: function(error){
			// 		console.log(error);
			// 	}
			// });
			console.log("non-active");
			var active = father.parent().find('.active');
			//active.children().last().remove(); REMOVES CURRENT BLOG POST
			father.addClass("active", 1000);
			active.removeClass("active", 1000);

		}else{

			console.log("active");
		}

	});

	$(".row.mobileTitle").on('mouseenter', function(event){
		var currentElement = $(this);
		var bgc = ""; 
		if(currentElement.hasClass("l")){
		bgc ="#D9CECE";
		}else if(currentElement.hasClass("w")){
		bgc = "#CDD2D6";
		}else if (currentElement.hasClass("p")){
		bgc = "#DADAD2";
		}
		currentElement.css("background-color", bgc);
	});
	$(".row.mobileTitle").on('mouseleave', function(event){
		var currentElement = $(this);
		
		$(this).css("background-color", "");
	});

}



