let left=document.querySelector('.left');
let right=document.querySelector('.right');

gsap.to(left,{
    x:'-80%',
    rotate:'-5deg',
    duration:'7',
    ease: "expoScale(0.5,7,none)",
    scrollTrigger:{
        trigger:left,
        scroller:'body',
        end:'top 20%',
        start:'top 70%',
        scrub:true,
  
        //markers:true
    }
})

gsap.to(right,{
    x:'80%',
    rotate:'5deg',
    duration:'7',
    ease: "expoScale(0.5,7,none)",
    scrollTrigger:{
        trigger:left,
        scroller:'body',
        end:'top 20%',
        start:'top 70%',
        scrub:true,
        //markers:true
    }
})

