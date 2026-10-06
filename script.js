/* =====================================================
   SUPARCO WEBSITE — COMPLETE JAVASCRIPT
===================================================== */

window.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const loader = document.querySelector(".loader");
    const loaderContent = document.querySelector(".loader-content");
    const orbit = document.querySelector(".orbit");
    const rocket = document.querySelector(".rocket");
    const dots = document.querySelectorAll(".loading-dots span");

    const navbar = document.querySelector(".navbar");

    const heroEyebrow = document.querySelector(".hero-eyebrow");
    const titleLineOne = document.querySelector(".title-line-one");
    const titleLineTwo = document.querySelector(".title-line-two");
    const heroDescription = document.querySelector(".hero-description");
    const exploreButton = document.querySelector(".explore-btn");
    const missionPanel = document.querySelector(".hero-mission-panel");
    const heroFooter = document.querySelector(".hero-footer");
    const heroVideo = document.querySelector(".hero video");
    const progress = document.querySelector(".hero-progress span");


    /* =====================================================
       LOADER
    ===================================================== */

    // if (orbit) {

    //     gsap.to(orbit, {
    //         rotation: 360,
    //         duration: 2.8,
    //         repeat: -1,
    //         ease: "none"
    //     });

    // }


    // if (rocket) {

    //     gsap.to(rocket, {
    //         scale: 1.08,
    //         duration: 0.7,
    //         repeat: -1,
    //         yoyo: true,
    //         ease: "power1.inOut"
    //     });

    // }


    // if (dots.length > 0) {

    //     gsap.to(dots, {
    //         opacity: 1,
    //         duration: 0.5,
    //         stagger: 0.2,
    //         repeat: -1,
    //         yoyo: true,
    //         ease: "power1.inOut"
    //     });

    // }

/* =====================================================
   ROCKET DESCENT
===================================================== */

if (rocket) {

    gsap.set(rocket, {

        top: "-180px",

        left: "50%",

        xPercent: -50,

        rotation: 135,

        scale: 1,

        opacity: 1

    });


    gsap.to(rocket, {

        top: "61%",

        duration: 2,

        ease: "power3.in",

        onComplete: function () {

            if (loader) {

                loader.classList.add("impact");

                loader.classList.add("earth-shake");

            }


            gsap.timeline()

                .to(rocket, {

                    scale: .85,

                    duration: .12,

                    ease: "power2.out"

                })

                .to(rocket, {

                    scale: 1,

                    duration: .2,

                    ease: "power2.out"

                });

        }

    });

}



    /* =====================================================
       INITIAL HERO STATE
    ===================================================== */

    if (navbar) {
        gsap.set(navbar, {
            y: -30,
            opacity: 0
        });
    }


    if (heroEyebrow) {
        gsap.set(heroEyebrow, {
            y: 25,
            opacity: 0
        });
    }


    if (titleLineOne) {
        gsap.set(titleLineOne, {
            yPercent: 110
        });
    }


    if (titleLineTwo) {
        gsap.set(titleLineTwo, {
            yPercent: 110
        });
    }


    if (heroDescription) {
        gsap.set(heroDescription, {
            y: 25,
            opacity: 0
        });
    }


    if (exploreButton) {
        gsap.set(exploreButton, {
            y: 25,
            opacity: 0
        });
    }


    if (missionPanel) {
        gsap.set(missionPanel, {
            x: 60,
            opacity: 0
        });
    }


    if (heroFooter) {
        gsap.set(heroFooter, {
            y: 20,
            opacity: 0
        });
    }


    if (heroVideo) {
        gsap.set(heroVideo, {
            scale: 1.08
        });
    }


    if (progress) {
        gsap.set(progress, {
            width: "0%"
        });
    }


    /* =====================================================
       HERO ANIMATION
    ===================================================== */

    function startHeroAnimation() {

        const heroTimeline = gsap.timeline();


        if (navbar) {

            heroTimeline.to(navbar, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out"
            });

        }


        if (heroEyebrow) {

            heroTimeline.to(heroEyebrow, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out"
            }, "-=0.35");

        }


        if (titleLineOne) {

            heroTimeline.to(titleLineOne, {
                yPercent: 0,
                duration: 0.8,
                ease: "power4.out"
            }, "-=0.2");

        }


        if (titleLineTwo) {

            heroTimeline.to(titleLineTwo, {
                yPercent: 0,
                duration: 0.8,
                ease: "power4.out"
            }, "-=0.55");

        }


        if (heroDescription) {

            heroTimeline.to(heroDescription, {
                y: 0,
                opacity: 1,
                duration: 0.55,
                ease: "power3.out"
            }, "-=0.35");

        }


        if (exploreButton) {

            heroTimeline.to(exploreButton, {
                y: 0,
                opacity: 1,
                duration: 0.55,
                ease: "power3.out"
            }, "-=0.35");

        }


        if (missionPanel) {

            heroTimeline.to(missionPanel, {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out"
            }, "-=0.4");

        }


        if (heroFooter) {

            heroTimeline.to(heroFooter, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out"
            }, "-=0.4");

        }


        if (heroVideo) {

            heroTimeline.to(heroVideo, {
                scale: 1,
                duration: 1.5,
                ease: "power2.out"
            }, 0);

        }


        if (progress) {

            heroTimeline.to(progress, {
                width: "100%",
                duration: 1.5,
                ease: "power2.out"
            }, 0);

        }

    }


    /* =====================================================
       LOADER EXIT
    ===================================================== */

    if (loader && loaderContent) {

        setTimeout(function () {

            const loaderTimeline = gsap.timeline({

                onComplete: function () {

                    loader.style.display = "none";

                }

            });


            loaderTimeline
                .to(loaderContent, {
                    scale: 1.08,
                    opacity: 0,
                    duration: 0.45,
                    ease: "power3.inOut"
                })
                .to(loader, {
                    opacity: 0,
                    duration: 0.45,
                    ease: "power2.inOut",

                    onStart: function () {

                        /*
                           Hero loader ke fade ke saath hi
                           start ho jayega.
                        */

                        startHeroAnimation();

                    }

                }, "-=0.2");


        }, 1800);

    } else {

        startHeroAnimation();

    }



    /* =====================================================
       ABOUT SECTION
    ===================================================== */

    const aboutSection = document.querySelector(".about-section");
    const aboutImage = document.querySelector(".about-image");
    const aboutContent = document.querySelector(".about-content");
    const aboutItems = document.querySelectorAll(".about-content > *");


    if (aboutSection) {

        gsap.from(aboutItems, {

            y: 60,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,

            scrollTrigger: {
                trigger: aboutSection,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }

        });

    }


    if (aboutImage) {

        gsap.from(aboutImage, {

            x: -80,
            opacity: 0,
            scale: 0.92,
            duration: 1.1,
            ease: "power3.out",

            scrollTrigger: {
                trigger: aboutImage,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }

        });

    }


    if (aboutContent) {

        gsap.from(aboutContent, {

            x: 70,
            opacity: 0,
            duration: 1,
            ease: "power3.out",

            scrollTrigger: {
                trigger: aboutContent,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }

        });

    }



   /* =====================================================
   MISSION STACK
===================================================== */

