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
	 * Flyout menu-items
	 * in nav--fixed
	 */
	var navMenuItems = document.querySelectorAll(".js-nav__ul-li");
	var arrowOuterContainers = document.querySelectorAll(".js-arrow__outer-container");

	for (var i = 0; i < navMenuItems.length; i++) {
		var width = window.getComputedStyle(navMenuItems[i], null).getPropertyValue("width");
		navMenuItems[i].querySelector(".js-arrow-wrapper").style.width = width;
	}

	for (var i = 0; i < arrowOuterContainers.length; i++) {
		var parent = document.querySelector(".nav__ul")
		var width = window.getComputedStyle(parent, null).getPropertyValue("width");
		arrowOuterContainers[i].style.minWidth = width;
	}



	$(".js-nav__ul-li").hover(function(){
		if ($(window).width() > 900) {
			$(this).toggleClass("hovered", true);
			$( ".nav__ul-contents" ).empty();
			$(this).find(".js-arrow__outer-container").clone(true, true).contents().appendTo('.nav__ul-contents');
			$(this).siblings().toggleClass("hovered", false);
			$('.nav__ul-contents').find(".js-arrow_box").toggleClass("is-visible");
			$(this).siblings().find(".js-arrow_box").toggleClass("is-visible", false);
			$(this).siblings().find(".js-arrow__ul").toggleClass("is-visible", false);
			$('.nav__ul-contents').find(".js-arrow__ul").toggleClass("is-visible", true);
		}
	})

	$(".nav__ul").mouseleave(function(event){
		var hoveredPseudoHeight = 150;
		var above = (event.clientY < $(this).find(".is-visible").offset().top);
		var below = (event.clientY > $(this).find(".is-visible").offset().top + hoveredPseudoHeight);
		var condition = (event.target === $(".nav__ul") || $(".nav__ul").has(event.target));
		
		if (condition) {
			if (above || below) {
				$(this).find(".js-nav__ul-li").toggleClass("hovered", false);
				$(this).find(".js-arrow_box").toggleClass("is-visible", false);
				$(this).find(".js-arrow__ul").toggleClass("is-visible", false);
			}
		}
		
	})

	/**
	 * Perform it on window resize
	 */
	$(window).on('resize', function () {

	    mobileMenu(false); //false as a param — hide mobile menu on resize
	    $( ".nav__ul-contents" ).empty();
	    $(".js-nav__ul-li").toggleClass("hovered", false);

	});

	$(document).mouseup(function(e) {
	    var activator = $(".js-header__menu-mobile");
	    var main = $(".js-main-content-mobile");
	    var container = $(".js-header__drawer");
	    var condition = activator.is(e.target) || activator.has(e.target).length;
	    var inside = container.is(e.target) || container.has(e.target).length;
	    if (!condition && main.has(e.target).length === 0 && !inside)
	    {
	        mobileMenu(false);
	    }
	});

});