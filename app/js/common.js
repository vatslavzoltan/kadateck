$(function() {

	$('.first_screen_carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		items: 1
	});
	$('.info_carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["‹ НАЗАД",'ВПЕРЕД ›'],
		items: 1
	});
	$(window).on ('load', function(){
		$('.preloader').delay(1000).fadeOut('slow');
	});

	//Scroll
	$('.nav_list a').mPageScroll2id({
		scrollSpeed: 900,
		offset: 100
	});

	// $('.top').click(function () {
	// 	$('html, body').stop().animate({
	// 		scrollTop: 0
	// 	}, 'slow', 'swing');
	// });
	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > $(window).height()) {
	// 		$('.top').addClass("active");
	// 	} else {
	// 		$('.top').removeClass("active");
	// 	}
	// });

});
