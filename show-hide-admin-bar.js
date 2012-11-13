jQuery(function($) {
	$("#wpadminbar")
		.css({'margin-top': '-25px', 'cursor': 'pointer'});

	var timeout = null;

	$("#wpadminbar").hover(function () {
		if (timeout) {
			clearTimeout(timeout);
			timeout = null;
		}

		$(this)
			.stop(true, true)
			.animate({ marginTop: 0 }, 'fast');
	}, function () {
		var menuBar = $(this);
		timeout = setTimeout(function () {
			timeout = null;
			menuBar
				.stop(true, true)
				.animate({ marginTop: -25 }, 'slow');
		}, 500);
	});
});
