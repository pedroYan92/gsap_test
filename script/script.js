const btnMenu = document.querySelectorAll('#btn');

gsap.from(btnMenu, {
  y: 500,
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
  ease: 'back',
});

btnMenu.forEach(function (btn) {
  btn.addEventListener('mouseenter', function (e) {
    const mouseIn = gsap.to(e.target, {
      duration: 0.2,
      scale: 1.2,
      ease: 'back',
    });

    mouseIn.play();
  });

  btn.addEventListener('mouseover', function (e) {
    console.log('mouse is over');
    const over = gsap.to(e.target, {
      duration: 0.3,
      rotate: 10,
      ease: 'back',
      onComplete: function () {
        gsap.to(e.target, {
          duration: 0.3,
          rotate: -10,
          ease: 'back',
          onComplete: () =>
            gsap.to(e.target, {
              repeat: 5,
            }),
        });
      },
    });
  });

  console.log('adding just for the test');

  btn.addEventListener('mouseleave', function (e) {
    const mouseOut = gsap.to(e.target, {
      duration: 0.2,
      scale: 1,
      rotate: 0,
      ease: 'back',
    });
    mouseOut.play();
  });
});

new fullpage('#fullpage', {
  autoScrolling: true,
  scrollHorizontally: true,

  onLeave: function (video, destination, direction) {
    console.log('Leaving section' + video);
  },
});

// var tl = gsap.timeline({ defaults: { duration: 3 } });

//no more repitition of duration: 1!
