/* =====================================================
   SCROLLTRIGGER
===================================================== */

gsap.registerPlugin(ScrollTrigger);



/* =====================================================
   NAVBAR
===================================================== */

window.addEventListener("load", function () {

    const navbar =
        document.querySelector(".navbar");

    const heroKicker =
        document.querySelector(".hero-kicker");

    const heroTitle =
        document.querySelector(".hero-content h1");

    const heroText =
        document.querySelector(".hero-content p");

    const heroInfo =
        document.querySelector(".hero-info");

    const heroScroll =
        document.querySelector(".hero-scroll");

    const video =
        document.querySelector(".mission-video");

    const menuBtn =
        document.querySelector(".menu-btn");

    const navLinks =
        document.querySelector(".nav-links");


    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(navbar, {

        y: -35,

        opacity: 0

    });


    gsap.set(heroKicker, {

        y: 30,

        opacity: 0

    });


    gsap.set(heroTitle, {

        y: 65,

        opacity: 0

    });


    gsap.set(heroText, {

        y: 30,

        opacity: 0

    });


    gsap.set(heroInfo, {

        y: 25,

        opacity: 0

    });


    gsap.set(heroScroll, {

        y: 20,

        opacity: 0

    });


    /* =================================================
       HERO TIMELINE
    ================================================= */

    const heroTimeline =
        gsap.timeline();


    heroTimeline.to(navbar, {

        y: 0,

        opacity: 1,

        duration: .8,

        ease: "power3.out"

    });


    heroTimeline.to(heroKicker, {

        y: 0,

        opacity: 1,

        duration: .7,

        ease: "power3.out"

    }, "-=.45");


    heroTimeline.to(heroTitle, {

        y: 0,

        opacity: 1,

        duration: 1.1,

        ease: "power4.out"

    }, "-=.4");


    heroTimeline.to(heroText, {

        y: 0,

        opacity: 1,

        duration: .7,

        ease: "power3.out"

    }, "-=.6");


    heroTimeline.to(heroInfo, {

        y: 0,

        opacity: 1,

        duration: .6,

        ease: "power3.out"

    }, "-=.4");


    heroTimeline.to(heroScroll, {

        y: 0,

        opacity: 1,

        duration: .6,

        ease: "power3.out"

    }, "-=.35");


    /* =================================================
       VIDEO PARALLAX
    ================================================= */

    if (window.innerWidth > 900) {

        document.addEventListener(
            "mousemove",
            function (e) {

                const x =
                    (e.clientX /
                    window.innerWidth - .5) * 2;

                const y =
                    (e.clientY /
                    window.innerHeight - .5) * 2;


                gsap.to(video, {

                    x: x * -7,

                    y: y * -4,

                    duration: 1.2,

                    ease: "power2.out",

                    overwrite: true

                });

            }
        );

    }


    /* =================================================
       MOBILE MENU
    ================================================= */

    if (menuBtn && navLinks) {

        menuBtn.addEventListener(
            "click",
            function () {

                navLinks.classList.toggle("show");

                const icon =
                    menuBtn.querySelector("i");


                if (
                    navLinks.classList.contains("show")
                ) {

                    icon.classList.remove(
                        "fa-bars"
                    );

                    icon.classList.add(
                        "fa-xmark"
                    );

                } else {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }
        );

    }

});



/* =====================================================
   ARCHIVE HEADING
===================================================== */

gsap.from(".archive-heading > *", {

    scrollTrigger: {

        trigger: ".archive-heading",

        start: "top 80%",

        once: true

    },

    y: 45,

    opacity: 0,

    duration: .9,

    stagger: .14,

    ease: "power3.out"

});



/* =====================================================
   MISSION RECORDS
===================================================== */

const missionRecords =
    document.querySelectorAll(".mission-record");


missionRecords.forEach(function (record, index) {


    /* =================================================
       CARD REVEAL
    ================================================= */

    gsap.from(record, {

        scrollTrigger: {

            trigger: record,

            start: "top 85%",

            once: true

        },

        y: 80,

        opacity: 0,

        duration: 1,

        delay: index * .04,

        ease: "power3.out"

    });


    /* =================================================
       IMAGE PARALLAX
    ================================================= */

    const image =
        record.querySelector(".record-image img");


    if (image) {

        gsap.to(image, {

            yPercent: -5,

            ease: "none",

            scrollTrigger: {

                trigger: record,

                start: "top bottom",

                end: "bottom top",

                scrub: 1.5

            }

        });

    }


    /* =================================================
       DESKTOP TILT
    ================================================= */

    if (window.innerWidth > 1000) {

        record.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    record.getBoundingClientRect();


                const x =
                    e.clientX - rect.left;


                const y =
                    e.clientY - rect.top;


                const rotateX =
                    ((y / rect.height) - .5) * -1.5;


                const rotateY =
                    ((x / rect.width) - .5) * 1.5;


                gsap.to(record, {

                    rotationX: rotateX,

                    rotationY: rotateY,

                    transformPerspective: 1200,

                    duration: .4,

                    ease: "power2.out",

                    overwrite: true

                });

            }
        );


        record.addEventListener(
            "mouseleave",
            function () {

                gsap.to(record, {

                    rotationX: 0,

                    rotationY: 0,

                    duration: .7,

                    ease: "power3.out"

                });

            }
        );

    }

});



