import $ from 'jquery'
$(document).ready(() =>{
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
    $(".item.item_collapse").on("click", function(){
        $(this).toggleClass("item_collapse--active");
        $(this).find(".item__content").slideToggle();
    });
});