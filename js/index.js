
$(function() {
    $(".offcn_header_wb").hover(function () {
        $(".top_wb_con").show();
        $(".top_wb_con").css('zIndex', 99);
    }, function () {
        $(".top_wb_con").hide();
    });
    $(".offcn_header_wx").hover(function () {
        $(".top_wx_con").show();
        $(".top_wx_con").css('zIndex', 99);
    }, function () {
        $(".top_wx_con").hide();
    })

    function tabs(tabTit,on,tabCon){
        $(tabCon).each(function(){
            $(this).children().eq(0).show();
        });
        $(tabTit).each(function(){
            $(this).children().eq(0).addClass(on);
        });
        $(tabTit).children().hover(function(){
            $(this).addClass(on).siblings().removeClass(on);
            var index = $(tabTit).children().index(this);
            $(tabCon).children().eq(index).show().siblings().hide();
        });
    }
    tabs(".tab-hd","active",".tab-bd");
    tabs(".tab-hd1","active1",".tab-bd1");
    tabs(".tab-hd2","active2",".tab-bd2");




    $('.m7C-1').each(function (index) {
        $(this).hover(function () {
            $(this).addClass('m7C-1Hover');
            $('.m7C-1').find('.m7C-1Tel').css('display','none').eq(index).css('display','block');
        },function(){
            $(this).removeClass('m7C-1Hover');
            $('.m7C-1').find('.m7C-1Tel').css('display','none')
        })
    });



});