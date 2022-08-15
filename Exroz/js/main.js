new WOW().init();

$('[data-fancybox="work"]').fancybox({
	thumbs : {
		autoStart : true
  },
  buttons: [
    "zoom",
    "share",
    "slideShow",
    "fullScreen",
    "download",
    "thumbs",
    "close"
  ],
  arrows: false,
});

var typed = new Typed('.typed', {
  strings: ["CONSTRUCTION", "BUILDER", "COMPANY"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
  cursorChar: '.',
});

$(".blog-slider").owlCarousel({
  items: 3,
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
      nav: true,
      dots: true,
    }
  }
});