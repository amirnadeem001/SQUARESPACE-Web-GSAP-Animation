// const scroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,
// });

let tl = gsap.timeline();

tl.from(".logo", {
  scale: 1.1,
});
tl.from(".list-item", {
  y: -100,
  stagger: 0.5,
});
tl.from(".button", {
  x: -100,
  opacity: 0,
});
tl.from("h1", {
  opacity: 0,
  y: 30,
  stagger: 0.5,
});
tl.from(".pics", {
  opacity: 0,
  scale: 0.6,
});
tl.from(".scrl", {
  opacity: 0,
  y: 15,
});
tl.to(".scrl", {
  delay: 0.8,
  y: 10,
  repeat: -1,
  yoyo: true,
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  delay: 0.5,
  y: 20,
  stagger: 0.5,

  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "-80% 30%",
    end: "+=40%",
    scrub: 1,
  },
});

const newAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "top 0%",
    end: "50% 10% ",
    pin: true,
    pinSpacing: true,
    scroller: "body",
    scrub: 8,
  },
});

newAnimation
  .to(".tag", {
    transform: "translateX(-155%)",
    duration: 3,
  })
  .from(
    ".final",
    {
      y: 1000,
      scale: 0.1,
      duration: 1,
    },
    "-=1.5"
  );