const missionCards =
    document.querySelectorAll(".mission-card");

let activeMission = 0;


/* =====================================================
   UPDATE MISSION STACK
===================================================== */

function updateMissionStack(newIndex) {

    if (missionCards.length === 0) {
        return;
    }


    /* ---------------------------------------------
       INDEX FIX
    --------------------------------------------- */

    if (newIndex < 0) {
        newIndex = missionCards.length - 1;
    }

    if (newIndex >= missionCards.length) {
        newIndex = 0;
    }


    activeMission = newIndex;


    /* ---------------------------------------------
       STOP ALL OLD CARD ANIMATIONS
    --------------------------------------------- */

    missionCards.forEach(function (card) {

        gsap.killTweensOf(card);

    });


    /* ---------------------------------------------
       IMPORTANT:
       SELECTED CARD KO PEHLE HI FRONT PAR LAO
       IS SE OLD CARD FLASH NAHI HOGA
    --------------------------------------------- */

    const selectedCard =
        missionCards[activeMission];


    gsap.set(selectedCard, {

        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        zIndex: 100,
        pointerEvents: "auto"

    });


    /* ---------------------------------------------
       OTHER CARDS
    --------------------------------------------- */

    missionCards.forEach(function (card, index) {

        if (index === activeMission) {
            return;
        }


        let distance =
            (index - activeMission + missionCards.length)
            % missionCards.length;


        /* =========================================
           SECOND CARD
        ========================================= */

        if (distance === 1) {

            gsap.to(card, {

                x: 38,
                y: 25,
                scale: 0.95,
                opacity: 1,

                zIndex: 20,

                duration: 0.6,

                ease: "power3.out",

                pointerEvents: "auto"

            });

        }


        /* =========================================
           THIRD CARD
        ========================================= */

        else if (distance === 2) {

            gsap.to(card, {

                x: 76,
                y: 50,
                scale: 0.90,
                opacity: 0.95,

                zIndex: 19,

                duration: 0.6,

                ease: "power3.out",

                pointerEvents: "auto"

            });

        }


        /* =========================================
           FOURTH CARD
        ========================================= */

        else if (distance === 3) {

            gsap.to(card, {

                x: 114,
                y: 75,
                scale: 0.85,
                opacity: 0.85,

                zIndex: 18,

                duration: 0.6,

                ease: "power3.out",

                pointerEvents: "auto"

            });

        }


        /* =========================================
           FIFTH CARD
        ========================================= */

        else if (distance === 4) {

            gsap.to(card, {

                x: 152,
                y: 100,
                scale: 0.80,
                opacity: 0.7,

                zIndex: 17,

                duration: 0.6,

                ease: "power3.out",

                pointerEvents: "auto"

            });

        }


        /* =========================================
           SIXTH CARD
        ========================================= */

        else if (distance === 5) {

            gsap.to(card, {

                x: 190,
                y: 125,
                scale: 0.75,
                opacity: 0.5,

                zIndex: 16,

                duration: 0.6,

                ease: "power3.out",

                pointerEvents: "none"

            });

        }


        /* =========================================
           HIDDEN CARD
        ========================================= */

        else {

            gsap.to(card, {

                x: 190,
                y: 125,
                scale: 0.75,
                opacity: 0,

                zIndex: 1,

                duration: 0.6,

                ease: "power3.out",

                pointerEvents: "none"

            });

        }

    });

}


/* =====================================================
   CARD CLICK
===================================================== */

missionCards.forEach(function (card, index) {

    card.addEventListener("click", function (event) {

        event.stopPropagation();

        updateMissionStack(index);

    });

});


/* =====================================================
   INITIAL STACK
===================================================== */

if (missionCards.length > 0) {

    missionCards.forEach(function (card) {

        gsap.set(card, {

            x: 190,
            y: 125,
            scale: 0.75,
            opacity: 0,
            zIndex: 1,
            pointerEvents: "none"

        });

    });


    updateMissionStack(0);

}


/* =====================================================
   MISSION SECTION REVEAL
===================================================== */

