/* ===== Marché Freshco — motion ===== */
gsap.registerPlugin(ScrollTrigger);

/* ---- Lenis smooth scroll ---- */
let lenis;
function initLenis(){
  lenis = new Lenis({ duration:1.1, easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)), smoothWheel:true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t)=>lenis.raf(t*1000));
  gsap.ticker.lagSmoothing(0);
}

/* ---- Preloader ---- */
function preloader(){
  const pl = document.getElementById('preloader');
  if(!pl){ return; } // pages without a preloader (e.g. products)
  const tl = gsap.timeline();
  tl.to('.preloader__ring',{scale:1.6,duration:.6,ease:'power2.out'})
    .to('.preloader__word',{opacity:1,duration:.2},'-=.2')
    .to('.preloader__word span',{y:0,duration:.7,ease:'power3.out',stagger:.08},'-=.1')
    .to('.preloader__ring',{scale:26,duration:.9,ease:'power3.inOut'},'+=.25')
    .to('.preloader__word',{opacity:0,duration:.3},'-=.7')
    .to(pl,{autoAlpha:0,duration:.4,onComplete:()=>{pl.style.display='none';}})
    .add(heroIn,'-=.3');
}

/* ---- Hero intro ---- */
function heroIn(){
  gsap.to('.hero__title .w',{y:0,duration:1,ease:'power4.out',stagger:.08});
  gsap.from('.hero__produce',{scale:.7,opacity:0,duration:1.2,ease:'power3.out'},0);
  gsap.from('.hero__tags, .hero__sub, .hero__scroll',{y:24,opacity:0,duration:.9,ease:'power3.out',stagger:.1,delay:.3});
}

/* ---- Nav scroll state ---- */
function navState(){
  const nav = document.getElementById('nav');
  ScrollTrigger.create({
    start:'top -80', end:99999,
    onUpdate:(s)=>nav.classList.toggle('is-scrolled', s.scroll()>80)
  });
}

/* ---- Hero produce parallax ---- */
function heroParallax(){
  gsap.to('.hero__produce',{yPercent:18,ease:'none',
    scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  gsap.to('.hero__num',{yPercent:-40,ease:'none',
    scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
}

/* ---- Marquee infinite ---- */
function marquee(){
  const track = document.querySelector('.marquee__track');
  if(!track) return;
  const half = track.scrollWidth/2;
  gsap.to(track,{x:-half,duration:22,ease:'none',repeat:-1});
  // nudge speed with scroll velocity
  let vel=0;
  if(lenis) lenis.on('scroll',({velocity})=>{vel=velocity;});
}

/* ---- Manifesto line reveal ---- */
function manifesto(){
  gsap.set('.reveal-lines span',{yPercent:110});
  gsap.to('.reveal-lines span',{yPercent:0,duration:1,ease:'power4.out',stagger:.12,
    scrollTrigger:{trigger:'.manifesto',start:'top 70%'}});
}

/* ---- Generic reveal-up ---- */
function reveals(){
  gsap.utils.toArray('.reveal-up').forEach((el)=>{
    gsap.to(el,{opacity:1,y:0,duration:.9,ease:'power3.out',
      scrollTrigger:{trigger:el,start:'top 85%'}});
  });
}

/* ---- Big category numbers parallax ---- */
function catNumbers(){
  gsap.utils.toArray('[data-num]').forEach((num)=>{
    gsap.fromTo(num,{yPercent:12},{yPercent:-12,ease:'none',
      scrollTrigger:{trigger:num.closest('.cat'),start:'top bottom',end:'bottom top',scrub:true}});
  });
}

/* ---- Category media subtle scale on scroll ---- */
function catMedia(){
  gsap.utils.toArray('.cat__media img').forEach((img)=>{
    gsap.fromTo(img,{scale:1.18},{scale:1,ease:'none',
      scrollTrigger:{trigger:img,start:'top 90%',end:'top 30%',scrub:true}});
  });
}

/* ---- Stat count up ---- */
function stats(){
  gsap.utils.toArray('.stat b[data-count]').forEach((el)=>{
    const raw=el.dataset.count;
    const target=parseFloat(raw);
    const decimals=(raw.split('.')[1]||'').length;
    const obj={v:0};
    ScrollTrigger.create({trigger:el,start:'top 85%',once:true,onEnter:()=>{
      gsap.to(obj,{v:target,duration:1.4,ease:'power2.out',
        onUpdate:()=>{el.textContent=obj.v.toFixed(decimals);}});
    }});
  });
}

/* ---- Mobile menu (simple smooth-scroll close) ---- */
function burger(){
  const b=document.getElementById('burger');
  const nav=document.getElementById('nav');
  if(!b||!nav) return;
  const close=()=>{ nav.classList.remove('is-open'); if(lenis) lenis.start(); };
  b.addEventListener('click',()=>{
    const open=nav.classList.toggle('is-open');
    if(lenis){ open ? lenis.stop() : lenis.start(); }
  });
  nav.querySelectorAll('.nav__links a').forEach(a=>a.addEventListener('click',close));
}

/* ---- Anchor links via lenis ---- */
function anchors(){
  document.querySelectorAll('a[href^="#"]').forEach((a)=>{
    a.addEventListener('click',(e)=>{
      const id=a.getAttribute('href');
      if(id.length<2) return;
      const t=document.querySelector(id);
      if(t){e.preventDefault(); lenis?lenis.scrollTo(t):t.scrollIntoView({behavior:'smooth'});}
    });
  });
}

/* ---- Shop category scroll-spy ---- */
function shopSpy(){
  const nav=document.getElementById('shopnav');
  if(!nav) return;
  const links=[...nav.querySelectorAll('a')];
  links.forEach((a)=>{
    const sec=document.querySelector(a.getAttribute('href'));
    if(!sec) return;
    ScrollTrigger.create({trigger:sec,start:'top 40%',end:'bottom 40%',
      onToggle:(s)=>{ if(s.isActive){links.forEach(l=>l.classList.remove('is-active')); a.classList.add('is-active');}}});
  });
}

window.addEventListener('load',()=>{
  initLenis();
  navState(); heroParallax(); marquee(); manifesto(); reveals();
  catNumbers(); catMedia(); stats(); burger(); anchors(); shopSpy();
  preloader();
  ScrollTrigger.refresh();
});
