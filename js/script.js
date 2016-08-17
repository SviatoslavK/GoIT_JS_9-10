$(function(){

    $('.navbar li').hover(function() {
        $(this).children('.dropdown').stop(false, true).fadeIn(300);
        $(this).children('a').addClass('selected');

    }, function() {
        $(this).children('.dropdown').stop(false, true).fadeOut(300);
        $(this).children('a').removeClass('selected');
    });

    $('#slider-single').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('select').selectBox({
        menuSpeed: 'normal',
        menuTransition: 'fade'
    });

    $('.checkbox-js').each(function() {
        var self = $(this),
            label = self.next(),
            label_text = label.text();

        label.remove();
        self.iCheck({
            checkboxClass: 'icheckbox_line-blue',
            radioClass: 'iradio_line-blue',
            insert: '<div class="icheck_line-icon"></div>' + label_text
        });
    });

});
