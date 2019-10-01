import $ from 'jquery'
$(document).ready(() =>{
    $( "#datepicker" ).datepicker({
        beforeShow: function(input, inst)
        {
            $.datepicker._pos = $.datepicker._findPos(input); //this is the default position
            // $.datepicker._pos[0] = 0; //left
            $.datepicker._pos[1] = $(window).height() - 270; //top
        }
    });
});