$(document).ready(function () {
    // Hiển thị menu responsive
    $(".icon-reponsive").click(function () {
        $(".header-information").toggleClass("h-100");
        // $(".menu-bar__list").toggleClass("m-auto");
        $(".menu-bar__home").toggleClass("mt-2");
    });
    // Tránh việc khi mở menuresponsive đồng thời phóng to màn hình window =>gây ra hậu quả bị mất bố cục 
    $(window).resize(function(){
        if($(window).width()>=990){
            $(".header-information").removeClass("h-100");
            // $(".header-information").css("height","50px");
            $(".menu-bar__home").removeClass("mt-2");
            
        }
    })
    
})