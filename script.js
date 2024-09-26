let left=document.querySelector('.left');
let right=document.querySelector('.right');


let img1=document.querySelector('.dec-1__img1');
let sec__archPointer=document.querySelector('.sec__arch--pointer');
let sec__archCenter=document.querySelector('.sec__arch--center');
//by using function
let move=(target)=>{
    gsap.from(target,{
        opacity:0,
        scale:'0',
        duration:2.5,
        ease: "expo.out",
    })
}
move('.dec-1__img1');
move('.dec-1__img2');
move('.dec-1__img3');
move('.dec-1__img4');

gsap.to(left,{
    x:'-99%',
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
    x:'98%',
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

document.addEventListener('mousemove',(e)=>{
    //console.log(e);
    gsap.to(sec__archPointer,{
        x:e.x,
      
        y:e.y,
        
        ease: "power4.out"

    })
})


gsap.from('.sec__arch h4',{
    opacity:0,
    delay:0.5,
    scrollTrigger:{
        trigger:'.sec__arch h4',
        scroller:'body',
        start:'top 55%',
        end:'top 25%',
        scrub:true,
        //markers:true

    }
})

// sec__archCenter.addEventListener('mouseenter',(e)=>{
//     sec__archPointer.style.width="100px";
//     sec__archPointer.style.height="100px";
//     sec__archPointer.style.backgroundColor="red";
// })

gsap.from('.seven',{
    rotateY:'-180deg',
    // duration:2.6,
    duration:5,
    ease: "sine.out",
    scrollTrigger:{
        trigger:'.seven',
        scroller:'body',
        // markers:true,
        start:'top 60%',
        end:'top 10%',
        scrub:true
        
    }
})


gsap.from('.sec__bg--patch',{
    opacity:0,
    left:-35,
    duration:0.5,
    scrollTrigger:{
        trigger:'.sec__bg--patch',
        scroller:'body',
        //markers:true,
        start:'top 60%',
        end:'top 10%',
        scrub:true
        
        
    }
})


gsap.to('.sec__zoom',{
    clipPath: 'circle(calc(60%) at 67% 41%)',
    duration:2.5,
    ease: "power4.out",
    scrollTrigger:{
        trigger:'.sec__zoom',
        scroller:'body',
        markers:true,
        start:'top 30%',
        end:'top -30%',
        scrub:true
        
        
    }
})