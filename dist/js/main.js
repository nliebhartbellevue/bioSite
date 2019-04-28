$(document).ready(function() {
	'use strict';

	var window_width = $(window).width(),
		window_height = window.innerHeight,
		header_height = $('.default-header').height(),
		header_height_static = $('.site-header.static').outerHeight(),
		fitscreen = window_height - header_height;

	$('.fullscreen').css('height', window_height);
	$('.fitscreen').css('height', fitscreen);

	//--------- Go To Top ----------//
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 100) {
			$('#header1').addClass('header-scrolled1');
			$('#back-top').addClass('back-top-animation');
		} else {
			$('#header1').removeClass('header-scrolled1');
			$('#back-top').removeClass('back-top-animation');
		}
	});

	/* ---------------------------------------------
        scroll body to 0px on click
     --------------------------------------------- */
	$('#back-top a').on('click', function() {
		$('body,html').animate(
			{
				scrollTop: 0
			},
			1000
		);
		return false;
	});

	//-------- Preloader ---------//
	$(window).on('load', function() {
		$('.preloader-area')
			.delay(500)
			.fadeOut(1000);
	});
});
