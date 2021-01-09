
/* Smooth Scroll to Div */
$(document).on('click', '.header a[data-target]', function(e){
    e.preventDefault();

    var target  = $(this).attr('data-target');
    var href    = $(this).attr('href');
    var $target = $(target);

    if ($target.length === 0) {
        //console.log('sayfayok');
        window.location.href = href;
        //return;
    }else{
        //console.log('sayfavar');
        var pos = $target.offset().top;
        $('body, html').animate({scrollTop: pos});
    }

});
/* Smooth Scroll to Div */

/* Wizard */
/* Wizard */