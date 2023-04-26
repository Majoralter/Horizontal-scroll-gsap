const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
})

function raf(time){
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// gsap horizontal scrolling
// register scroll trigger plugin
gsap.registerPlugin(ScrollTrigger)

const main = document.querySelector("main")

// convert elements into arrays
const oddImages = gsap.utils.toArray(".odd")
const evenImages = gsap.utils.toArray(".even")
const divs = gsap.utils.toArray(".section")

const tl = gsap.timeline()

let scrollTween =  gsap.to(".main",{
    xPercent: -61,
    ease: "none",
    duration: 8,
    scrollTrigger: {
        trigger: ".main",
        scrub: true,
        pin: true,
        end: `+=${main.offsetWidth}`
    }
})

oddImages.forEach(image => {
    tl.to(image,{
        margin: "10rem 0 0 0",
        duration: 5,
        scrollTrigger: {
            trigger: image,
            containerAnimation: scrollTween,
            scrub: -5,
        }
    })
});

evenImages.forEach(image => {
    tl.to(image,{
        margin: "0 0 10rem 0",
        duration: 5,
        scrollTrigger: {
            trigger: image,
            containerAnimation: scrollTween,
            scrub: -5,
        }
    })
});

const newCursor = document.querySelector(".cursor")

document.addEventListener("mousemove", e => {
    const x = e.clientX 
    const y = e.clientY 

    newCursor.style.left = `${x}px`
    newCursor.style.top = `${y}px`
})