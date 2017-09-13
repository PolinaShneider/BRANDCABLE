function openTab(evt, tabName) {
    var i, tabControls, slides, thisIndex;
    slides = document.querySelectorAll(".slide-section__item");
    tabControls = document.querySelectorAll(".slide-section__li");
    for (i = 0; i < tabControls.length; i++) {
        tabControls[i].classList.remove("current");
        slides[i].classList.remove("current");
    }
    thisIndex = this.getAttribute("number");
    this.classList.add("current");
    slides[thisIndex].classList.add("current");
}
var controls = document.querySelectorAll(".slide-section__li");
var slideObjects = document.querySelectorAll(".slide-section__item");
for (i = 0; i < controls.length; i++) {
        controls[i].addEventListener("click", openTab);
        controls[i].setAttribute("number", i);
        slideObjects[i].setAttribute("number", i);
    }
