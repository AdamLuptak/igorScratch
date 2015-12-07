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


$(function(){
  $('.crsl-items').carousel({
    visible: 3,
    itemMinWidth: 180,
    itemEqualHeight: 370,
    itemMargin: 9,
  });
  
  $("a[href=#]").on('click', function(e) {
  	console.log("teraz");
  
   
   e.preventDefault();


 


  });

  
});

// $('.next,.previous').on('click',function(e){
//    $('.next,.previous').attr("disabled", "disabled");
// setTimeout('enableButton()', 500);

// });


 
});function co(){

	console.log("idem to");
}

  function enableButton(){
   $('a[href=#]').removeAttr('disabled');
}
