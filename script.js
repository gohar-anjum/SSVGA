let initialValue=`M 20 150 Q 600 150 1180 150`;
let finalValue=`M 20 150 Q 600 150 1180 150`;
var nav = document.querySelector(".nav");
nav.addEventListener("mousemove", function (dets){
    
    initialValue =  `M 20 150 Q ${dets.x} ${dets.y} 1180 150`
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