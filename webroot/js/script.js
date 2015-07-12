$(document).ready(function() { //

	$('#searchform .fa').click(function() {
		var form = $('#searchform');
		form.toggleClass('open');

		if (form.hasClass('open')) {
			form.find('.fa').removeClass('fa-search');
			form.find('.fa').addClass('fa-close');
			form.find('input').focus();
		} else {
			form.find('.fa').addClass('fa-search');
			form.find('.fa').removeClass('fa-close');
		}

	});

	$(window).scroll(function(e) {
		if ($(window).innerWidth() < 768) {
			if ($('#site-header nav').hasClass('open')) {
				console.log('should stop')
				e.preventDefault();
				return false;
			}
			$('#site-header').removeClass('fixed');
			$('body').removeClass('scroll-adjusted')
			return;
		}
		if ($(window).scrollTop() > 112) {
			$('#site-header').addClass('fixed');
			$('body').addClass('scroll-adjusted')
		} else {
			$('#site-header').removeClass('fixed');
			$('body').removeClass('scroll-adjusted')
		}
	});

	$('#menu-toggle').click(function() {
		$('#site-header nav').toggleClass('open');
	});	

	$('#site-footer h4').click(function() {
		$(this).closest('li').toggleClass('open');
	});

	$('#mobile-menu-toggle').click(function() {
		$('#site-header nav').toggleClass('open');
		if ($('#site-header nav').hasClass('open')) {
			$(this).removeClass('fa-bars').addClass('fa-close').blur();
			console.log($(this).find('ul'));
			$('#site-header nav').find('ul').css({height: $(window).height() + 'px'});
		} else {
			$(this).removeClass('fa-close').addClass('fa-bars');
			$('#site-header nav').find('ul').css({height: 'auto'});
		}
	});
	$('#sidebar').click(function() {
		$(this).toggleClass('open');
	});

	if ($(window).width() < 768)  {

		$('#site-header nav li').on('touchstart', function() {
			$(this).addClass('active');
		});
		$('#site-header nav li').on('touchend', function() {
			$(this).removeClass('active');
		});

		$('#site-header nav li').click(function(e) {
			var li = $(this);
			//var li = a.closest('li');
			var ul = li.closest('ul');

			if (li.find('ul').length > 0) {
				//has sub nav
				e.preventDefault();
				li.find('>ul').addClass('open');
			}
		});

		$('li.back').click(function(e) {
			e.stopPropagation();
			e.preventDefault();
			$(this).closest('ul').removeClass('open');
		});
	}



	$('#hero .slider').flexslider({
		animation: "slide"
	});

	// $('#searchform input').blur(function() {
	// 	var form = $('#searchform');
	// 	form.removeClass('open');
	// 	form.find('.fa').addClass('fa-search');
	// 	form.find('.fa').removeClass('fa-close');
	// });

});