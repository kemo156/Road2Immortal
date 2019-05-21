$(window).on('load', function(){

	$('#appWrapper').removeClass('blurPage');
	$('#loader').slideUp();

  $('html, body').animate({
    scrollTop: $('nav.navbar').offset().top
  }, 20);
});

	$(document).ready(function(){

	  $("#myNavbar ul li > a").on('click', function(event) {
	    var current = $(this).attr('nav-id');
	    console.log(current);

	    $('html, body').animate({
	      scrollTop: $('div#'+current).offset().top
	    }, 1000);
	  });

	});