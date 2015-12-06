$(document).ready(function() {
	/* wow ======================================= */

	new WOW().init({
		offset: 20 
	});


	/* Hero slider ======================================= */

	$('#hero-slides').superslides({
		play: 4000,
		animation: 'fade'
	});

	$("#content-3").mThumbnailScroller({
					type:"click-32",//67
					theme:"buttons-in"
				});

 
});function co(){

	console.log("idem to");
}
