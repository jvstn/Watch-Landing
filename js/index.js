$(document).ready(function () {
    var hero_tl = new gsap.timeline();
    hero_tl.from(".slide", {

        y: 200,
        duration: 1.5,




    });

    var heroCtrl = new ScrollMagic.Controller();
    var heroScene = new ScrollMagic.Scene({
            triggerElement: ".about-block",
            triggerHook: 1
        })
        .setTween(hero_tl)
        .addTo(heroCtrl);



    var about_tl = new gsap.timeline();
    about_tl.from(".rate", {

        x: -400,
        duration: 1.5,




    });

    var aboutCtrl = new ScrollMagic.Controller();
    var aboutScene = new ScrollMagic.Scene({
            triggerElement: ".rate",
            triggerHook: 1
        })
        .setTween(about_tl)
        .addTo(aboutCtrl);




    var features_tl = new gsap.timeline();
    features_tl.from(".stagger", {
        stagger: .1,
        x: -400,
        duration: 1,




    });

    var featuresCtrl = new ScrollMagic.Controller();
    var featuresScene = new ScrollMagic.Scene({
            triggerElement: ".stagger",
            triggerHook: 1
        })
        .setTween(features_tl)
        .addTo(featuresCtrl);






    });
    
    function changePicture(imgs) {

        const featurePic = document.getElementById('feat');

        featurePic.src = imgs.src;


    }