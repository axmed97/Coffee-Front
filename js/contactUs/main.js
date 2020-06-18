"use strict"
window.onload = function(){
    let preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden"
}

$(document).ready(function(){

    $(window).on("scroll", function(){
        if($(window).scrollTop()){
            $('header').addClass('sticky');
        }
        else{
            $('header').removeClass('sticky');
        }
    })

    $(window).on("scroll", function(){
        if($(this).scrollTop()>40){
            $('.top-btn').fadeIn();
        }
        else{
            $('.top-btn').fadeOut();
        }
    })

    $('.top-btn').click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
    })

    $('.responsive-bar-icon-btn').click(function(){
        $('.responsive-menu').toggleClass('active-responsive-menu');
    });

    $('.responsive-a').click(function(){
        $(this).toggleClass('active-rotate-icon');
        $(this).next().toggleClass('active-inside-responsive-menu');
        $('.responsive-a').next().removeClass('.active-inside-responsive-menu');
    });

    $('.inside-responsive-a').click(function(){
        $(this).toggleClass('active-rotate-icon');
        $(this).next().toggleClass('active-ins-resp-menu');
        $('.inside-responsive-a').next().removeClass('.active-inside-responsive-menu');
    });

    $('.search-btn').click(function(){
        $('.search-area').addClass('active-search');
    });

    $('.close-search').click(function(){
        $('.search-area').removeClass('active-search');
    });

    $('.bar-btn').click(function(){
        $('.side-section').addClass('active-side');
        $('.header-bgcolor').addClass('active-header-bgcolor');
    });

    $('.close-bar-btn').click(function(){
        $('.side-section').removeClass('active-side');
        $('.header-bgcolor').removeClass('active-header-bgcolor');
    });

    $('.header-bgcolor').click(function(){
        $('.side-section').removeClass('active-side');
        $('.header-bgcolor').removeClass('active-header-bgcolor');
    });
})
