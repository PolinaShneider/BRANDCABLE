jQuery(document).ready(function($){
	/**
	 * Mobile pushing menu script
	 * @param  {boolean} boolean - if pass 'false' it will hide menu
	 */
	var mobileMenu = function(boolean) {
	    $(".js-header-upper__logo-mobile").toggleClass("hide", boolean);
	    $(".main-content--mobile").toggleClass("js-main-content-mobile--move", boolean);
	    $(".js-header__drawer").toggleClass("is-visible", boolean);
	};

	/**
	 * Mobile menu activation button
	 * Hamburger
	 */
	$(".js-header__menu-mobile").click(mobileMenu);

	/**
	 * Perform it on window resize
	 */
	$(window).on('resize', function () {

	    mobileMenu(false); //false as a param — hide mobile menu on resize

	});

});