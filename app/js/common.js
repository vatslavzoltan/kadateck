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

});
