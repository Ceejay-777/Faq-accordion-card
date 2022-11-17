var active = false;
$('.division').click(function() {
    active = !active;
    if (active) {
        $('.division').children('.question').css('font-weight', '400')
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
        $(this).mouseenter(function() {
            $(this).css({
                'color' : 'var(--softRed)',
                'cursor' : 'pointer'
            });
        });
        $(this).mouseleave(function() {
            $(this).css({
                'color' : '',
                'cursor' : ''
            });
        });
    };
});
