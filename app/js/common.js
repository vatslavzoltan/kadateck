$(function() {
	$($('.top_slider .info_desc')[0]).show();
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
	// Listen to owl events:
	var owl = $(".info_carousel.top_carousel");
	owl.on('changed.owl.carousel', function (e) {
		if (e.item) {
			var index = e.item.index - 1;
			var count = e.item.count;
			if (index > count) {
				index -= count;
			}
			if (index <= 0) {
				index += count;
			}
			var info_items = $('.top_slider .info_desc');
			info_items.hide();
			$(info_items[index-1]).show();
			return index;
			
		}
	});
	//Mobile menu
	$('.menu-btn').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('menu-btn_active');
		$('.nav_list').toggleClass('active');
	});
	$('.nav_list li').on('click', function (e) {
		e.preventDefault();
		$('.nav_list').removeClass('active');
		$('.menu-btn').removeClass('menu-btn_active');
	});
	//E-mail Ajax Send
	$(".callback").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function () {
				// Done Functions
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});


});
