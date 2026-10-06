/* =====================================================
   GSAP
===================================================== */

gsap.registerPlugin(ScrollTrigger);



/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener("load", function () {

    ScrollTrigger.refresh();

});



/* =====================================================
   NAVBAR
===================================================== */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        const icon =
            menuBtn.querySelector("i");

        if (icon) {

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

    });

}



/* =====================================================
   HERO REVEAL
===================================================== */

const heroTimeline =
    gsap.timeline();


heroTimeline.from(".hero-top", {

    y: -30,
    opacity: 0,
    duration: .8,
    ease: "power3.out"

});


heroTimeline.from(".hero-copy .section-label", {

    y: 25,
    opacity: 0,
    duration: .6,
    ease: "power3.out"

}, "-=.35");


heroTimeline.from(".hero-copy h1", {

    y: 70,
    opacity: 0,
    duration: 1.1,
    ease: "power4.out"

}, "-=.2");


heroTimeline.from(".hero-copy p", {

    y: 35,
    opacity: 0,
    duration: .75,
    ease: "power3.out"

}, "-=.55");


heroTimeline.from(".hero-button", {

    y: 25,
    opacity: 0,
    duration: .65,
    ease: "power3.out"

}, "-=.45");


heroTimeline.from(".lab-visual", {

    x: 100,
    opacity: 0,
    scale: .85,
    duration: 1.2,
    ease: "power3.out"

}, "-=.9");


heroTimeline.from(".hero-bottom", {

    y: 20,
    opacity: 0,
    duration: .6,
    ease: "power3.out"

}, "-=.6");



/* =====================================================
   LAB FRAME ANIMATION
===================================================== */

gsap.to(".orbit-one", {

    rotation: 360,

    duration: 25,

    repeat: -1,

    ease: "none"

});


gsap.to(".orbit-two", {

    rotation: -360,

    duration: 34,

    repeat: -1,

    ease: "none"

});


gsap.to(".ring-three", {

    rotation: 360,

    duration: 15,

    repeat: -1,

    ease: "none"

});


gsap.to(".lab-image-frame", {

    y: -10,

    duration: 3.2,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});



/* =====================================================
   HERO WHITE LINES
===================================================== */

gsap.to(".line-one", {

    x: "145vw",

    duration: 7,

    repeat: -1,

    ease: "none"

});


gsap.to(".line-two", {

    x: "135vw",

    duration: 9,

    repeat: -1,

    delay: 1.5,

    ease: "none"

});


gsap.to(".line-three", {

    x: "130vw",

    duration: 11,

    repeat: -1,

    delay: 3,

    ease: "none"

});



/* =====================================================
   RESEARCH FOCUS REVEAL
===================================================== */

gsap.from(".focus-heading > *", {

    scrollTrigger: {

        trigger: ".research-focus",

        start: "top 80%",

        end: "top 30%",

        toggleActions:
            "play none none reverse"

    },

    y: 65,

    // opacity: 0,

    duration: 1,

    stagger: .18,

    ease: "power4.out"

});


gsap.from(".focus-item", {

    scrollTrigger: {

        trigger: ".focus-list",

        start: "top 82%",

        end: "bottom 40%",

        toggleActions:
            "play none none reverse"

    },

    y: 55,

    // opacity: 0,

    duration: .9,

    stagger: .16,

    ease: "power3.out"

});



/* =====================================================
   FOCUS IMAGE REVEAL
===================================================== */

gsap.from(".focus-image img", {

    scrollTrigger: {

        trigger: ".focus-list",

        start: "top 82%",

        end: "bottom 35%",

        toggleActions:
            "play none none reverse"

    },

    scale: 1.25,

    opacity: 0,

    duration: 1.2,

    stagger: .18,

    ease: "power3.out"

});



/* =====================================================
   DISCOVERY HEADING
===================================================== */

gsap.from(".discovery-heading > *", {

    scrollTrigger: {

        trigger: ".discovery-section",

        start: "top 78%",

        toggleActions:
            "play none none reverse"

    },

    y: 55,

    opacity: 0,

    duration: .9,

    stagger: .15,

    ease: "power3.out"

});



/* =====================================================
   PROCESS STEPS
===================================================== */

