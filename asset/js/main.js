$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
            items: 6,
            loop: true,
            margin: 10,
            nav: false,
            touchDrag: true,
            pagination: false,

            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        })
        //============= Click sign in and sign up===============
    $(".signIn").click(function() {
        $(".signInWindow").addClass("active");
        $(".signUpWindow").removeClass("active");

    })
    $(".exit-icon img").click(function() {
        $(".signInWindow").removeClass("active");



    })
    $(".signUp").click(function() {
        $(".signUpWindow").addClass("active");
        $(".signInWindow").removeClass("active");

    })
    $(".exit-icon img").click(function() {
            $(".signUpWindow").removeClass("active");



        })
        // One page 


    $(".menu-bar__courses").click(function() {
        $("html").animate({ scrollTop: 1371.054443359375 }, 500);
    })
    $(".menu-bar__about").click(function() {
        $("html").animate({ scrollTop: 666.7636108398438 }, 500);
    })
    $(".menu-bar__contact").click(function() {
        $("html").animate({ scrollTop: 3445.527099609375 }, 500);
    })


    // back to top
    var heighToDisplayBackToTopButton = 1391.127197265625;
    var heighToDisplayBackToTopButtonStatus = false;
    $(window).scroll(function() {
        if ($((window)).scrollTop() > heighToDisplayBackToTopButton) {
            heighToDisplayBackToTopButtonStatus = true;
            if (heighToDisplayBackToTopButtonStatus) {
                $(".back-to-top").css("display", "block");
            }
        } else {
            heighToDisplayBackToTopButtonStatus = false;
            $(".back-to-top").css("display", "none");
        }
    })

    $(".back-to-top").click(function() {
        $("html").animate({
            scrollTop: 0
        }, 1000)
    })


})