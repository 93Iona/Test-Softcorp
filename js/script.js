(function($) {
"use strict";

	/*---------------------------------------------------- */
	/* link
	------------------------------------------------------ */

	$('a[href^="#zakaz"]').bind('click.smoothscroll',function (e) {
	 e.preventDefault();
	 
	let target = this.hash,
	 $target = $(target);
	 
	$('html, body').stop().animate({
	 'scrollTop': $target.offset().top
	 }, 1000, 'swing', function () {
	 window.location.hash = target;
	 });
	 });
 
	/*---------------------------------------------------- */
	/* slider
	------------------------------------------------------ */ 
 
	let tabsSlider = new Swiper('.zakaz-swiper', {
		speed: 650,

		slidesPerView: 'auto',
		spaceBetween: 0,
		freeMode: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			0: {
			  slidesPerView: 1,
			},
			370: {
			  slidesPerView: 2,
			},
			500: {
			  slidesPerView: 3,
			},
			900: {
			  slidesPerView: 5,
			}
		}
	});



	/*---------------------------------------------------- */
	/* dots
	------------------------------------------------------ */ 
	
	setInterval(() => {
	  let currSlide  = $('.zakaz__slider .swiper-slide.active-dots').removeClass('active-dots');

	  let index = currSlide.index() + 1;
	   console.log(index); 
	$('.zakaz__slider .swiper-slide').eq(index).addClass('active-dots');
	
	 if($(window).width()< 500) {
		clearInterval(index);
	  };

	}, 1000)

	/*---------------------------------------------------- */
	/* range
	------------------------------------------------------ */ 
	
	$('#output').val($('#range').val());
		$('#range').on('input', function() {
		$('#output').val($('#range').val());
	});

})(jQuery);
