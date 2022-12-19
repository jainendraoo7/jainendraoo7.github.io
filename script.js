$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
        // if(this.scrolly > 500){
        //     $('.scroll-up').addClass("show");
        // }
        // else{
        //     $('.scroll-up').removeClass("show");
        // }
    });


    //    typing animation script 

    let typed = new Typed(".typing", {
        strings: ["Java", "SpringBoot", "MYSQL", "Hibernate"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })


    let typed2 = new Typed(".typing2", {
        strings: ["."],
        typeSpeed: 150,
        backSpeed: 60,
        loop: true
    })

    // slide up script 

    $('.scroll-up').click(function () {
        $('html').animate({ scrollToP: 0 });
    });



    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active")
    })

});


function git1() {
    window.location.href = "https://github.com/mazidul36i/Cronometer_clone"
    window.target = "_blank"
}

function deploy1() {
    window.location.href = "https://cronometerclone.netlify.app/"
}

function git2() {
    window.location.href = "https://github.com/jainendraoo7/overjoyed-seashore-212"
}

function deploy2() {
    window.location.href = "https://cozy-starlight-b42384.netlify.app"
}


// github

window.onload = function () {
    GitHubCalendar(".calendar", "jainendraoo7");
    GitHubCalendar(".calendar", "jainendraoo7", { responsive: true });
}