const missionSection =
    document.querySelector(".mission-section");

const missionIntro =
    document.querySelector(".mission-intro");


if (missionSection && missionIntro) {

    gsap.from(missionIntro.children, {

        y: 60,
        opacity: 0,

        duration: 0.8,

        stagger: 0.12,

        ease: "power3.out",

        scrollTrigger: {

            trigger: missionSection,

            start: "top 75%",

            toggleActions:
                "play none none reverse"

        }

    });

}




    /* =====================================================
       SATELLITES / ORBIT SECTION
    ===================================================== */

    const orbitSection = document.querySelector(".orbit-section");
    const orbitContent = document.querySelector(".orbit-content");
    const orbitVisual = document.querySelector(".orbit-visual");
    const satelliteObject = document.querySelector(".satellite-object");
    const mainOrbit = document.querySelector(".main-orbit");
    const orbitData = document.querySelector(".orbit-data");


    /* Text reveal */

    if (orbitContent) {

        gsap.from(orbitContent.children, {

            y: 70,
            opacity: 0,
            duration: 0.9,
            stagger: 0.14,
            ease: "power3.out",

            scrollTrigger: {
                trigger: orbitSection,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }

        });

    }


    /* Visual reveal */

    if (orbitVisual) {

        gsap.from(orbitVisual, {

            x: 90,
            opacity: 0,
            scale: 0.88,
            duration: 1.1,
            ease: "power3.out",

            scrollTrigger: {
                trigger: orbitSection,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }

        });

    }


    /* Orbit rotation */

    if (mainOrbit) {

        gsap.to(mainOrbit, {

            rotation: 360,
            duration: 18,
            repeat: -1,
            ease: "none"

        });

    }


    /* Satellite floating movement */

    if (satelliteObject) {

        gsap.to(satelliteObject, {

            y: -15,
            rotation: 2,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"

        });

    }


    /* Orbit data */

    if (orbitData) {

        gsap.from(orbitData, {

            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",

            scrollTrigger: {
                trigger: orbitSection,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }

        });

    }


    /* Mouse parallax */

    if (orbitSection && orbitVisual) {

        orbitSection.addEventListener("mousemove", function (event) {

            const rect = orbitSection.getBoundingClientRect();

            const x =
                (event.clientX - rect.left)
                / rect.width
                - 0.5;

            const y =
                (event.clientY - rect.top)
                / rect.height
                - 0.5;


            gsap.to(orbitVisual, {

                x: x * 18,
                y: y * 18,
                duration: 0.6,
                ease: "power2.out"

            });

        });


        orbitSection.addEventListener("mouseleave", function () {

            gsap.to(orbitVisual, {

                x: 0,
                y: 0,
                duration: 0.8,
                ease: "power3.out"

            });

        });

    }



    /* =====================================================
       BUTTON HOVER EFFECT
    ===================================================== */

    const buttons = document.querySelectorAll(
        ".explore-btn, .mission-btn, .orbit-btn"
    );


    buttons.forEach(function (button) {

        button.addEventListener("mouseenter", function () {

            gsap.to(button, {
                y: -4,
                duration: 0.25,
                ease: "power2.out"
            });

        });


        button.addEventListener("mouseleave", function () {

            gsap.to(button, {
                y: 0,
                duration: 0.25,
                ease: "power2.out"
            });

        });

    });



    /* =====================================================
       SCROLL REFRESH
    ===================================================== */

    window.addEventListener("resize", function () {

        ScrollTrigger.refresh();

    }); ScrollTrigger.refresh();

});













