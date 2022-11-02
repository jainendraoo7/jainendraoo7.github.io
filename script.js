$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrolly > 500){
            $('.scroll-up').addClass("show");
        }
        else{
            $('.scroll-up').removeClass("show");
        }
    });

    // slide up script 

    $('.scroll-up').click(function(){
        $('html').animate({scrollToP: 0});
    });


    
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active")
})

});