gsap.from(".process-step", {

    scrollTrigger: {

        trigger: ".process",

        start: "top 78%",

        toggleActions:
            "play none none reverse"

    },

    y: 50,

    opacity: 0,

    duration: .8,

    stagger: .18,

    ease: "power3.out"

});


gsap.to(".line-progress", {

    scrollTrigger: {

        trigger: ".process",

        start: "top 72%",

        end: "bottom 55%",

        scrub: 1

    },

    width: "100%",

    ease: "none"

});



/* =====================================================
   EXPLORER REVEAL
===================================================== */

gsap.from(".explorer-heading > *", {

    scrollTrigger: {

        trigger: ".explorer-section",

        start: "top 78%",

        toggleActions:
            "play none none reverse"

    },

    y: 55,

    opacity: 0,

    duration: .9,

    stagger: .15,

    ease: "power3.out"

});


gsap.from(".explorer-menu", {

    scrollTrigger: {

        trigger: ".explorer-layout",

        start: "top 80%",

        toggleActions:
            "play none none reverse"

    },

    x: -70,

    opacity: 0,

    duration: 1,

    ease: "power3.out"

});


gsap.from(".explorer-display", {

    scrollTrigger: {

        trigger: ".explorer-layout",

        start: "top 80%",

        toggleActions:
            "play none none reverse"

    },

    x: 80,

    opacity: 0,

    duration: 1.1,

    ease: "power3.out"

});



/* =====================================================
   EXPLORER DATA
===================================================== */

const explorerData = {

    space: {

        title: "Space Science",

        text:
        "Space science research explores the physical environment beyond Earth and develops a deeper understanding of the space around our planet.",

        field: "SPACE",

        focus: "EXPLORATION",

        approach: "OBSERVATION",

        image: "images/research.png"

    },


    remote: {

        title: "Remote Sensing",

        text:
        "Remote sensing uses satellite observations and imagery to study Earth's surface, resources, agriculture and environmental change.",

        field: "EARTH",

        focus: "OBSERVATION",

        approach: "SATELLITE DATA",

        image: "images/remote sensing.png"

    },


    atmosphere: {

        title: "Atmospheric Studies",

        text:
        "Atmospheric research examines conditions and processes within Earth's atmosphere to improve scientific understanding of our environment.",

        field: "ATMOSPHERE",

        focus: "ENVIRONMENT",

        approach: "MEASUREMENT",

        image: "images/atmospheric.png"

    },


    technology: {

        title: "Space Technology",

        text:
        "Space technology research focuses on developing scientific and engineering knowledge that can support future space-based systems.",

        field: "TECHNOLOGY",

        focus: "INNOVATION",

        approach: "ENGINEERING",

        image: "images/spacetechnology.png"

    }

};



const explorerTabs =
    document.querySelectorAll(".explorer-tab");

const explorerTitle =
    document.querySelector("#explorer-title");

const explorerText =
    document.querySelector("#explorer-text");

const metricField =
    document.querySelector("#metric-field");

const metricFocus =
    document.querySelector("#metric-focus");

const metricApproach =
    document.querySelector("#metric-approach");

const explorerImage =
    document.querySelector("#explorer-image");

const displayIndex =
    document.querySelector(".display-index");



explorerTabs.forEach(function (tab, index) {

    tab.addEventListener("click", function () {

        explorerTabs.forEach(function (item) {

            item.classList.remove("active");

        });


        tab.classList.add("active");


        const target =
            tab.getAttribute("data-target");


        const data =
            explorerData[target];


        if (!data) {
            return;
        }


        gsap.to(
            ".explorer-data, .explorer-image",
            {

                opacity: 0,

                y: 15,

                duration: .25,

                onComplete: function () {

                    explorerTitle.textContent =
                        data.title;

                    explorerText.textContent =
                        data.text;

                    metricField.textContent =
                        data.field;

                    metricFocus.textContent =
                        data.focus;

                    metricApproach.textContent =
                        data.approach;

                    displayIndex.textContent =
                        "RESEARCH / 0" + (index + 1);

                    explorerImage.src =
                        data.image;


                    gsap.to(
                        ".explorer-data, .explorer-image",
                        {

                            opacity: 1,

                            y: 0,

                            duration: .5,

                            ease: "power3.out"

                        }
                    );

                }

            }
        );

    });

});



