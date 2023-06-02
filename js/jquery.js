//leftmenu accordion
$(function () {
    // $('ul.step02').hide();
    $('ul.step02').eq(0).show();
    $('li.step01').on("click", function () {
        $(this).children('ul.step02').slideToggle(150);
        $(this).children('a').toggleClass('open');
        // $(!this).children('ul.step02').hide();
        // $(this).parent('.step01').slideUp();
        // $(this).next().stop().slideToggle();

    })
    $('li.step02').on("click", function () {
        $(this).children('ul.step03').slideToggle();
    })
})

