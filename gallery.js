/* =====================================================
   REGISTER
===================================================== */

gsap.registerPlugin(ScrollTrigger);



/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener("load", function () {


    /* =================================================
       NAVBAR
    ================================================= */

    gsap.from(".navbar", {

        y: -40,

        opacity: 0,

        duration: 1,

        ease: "power3.out"

    });



    /* =================================================
       SOLAR HEADING
    ================================================= */

    gsap.from(".solar-heading span", {

        y: 25,

        opacity: 0,

        duration: .8,

        ease: "power3.out"

    });


    gsap.from(".solar-heading h1", {

        y: 80,

        opacity: 0,

        duration: 1.2,

        delay: .1,

        ease: "power4.out"

    });


    gsap.from(".solar-heading p", {

        y: 25,

        opacity: 0,

        duration: .8,

        delay: .3,

        ease: "power3.out"

    });



    /* =================================================
       SOLAR STAGE ENTRANCE
    ================================================= */

    gsap.from(".solar-stage", {

        scale: .72,

        opacity: 0,

        duration: 1.5,

        delay: .35,

        ease: "power4.out"

    });



    /* =================================================
       ORBIT REVEAL
    ================================================= */

    gsap.from(".orbit", {

        scale: .65,

        opacity: 0,

        duration: 1.4,

        stagger: .08,

        delay: .5,

        ease: "power3.out"

    });



    /* =================================================
       SUN
    ================================================= */

    gsap.from(".sun-core", {

        scale: .35,

        opacity: 0,

        duration: 1.4,

        delay: .45,

        ease: "back.out(1.5)"

    });



    /* =================================================
       PLANETS
    ================================================= */

    gsap.from(".planet", {

        scale: 0,

        opacity: 0,

        duration: .8,

        stagger: .1,

        delay: 1,

        ease: "back.out(1.8)"

    });



    /* =================================================
       CONTINUOUS ORBITS
    ================================================= */

    gsap.to(".orbit-1", {

        rotation: 360,

        duration: 8,

        repeat: -1,

        ease: "none"

    });


    gsap.to(".orbit-2", {

        rotation: -360,

        duration: 12,

        repeat: -1,

        ease: "none"

    });


    gsap.to(".orbit-3", {

        rotation: 360,

        duration: 17,

        repeat: -1,

        ease: "none"

    });


    gsap.to(".orbit-4", {

        rotation: -360,

        duration: 22,

        repeat: -1,

        ease: "none"

    });


    gsap.to(".orbit-5", {

        rotation: 360,

        duration: 29,

        repeat: -1,

        ease: "none"

    });


    gsap.to(".orbit-6", {

        rotation: -360,

        duration: 36,

        repeat: -1,

        ease: "none"

    });


    gsap.to(".orbit-7", {

        rotation: 360,

        duration: 44,

        repeat: -1,

        ease: "none"

    });


    gsap.to(".orbit-8", {

        rotation: -360,

        duration: 52,

        repeat: -1,

        ease: "none"

    });



    /* =================================================
       SUN GLOW
    ================================================= */

    gsap.to(".sun-halo", {

        scale: 1.15,

        opacity: .65,

        duration: 2.5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    gsap.to(".system-glow", {

        scale: 1.08,

        opacity: .7,

        duration: 4,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });



    /* =================================================
       SOLAR MOUSE PARALLAX
    ================================================= */

    const solarSection =
        document.querySelector(".solar-section");


    const solarStage =
        document.querySelector(".solar-stage");


    if (solarSection && solarStage) {

        solarSection.addEventListener(
            "mousemove",
            function (e) {

                if (window.innerWidth < 900) {
                    return;
                }


                const rect =
                    solarSection.getBoundingClientRect();


                const x =
                    (e.clientX - rect.left)
                    / rect.width - .5;


                const y =
                    (e.clientY - rect.top)
                    / rect.height - .5;


                gsap.to(solarStage, {

                    x: x * 14,

                    y: y * 9,

                    duration: 1.2,

                    ease: "power2.out",

                    overwrite: true

                });

            }
        );


        solarSection.addEventListener(
            "mouseleave",
            function () {

                gsap.to(solarStage, {

                    x: 0,

                    y: 0,

                    duration: 1,

                    ease: "power3.out"

                });

            }
        );

    }



    /* =================================================
       SOLAR INFO REVEAL
    ================================================= */

    gsap.from(".solar-info", {

        scrollTrigger: {

            trigger: ".solar-info",

            start: "top 90%",

            toggleActions:
                "play none none reverse"

        },

        y: 25,

        opacity: 0,

        duration: .8,

        ease: "power3.out"

    });



    /* =================================================
       GALLERY HEADING
    ================================================= */

    gsap.from(".gallery-heading span", {

        scrollTrigger: {

            trigger: ".gallery-section",

            start: "top 75%"

        },

        y: 25,

        opacity: 0,

        duration: .7,

        ease: "power3.out"

    });


    gsap.from(".gallery-heading h2", {

        scrollTrigger: {

            trigger: ".gallery-section",

            start: "top 75%"

        },

        y: 70,

        opacity: 0,

        duration: 1.1,

        ease: "power4.out"

    });


    gsap.from(".gallery-heading p", {

        scrollTrigger: {

            trigger: ".gallery-section",

            start: "top 75%"

        },

        y: 30,

        opacity: 0,

        duration: .8,

        delay: .2,

        ease: "power3.out"

    });



    /* =================================================
       GALLERY CARDS REVEAL
    ================================================= */

    gsap.from(".gallery-item", {

        scrollTrigger: {

            trigger: ".gallery-grid",

            start: "top 82%",

            toggleActions:
                "play none none reverse"

        },

        y: 80,

        opacity: 0,

        scale: .94,

        duration: 1,

        stagger: .12,

        ease: "power4.out"

    });



    /* =================================================
       IMAGE REVEAL
    ================================================= */

    gsap.from(".gallery-item img", {

        scrollTrigger: {

            trigger: ".gallery-grid",

            start: "top 82%"

        },

        scale: 1.18,

        duration: 1.5,

        stagger: .12,

        ease: "power3.out"

    });



    /* =================================================
       GALLERY HOVER
    ================================================= */

    const galleryItems =
        document.querySelectorAll(".gallery-item");


    galleryItems.forEach(function (item) {

        const image =
            item.querySelector("img");


        item.addEventListener(
            "mouseenter",
            function () {

                gsap.to(image, {

                    scale: 1.08,

                    duration: .8,

                    ease: "power3.out"

                });

            }
        );


        item.addEventListener(
            "mouseleave",
            function () {

                gsap.to(image, {

                    scale: 1,

                    duration: .8,

                    ease: "power3.out"

                });

            }
        );

    });



    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuBtn =
        document.querySelector(".menu-btn");


    const navLinks =
        document.querySelector(".nav-links");


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

                    icon.classList.remove("fa-bars");

                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            }
        );

    }



    /* =================================================
       RESIZE
    ================================================= */

    window.addEventListener(
        "resize",
        function () {

            ScrollTrigger.refresh();

        }
    );

});