/* =====================================================
   EXPLORER IMAGE FLOAT
===================================================== */

gsap.to(".explorer-image img", {

    scale: 1.05,

    duration: 5,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});



/* =====================================================
   PAKISTAN RESEARCH
===================================================== */

gsap.from(".pakistan-copy > *", {

    scrollTrigger: {

        trigger: ".pakistan-research",

        start: "top 78%",

        toggleActions:
            "play none none reverse"

    },

    y: 50,

    opacity: 0,

    duration: .85,

    stagger: .15,

    ease: "power3.out"

});


gsap.from(".flow-item", {

    scrollTrigger: {

        trigger: ".application-flow",

        start: "top 82%",

        toggleActions:
            "play none none reverse"

    },

    y: 30,

    opacity: 0,

    duration: .7,

    stagger: .12,

    ease: "power3.out"

});


gsap.from(".application-list div", {

    scrollTrigger: {

        trigger: ".application-list",

        start: "top 85%",

        toggleActions:
            "play none none reverse"

    },

    y: 25,

    opacity: 0,

    duration: .7,

    stagger: .12,

    ease: "power3.out"

});



/* =====================================================
   FINAL
===================================================== */

gsap.from(".final-content > *", {

    scrollTrigger: {

        trigger: ".research-final",

        start: "top 78%",

        toggleActions:
            "play none none reverse"

    },

    y: 55,

    opacity: 0,

    duration: .9,

    stagger: .15,

    ease: "power3.out"

});


gsap.to(".final-line-one", {

    x: "160vw",

    duration: 8,

    repeat: -1,

    ease: "none"

});


gsap.to(".final-line-two", {

    x: "-160vw",

    duration: 10,

    repeat: -1,

    ease: "none"

});



/* =====================================================
   RESIZE
===================================================== */

window.addEventListener("resize", function () {

    ScrollTrigger.refresh();

});

















/* =====================================================
   SCIENCE THAT SERVES — REVEAL
===================================================== */

gsap.from(".pakistan-copy > *", {

    scrollTrigger: {

        trigger: ".pakistan-research",

        start: "top 75%",

        toggleActions:
            "play none none reverse"

    },

    y: 70,

    // opacity: 0,

    duration: 1,

    stagger: .16,

    ease: "power4.out"

});



/* =====================================================
   FLOW CARDS REVEAL
===================================================== */

gsap.from(".flow-item", {

    scrollTrigger: {

        trigger: ".application-flow",

        start: "top 82%",

        toggleActions:
            "play none none reverse"

    },

    y: 80,

    // opacity: 0,

    scale: .92,

    duration: 1,

    stagger: .15,

    ease: "power4.out"

});



/* =====================================================
   ARROWS REVEAL
===================================================== */

gsap.from(".flow-arrow", {

    scrollTrigger: {

        trigger: ".application-flow",

        start: "top 80%",

        toggleActions:
            "play none none reverse"

    },

    scale: 0,

    rotation: -90,

    // opacity: 0,

    duration: .7,

    stagger: .12,

    ease: "back.out(1.7)"

});



/* =====================================================
   APPLICATION BOXES REVEAL
===================================================== */

gsap.from(".application-list div", {

    scrollTrigger: {

        trigger: ".application-list",

        start: "top 85%",

        toggleActions:
            "play none none reverse"

    },

    y: 65,

    // opacity: 0,

    scale: .94,

    duration: .9,

    stagger: .14,

    ease: "power3.out"

});



/* =====================================================
   ICON MICRO ANIMATION
===================================================== */

gsap.to(".application-list i", {

    y: -4,

    duration: 1.5,

    repeat: -1,

    yoyo: true,

    stagger: .2,

    ease: "sine.inOut"

});



/* =====================================================
   FLOW CARD SOFT FLOAT
===================================================== */

document.querySelectorAll(".flow-item").forEach(function(card, index) {

    gsap.to(card, {

        y: -4,

        duration: 2.5 + (index * .2),

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: index * .15

    });

});



/* =====================================================
   REFRESH
===================================================== */

window.addEventListener("load", function() {

    ScrollTrigger.refresh();

});


window.addEventListener("resize", function() {

    ScrollTrigger.refresh();

});
