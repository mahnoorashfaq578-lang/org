/* =====================================================
   REGISTER SCROLLTRIGGER
===================================================== */

gsap.registerPlugin(ScrollTrigger);



/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener("load", function () {


    /* =================================================
       SELECTORS
    ================================================= */

    const navbar =
        document.querySelector(".navbar");

    const introLabel =
        document.querySelector(".intro-label");

    const introHeading =
        document.querySelector(".intro-content h1");

    const introParagraph =
        document.querySelector(".intro-content p");

    const introScroll =
        document.querySelector(".intro-scroll");

    const imageFrame =
        document.querySelector(".image-frame");

    const formHeading =
        document.querySelector(".form-heading");

    const inputGroups =
        document.querySelectorAll(".input-group");

    const formSubmit =
        document.querySelector(".form-submit");

    const ctaContent =
        document.querySelector(".cta-content");

    const menuBtn =
        document.querySelector(".menu-btn");

    const navLinks =
        document.querySelector(".nav-links");



    /* =================================================
       INITIAL STATES
    ================================================= */

    if (navbar) {

        gsap.set(navbar, {
            y: -30,
            opacity: 0
        });

    }


    if (introLabel) {

        gsap.set(introLabel, {
            y: 25,
            opacity: 0
        });

    }


    if (introHeading) {

        gsap.set(introHeading, {
            y: 50,
            opacity: 0
        });

    }


    if (introParagraph) {

        gsap.set(introParagraph, {
            y: 25,
            opacity: 0
        });

    }


    if (introScroll) {

        gsap.set(introScroll, {
            y: 20,
            opacity: 0
        });

    }



    /* =================================================
       INTRO ANIMATION
    ================================================= */

    const introTimeline = gsap.timeline();


    if (navbar) {

        introTimeline.to(navbar, {

            y: 0,
            opacity: 1,

            duration: .8,

            ease: "power3.out"

        });

    }


    if (introLabel) {

        introTimeline.to(introLabel, {

            y: 0,
            opacity: 1,

            duration: .7,

            ease: "power3.out"

        }, "-=.35");

    }


    if (introHeading) {

        introTimeline.to(introHeading, {

            y: 0,
            opacity: 1,

            duration: 1.1,

            ease: "power4.out"

        }, "-=.35");

    }


    if (introParagraph) {

        introTimeline.to(introParagraph, {

            y: 0,
            opacity: 1,

            duration: .7,

            ease: "power3.out"

        }, "-=.55");

    }


    if (introScroll) {

        introTimeline.to(introScroll, {

            y: 0,
            opacity: 1,

            duration: .6,

            ease: "power3.out"

        }, "-=.4");

    }



    /* =================================================
       IMAGE REVEAL
    ================================================= */

    if (imageFrame) {

        gsap.from(imageFrame, {

            scrollTrigger: {

                trigger: ".contact-form-section",

                start: "top 70%",

                toggleActions: "play none none reverse"

            },

            x: -70,
            opacity: 0,

            duration: 1.1,

            ease: "power4.out"

        });

    }



    /* =================================================
       FORM HEADING
    ================================================= */

    if (formHeading) {

        gsap.from(formHeading, {

            scrollTrigger: {

                trigger: ".contact-form-section",

                start: "top 70%"

            },

            x: 60,
            opacity: 0,

            duration: 1,

            ease: "power4.out"

        });

    }



    /* =================================================
       INPUT REVEAL
    ================================================= */

    if (inputGroups.length > 0) {

        gsap.from(inputGroups, {

            scrollTrigger: {

                trigger: "#contactForm",

                start: "top 78%"

            },

            y: 25,
            opacity: 0,

            duration: .65,

            stagger: .1,

            ease: "power3.out"

        });

    }



    /* =================================================
       SUBMIT REVEAL
    ================================================= */

    if (formSubmit) {

        gsap.from(formSubmit, {

            scrollTrigger: {

                trigger: formSubmit,

                start: "top 90%"

            },

            y: 25,
            opacity: 0,

            duration: .7,

            ease: "power3.out"

        });

    }



    /* =================================================
       IMAGE MOUSE EFFECT
    ================================================= */

    if (
        imageFrame &&
        window.innerWidth > 900
    ) {

        imageFrame.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    imageFrame.getBoundingClientRect();


                const x =
                    (e.clientX - rect.left)
                    / rect.width - .5;


                const y =
                    (e.clientY - rect.top)
                    / rect.height - .5;


                gsap.to(imageFrame, {

                    rotationY: x * 3,

                    rotationX: y * -3,

                    duration: .5,

                    ease: "power2.out"

                });

            }
        );


        imageFrame.addEventListener(
            "mouseleave",
            function () {

                gsap.to(imageFrame, {

                    rotationY: 0,
                    rotationX: 0,

                    duration: .7,

                    ease: "power3.out"

                });

            }
        );

    }



    /* =================================================
       TEXTAREA CHARACTER COUNT
    ================================================= */

    const message =
        document.querySelector("#message");

    const characterCount =
        document.querySelector("#characterCount");


    if (message && characterCount) {

        message.addEventListener(
            "input",
            function () {

                let length =
                    message.value.length;


                if (length > 500) {

                    message.value =
                        message.value.substring(0, 500);

                    length = 500;

                }


                characterCount.textContent =
                    length + " / 500";

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


                if (navLinks.classList.contains("show")) {

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
       CONTACT FORM
    ================================================= */

    const contactForm =
        document.querySelector("#contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (e) {

                e.preventDefault();


                const name =
                    document.querySelector("#name").value;

                const email =
                    document.querySelector("#email").value;

                const subject =
                    document.querySelector("#subject").value;

                const messageValue =
                    document.querySelector("#message").value;


                const nameError =
                    document.querySelector("#nameError");

                const emailError =
                    document.querySelector("#emailError");

                const subjectError =
                    document.querySelector("#subjectError");

                const messageError =
                    document.querySelector("#messageError");


                nameError.textContent = "";
                emailError.textContent = "";
                subjectError.textContent = "";
                messageError.textContent = "";


                let isValid = true;



                /* NAME */

                if (name.length < 3) {

                    nameError.textContent =
                        "Please enter your name.";

                    isValid = false;

                }



                /* EMAIL */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (!emailPattern.test(email)) {

                    emailError.textContent =
                        "Please enter a valid email.";

                    isValid = false;

                }



                /* SUBJECT */

                if (subject === "") {

                    subjectError.textContent =
                        "Please select a subject.";

                    isValid = false;

                }



                /* MESSAGE */

                if (
                    messageValue.length < 10 ||
                    messageValue.length > 500
                ) {

                    messageError.textContent =
                        "Message must be between 10 and 500 characters.";

                    isValid = false;

                }



                /* INVALID */

                if (!isValid) {

                    Swal.fire({

                        title: "CHECK YOUR FORM",

                        text: "Please complete all required fields correctly.",

                        icon: "warning",

                        background: "#0a0d0d",

                        color: "#f2f1eb",

                        confirmButtonText: "OK",

                        confirmButtonColor: "#e9e8e2",

                        customClass: {

                            popup: "supark-alert",

                            title: "supark-alert-title",

                            htmlContainer: "supark-alert-text",

                            confirmButton: "supark-alert-button"

                        }

                    });

                    return;

                }



                /* SUCCESS */

                Swal.fire({

                    title: "MESSAGE SENT",

                    html:
                        "Your message has been submitted successfully.<br>" +
                        "<span style='color:#777d79;font-size:12px;'>Thank you for contacting SUPARCO.</span>",

                    icon: "success",

                    background: "#0a0d0d",

                    color: "#f2f1eb",

                    confirmButtonText: "DONE",

                    confirmButtonColor: "#e9e8e2",

                    customClass: {

                        popup: "supark-alert",

                        title: "supark-alert-title",

                        htmlContainer: "supark-alert-text",

                        confirmButton: "supark-alert-button"

                    }

                }).then(function () {

                    contactForm.reset();

                    characterCount.textContent =
                        "0 / 500";

                });

            }
        );

    }



    /* =================================================
       CTA REVEAL
    ================================================= */

    if (ctaContent) {

        gsap.from(ctaContent, {

            scrollTrigger: {

                trigger: ".contact-cta",

                start: "top 75%"

            },

            y: 60,
            opacity: 0,

            duration: 1,

            ease: "power4.out"

        });

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