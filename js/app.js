$(function() {
let header = $("#header");
let intro = $("#intro");
let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();

$(window).bind("scroll load", function() {
	scrollPos = $(this).scrollTop();

	if ( scrollPos > introH ) {
	header.addClass('fixed');
 } else {
	header.removeClass("fixed");
 }
});
});