/* =====================================================
   SATELLITE SECTION JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);


    const section = document.querySelector(".satellite-section");
    const content = document.querySelector(".satellite-content");
    const visual = document.querySelector(".satellite-visual");
    const satellite = document.querySelector(".satellite-image");
    const orbitOne = document.querySelector(".orbit-line-one");
    const orbitTwo = document.querySelector(".orbit-line-two");
    const earthGlow = document.querySelector(".earth-glow");
    const stats = document.querySelectorAll(".sat-stat");
    const button = document.querySelector(".satellite-button");


    if (!section) {
        return;
    }


    /* =====================================================
       CONTENT REVEAL
    ===================================================== */

    if (content) {

        gsap.from(content.children, {

            y: 55,
            opacity: 0,

            duration: 0.8,

            stagger: 0.12,

            ease: "power3.out",

            scrollTrigger: {

                trigger: section,

                start: "top 72%",

                toggleActions: "play none none reverse"

            }

        });

    }


    /* =====================================================
       SATELLITE IMAGE REVEAL
    ===================================================== */

    if (visual) {

        gsap.from(visual, {

            x: 100,

            opacity: 0,

            scale: 0.88,

            duration: 1.2,

            ease: "power3.out",

            scrollTrigger: {

                trigger: section,

                start: "top 70%",

                toggleActions: "play none none reverse"

            }

        });

    }


    /* =====================================================
       SATELLITE FLOAT
    ===================================================== */

    if (satellite) {

        gsap.to(satellite, {

            y: -14,

            rotation: 1.5,

            duration: 3,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"

        });

    }


    /* =====================================================
       ORBIT MOVEMENT
    ===================================================== */

    if (orbitOne) {

        gsap.to(orbitOne, {

            rotation: 338,

            duration: 18,

            repeat: -1,

            ease: "none"

        });

    }


    if (orbitTwo) {

        gsap.to(orbitTwo, {

            rotation: 384,

            duration: 25,

            repeat: -1,

            ease: "none"

        });

    }


    /* =====================================================
       EARTH GLOW
    ===================================================== */

    if (earthGlow) {

        gsap.to(earthGlow, {

            scale: 1.08,

            opacity: 0.75,

            duration: 3,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"

        });

    }


    /* =====================================================
       STATS REVEAL
    ===================================================== */

    if (stats.length > 0) {

        gsap.from(stats, {

            y: 25,

            opacity: 0,

            duration: 0.6,

            stagger: 0.1,

            ease: "power3.out",

            scrollTrigger: {

                trigger: section,

                start: "top 60%",

                toggleActions: "play none none reverse"

            }

        });

    }


    /* =====================================================
       MOUSE PARALLAX
    ===================================================== */

    if (visual && satellite) {

        section.addEventListener("mousemove", function (event) {

            const rect = section.getBoundingClientRect();

            const mouseX =
                (event.clientX - rect.left) / rect.width - 0.5;

            const mouseY =
                (event.clientY - rect.top) / rect.height - 0.5;


            gsap.to(satellite, {

                x: mouseX * 22,

                y: mouseY * 22 - 14,

                duration: 0.6,

                ease: "power2.out"

            });


            if (orbitOne) {

                gsap.to(orbitOne, {

                    x: mouseX * -10,

                    y: mouseY * -10,

                    duration: 0.8,

                    ease: "power2.out"

                });

            }


            if (orbitTwo) {

                gsap.to(orbitTwo, {

                    x: mouseX * 8,

                    y: mouseY * 8,

                    duration: 0.8,

                    ease: "power2.out"

                });

            }

        });


        section.addEventListener("mouseleave", function () {

            gsap.to(satellite, {

                x: 0,

                y: -14,

                duration: 0.8,

                ease: "power3.out"

            });


            if (orbitOne) {

                gsap.to(orbitOne, {

                    x: 0,

                    y: 0,

                    duration: 0.8

                });

            }


            if (orbitTwo) {

                gsap.to(orbitTwo, {

                    x: 0,

                    y: 0,

                    duration: 0.8

                });

            }

        });

    }


    /* =====================================================
       BUTTON
    ===================================================== */

    if (button) {

        button.addEventListener("mouseenter", function () {

            gsap.to(button, {

                y: -4,

                duration: 0.25,

                ease: "power2.out"

            });

        });


        button.addEventListener("mouseleave", function () {

            gsap.to(button, {

                y: 0,

                duration: 0.25,

                ease: "power2.out"

            });

        });

    }


    ScrollTrigger.refresh();

});






/* =====================================================
   SPACE GALLERY JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);


    const section = document.querySelector(".space-gallery");

    const header = document.querySelector(".gallery-header");

    const track = document.querySelector(".gallery-track");

    const cards = document.querySelectorAll(".gallery-card");

    const prev = document.querySelector(".gallery-prev");

    const next = document.querySelector(".gallery-next");

    const bottom = document.querySelector(".gallery-bottom");


    if (!section || !track || cards.length === 0) {

        return;

    }


    /* =====================================================
       HEADER REVEAL
    ===================================================== */

    if (header) {

        gsap.from(header.children, {

            y: 60,

            opacity: 0,

            duration: 1,

            stagger: 0.14,

            ease: "power3.out",

            scrollTrigger: {

                trigger: section,

                start: "top 72%",

                toggleActions: "play none none reverse"

            }

        });

    }


    /* =====================================================
       CARD DATA
    ===================================================== */

    const cardData = [];


    cards.forEach(function (card) {

        cardData.push({

            html: card.innerHTML

        });

    });


    const totalCards = cardData.length;


    /* =====================================================
       CURRENT SLIDE
    ===================================================== */

    let currentIndex = 0;

    let isAnimating = false;


    /* =====================================================
       GET CARD POSITION
    ===================================================== */

    function getPosition(index) {

        let distance = index - currentIndex;


        /*
            Circular movement
        */

        if (distance > totalCards / 2) {

            distance -= totalCards;

        }


        if (distance < -totalCards / 2) {

            distance += totalCards;

        }


        if (distance === 0) {

            return "center";

        }


        if (distance === -1) {

            return "left-1";

        }


        if (distance === -2) {

            return "left-2";

        }


        if (distance === -3) {

            return "left-3";

        }


        if (distance === 1) {

            return "right-1";

        }


        if (distance === 2) {

            return "right-2";

        }


        if (distance === 3) {

            return "right-3";

        }


        return "hidden";

    }


    /* =====================================================
       CREATE 7 VISIBLE CARDS
    ===================================================== */

    function createCards() {

        track.innerHTML = "";


        /*
            7 cards create karenge

            3 left
            1 center
            3 right
        */

        for (let i = 0; i < 7; i++) {

            const card = document.createElement("div");

            card.className = "gallery-card";


            /*
                Actual image index
            */

            const dataIndex =
                (currentIndex + i - 3 + totalCards)
                % totalCards;


            card.innerHTML =
                cardData[dataIndex].html;


            track.appendChild(card);

        }


        updatePositions();

    }


    /* =====================================================
       UPDATE POSITIONS
    ===================================================== */

    function updatePositions() {

        const visibleCards =
            track.querySelectorAll(".gallery-card");


        visibleCards.forEach(function (card, index) {

            card.className = "gallery-card";


            const position = index - 3;


            if (position === 0) {

                card.classList.add(
                    "position-center"
                );

            }

            else if (position === -1) {

                card.classList.add(
                    "position-left-1"
                );

            }

            else if (position === -2) {

                card.classList.add(
                    "position-left-2"
                );

            }

            else if (position === -3) {

                card.classList.add(
                    "position-left-3"
                );

            }

            else if (position === 1) {

                card.classList.add(
                    "position-right-1"
                );

            }

            else if (position === 2) {

                card.classList.add(
                    "position-right-2"
                );

            }

            else if (position === 3) {

                card.classList.add(
                    "position-right-3"
                );

            }

            else {

                card.classList.add(
                    "position-hidden"
                );

            }

        });

    }


    /* =====================================================
       MOVE SLIDER
    ===================================================== */

    function moveSlider(direction) {

        if (isAnimating) {

            return;

        }


        isAnimating = true;


        /*
            Direction update
        */

        currentIndex += direction;


        /*
            Loop
        */

        if (currentIndex >= totalCards) {

            currentIndex = 0;

        }


        if (currentIndex < 0) {

            currentIndex = totalCards - 1;

        }


        /*
            Existing cards ko animate
        */

        const oldCards =
            track.querySelectorAll(".gallery-card");


        oldCards.forEach(function (card, index) {

            let newPosition =
                index - 3 - direction;


            if (newPosition === 0) {

                card.className =
                    "gallery-card position-center";

            }

            else if (newPosition === -1) {

                card.className =
                    "gallery-card position-left-1";

            }

            else if (newPosition === -2) {

                card.className =
                    "gallery-card position-left-2";

            }

            else if (newPosition === -3) {

                card.className =
                    "gallery-card position-left-3";

            }

            else if (newPosition === 1) {

                card.className =
                    "gallery-card position-right-1";

            }

            else if (newPosition === 2) {

                card.className =
                    "gallery-card position-right-2";

            }

            else if (newPosition === 3) {

                card.className =
                    "gallery-card position-right-3";

            }

            else {

                card.className =
                    "gallery-card position-hidden";

            }

        });


        /*
            New cards ko next frame mein update
        */

        setTimeout(function () {

            createCards();

            isAnimating = false;

        }, 700);

    }


    /* =====================================================
       NEXT
    ===================================================== */

    if (next) {

        next.addEventListener(
            "click",
            function () {

                moveSlider(1);

            }
        );

    }


    /* =====================================================
       PREVIOUS
    ===================================================== */

    if (prev) {

        prev.addEventListener(
            "click",
            function () {

                moveSlider(-1);

            }
        );

    }


    /* =====================================================
       KEYBOARD
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "ArrowRight") {

                moveSlider(1);

            }


            if (event.key === "ArrowLeft") {

                moveSlider(-1);

            }

        }
    );


    /* =====================================================
       BOTTOM REVEAL
    ===================================================== */

    if (bottom) {

        gsap.from(bottom, {

            y: 30,

            opacity: 0,

            duration: .8,

            ease: "power3.out",

            scrollTrigger: {

                trigger: bottom,

                start: "top 90%",

                toggleActions:
                    "play none none reverse"

            }

        });

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    createCards();


    /* =====================================================
       REFRESH
    ===================================================== */

    ScrollTrigger.refresh();

});





