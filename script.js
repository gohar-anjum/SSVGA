let initialValue=`M 20 100 Q 600 100 1180 100`;
let finalValue=`M 20 100 Q 600 100 1180 100`;
var nav = document.querySelector(".nav");
nav.addEventListener("mousemove", function (dets){
    
    initialValue =  `M 20 100 Q ${dets.x} ${dets.y} 1180 100`
    gsap.to("svg path", {
        attr:{d:initialValue},
        duration:0.3,
        ease:"power3.out"
    })

})

nav.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr:{d:finalValue},
        duration:1,
        ease:"elastic.out(1, 0.2)"
    })
})