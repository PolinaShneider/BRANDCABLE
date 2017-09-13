    var slides = document.querySelectorAll(".slide");
    var slidesCount = document.querySelectorAll(".slide").length;
    var container = document.querySelector(".container");
    var step = parseInt(window.getComputedStyle(container, null).getPropertyValue("width"));
    var wrapper = document.querySelector(".wrapper");
    var currentSlide = document.querySelectorAll(".slide")[0];
    var currentIndex = document.querySelector('[current="true"]').getAttribute("number");
    var counter = 1;

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = step + "px";
    }

    function round(value, step) {
        step || (step = 1.0);
        var inv = 1.0 / step;
        return Math.round(value * inv) / inv;
    }

    function fade(currentSlide) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.toggle("fade-in", false);
        }
        currentSlide.classList.add("fade-in");
    };

    function fadeAll() {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.toggle("fade-in", true);
        }
    };

    var slideRight = function(){
        if (parseInt(window.getComputedStyle(wrapper, null).getPropertyValue("right")) <= (slidesCount - 2) * step) {
            newPosRight = parseInt(window.getComputedStyle(wrapper, null).getPropertyValue("right"))  + step ;
            wrapper.style.right = round(newPosRight, step)+ "px" ;
            index = parseInt(window.getComputedStyle(wrapper, null).getPropertyValue("right")) / step + 1;
            currentSlide = document.querySelectorAll(".slide")[index];
            prevSlide = document.querySelectorAll(".slide")[index - 1];
            prevSlide.setAttribute("current", "false");
            currentSlide.setAttribute("current", "true");
            currentSlide.setAttribute("number", ++index);
            /**
             * Document might not be ready
             * if clicking too fast
             *
             * Check
             */
            if (currentSlide) {
                fade(currentSlide);
            } else {
                fadeAll();
            }
        }
    }
    var slideLeft = function(counter){
        if (parseInt(window.getComputedStyle(wrapper, null).getPropertyValue("right")) >= step) {
            newPosLeft = parseInt(window.getComputedStyle(wrapper, null).getPropertyValue("right"))  - step ;
            wrapper.style.right = round(newPosLeft, step)+ "px" ;
            index = parseInt(window.getComputedStyle(wrapper, null).getPropertyValue("right")) / step - 1;
            /**
             * Document might not be ready
             * if clicking too fast
             *
             * Check
             */
            if (currentSlide) {
                fade(currentSlide);
            } else {
                fadeAll();
            }
        }
    };
    var reInit = function(){
        currentSlide = document.querySelectorAll(".slide")[index];
        currentSlide.setAttribute("current", "true");
        prevSlide = document.querySelectorAll(".slide")[++index];
        prevSlide.setAttribute("current", "false");
        counter = 1;
    };

    setInterval(function(currentIndex) {
        currentIndex = document.querySelector('[current="true"]').getAttribute("number");
        returnIndex = document.querySelector('[current="true"]').getAttribute("returnindex");
        var sliderRecurrent = function () {
            if (currentIndex < slides.length) {
                slideRight();
            } else {
                return function(){
                    if (currentIndex > 0) {
                        slideLeft();
                        counter = counter + 1;
                        if (counter == slides.length) {
                            reInit();
                        }
                    }
                }();
            }
        }();
    }, 3000); // setInterval

    var ctrlLeft = document.querySelector(".ctrl-left");
    ctrlLeft.addEventListener("click", slideLeft);

    var ctrlRight = document.querySelector(".ctrl-right");
    ctrlRight.addEventListener("click", slideRight);