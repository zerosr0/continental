//leftmenu accordion
$(function () {
    $('ul.step02').hide();
    $('li.step01').on("click", function () {
        $(this).children('ul.step02').slideToggle();
        // $(this).parent('.step01').slideUp();
        // $(this).next().stop().slideToggle();
        // console.log("click");
    })
})

