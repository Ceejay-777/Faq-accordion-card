$('.division').click(function() {
    $('.division').children('.question').css('font-weight', '400')
    $(this).children('.question').css('font-weight', '700');
    $('.division').children('.answer').hide(300);
    $(this).children('.answer').show(300);
});
