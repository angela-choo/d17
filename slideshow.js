/*
	Copyright (C)2010 by Armand Niculescu

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the “Software”), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/

window.addEventListener("load", setUpSlideShow);

slidePrefix            = "slide-";
slideControlPrefix     = "slide-control-";
slideHighlightClass    = "highlight";
slidesContainerID      = "slides";
slidesControlsID       = "slides-controls";
 
function setUpSlideShow() {
    // collect the slides and the controls
    slidesCollection = document.getElementById(slidesContainerID).children;
    slidesControllersCollection = document.getElementById(slidesControlsID).children;
 
    totalSlides = slidesCollection.length;
 
    if (totalSlides < 2) return;
 
    //go through all slides
    for (var i=0; i < slidesCollection.length; i++) {
        // give IDs to slides and controls
        slidesCollection[i].id = slidePrefix+(i+1);
        slidesControllersCollection[i].id = slideControlPrefix+(i+1);
 
        // attach onclick handlers to controls, highlight the first control
        slidesControllersCollection[i].onclick = function(){clickSlide(this);};
		slidesControllersCollection[i].addEventListener("click", stopDefault, false);
 
        //hide all slides except the first
        if (i > 0) slidesCollection[i].style.display = "none";
        else slidesControllersCollection[i].className = slideHighlightClass;
    }
 
    // initialize vars
    slideTransStep= 0;
    transTimeout  = 0;
    crtSlideIndex = 1;
 
    // show the next slide
    showSlide(2);
}

function stopDefault(e) {
	e.preventDefault();
	window.location.href.split('#')[0];
}

slideDelay = 10000;
function showSlide(slideNo, immediate) {
	// don't do any action while a transition is in progress
    if (slideTransStep != 0 || slideNo == crtSlideIndex) return;
 
    clearTimeout(transTimeout);
 
	// get references to the current slide and to the one to be shown next
    nextSlideIndex = slideNo;
    crtSlide = document.getElementById(slidePrefix + crtSlideIndex);
    nextSlide = document.getElementById(slidePrefix + nextSlideIndex);
    slideTransStep = 0;
 
    // start the transition now upon request or after a delay (default)
    if (immediate == true) transSlide();
    else transTimeout = setTimeout("transSlide()", slideDelay);
}

function clickSlide(control) {
    showSlide(Number(control.id.substr(control.id.lastIndexOf("-")+1)),true);
}

slideAnimationInterval = 20;
slideTransitionSteps   = 10;
 
function transSlide() {
    // make sure the next slide is visible (albit transparent)
    nextSlide.style.display = "block";
 
    // calculate opacity
    var opacity = slideTransStep / slideTransitionSteps;
 
    // fade out the current slide
    crtSlide.style.opacity = "" + (1 - opacity);
    crtSlide.style.filter = "alpha(opacity=" + (100 - opacity*100) + ")";
 
    // fade in the next slide
    nextSlide.style.opacity = "" + opacity;
    nextSlide.style.filter = "alpha(opacity=" + (opacity*100) + ")";
 
    // if not completed, do this step again after a short delay
    if (++slideTransStep <= slideTransitionSteps) transTimeout = setTimeout("transSlide()", slideAnimationInterval);
    else {
        // complete
        crtSlide.style.display = "none";
        transComplete();
    }
}

function transComplete() {
    slideTransStep = 0;
    crtSlideIndex = nextSlideIndex;
 
    // for IE filters, removing filters reenables cleartype
    if (nextSlide.style.removeAttribute) nextSlide.style.removeAttribute("filter");
 
    // show next slide
    showSlide((crtSlideIndex >= totalSlides) ? 1 : crtSlideIndex + 1);
 
    //unhighlight all controls
    for (var i=0; i < slidesControllersCollection.length; i++) {
        slidesControllersCollection[i].className = "";
	}
 
    // highlight the control for the next slide
    document.getElementById("slide-control-" + crtSlideIndex).className = slideHighlightClass;
}