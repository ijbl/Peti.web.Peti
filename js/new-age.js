(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  
  // Initialize Swipers
  var swiperPhone = new Swiper('.swiper-phone', {
      /*pagination: {
        el: '.swiper-pagination',
      },*/
    });
  
  var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  
  swiper.on('slideChange', function () {
    var i = swiper.activeIndex;
    swiperPhone.slideTo(i);
    console.log('slide changed to' + i);
  });
  
  swiperPhone.on('slideChange', function () {
    var i = swiperPhone.activeIndex;
    swiper.slideTo(i);
  });
  
  
  
  //animations
  var petiDescription = $('#peti-description-container');
  petiDescription.addClass('animate__animated animate__fadeInLeft');
  var downloadBtn = $('#download_btn');
  downloadBtn.addClass('animate__animated animate__fadeInUp');
  $('#device-top').addClass('animate__animated animate__fadeInRight');
  $('#panda').addClass('animate__animated animate__bounceInDown animate__delay-1s');

  // hide our element on page load
  var downloadContainer = $('#download');
  var downloadTitle = $('#download-title');
  var downloadText = $('#download-text');
  var downloadBadges = $('#download-badges');
  var downloadSmalltext = $('#download-smalltext');
  var features = $('#features');
  var featuresDevice = $('#features-device');
  var featuresDescription = $('#features-description');
  var contact = $('#contact');
  var contactLeft = $('#contact-left');
  var contactRight = $('#contact-right');
  var contactButtons = $('#contact-buttons');
  
  downloadTitle.css('opacity',  0);
  downloadText.css('opacity',  0);
  downloadBadges.css('opacity',  0);
  downloadSmalltext.css('opacity',  0);
  
  featuresDevice.css('opacity',  0);
  featuresDescription.css('opacity',  0);
  
  contactLeft.css('opacity',  0);
  contactRight.css('opacity',  0);
  //contactButtons.css('opacity',  0);
  
  downloadContainer.waypoint(function (direction) {
    downloadTitle.addClass('animate__animated animate__fadeInLeft');
    downloadText.addClass('animate__animated animate__fadeInRight');
    downloadBadges.addClass('animate__animated animate__fadeInUp');
    downloadSmalltext.addClass('animate__animated animate__fadeInUp');
  
      /*if(direction === "down"){
        elem.addClass('animate__animated animate__fadeInLeft');
      }else if (direction === "up"){
        elem.removeClass('animate__animated animate__fadeInLeft');
      }*/
		
	},{offset:'70%'});
  
  features.waypoint(function (direction) {
    featuresDevice.addClass('animate__animated animate__fadeInLeft');
    featuresDescription.addClass('animate__animated animate__fadeInRight');
	},{offset:'70%'});
  
  contact.waypoint(function (direction) {
    contactLeft.addClass('animate__animated animate__fadeInLeft');
    contactRight.addClass('animate__animated animate__fadeInRight');
    //contactButtons.addClass('animate__animated animate__fadeInUp');
    contactLeft.on('animationend', () => {
      contactButtons.addClass('animate__animated animate__bounce');
    });
    
  },{offset:'50%'});
  
  
  //modales
  /*$('#aviso-privacidad').on('click', function(e){
    e.preventDefault();
    $('#modal-title').replaceWith( '<span id="modal-title">Aviso de Privacidad</span>' );
    $('#modal-long').modal('show').find('.modal-body').load($(this).attr('href'));
  });
  
  $('#terminos').on('click', function(e){
    e.preventDefault();
    $('#modal-title').replaceWith( '<span id="modal-title">Términos y Condiciones</span>' );
    $('#modal-long').modal('show').find('.modal-body').load($(this).attr('href'));
  });*/
  
  
  /*$("input[required], select[required]").attr("oninvalid", "this.setCustomValidity('¡Campo obligatorio!')");
  $("input[required], select[required]").attr("oninput", "setCustomValidity('')");*/

})(jQuery); // End of use strict
