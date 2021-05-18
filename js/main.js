$(document).ready(function(){
    /*--- Start:: Slick ---*/ 
	$('.pxd-nav__slick').slick({
		centerMode: true,
		centerPadding: '15px',
		slidesToShow: 5,
			responsive: [{
					breakpoint: 768,
					settings: {
						centerMode: true,
						centerPadding: '10px',
						slidesToShow: 3
					}
				},
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					centerPadding: '15px',
					slidesToShow: 1
				}
			}
		]
	});
	$('.pxd-wrapper__subnav-scd .pxd-subnav__slick').slick({
		slidesToShow: 1,
		arrows: true,
		centerPadding: '15px',
	});
	$('.pxd-wrapper__subnav-third .pxd-subnav__slick').slick({
		slidesToShow: 3,
		arrows: true,
		centerPadding: '15px',
		responsive: [{
			breakpoint: 480,
				settings: {
					centerPadding: '10px',
					slidesToShow: 1
				}
			}
		]
	});
	// slider gallery group
	$('.slider-gallery__top').slick({
		slidesToShow: 1,
		arrows: true,
	});
	// slick gallery
	$('.slider-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		adaptiveHeight: true,
		infinite: false,
		useTransform: true,
	});
   
	$('.slider-gallery_nav')
		.on('init', function(event, slick) {
			$('.slider-gallery_nav .slick-slide.slick-current').addClass('is-active');
		})
		.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			focusOnSelect: false,
			infinite: false,
			responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
		   		}
			}]
		});
   
	$('.slider-gallery').on('afterChange', function(event, slick, currentSlide) {
		$('.slider-gallery_nav').slick('slickGoTo', currentSlide);
		var currrentNavSlideElem = '.slider-gallery_nav .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.slider-gallery_nav .slick-slide.is-active').removeClass('is-active');
		$(currrentNavSlideElem).addClass('is-active');
	});
   
	$('.slider-gallery_nav').on('click', '.slick-slide', function(event) {
		event.preventDefault();
		var goToSingleSlide = $(this).data('slick-index');
   
		$('.slider-gallery').slick('slickGoTo', goToSingleSlide);
	});
	// slick home
	$('.slide-home').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: '.slide-home__nav'
	});
	$('.slide-home__nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slide-home',
		focusOnSelect: true,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 4
			}
		},
		]
	});
	// slider gallery group
	$('.slider-about__us').slick({
		slidesToShow: 1,
		vertical: true,
		infinite: false,
	});
	/*--- End:: Slick ---*/ 
    console.log('Im ready');
    $('.btnNext').click(function(){
        $('.nav-link.active').next('button').trigger('click');
    });

    $('.btnPrevious').click(function(){
        $('.nav-link.active').prev('button').trigger('click');
    });
	// scroll click
	$('.scrollable-content').each(function() {
		var limit = parseInt($(this).data('limit'));
		$(this).find('li').slice(limit).hide();
	})
	$('.scroll-up').click(function(e) {
		e.preventDefault();
		var cont = $(this).parent().find('.scrollable-content:eq(0)');
		if (cont.find('li:eq(0)').is(':hidden')) {
			cont.find('li:visible:eq(0)').prev().show();
			cont.find('li:visible:last').hide();
		}
	});
	$('.scroll-down').click(function(e) {
		e.preventDefault();
		var cont = $(this).parent().find('.scrollable-content:eq(0)');
		if (cont.find('li').last().is(':hidden')) {
			cont.find('li:visible:eq(0)').hide();
			cont.find('li:visible:last').next().show();
		}
	});
});