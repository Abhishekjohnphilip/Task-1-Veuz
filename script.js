// document.addEventListener('DOMContentLoaded', function () {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.to(".window .closed", {
//         y: "-200%", // Moves the "closed" part up to reveal the "open" part
//         scrollTrigger: {
//             trigger: "#intro-windows",
//             start: "top top",
//             end: "bottom top",
//             scrub: 1,
//         }
//     });

//     gsap.to("#intro-windows", {
//         opacity: 0,
//         display: "none",
//         scrollTrigger: {
//             trigger: "#intro-windows",
//             start: "bottom top",
//             end: "bottom top",
//             scrub: 1,
//             onEnter: () => {
//                 gsap.to("#hero, .navbar", { display: "block", opacity: 1, duration: 1 });
//             }
//         }
//     });
// });


gsap.registerPlugin(ScrollTrigger);

gsap.to(".window-1 .closed", {
    height: 0,
    duration: 0.6,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".window-1",
        start: "top center",
        end: "bottom center",
        scrub: true,
    }
});

gsap.to(".window-2 .closed", {
    height: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".window-2",
        start: "top center",
        end: "bottom center",
        scrub: true,
    }
});

gsap.to(".window-3 .closed", {
    height: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".window-3",
        start: "top center",
        end: "bottom center",
        scrub: true,
    }
});

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;

    gsap.to(".text-1", {
        opacity: scrollPos > 100 ? 0 : 1,
        duration: 1,
        ease: "power1.out"
    });

    gsap.to(".text-2", {
        opacity: scrollPos > 100 ? 1 : 0,
        duration: 1,
        ease: "power1.out"
    });
});

// document.addEventListener('DOMContentLoaded', function () {
// gsap.to("#intro-windows", {
//     opacity: 0,
//     display: "none",
//     scrollTrigger: {
//         trigger: "#intro-windows",
//         start: "bottom top",
//         end: "bottom top",
//         scrub: 1,
//         onEnter: () => {
//             gsap.to("#hero, .navbar", { display: "block", opacity: 1, duration: 1 });
//         }
//     }
// });
// });