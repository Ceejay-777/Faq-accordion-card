$('document').ready(function() {
    $('.division').each(function(index) {
        $(this).data('active', false);
        $(this).data('index', index);
    });

    $('.division').click(function() {
        var clicked = $(this);
        $(this).data('active', !$(this).data('active'));

        $('.division').each(function() {
            if($(this).data('index') === clicked.data('index')) {
                
            } else {
                $(this).data('active', false);
            };
        });

        if ($(this).data('active')) {
            $('.division').children('.question').css('font-weight', '400');
            $(this).children('.question').css('font-weight', '700');
            $('.division').children('.answer').hide(300);
            $(this).children('.answer').show(300);
            $('.division').children('.question').children('img').css('transform', '');
            $(this).children('.question').children('img').css({
                'transform' : 'rotateZ(180deg)',
                'transition' : '0.3s ease-in-out'});
        } else {
            $(this).children('.question').css('font-weight', '400');
            $(this).children('.answer').hide(300);
            $(this).children('.question').children('img').css('transform', '');
        };
    });

    $('.division').mouseenter(function() {
            $(this).children('.question').addClass('hover');
    });
    $('.division').mouseleave(function() {
        $(this).children('.question').removeClass('hover');
    });

    console.log($('.grid-container').css('grid-template-rows'));
})

