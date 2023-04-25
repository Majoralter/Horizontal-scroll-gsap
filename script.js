// Set the scroll speed factor
let scrollSpeed = 150;

// Add an event listener for the 'wheel' event
document.addEventListener('wheel', function(event) {
  // Prevent default scrolling behavior
  event.preventDefault();

  // Calculate the new scroll position
  let delta = event.deltaY;
  let scrollPosition = window.scrollY + (delta * scrollSpeed);

  // Set the new scroll position
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
}, { passive: false });

gsap.registerPlugin(ScrollTrigger)

const main = document.querySelector("main")

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
        end: `+${main.offsetWidth}`
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