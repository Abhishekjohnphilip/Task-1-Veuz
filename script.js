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

gsap.to(".vector-clouds", {
    x: 300, 
    y: 0,  
    scrollTrigger: {
        trigger: ".window-line",
        start: "top center",
        end: "bottom center",
        scrub: true,
    }
});

gsap.to(".vector-birds", {
    x: 200, 
    y: 0, 
    scrollTrigger: {
        trigger: ".window-line",
        start: "top center",
        end: "bottom center",
        scrub: true,
    }
});
const circles = gsap.utils.toArray('.circle-container svg');

circles.forEach((circle, index) => {
    gsap.to(circle, {
        rotation: 360,
        scrollTrigger: {
            trigger: "#intro-windows",
            start: "top top",
            end: "bottom top",
            scrub: 1,
        },
        ease: "none",
        duration: index + 1 
    });
});

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;
    let windowHeight = window.innerHeight;

    gsap.to(".text-1", {
        opacity: scrollPos < windowHeight / 3 ? 1 : 0,
        duration: 1,
        ease: "power1.out"
    });

    gsap.to(".text-2", {
        opacity: scrollPos >= windowHeight / 3 && scrollPos < (2 * windowHeight) / 3 ? 1 : 0,
        duration: 1,
        ease: "power1.out"
    });

    gsap.to(".text-3", {
        opacity: scrollPos >= (2 * windowHeight) / 3 ? 1 : 0,
        duration: 1,
        ease: "power1.out"
    });
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const introWindowsSection = document.querySelector('.intro-windows');
    
    // Calculate the bottom position of the intro-windows section
    const introWindowsBottom = introWindowsSection.offsetTop + introWindowsSection.offsetHeight;
    
    if (window.scrollY >= introWindowsBottom) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
});