/* =====================================================
   CONNECT HEADING
===================================================== */

gsap.from(".connect-heading > *", {

    scrollTrigger: {

        trigger: ".connect-heading",

        start: "top 80%",

        once: true

    },

    y: 45,

    opacity: 0,

    duration: 1,

    stagger: .13,

    ease: "power3.out"

});



/* =====================================================
   CONNECT CENTER
===================================================== */

gsap.from(".system-center", {

    scrollTrigger: {

        trigger: ".connect-system",

        start: "top 80%",

        once: true

    },

    scale: .4,

    opacity: 0,

    duration: 1.2,

    ease: "back.out(1.5)"

});



/* =====================================================
   CONNECT NODES
===================================================== */

gsap.from(".system-node", {

    scrollTrigger: {

        trigger: ".connect-system",

        start: "top 78%",

        once: true

    },

    scale: .8,

    opacity: 0,

    duration: .8,

    stagger: .15,

    ease: "power3.out"

});



/* =====================================================
   ORBIT ROTATION
===================================================== */

gsap.to(".orbit-one", {

    rotation: 360,

    duration: 30,

    repeat: -1,

    ease: "none"

});


gsap.to(".orbit-two", {

    rotation: -360,

    duration: 45,

    repeat: -1,

    ease: "none"

});



/* =====================================================
   MOVING SATELLITE
===================================================== */

const orbitSatellite =
    document.querySelector(".orbit-satellite");


if (orbitSatellite) {


    const satelliteObject = {

        angle: 0

    };


    gsap.to(
        satelliteObject,
        {

            angle: Math.PI * 2,

            duration: 14,

            repeat: -1,

            ease: "none",

            onUpdate: function () {

                const radius = 200;


                const x =
                    Math.cos(
                        satelliteObject.angle
                    ) * radius;


                const y =
                    Math.sin(
                        satelliteObject.angle
                    ) * radius;


                gsap.set(
                    orbitSatellite,
                    {

                        x: x,

                        y: y,

                        rotation:
                            satelliteObject.angle
                            * 180 / Math.PI
                            + 90

                    }
                );

            }

        }
    );

}



/* =====================================================
   CENTER PULSE
===================================================== */

gsap.to(".system-center", {

    scale: 1.035,

    duration: 2,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});



/* =====================================================
   CTA REVEAL
===================================================== */

gsap.from(".cta-inner > *", {

    scrollTrigger: {

        trigger: ".mission-cta",

        start: "top 82%",

        once: true

    },

    y: 35,

    opacity: 0,

    duration: .8,

    stagger: .12,

    ease: "power3.out"

});



/* =====================================================
   RESIZE
===================================================== */

window.addEventListener(
    "resize",
    function () {

        ScrollTrigger.refresh();

    }
);