/*======================
	   SERVICES
=======================*/

$(function() {
	new WOW().init();
});

/*======================
	   SERVICES
=======================*/
$(function() {
	$('#work').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery:{
	  enabled:true
	  }
	  // other options
	});
});

/*======================
	  OWL-CAROUSEL
	      TEAM
=======================*/

$(function() {
	$("#team-members").owlCarousel({
		items:3,
		autoplay: true,
		loop: true,
		autoplayTimeout: 2000,
		// smartSpeed: 2000
		autoplaySpeed: 1000,
		autoplayHoverPause: true

	});
});

/*======================
	  OWL-CAROUSEL
	  TESTIMONIAL
=======================*/

$(function() {
	$("#customers-testimonials").owlCarousel({
		items:1,
		autoplay: true,
		loop: true,
		autoplayTimeout: 2000,
		// smartSpeed: 2000
		autoplaySpeed: 1000,
		autoplayHoverPause: true

	});
});

/*======================
	  COUNTER UP
	  	STATS
=======================*/

$(function() {
	$('.counter').counterUp({
		delay: 10,
	    time: 2000,
	    offset: 70
	});
});

/*======================
	  OWL-CAROUSEL
	     CLIENTS
=======================*/

$(function() {
	$("#clients-list").owlCarousel({
		items:7,
		autoplay: true,
		loop: true,
		autoplayTimeout: 2000,
		// smartSpeed: 2000
		autoplaySpeed: 1000,
		autoplayHoverPause: true

	});
});


/*======================
	  TRANSPARENT
	      NAV
=======================*/

$(function () {
	$(window).scroll(function() {
		if($(this).scrollTop() < 50) {
			$("nav").removeClass("bg-custom");
		} else {
			$("nav").addClass("bg-custom");
		}
	});
});