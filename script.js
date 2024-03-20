window.addEventListener("mousemove",function (details) {
    var r=document.querySelector("#rect");
       var x= gsap.utils.mapRange(0,window.innerWidth,100+r.getBoundingClientRect().width/2,window.innerWidth-(100+r.getBoundingClientRect().width/2),details.clientX)
        gsap.to("#rect", {
             left: x + "px",
             ease: Power3

        });

    });