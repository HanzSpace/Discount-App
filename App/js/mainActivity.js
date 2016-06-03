$(
	function() {
		var width = $(window).width();
		$('#header').css('height', width * 2 / 3);
		var topd = $("#bottomBar").offset().top;
			$(window).scroll(function() {
				//console.info($(window).scrollTop());
				$("#bottomBar").offset({
					top:topd+$(window).scrollTop()
				});
			});
		
	}

)