/* =====================================================
   FINAL CTA — MISSION CONTROL JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    gsap.registerPlugin(ScrollTrigger);


    /* =================================================
       ELEMENTS
    ================================================= */

    const section =
        document.querySelector(".mission-control");

    const main =
        document.querySelector(".mc-main");

    const radar =
        document.querySelector(".mc-radar");

    const sweep =
        document.querySelector(".radar-sweep");

    const core =
        document.querySelector(".radar-core");

    const points =
        document.querySelectorAll(".radar-point");

    const signals =
        document.querySelectorAll(".radar-signal");

    const message =
        document.querySelector(".mc-message");

    const topBar =
        document.querySelector(".mc-top");

    const bottom =
        document.querySelector(".mc-bottom");

    const glow =
        document.querySelector(".mc-glow");

    const grid =
        document.querySelector(".mc-grid");


    if (!section) {

        return;

    }


    /* =================================================
       INITIAL STATE
    ================================================= */

    gsap.set(topBar, {

        opacity: 0

    });


    gsap.set(message, {

        x: -60,

        opacity: 0

    });


    gsap.set(radar, {

        x: 70,

        scale: .75,

        opacity: 0

    });


    gsap.set(bottom, {

        opacity: 0

    });


    /* =================================================
       SECTION REVEAL
    ================================================= */

    const tl =
        gsap.timeline({

            scrollTrigger: {

                trigger: section,

                start: "top 65%",

                toggleActions:
                    "play none none reverse"

            }

        });


    tl.to(topBar, {

        opacity: 1,

        duration: .6,

        ease: "power2.out"

    })


    .to(message, {

        x: 0,

        opacity: 1,

        duration: 1,

        ease: "power3.out"

    }, "-=.25")


    .to(radar, {

        x: 0,

        scale: 1,

        opacity: 1,

        duration: 1.25,

        ease: "power3.out"

    }, "-=.7")


    .to(bottom, {

        opacity: 1,

        duration: .6,

        ease: "power2.out"

    }, "-=.5");


    /* =================================================
       RADAR SWEEP
    ================================================= */

    if (sweep) {

        gsap.to(sweep, {

            rotation: 360,

            duration: 4,

            repeat: -1,

            ease: "none",

            transformOrigin:
                "left center"

        });

    }


    /* =================================================
       RADAR CORE PULSE
    ================================================= */

    if (core) {

        gsap.to(core, {

            scale: 1.25,

            opacity: .65,

            duration: 1.2,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"

        });

    }


    /* =================================================
       SIGNAL POINTS
    ================================================= */

    points.forEach(
        function (point, index) {

            gsap.to(point, {

                scale: 1.8,

                opacity: .35,

                duration:
                    1 + index * .3,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut",

                delay:
                    index * .3

            });

        }
    );


    /* =================================================
       SIGNAL RIPPLE
    ================================================= */

    signals.forEach(
        function (signal, index) {

            gsap.to(signal, {

                scale: 3,

                opacity: 0,

                duration: 2.2,

                repeat: -1,

                delay:
                    index * .6,

                ease: "power2.out"

            });

        }
    );


    /* =================================================
       MOUSE RADAR INTERACTION
    ================================================= */

    if (main && radar) {

        main.addEventListener(
            "mousemove",
            function (event) {


                const rect =
                    main.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                gsap.to(radar, {

                    x: x * .018,

                    y: y * .018,

                    duration: .7,

                    ease: "power2.out"

                });

            }
        );


        main.addEventListener(
            "mouseleave",
            function () {

                gsap.to(radar, {

                    x: 0,

                    y: 0,

                    duration: 1,

                    ease: "power3.out"

                });

            }
        );

    }


    /* =================================================
       MESSAGE PARALLAX
    ================================================= */

    if (message) {

        gsap.to(message, {

            y: -25,

            ease: "none",

            scrollTrigger: {

                trigger: section,

                start: "top bottom",

                end: "bottom top",

                scrub: 1

            }

        });

    }


    /* =================================================
       RADAR PARALLAX
    ================================================= */

    if (radar) {

        gsap.to(radar, {

            y: -20,

            ease: "none",

            scrollTrigger: {

                trigger: section,

                start: "top bottom",

                end: "bottom top",

                scrub: 1

            }

        });

    }


    /* =================================================
       BACKGROUND GLOW
    ================================================= */

    if (glow) {

        gsap.to(glow, {

            scale: 1.15,

            opacity: .7,

            duration: 4,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"

        });

    }


    /* =================================================
       GRID PARALLAX
    ================================================= */

    if (grid) {

        gsap.to(grid, {

            y: -50,

            ease: "none",

            scrollTrigger: {

                trigger: section,

                start: "top bottom",

                end: "bottom top",

                scrub: 1

            }

        });

    }


    /* =================================================
       BUTTON HOVER
    ================================================= */

    const launch =
        document.querySelector(".mc-launch");


    if (launch) {

        const ring =
            launch.querySelector(
                ".mc-launch-ring"
            );


        const icon =
            launch.querySelector("i");


        launch.addEventListener(
            "mouseenter",
            function () {

                gsap.to(ring, {

                    scale: 1.08,

                    duration: .3,

                    ease: "power2.out"

                });


                gsap.to(icon, {

                    x: 5,

                    duration: .3,

                    ease: "power2.out"

                });

            }
        );


        launch.addEventListener(
            "mouseleave",
            function () {

                gsap.to(ring, {

                    scale: 1,

                    duration: .3,

                    ease: "power2.out"

                });


                gsap.to(icon, {

                    x: 0,

                    duration: .3,

                    ease: "power2.out"

                });

            }
        );

    }


    /* =================================================
       REFRESH
    ================================================= */

    ScrollTrigger.refresh();


});








