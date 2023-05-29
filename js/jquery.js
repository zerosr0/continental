//leftmenu accordion
$(function(){
    $('.step02').hide();
    $('.step01').on("click", function(){
        $(this).siblings().slideToggle();
        // $(this).next().stop().slideToggle();
        // console.log("click");
    })
})

