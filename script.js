let left=document.querySelector('.left');
let right=document.querySelector('.right');


let img1=document.querySelector('.dec-1__img1');


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

