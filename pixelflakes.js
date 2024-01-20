gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



function page1loader(){
     var img1=document.querySelector("#img1");
     var img2=document.querySelector("#img2");
     var p=document.querySelector("#page1loader p");
     var tl=gsap.timeline();
     tl.from("#img1",{
          scale:0,
          duration:.3,
          ease:'linear',
          delay:1,
     },"elem1")
     tl.from("#page1loader p",{
          opacity:0,
          y:20,
          duration:1,
     },"elem1")
     tl.from("#img2",{
          scale:0,
          duration:.3,
          ease:'linear',
          // delay:1,
     })
     tl.to("#img1",{
          scale:0,
          duration:.3,
          ease:'linear',
          delay:1,
     },"elem")
     tl.from("#img3",{
          scale:0,
          duration:.3,
          ease:'linear',
          delay:1,
     })
     tl.to("#img2",{
          scale:0,
          duration:.3,
          ease:'linear',
          delay:1,
     })
     tl.to("#img3",{
          scale:2,
          width:"40%",
          height:"30%",
          duration:.3,
          // left:"-10%",
          ease:'linear',
          // delay:1,
     })
     tl.to("#page1loader",{
          // opacity:0,
          backgroundColor:"rgb(151, 135, 135)",
          duration:1,
     })
     tl.to("#page1nav",{
          opacity:1,
          // backgroundColor:"rgb(151, 135, 135)",
          // duration:1,
     })
     tl.to("#page1loader p",{
          color:"black",
          duration:1,
          // top:"-1px",
     })
}


page1loader();



function page1Animation(){
     var page1=document.querySelector("#page1");
     var tl=gsap.timeline({
          scrollTrigger:{
               trigger:"#page1loader",
               scroller:"#page1",
               pin:true,
               // markers:true,
               scrub:2,
               // start:"top 30%",
               

          }
     })

     tl.to("p",{
          opacity:0,
          duration:1,
     })

}
page1Animation();


function page2Animation(){
     gsap.from("#para",{
          opacity:0,
          y:30,
          duration:1,
          scrollTrigger:{
               trigger:"#heading",
               scroller:"#main",
               // markers:true,
               scrub:2,
          }
     })
}
page2Animation();



function page3Animation(){


     
     var cursor1=document.querySelector(".cursor1");
     var page3=document.querySelector("#page3");
     page3.addEventListener("mouseenter",function(){
          cursor1.style.scale=1;
     })
     page3.addEventListener("mouseleave",function(){
          cursor1.style.scale=0;
     })
     page3.addEventListener("mousemove",function(dets){
          cursor1.style.left=dets.x+"px";
          cursor1.style.top=dets.y+"px";
     })
     gsap.to("#imgleft img",{
          scale:1.5,
          duration:.5,
          scrollTrigger:{
               trigger:"#imgs",
               scroller:"#main",
               // markers:true,
               scrub:1
          }
     })
     gsap.to("#imgright img",{
          scale:1.5,
          duration:.5,
          scrollTrigger:{
               trigger:"#imgs",
               scroller:"#main",
               // markers:true,
               scrub:1
          }
     })
     gsap.to("#outerimg img",{
          scale:1.5,
          duration:.5,
          scrollTrigger:{
               trigger:"#outerimg",
               scroller:"#main",
               // markers:true,
               scrub:1
          }
     })
}
page3Animation();


function page4Animation(){
     var tl=gsap.timeline({
          scrollTrigger:{
               trigger:"#page4",
               scroller:"#main",
               // markers:true,
               scrub:1,
               pin:true,
          }
     });
     tl.from(".moveimg3",{
          top:"-350%",
          opacity:0,
          duration:.5,
     })
     .from(".moveimg1",{
          top:"-250%",
          opacity:0,
          duration:.5,
     
     },"elem")
     .from(".moveimg2",{
          top:"-200%",
          opacity:0,
          duration:.5,
     
     },"elem")
   
     var cursor=document.querySelector(".cursor");
     var page4=document.querySelector("#page4");
     page4.addEventListener("mouseenter",function(){
          cursor.style.scale=1;
     })
     page4.addEventListener("mouseleave",function(){
          cursor.style.scale=0;
     })
     page4.addEventListener("mousemove",function(dets){
          cursor.style.left=dets.x+"px";
          cursor.style.top=dets.y+"px";
     })

}
page4Animation();


function page5Animation(){
     gsap.from("#page5 p",{
          y:40,
          duration:1,
          opacity:0,
          scrollTrigger:{
               trigger:"#page5",
               scroller:'#main',
               // markers:true,
               top:"top 90",
               // scrub:1,

          }
     })
}
page5Animation();