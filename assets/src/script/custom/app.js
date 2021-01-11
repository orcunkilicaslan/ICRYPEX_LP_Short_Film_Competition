
/* Smooth Scroll to Div */
$(document).on('click', '.smoothscroll[data-target]', function(e){
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

/* Wizard New */
$(document).ready(function() {

    // Click Next Button
    $('.formwizard .wizard-btn-next').click(function() {
        var parentFieldset = $(this).parents('.fieldsets');
        var currentActiveStep = $(this).parents('.formwizard').find('.wizardsteptab .active');
        var next = $(this);
        var nextWizardStep = true;

        parentFieldset.find('.inputrequired').each(function() {
            var thisValue = $(this).val();
            if( thisValue === "" ) {
                $(this).parent().removeClass('fieldsuccess').addClass('fielderror');
                nextWizardStep = false;
            } else {
                $(this).parent().removeClass('fielderror').addClass('fieldsuccess');
            }
        });
        parentFieldset.find('.radiorequired').each(function() {
            var thisValue = $(this).find('input[type="radio"]');
            if( thisValue.is(':checked') === false ) {
                $(this).parent().removeClass('fieldsuccess').addClass('fielderror');
                nextWizardStep = false;
            } else {
                $(this).parent().removeClass('fielderror').addClass('fieldsuccess');
            }
        });

        if( nextWizardStep) {
            next.parents('.formwizard .fieldsets').removeClass("show","400");
            currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
            next.parents('.formwizard .fieldsets').next('.formwizard .fieldsets').addClass("show","400");
        }
    });

    // Click Previous Button
    $('.formwizard .wizard-btn-prev').click(function() {
        var counter = parseInt($(".wizard-counter").text());;
        var prev =$(this);
        var currentActiveStep = $(this).parents('.formwizard').find('.wizardsteptab .active');
        prev.parents('.formwizard .fieldsets').removeClass("show","400");
        prev.parents('.formwizard .fieldsets').prev('.formwizard .fieldsets').addClass("show","400");
        currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active',"400");
    });

    // Click Submit Button
    $(document).on("click",".formwizard .wizard-btn-submit" , function(){
        var parentFieldset = $(this).parents('.formwizard .fieldsets');
        var currentActiveStep = $(this).parents('.formwizard').find('.wizardsteptab .active');
        var nextWizardStep = true;

        parentFieldset.find('.inputrequired').each(function() {
            var thisValue = $(this).val();
            if( thisValue === "" ) {
                $(this).parent().removeClass('fieldsuccess').addClass('fielderror');
                nextWizardStep = false;
            } else {
                $(this).parent().removeClass('fielderror').addClass('fieldsuccess');
            }
        });
        parentFieldset.find('.radiorequired').each(function() {
            var thisValue = $(this).find('input[type="radio"]');
            if( thisValue.is(':checked') === false ) {
                $(this).parent().removeClass('fieldsuccess').addClass('fielderror');
                nextWizardStep = false;
            } else {
                $(this).parent().removeClass('fielderror').addClass('fieldsuccess');
            }
        });

    });


    // Focus On Input Field Check Empty or Not
    $(".inputrequired").on('focus', function(){

        var tmpInputThis = $(this).val();

        if(tmpInputThis === '' ) {
            $(this).parent().addClass("focus-input");
        } else if(tmpInputThis !== '' ){
            $(this).parent().addClass("focus-input");
        }

    }).on('blur', function(){
        var tmpInputThis = $(this).val();

        if(tmpInputThis === '' ) {
            $(this).parent().removeClass("focus-input");
            $(this).parent().removeClass('fieldsuccess').addClass('fielderror');
        } else if(tmpInputThis !== '' ) {
            $(this).parent().addClass("focus-input");
            $(this).parent().removeClass('fielderror').addClass('fieldsuccess');
        }
    });

    // Focus On Radio Empty or Not
    $(".radiorequired input[type='radio']").on('focus', function(){

        var tmpRadioThis = $(this);

        if(tmpRadioThis.is(':checked') === false ) {
            $(this).parents('.form-group').addClass("focus-input");
        } else {
            $(this).parents('.form-group').addClass("focus-input");
        }

    }).on('blur', function(){
        var tmpRadioThis = $(this);

        if(tmpRadioThis.is(':checked') === false ) {
            $(this).parents('.form-group').removeClass("focus-input");
            $(this).parents('.form-group').removeClass('fieldsuccess').addClass('fielderror');
        } else {
            $(this).parents('.form-group').addClass("focus-input");
            $(this).parents('.form-group').removeClass('fielderror').addClass('fieldsuccess');
        }
    });

});
/* Wizard New */

/* Input Mask */
$(document).ready(function(){
    $('.inputphonemask').inputmask({
        mask: '0599 999 99 99',
        placeholder: '',
        showMaskOnFocus: true,
        showMaskOnHover: false
    });
});
/* Input Mask */


