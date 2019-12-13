import $ from 'jquery'
$(document).ready(() =>{
    $("a.scroll").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    if ( $("#datepicker").length > 0 ){
        $("#datepicker").datepicker();
    }

    // Slider
    if( $('.slider_request').length > 0 ){
        let $slickElementLogo = $('.slider.slider_request');
        $slickElementLogo.slick({
            lazyLoad: 'ondemand',
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 2,
                    }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                }
            ]
        });
      }
    // Select2
    if( $('.basic-select').length > 0 ) {
      $('.basic-select').select2();
    };
    // Collapse Item
    $(".item.item_collapse").on("click", function(){
        $(this).toggleClass("item_collapse--active");
        $(this).find(".item__content").slideToggle();
    });
    // Dropdown Nav
    $(".nav .nav__item.nav__item_dropdown .nav__link").on("click", function(e){
      e.preventDefault();
      let openNav = $(this).data("href");
      // Show Dropdown
      $("#" + openNav).slideToggle();
      // Add Active Class
      $("#" + openNav).toggleClass("active");
      $(this).toggleClass("active");
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
      let dropdownNavActive = $(".nav .nav__item.nav__item_dropdown .nav__link.active"); // пункт меню
      let dropdownActive = $(".nav .dropdown.active"); // элемент
          
      if (!dropdownActive.is(e.target) // клик был не по блоку
              && !dropdownNavActive.is(e.target) // и не по активному пункту меню
              && dropdownActive.has(e.target).length === 0) { // и не по его дочерним элементам
                  $(".nav .nav__item.nav__item_dropdown .nav__link.active").removeClass("active");
                  dropdownActive.removeClass("active");
                  dropdownActive.hide();
          }
      });
    // Nav Mobile
    $(".navbar-mobile .navbar .navbar__link#openNabvar").on("click", function(){
        $(this).toggleClass("navbar__link--active");
        $(".navbar-fullscreen").toggleClass("navbar-fullscreen--active");

        if( $(this).hasClass("navbar__link--active") ){
          $("body").attr("style","position: fixed; overflow: hidden;")
        }else{
          $("body").attr("style","")
        }
    });
    // Hide Navigation on Desktop
    $(window).resize(function(){
      if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
        $(".navbar-mobile .navbar .navbar__link#openNabvar").removeClass("navbar__link--active");
        $(".navbar-fullscreen").removeClass("navbar-fullscreen--active");
        $("body").attr("style","")
      }
    });
});