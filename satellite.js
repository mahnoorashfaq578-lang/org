
/* =====================================================
   GSAP
===================================================== */

gsap.registerPlugin(ScrollTrigger);



/* =====================================================
   NAVBAR
===================================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}



/* =====================================================
   HERO
===================================================== */

gsap.from(".hero-top", {

    opacity: 0,
    y: -25,
    duration: 1,
    ease: "power3.out"

});


gsap.from(".hero-satellite", {

    opacity: 0,
    scale: .75,
    y: 50,
    duration: 1.6,
    ease: "power3.out"

});


gsap.from(".hero-title > *", {

    opacity: 0,
    y: 35,
    duration: 1,
    stagger: .12,
    ease: "power3.out"

});


gsap.from(".hero-bottom > *", {

    opacity: 0,
    y: 20,
    duration: .8,
    stagger: .1,
    ease: "power3.out"

});



/* =====================================================
   HERO ORBITS
===================================================== */

gsap.to(".ring-one", {

    rotation: 360,
    duration: 30,
    repeat: -1,
    ease: "none"

});


gsap.to(".ring-two", {

    rotation: -360,
    duration: 40,
    repeat: -1,
    ease: "none"

});


gsap.to(".hero-satellite", {

    y: -12,
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"

});


gsap.to(".satellite-glow", {

    scale: 1.1,
    opacity: .75,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"

});



/* =====================================================
   SECTION 02
===================================================== */


/* LEFT TEXT */

gsap.from(".story-left > *", {

    scrollTrigger: {

        trigger: ".satellite-story",
        start: "top 70%",
        toggleActions: "play none none reverse"

    },

    x: -60,
    opacity: 0,
    duration: 1,
    stagger: .12,
    ease: "power3.out"

});



/* SATELLITE */

gsap.from(".story-visual", {

    scrollTrigger: {

        trigger: ".satellite-story",
        start: "top 70%",
        toggleActions: "play none none reverse"

    },

    x: 100,
    opacity: 0,
    scale: .94,
    duration: 1.3,
    ease: "power3.out"

});



/* SATELLITE FLOAT */

const storySatellite =
    document.querySelector(".story-satellite");

if (storySatellite) {

    gsap.to(storySatellite, {

        y: -15,

        duration: 3.5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

}



/* TECHNICAL POINTERS */

gsap.from(".technical-point", {

    scrollTrigger: {

        trigger: ".story-visual",
        start: "top 72%",
        toggleActions: "play none none reverse"

    },

    opacity: 0,
    scale: .7,
    duration: .7,
    stagger: .15,
    ease: "power3.out"

});



/* VISUAL GRID */

gsap.from(".technical-grid", {

    scrollTrigger: {

        trigger: ".story-visual",
        start: "top 75%"

    },

    opacity: 0,
    duration: 1.5

});



/* GLOW */

const visualGlow =
    document.querySelector(".visual-glow");

if (visualGlow) {

    gsap.to(visualGlow, {

        scale: 1.12,
        opacity: .75,

        duration: 4,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

}



/* =====================================================
   SECTION 03
===================================================== */

gsap.from(".capability-heading > *", {

    scrollTrigger: {

        trigger: ".capability-section",
        start: "top 75%",
        toggleActions: "play none none reverse"

    },

    y: 45,
    opacity: 0,
    duration: .9,
    stagger: .12,
    ease: "power3.out"

});


gsap.from(".capability-card", {

    scrollTrigger: {

        trigger: ".capability-grid",
        start: "top 75%",
        toggleActions: "play none none reverse"

    },

    y: 70,
    opacity: 0,
    duration: 1,
    stagger: .15,
    ease: "power3.out"

});



/* CARD GLOW */

document.querySelectorAll(".capability-card")
.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        gsap.to(card, {

            y: -8,
            duration: .4,
            ease: "power2.out"

        });

    });


    card.addEventListener("mouseleave", function () {

        gsap.to(card, {

            y: 0,
            duration: .4,
            ease: "power2.out"

        });

    });

});



/* =====================================================
   SECTION 04
===================================================== */

gsap.from(".final-content > *", {

    scrollTrigger: {

        trigger: ".orbit-final",
        start: "top 75%",
        toggleActions: "play none none reverse"

    },

    y: 45,
    opacity: 0,
    duration: 1,
    stagger: .13,
    ease: "power3.out"

});


gsap.to(".final-orbit", {

    rotation: 360,

    duration: 30,

    repeat: -1,

    ease: "none"

});



/* =====================================================
   REFRESH
===================================================== */

window.addEventListener("resize", function () {

    ScrollTrigger.refresh();

});

