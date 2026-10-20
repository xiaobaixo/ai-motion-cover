const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const clips=new Map();
document.querySelectorAll('.series-replacement').forEach(figure=>{
 const video=figure.querySelector('video'),toggle=figure.querySelector('.animation-toggle');if(!video||!toggle)return;
 video.muted=true;let loaded=false,userPaused=reducedMotion,near=false;
 const load=()=>{if(loaded)return;loaded=true;video.querySelectorAll('source[data-src]').forEach(source=>{source.src=source.dataset.src});video.load()};
 const sync=()=>{toggle.textContent=video.paused?'播放':'暂停';toggle.setAttribute('aria-label',video.paused?'播放动画':'暂停动画')};
 const play=()=>{load();video.play().catch(sync)};
 toggle.addEventListener('click',()=>{if(video.paused){userPaused=false;play()}else{userPaused=true;video.pause()}});
 video.addEventListener('play',sync);video.addEventListener('pause',sync);sync();
 clips.set(figure,{near:value=>{near=value;if(value){if(!userPaused)play()}else video.pause()},resume:()=>{if(near&&!userPaused)play()},pause:()=>video.pause()});
});
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>clips.get(entry.target).near(entry.isIntersecting)),{rootMargin:'150px 0px',threshold:0});clips.forEach((_,figure)=>observer.observe(figure))}else clips.forEach(clip=>clip.near(true));
document.addEventListener('visibilitychange',()=>clips.forEach(clip=>document.hidden?clip.pause():clip.resume()));
