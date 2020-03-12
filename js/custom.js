// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 200
	}
})

$('#main-slider.carousel').carousel({
	interval: 10000,
		pause: false
})
//smooth scroll
$('.navbar-nav > li').click(function(event) {
	event.preventDefault();
	var target = $(this).find('>a').prop('hash');
	$('html, body').animate({
		scrollTop: $(target).offset().top
	}, 1000);
});
//scrollspy
$('[data-spy="scroll"]').each(function () {
	var $spy = $(this).scrollspy('refresh');
	$('body').scrollspy({target: ".navbar", offset: 50});
})
//Ajax contact
var form = $('.contact-form');
form.submit(function () {
	$this = $(this);
	$.post($(this).attr('action'), function(data) {
		$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
	},'json');
	return false;
});