/* =====================================================
FOOTER JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


const footer =
    document.querySelector(".space-footer");

const brand =
    document.querySelector(".footer-brand");

const columns =
    document.querySelectorAll(".footer-column");

if (!footer) {
    return;
}


/* =================================================
   GSAP REVEAL
================================================= */

if (typeof gsap !== "undefined") {

    if (brand) {

        gsap.from(brand, {

            y: 40,
            opacity: 0,

            duration: .9,

            ease: "power3.out",

            scrollTrigger: {

                trigger: footer,

                start: "top 90%",

                toggleActions:
                    "play none none reverse"
            }

        });

    }


    if (columns.length > 0) {

        gsap.from(columns, {

            y: 35,
            opacity: 0,

            duration: .8,

            stagger: .12,

            ease: "power3.out",

            scrollTrigger: {

                trigger: footer,

                start: "top 88%",

                toggleActions:
                    "play none none reverse"
            }

        });

    }

}


});











/* =====================================================
   SUPARCO AI CHATBOT
===================================================== */


/* =====================================================
   SELECTORS
===================================================== */

const aiChatButton =
    document.querySelector("#aiChatButton");

const aiChatWindow =
    document.querySelector("#aiChatWindow");

const aiClose =
    document.querySelector("#aiClose");

const aiChatInput =
    document.querySelector("#aiChatInput");

const aiSendButton =
    document.querySelector("#aiSendButton");

const aiChatBody =
    document.querySelector("#aiChatBody");

const aiTyping =
    document.querySelector("#aiTyping");

const aiSuggestions =
    document.querySelectorAll(
        ".ai-suggestions button"
    );


/* =====================================================
   OPEN / CLOSE CHAT
===================================================== */

if (aiChatButton) {

    aiChatButton.addEventListener(
        "click",
        function () {

            aiChatWindow.classList.toggle("active");


            if (
                aiChatWindow.classList.contains("active")
            ) {

                setTimeout(function () {

                    aiChatInput.focus();

                }, 300);

            }

        }
    );

}


if (aiClose) {

    aiClose.addEventListener(
        "click",
        function () {

            aiChatWindow.classList.remove("active");

        }
    );

}


/* =====================================================
   ADD MESSAGE
===================================================== */

function addAIMessage(message, type) {

    const messageBox =
        document.createElement("div");


    messageBox.className =
        "ai-message " + type;


    if (type === "bot") {

        messageBox.innerHTML =

            '<div class="message-icon">' +

                '<i class="fa-solid fa-microchip"></i>' +

            '</div>' +

            '<div class="message-content">' +

                '<p>' +
                    message +
                '</p>' +

            '</div>';

    } else {

        messageBox.innerHTML =

            '<div class="message-content">' +

                '<p>' +
                    message +
                '</p>' +

            '</div>';

    }


    aiChatBody.appendChild(messageBox);


    aiChatBody.scrollTop =
        aiChatBody.scrollHeight;

}


