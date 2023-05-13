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

    //    toggle menu/navbar script
    $('.menu-btn').click(function () {

        $(".navbar .menu").toggleClass("active");

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

// window.onload = function () {
//     GitHubCalendar(".calendar", "jainendraoo7");
//     GitHubCalendar(".calendar", "jainendraoo7", { responsive: true });
// }




// Scrollreveal-==================================================


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true

});

sr.reveal('.home-content', {})
sr.reveal('.text-4', { delay: 200 })
sr.reveal('.text-5', { delay: 200 })
sr.reveal('.resume', { delay: 400 })

// About--
sr.reveal('.about-content', {})
sr.reveal('.right .text-1', { delay: 200 })
sr.reveal('.right .text', { delay: 200 })
sr.reveal('.right p', { delay: 400 })

// Skills--------
sr.reveal('.tools_and_tech', { delay: 300 })

// Git------------
sr.reveal('.calen', { delay: 200 })
sr.reveal('.statsContainer', { delay: 400 })


const sr2 = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true

});

// Projects----------sub-head2
sr2.reveal('.project-card', { delay: 200 })


// contact-----
const sr1 = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true

});

sr1.reveal('.contact .left', { delay: 200 })
sr1.reveal('.contact .fields', { delay: 100 })
sr1.reveal('.contact .field', { delay: 400 })
sr1.reveal('.contact .textarea', { delay: 600 })
sr1.reveal('.contact .button', { delay: 800 })


// scroll-ups---------
sr.reveal('.scroll-up2', { delay: 200 })
sr.reveal('.scroll-up1', { delay: 400 })
sr.reveal('.scroll-up', { delay: 600 })
