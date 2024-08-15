
gsap.from("#para1" ,{
    opacity:0,
    x:-100,
    duration:0.5,
    scrub:2
    

})

gsap.from("#para2" ,{
    opacity:0,
    x:100,
    duration:3,
    delay:0.9,
    scrub:3


})

gsap.from("#txt" ,{
    opacity:0,
   scale:0.2,
   duration:5,
   delay:0.2,
   scrub:3

})

var tl=gsap.timeline()
 tl.to(".bal",{
    y: 20, 
    duration: 1.5,
    repeat: -1, 
    ease: 'bounce.out',
    scrub:2,stagger:1
   
     
 })

  tl.from(".bal2",{
    y: -20, 
    duration: 1.5,
    repeat: -1, 
    ease: 'bounce.out',
    scrub:2,
    stagger:1
     

});
tl.from(".bal3",{
    y: 20, 
    duration: 1.5,
    repeat: -1, 
    ease: 'bounce.out',
    scrub:2,
    stagger:1

});
tl.from(".bal4",{
    y: -20, 
    duration: 1.5,
    repeat: -1, 
    ease: 'bounce.out',
    scrub:2,
    stagger:1

});

gsap.from( "#edubox1" ,{
   duration:1,
   delay:0.2,
   x:-150,
   opacity:0,

   scrollTrigger:{
    trigger:".box1",  
    scroller:"body",
    start:"top 70%",
    end:"top 15%",
    scrub:3
}
})
gsap.from( "#edubox2" ,{
    duration:1,
    delay:0.25,
    x:150,
    opacity:0,
 
    scrollTrigger:{
     trigger:".box1",  
     scroller:"body",
     start:"top 60%",
     end:"top 10%",
     scrub:3
 }
 })

 gsap.from( "#edubox3" ,{
    duration:1,
    delay:0.3,
    x:-150,
    opacity:0,
 
    scrollTrigger:{
     trigger:".box1",  
     scroller:"body",
     start:"top 70%",
     end:"top 5%",
     scrub:3
 }
 })

 
const myTween = gsap.to('#flower', {
    rotation: 360,
    // ease: "slow(20, 20, true)",
    duration:70, 
    repeat:-1,
})

TweenMax.to("#img2", 0.1, { x: "+=20",y: "+=20", yoyo: true, repeat:15,
    scrollTrigger:{
        trigger:"#img2",  
        scroller:"body",
        start:"top 70%",
        end:"top 5%",
        scrub:5
    }
 });
TweenMax.to("#img2", 0.1, { x: "-=20",y: "+=30", yoyo: true, repeat:15,
    duration:8,
    scrollTrigger:{
        trigger:"#img2",  
        scroller:"body",
        
        start:"top 70%",
        end:"top 5%",
        scrub:5
    }
 });
 gsap.from("#para3" ,{
    opacity:0,
    x:-100,
    duration:3,
    delay:0.9,
    scrub:3
    


})
gsap.from(".para4" ,{
    opacity:0,
    x:-100,
    duration:3,
    delay:0.9,
    scrub:3,
    scrollTrigger:{
        trigger:".para4",  
        scroller:"body",
        
        start:"top 70%",
        end:"top 5%",
        scrub:2
    }


});


