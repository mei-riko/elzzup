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

    if ( $("#datepicker").lenght ){
        $("#datepicker").datepicker({
            beforeShow: function(input, inst)
            {
                $.datepicker._pos = $.datepicker._findPos(input); //this is the default position
                // $.datepicker._pos[0] = 0; //left
                $.datepicker._pos[1] = $(window).height() - 270; //top
            }
        });
    }

    // Collapse Item
    $(".item.item_collapse").on("click", function(){
        $(this).toggleClass("item_collapse--active");
        $(this).find(".item__content").slideToggle();
    });
    // Nav Mobile
    $(".navbar-mobile .navbar .navbar__link#openNabvar").on("click", function(){
        $(this).toggleClass("navbar__link--active");
        $(".navbar-fullscreen").toggleClass("navbar-fullscreen--active");
    });
    // Hide Navigation on Desktop
    $(window).resize(function(){
        if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
        $(".navbar-mobile .navbar .navbar__link#openNabvar").removeClass("navbar__link--active");
        $(".navbar-fullscreen").removeClass("navbar-fullscreen--active");
        }
    });
});