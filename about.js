/* =====================================================
   GSAP
===================================================== */

gsap.registerPlugin(ScrollTrigger);



/* =====================================================
   NAVBAR
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navLinks.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }

});



/* =====================================================
   SECTION 01 — HERO REVEAL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const heroTimeline = gsap.timeline();

    heroTimeline

        .from(".about-top", {
            y: -25,
            opacity: 0,
            duration: 0.7
        })

        .from(".small-text", {
            y: 20,
            opacity: 0,
            duration: 0.5
        }, "-=0.3")

        .from(".about-heading h1", {
            y: 90,
            opacity: 0,
            duration: 1.1,
            ease: "power4.out"
        }, "-=0.2")

        .from(".about-description", {
            y: 35,
            opacity: 0,
            duration: 0.7
        }, "-=0.55")

        .from(".explore-btn", {
            y: 20,
            opacity: 0,
            duration: 0.6
        }, "-=0.35")

        .from(".about-visual", {
            x: 80,
            opacity: 0,
            duration: 1.1,
            ease: "power4.out"
        }, "-=0.9")

        .from(".about-bottom", {
            y: 25,
            opacity: 0,
            duration: 0.7
        }, "-=0.4");


    /* SOFT GLOW MOVEMENT */

    gsap.to(".glow-one", {

        x: 45,
        y: 30,

        duration: 6,

        repeat: -1,
        yoyo: true,

        ease: "sine.inOut"

    });


    gsap.to(".glow-two", {

        x: 40,
        y: -25,

        duration: 7,

        repeat: -1,
        yoyo: true,

        ease: "sine.inOut"

    });



    /* IMAGE PARALLAX */

    gsap.to(".visual-image img", {

        scrollTrigger: {
            trigger: ".about-visual",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },

        yPercent: 6,

        ease: "none"

    });

});



/* =====================================================
   CONTINUOUS FRAME LINE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const frameTimeline = gsap.timeline({
        repeat: -1
    });


    frameTimeline

        .to(".moving-frame-line", {

            backgroundPosition:
                "100% 0%, 100% 100%, 0% 100%, 0% 0%",

            duration: 2.5,

            ease: "none"

        })

        .to(".moving-frame-line", {

            backgroundPosition:
                "100% 100%, 0% 100%, 0% 0%, 100% 0%",

            duration: 2.5,

            ease: "none"

        })

        .to(".moving-frame-line", {

            backgroundPosition:
                "0% 100%, 0% 0%, 100% 0%, 100% 100%",

            duration: 2.5,

            ease: "none"

        })

        .to(".moving-frame-line", {

            backgroundPosition:
                "0% 0%, 100% 0%, 100% 100%, 0% 100%",

            duration: 2.5,

            ease: "none"

        });

});



/* =====================================================
   SECTION 02 — HEADER REVEAL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    gsap.from(".mission-header .section-label", {

        scrollTrigger: {
            trigger: ".mission-header",
            start: "top 82%"
        },

        x: -40,
        opacity: 0,

        duration: 0.7

    });


    gsap.from(".mission-header h2", {

        scrollTrigger: {
            trigger: ".mission-header",
            start: "top 82%"
        },

        y: 80,
        opacity: 0,

        duration: 1.1,

        ease: "power4.out"

    });

});



/* =====================================================
   MISSION TEXT REVEAL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const missionReveal = gsap.timeline({

        scrollTrigger: {
            trigger: ".mission-column-one",
            start: "top 70%"
        }

    });


    missionReveal

        .to(".mission-column-one .column-content small", {

            y: 0,
            opacity: 1,

            duration: 0.5

        })

        .to(".mission-column-one .column-content h3", {

            y: 0,
            opacity: 1,

            duration: 0.9,

            ease: "power3.out"

        }, "-=0.2")

        .to(".mission-column-one .column-content p", {

            y: 0,
            opacity: 1,

            duration: 0.7

        }, "-=0.35")

        .to(".mission-column-one .column-line", {

            scaleX: 1,

            duration: 0.7,

            ease: "power2.out"

        }, "-=0.25");

});



/* =====================================================
   VISION TEXT REVEAL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const visionReveal = gsap.timeline({

        scrollTrigger: {
            trigger: ".mission-column-two",
            start: "top 70%"
        }

    });


    visionReveal

        .to(".mission-column-two .column-content small", {

            y: 0,
            opacity: 1,

            duration: 0.5

        })

        .to(".mission-column-two .column-content h3", {

            y: 0,
            opacity: 1,

            duration: 0.9,

            ease: "power3.out"

        }, "-=0.2")

        .to(".mission-column-two .column-content p", {

            y: 0,
            opacity: 1,

            duration: 0.7

        }, "-=0.35")

        .to(".mission-column-two .column-line", {

            scaleX: 1,

            duration: 0.7,

            ease: "power2.out"

        }, "-=0.25");

});



/* =====================================================
   CENTER SPACE REVEAL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    gsap.from(".mission-center", {

        scrollTrigger: {
            trigger: ".mission-center",
            start: "top 78%"
        },

        scale: 0.65,
        opacity: 0,

        duration: 1.2,

        ease: "power3.out"

    });

});



/* =====================================================
   ORBIT RINGS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    gsap.to(".circle-one", {

        rotation: 360,

        duration: 12,

        repeat: -1,

        ease: "none"

    });


    gsap.to(".circle-two", {

        rotation: -360,

        duration: 18,

        repeat: -1,

        ease: "none"

    });


    gsap.to(".circle-three", {

        rotation: 360,

        duration: 25,

        repeat: -1,

        ease: "none"

    });

});



/* =====================================================
   SATELLITE CONTINUOUS MOTION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    gsap.to(".satellite", {

        rotation: -360,

        duration: 9,

        repeat: -1,

        ease: "none"

    });

});



/* =====================================================
   NODES
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    gsap.to(".node-top", {

        y: -15,

        duration: 2,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    gsap.to(".node-right", {

        x: 15,

        duration: 2.5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    gsap.to(".node-bottom", {

        y: 15,

        duration: 2.2,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    gsap.to(".node-left", {

        x: -15,

        duration: 2.7,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

});



/* =====================================================
   REDUCED MOTION
===================================================== */

if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

    gsap.globalTimeline.pause();

}