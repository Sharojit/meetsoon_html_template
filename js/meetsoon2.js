	
	//countdown
	$(function () {
		var countDay = new Date();
		countDay = new Date('December 05, 2014 00:01:00');
		$('.mate-timer').countdown({until: countDay, 
		format: 'DHMS',
		layout: '<div class="clearfix">'+
								'<div class="col-lg-2 visible-lg"></div>'+
								'<div class="col-lg-2 col-md-3 col-sm-6 col-xs-12 mate-numbs">{dnnn}<p class="mate-value">{dl}</p></div>'+
								'<div class="col-lg-2 col-md-3 col-sm-6 col-xs-12 mate-numbs">{hnn}<p class="mate-value">{hl}</p></div>'+
								'<div class="col-lg-2 col-md-3 col-sm-6 col-xs-12 mate-numbs">{mnn}<p class="mate-value">{ml}</p></div>'+
								'<div class="col-lg-2 col-md-3 col-sm-6 col-xs-12 mate-numbs">{snn}<p class="mate-value">{sl}</p></div>'+
								'<div class="col-lg-2 visible-lg"></div>'+
							'</div>'});
		$('#year').text(countDay.getFullYear());
	});

	//scroll bar custom
		jQuery(document).ready(
	  function() {  
		jQuery("html").niceScroll({cursorcolor:"#ffffff"});
	  }
	);

	//Preloader
		//<![CDATA[
			$(window).load(function() { // makes sure the whole site is loaded
				$('#status').fadeOut(); // will first fade out the loading animation
				$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
				$('body').delay(350).css({'overflow':'visible'});
			})
		//]]>
		
		
	//Background Video
	$(document).ready(function() {

		$('#video').videoBG({
			mp4:'video/heart.mp4',
			ogv:'video/heart.ogv',
			webm:'video/heart.webm',
			poster:'video/www.sharojit.com.png',
			scale:true,
			zIndex:0
		});	
			
	})
	
	//Scroll to 
		function scrollToBottom() {
		$('html, body').animate({scrollTop:$(document).height()}, 'slow');
	}
	function scrollToTop() {
		$('html, body').animate({scrollTop:0}, 'slow');
	}
