gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);



let cursor = gsap.to(".cursor", {
    opacity: 0, 
    ease: "power2.inOut", 
    repeat: -1
});

var tl = gsap.timeline();

ScrollTrigger.create({
    animation: tl,
    trigger: ".laptop-conteiner",
    start: "top 65%",
    end: "top 1%",
    scrub: "true",
    markers: "true"
});

tl.from(".laptop", {
    scale: 0.4,
    duration: 6,
    opacity: 0,
    y: -300,
});

tl.from(".upper", {

    duration: 2, 
    rotationX: 90, 
    ease: 'linear',
    duration: 2, 
    transformOrigin: "0% 100%"});

tl.from(".terminal-text-1", {
    duration: 0.1, 
    delay: 1, 
    opacity: 0
});

mySplitText1 = new SplitText(".type-text-1", { 
    type: "words,chars" 
});

chars = mySplitText1.chars;

tl.from(chars, {
    duration: 0.1,
    delay: 1,
    opacity: 0,
    scale: 0,
    stagger: 0.1
  });

tl.from(".terminal-text-2", {
    duration: 0.1, 
    opacity: 0, 
    delay: 1
});

mySplitText1 = new SplitText(".type-text-2", {
    type: "words,chars" 
});

chars = mySplitText1.chars;

tl.from(chars, {
    duration: 0.1,
    opacity: 0,
    delay: 1,
    scale: 0,
    stagger: 0.1
  });

tl.from(".file-text", {
    duration: 0.1, 
    delay: 1, 
    opacity: 0
});

tl.from(".type-text-3", {
    duration: 0.1, 
    delay: 1, 
    opacity: 0
});

