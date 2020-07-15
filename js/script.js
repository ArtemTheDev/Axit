$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger, .nav_menu, .nav').toggleClass('active');
	});
});

/* CAROUSEL */

var i = 1;
var changeBGtimer = 10000;

function checkSlider() {
	if (i == 1) { $('.p1').addClass('active'); $('.p3').removeClass('active');}
	if (i == 2) { $('.p2').addClass('active'); $('.p1').removeClass('active');}
	if (i == 3) { $('.p3').addClass('active'); $('.p2').removeClass('active');}
}

function next() {
	if (i < 3) { i += 1; } else { i = 1; }
	checkSlider(i);
	setTimeout(next, changeBGtimer);
}

setTimeout(next, changeBGtimer);