/* =====================================================
   AI RESPONSES
===================================================== */

function getAIResponse(question) {

    const text =
        question.toLowerCase();


    /* SUPARCO */

    if (
        text.includes("what is suparco") ||
        text.includes("suparco kya") ||
        text.includes("suparco")
    ) {

        return "SUPARCO is Pakistan's national space agency. It works in space science, satellite technology, Earth observation, communications, research and technology development.";

    }


    /* FOUNDED */

    if (
        text.includes("when was suparco") ||
        text.includes("suparco founded") ||
        text.includes("founded")
    ) {

        return "Pakistan established its national space programme in the early 1960s, with SUPARCO becoming the country's central space research and development organisation.";

    }


    /* SPACE PROGRAMME */

    if (
        text.includes("space program") ||
        text.includes("space programme") ||
        text.includes("pakistan space")
    ) {

        return "Pakistan's space programme has developed across satellite communications, remote sensing, Earth observation, space science and technology development.";

    }


    /* REHBAR */

    if (
        text.includes("rehbar") ||
        text.includes("rehbar-1")
    ) {

        return "Rehbar-1 was launched in 1962 and became an important early milestone in Pakistan's space programme and sounding-rocket activities.";

    }


    /* BADR-1 */

    if (
        text.includes("badr-1") ||
        text.includes("badr 1")
    ) {

        return "Badr-1 was Pakistan's first indigenous experimental digital communications satellite and was launched in 1990. It marked an important step in Pakistan's satellite technology development.";

    }


    /* BADR-B */

    if (
        text.includes("badr-b") ||
        text.includes("badr b")
    ) {

        return "Badr-B was launched in 2001 and supported Pakistan's development of practical satellite technology and Earth-observation capabilities.";

    }


    /* PAKSAT */

    if (
        text.includes("paksat") ||
        text.includes("communication satellite")
    ) {

        return "PAKSAT satellites are associated with Pakistan's satellite communication capabilities, supporting services such as broadcasting, telecommunications and connectivity.";

    }


    /* PRSS */

    if (
        text.includes("prss") ||
        text.includes("remote sensing")
    ) {

        return "PRSS-1 is an Earth-observation satellite used for remote-sensing applications. Satellite data can support agriculture, mapping, disaster management and environmental monitoring.";

    }


    /* PAKTES */

    if (
        text.includes("paktes") ||
        text.includes("technology satellite")
    ) {

        return "PakTES-1A is a technology demonstration satellite associated with Pakistan's efforts to develop indigenous satellite design and engineering capabilities.";

    }


    /* SATELLITES */

    if (
        text.includes("satellite") ||
        text.includes("satellites")
    ) {

        return "Pakistan's satellite programmes cover communication, Earth observation, remote sensing, scientific research and technology development.";

    }


    /* EARTH OBSERVATION */

    if (
        text.includes("earth observation") ||
        text.includes("earth imagery") ||
        text.includes("satellite images")
    ) {

        return "Earth-observation satellites collect imagery and data that can support agriculture, mapping, urban planning, environmental monitoring and disaster management.";

    }


    /* COMMUNICATION */

    if (
        text.includes("communication") ||
        text.includes("communications") ||
        text.includes("telecommunication")
    ) {

        return "Satellite communication can provide broadcasting, telecommunications and connectivity over large geographic areas. Pakistan's PAKSAT programme supports this field.";

    }


    /* RESEARCH */

    if (
        text.includes("research") ||
        text.includes("space science") ||
        text.includes("science")
    ) {

        return "SUPARCO's work includes space science, satellite technology, remote sensing, atmospheric studies and research supporting Pakistan's scientific and technical capabilities.";

    }


    /* TECHNOLOGY */

    if (
        text.includes("technology") ||
        text.includes("development")
    ) {

        return "Pakistan's space technology efforts include satellite engineering, remote sensing, communications, scientific research and the development of indigenous technical capabilities.";

    }


    /* IMPORTANCE */

    if (
        text.includes("benefit") ||
        text.includes("importance") ||
        text.includes("why space")
    ) {

        return "Space technology can support communication, environmental monitoring, agriculture, mapping, disaster management, scientific research and national development.";

    }


    /* AGRICULTURE */

    if (
        text.includes("agriculture") ||
        text.includes("farming")
    ) {

        return "Satellite imagery can help monitor crops, vegetation, land conditions and water resources, providing useful information for agricultural planning.";

    }


    /* WEATHER */

    if (
        text.includes("weather") ||
        text.includes("climate")
    ) {

        return "Space-based observations can contribute to environmental and climate monitoring by providing large-scale information about Earth's atmosphere and surface.";

    }


    /* DISASTER */

    if (
        text.includes("disaster") ||
        text.includes("flood") ||
        text.includes("earthquake")
    ) {

        return "Earth-observation imagery can help assess affected areas after floods, earthquakes and other disasters, supporting mapping and response planning.";

    }


    /* HISTORY */

    if (
        text.includes("history") ||
        text.includes("timeline")
    ) {

        return "Pakistan's space journey began in the early 1960s, followed by sounding-rocket work, Badr satellite missions, communication satellites and modern Earth-observation and technology programmes.";

    }


    /* HELLO */

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey") ||
        text.includes("salam") ||
        text.includes("assalam")
    ) {

        return "Hello. I'm SUPARCO AI. You can ask me about Pakistan's space missions, satellites, communications, Earth observation or space research.";

    }


    /* THANK YOU */

    if (
        text.includes("thank") ||
        text.includes("thanks")
    ) {

        return "You're welcome. You can ask me anything about SUPARCO and Pakistan's space journey.";

    }


    /* DEFAULT */

    return "I can help you explore SUPARCO, Pakistan's space missions, satellites, communication systems, Earth observation and space research. Try asking about one of these topics.";

}


