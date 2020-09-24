$(function () {
    $('.menu-button').on('click', function() {
        $('body').toggleClass('open')
    });
});

$(function () {
	$('.menu-button').on('click', function () {
		if ('body'.hasClass('open')) {
			$('.menu-list').fadeOut(10);
		} 
	});
});

$(function () {
	$('.menu-list li').on('click', function() {
		$('body').removeClass('open');
	});
});
