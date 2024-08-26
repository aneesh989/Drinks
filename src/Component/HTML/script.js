let mm2 = gsap.matchMedia();

mm2.add("(min-width: 800px)", () => {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section2',
            start: '50% 50%',
            end: '200% 100%',
            scrub: 1,
            markers: true
        }
    });

    tl2.to('#fanta', {
        top: "220%",
        left: "35%",
        width: "30vw",
    }, 'time1')
        .to('#orange2', {
            top: "220%",
            left: "40%",
            width: "20vw",
        }, 'time1')
        .from('#pineapplecut', {
            y: 500,
            x: -900,
            rotate: -90,
        }, 'time1')
        .from('#pineapple', {
            y: 300,
            x: -700,
            rotate: -90,
        }, 'time1')
        .from('#orangefruit', {
            y: 500,
            x: 900,
            rotate: 90,
        }, 'time1')
        .from('#yellow', {
            y: 300,
            x: 700,
            rotate: 90,
        }, 'time1')
});

mm2.add("(max-width: 799px)", () => {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section3',
            start: '0% 90%',
            end: '100% 100%',
            scrub: 1,
            markers: true
        }
    });

    tl2.from('#pineapplecut', {
        y: 500,
        x: -900,
        rotate: -90,
    }, 'time1')
        .from('#pineapple', {
            y: 300,
            x: -700,
            rotate: -90,
        }, 'time1')
        .from('#orangefruit', {
            y: 500,
            x: -900,
            rotate: -90,
        }, 'time1')
        .from('#yellow', {
            y: 300,
            x: -700,
            rotate: -90,
        }, 'time1')
        .from('#resp-orange', {
            y: 500,
            x: 900,
            rotate: 90,
        }, 'time1')
        .from('#resp-fanta', {
            y: 300,
            x: 700,
            rotate: 90,
        }, 'time1')
});