/* =====================================================
   SEND MESSAGE
===================================================== */

function sendAIMessage(question) {

    if (!question) {

        return;

    }


    question =
        question.trim();


    if (question.length === 0) {

        return;

    }


    /* USER MESSAGE */

    addAIMessage(
        question,
        "user"
    );


    /* CLEAR INPUT */

    aiChatInput.value = "";


    /* SHOW TYPING */

    aiTyping.classList.add("active");


    aiChatBody.scrollTop =
        aiChatBody.scrollHeight;


    /* BOT RESPONSE */

    setTimeout(function () {

        aiTyping.classList.remove("active");


        const response =
            getAIResponse(question);


        addAIMessage(
            response,
            "bot"
        );


    }, 900);

}


/* =====================================================
   SEND BUTTON
===================================================== */

if (aiSendButton) {

    aiSendButton.addEventListener(
        "click",
        function () {

            const question =
                aiChatInput.value;

            sendAIMessage(question);

        }
    );

}


/* =====================================================
   ENTER KEY
===================================================== */

if (aiChatInput) {

    aiChatInput.addEventListener(
        "keydown",
        function (e) {

            if (e.key === "Enter") {

                e.preventDefault();


                const question =
                    aiChatInput.value;


                sendAIMessage(question);

            }

        }
    );

}


/* =====================================================
   SUGGESTED QUESTIONS
===================================================== */

aiSuggestions.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const question =
                    button.getAttribute(
                        "data-question"
                    );


                sendAIMessage(question);

            }
        );

    }
);


/* =====================================================
   SUPARCO LOADER ANIMATION
===================================================== */

window.addEventListener("load", function () {

    const loader =
        document.querySelector(".loader");

    const loaderLogo =
        document.querySelector(".loader-logo");

    const rocket =
        document.querySelector(".loader-rocket");

    const mainOrbit =
        document.querySelector(".orbit-main");

    const smallOrbit =
        document.querySelector(".orbit-small");

    const planet =
        document.querySelector(".loader-planet");

    const progress =
        document.querySelector(".loader-line span");

    const percent =
        document.querySelector(".loader-percent");


    /* =================================================
       INITIAL
    ================================================= */

    gsap.set(loaderLogo, {

        opacity: 0,

        scale: 0.8,

        y: 20

    });


    gsap.set(rocket, {

        opacity: 0,

        scale: 0.5

    });


    gsap.set([mainOrbit, smallOrbit], {

        opacity: 0,

        scale: 0.5

    });


    /* =================================================
       INTRO
    ================================================= */

    const intro = gsap.timeline();


    intro.to(mainOrbit, {

        opacity: 1,

        scale: 1,

        duration: 1.2,

        ease: "power3.out"

    });


    intro.to(smallOrbit, {

        opacity: 1,

        scale: 1,

        duration: 1,

        ease: "power3.out"

    }, "-=0.8");


    intro.to(rocket, {

        opacity: 1,

        scale: 1,

        duration: 1,

        ease: "back.out(1.7)"

    }, "-=0.7");


    intro.to(loaderLogo, {

        opacity: 1,

        scale: 1,

        y: 0,

        duration: 1,

        ease: "power4.out"

    }, "-=0.6");


    /* =================================================
       ORBIT ROTATION
    ================================================= */

    gsap.to(mainOrbit, {

        rotation: 360,

        duration: 5,

        repeat: -1,

        ease: "none"

    });


    gsap.to(smallOrbit, {

        rotation: -360,

        duration: 7,

        repeat: -1,

        ease: "none"

    });


    /* =================================================
       ROCKET FLOAT
    ================================================= */

    gsap.to(rocket, {

        y: -7,

        duration: 1.2,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    /* =================================================
       ROCKET PULSE
    ================================================= */

    gsap.to(rocket, {

        boxShadow:
            "0 0 55px rgba(130,210,230,.3)",

        duration: 1.4,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    /* =================================================
       PLANET PULSE
    ================================================= */

    gsap.to(planet, {

        scale: 1.6,

        opacity: 0.5,

        duration: 1,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    /* =================================================
       PROGRESS
    ================================================= */

    const counter = {

        value: 0

    };


    gsap.to(counter, {

        value: 100,

        duration: 3.8,

        delay: 0.5,

        ease: "power2.inOut",

        onUpdate: function () {

            const number =
                Math.floor(counter.value);


            progress.style.width =
                number + "%";


            percent.textContent =
                number + "%";

        },


        onComplete: function () {

            /* =========================================
               EXIT
            ========================================= */

            const exit =
                gsap.timeline({

                    onComplete: function () {

                        loader.style.display =
                            "none";

                    }

                });


            exit.to(loaderLogo, {

                scale: 1.15,

                opacity: 0,

                duration: 0.5,

                ease: "power3.in"

            });


            exit.to([rocket, mainOrbit, smallOrbit], {

                scale: 1.4,

                opacity: 0,

                duration: 0.7,

                ease: "power3.in"

            }, "-=0.35");


            exit.to(loader, {

                opacity: 0,

                duration: 0.8,

                ease: "power2.inOut"

            }, "-=0.3");

        }

    });

});
