/* =====================================================
   NOVA VERGE JUNIOR COLLEGE
   JAVASCRIPT
===================================================== */


/* =====================================================
   LOADER
===================================================== */

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.remove();
        }, 800);

    }, 700);

});



/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {

    header.classList.toggle("menu-open");

});


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        header.classList.remove("menu-open");

    });

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (!reducedMotion) {

    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.animate(

                            [
                                {
                                    opacity: 0,
                                    transform:
                                        "translateY(40px)"
                                },

                                {
                                    opacity: 1,
                                    transform:
                                        "translateY(0)"
                                }
                            ],

                            {
                                duration: 850,
                                easing:
                                    "cubic-bezier(.2,.8,.2,1)",
                                fill: "forwards"
                            }

                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    document
        .querySelectorAll(
            ".section-heading, .course-card, .experience-item, .gallery-grid figure, .quote, .contact-intro, form"
        )
        .forEach(element => {

            element.style.opacity = "0";

            revealObserver.observe(element);

        });

}



/* =====================================================
   ANIMATED STATISTICS
===================================================== */

const statistics =
    document.querySelector(".statistics");

let statisticsStarted = false;


function startCounters() {

    if (statisticsStarted) {
        return;
    }


    const position =
        statistics.getBoundingClientRect();


    if (
        position.top <
        window.innerHeight * 0.85
    ) {

        statisticsStarted = true;


        document
            .querySelectorAll("[data-number]")
            .forEach(counter => {

                const target =
                    Number(
                        counter.dataset.number
                    );

                let current = 0;


                function updateCounter() {

                    current += Math.ceil(
                        target / 60
                    );


                    if (current >= target) {

                        current = target;

                    }


                    counter.textContent =
                        current.toLocaleString();


                    if (current < target) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    }

                }


                updateCounter();

            });

    }

}


window.addEventListener(
    "scroll",
    startCounters
);

startCounters();



/* =====================================================
   FAQ
===================================================== */

const faqItems =
    document.querySelectorAll(
        ".faq-container details"
    );


faqItems.forEach(item => {

    item.addEventListener(
        "toggle",
        () => {

            if (item.open) {

                faqItems.forEach(other => {

                    if (other !== item) {

                        other.open = false;

                    }

                });

            }

        }
    );

});



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        formMessage.textContent =
            "Thank you! Your enquiry has been received.";

        formMessage.style.color =
            "#4c823f";


        contactForm.reset();

    }
);



/* =====================================================
   MOUSE PARALLAX
===================================================== */

if (!reducedMotion) {

    window.addEventListener(
        "mousemove",
        event => {

            const mouseX =
                event.clientX -
                window.innerWidth / 2;

            const mouseY =
                event.clientY -
                window.innerHeight / 2;


            const glowOne =
                document.querySelector(
                    ".glow-one"
                );

            const glowTwo =
                document.querySelector(
                    ".glow-two"
                );


            if (glowOne) {

                glowOne.style.transform =
                    `translate(
                        ${mouseX * 0.02}px,
                        ${mouseY * 0.02}px
                    )`;

            }


            if (glowTwo) {

                glowTwo.style.transform =
                    `translate(
                        ${mouseX * -0.015}px,
                        ${mouseY * -0.015}px
                    )`;

            }

        }
    );

}



/* =====================================================
   VIDEO FALLBACK
===================================================== */

document
    .querySelectorAll("video")
    .forEach(video => {

        video.addEventListener(
            "error",
            () => {

                video.style.display =
                    "none";

            }
        );

    });



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        "nav a"
    );


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navLinks.forEach(link => {

                        link.style.color = "";

                    });


                    const active =
                        document.querySelector(
                            `nav a[href="#${entry.target.id}"]`
                        );


                    if (active) {

                        active.style.color =
                            "#8dff75";

                    }

                }

            });

        },

        {
            threshold: 0.35
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});