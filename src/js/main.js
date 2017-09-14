jQuery(document).ready(function($){
	/**
	 * Mobile pushing menu script
	 * @param  {boolean} boolean - if pass 'false' it will hide menu
	 */
	var mobileMenu = function(boolean) {
	    $(".js-header-upper__logo-mobile").toggleClass("hide", boolean);
	    $(".main-content--mobile").toggleClass("js-main-content-mobile--move");
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

	// $(document).mouseup(function(e) {
	//     var activator = $(".js-header__menu-mobile");
	//     var main = $(".js-main-content-mobile");
	//     var container = $(".js-header__drawer");
	//     var condition = activator.is(e.target) || activator.has(e.target).length;
	//     var inside = container.is(e.target) || container.has(e.target).length;
	//     if (!condition && main.has(e.target).length === 0 && !inside)
	//     {
	//         mobileMenu(false);
	//     }
	});

});