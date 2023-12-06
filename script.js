var crsr = document.querySelector("#cursor");
var crsrbr = document.querySelector("#cursorblur");
document.addEventListener("mousemove",function(dtls){
    crsr.style.left = dtls.x-8+"px"
    crsr.style.top = dtls.y-8+"px"
    crsrbr.style.left = dtls.x-100+"px"
    crsrbr.style.top = dtls.y-100+"px"
})


gsap.to("#nav",{
    backgroundColor: "#000",
    height:"60px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        // markers:true,
        start: "top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main", {
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        // markers:true,
        start:"top -45vh",
        end:"top -90%",
        scrub:2
    }
})

 var h4all = document.querySelectorAll("#nav h4");
 h4all.forEach(function(e){
    e.addEventListener("mouseenter",function(){
       crsr.style.scale = 2
       crsr.style.border = "1.2px solid #fff"
       crsr.style.backgroundColor = "transparent"
    })
    e.addEventListener("mouseleave",function(){
       crsr.style.scale = 1
       crsr.style.border = "0px solid #fff"
       crsr.style.backgroundColor = "#95C11E"
    })
 }
 )

 gsap.from("#about-it img, .about-it-in", {
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
    trigger:"#about-it",
    scroll:"body",
    start:"top 68%",
    end:"top 64%",
    scrub:2
    }

 })
//  gsap.from(".card", {
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     stagger:0.1,
//     scrollTrigger:{
//     trigger:".card",
//     scroll:"body",
//     start:"top 70%",
//     end:"top 66%",
//     scrub:1
//     }

//  })

 gsap.from(".para",{
    x:-120,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#paragraph",
        scroll:"body",
        start:"top 35%",
        end:"top 25%",
        scrub:3
        }
 })
  gsap.from(".img",{
    x:100,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#paragraph",
        scroll:"body",
        start:"top 32%",
        end:"top 25%",
        scrub:3
        }
 })

 gsap.to(".imageContainer",{
    
    ease:Expo.easeInOut,
    width:"100%",
    duration:2,
    stagger: 2,
    repeat:100,
    })
    gsap.from(".distext", {
        y:100,
        opacity:0,
        duration:1,
        scrollTrigger:{
        trigger:".distext",
        scroll:"body",
        start:"top 68%",
        end:"top 63%",
        scrub:2
        }
    
     })

