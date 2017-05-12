(function ($) {

	Drupal.behaviors.initSlickSlider = {
		attach: function(context, settings) {
			//code 
			$('.view-diapo .view-content').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 3000,
			});

		}
	}

	

}(jQuery));


