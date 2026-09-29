// Small decorative heart particles; no external libraries required.
const holder = document.querySelector(".hearts");
if(holder){
  for(let i=0;i<12;i++){
    const s=document.createElement("span");
    s.textContent="♥";
    s.style.position="fixed";
    s.style.left=(Math.random()*100)+"vw";
    s.style.top=(100+Math.random()*20)+"vh";
    s.style.color="#ff5f91";
    s.style.opacity=(.08+Math.random()*.16).toFixed(2);
    s.style.fontSize=(10+Math.random()*18)+"px";
    s.style.pointerEvents="none";
    s.style.animation=`rise ${7+Math.random()*7}s linear ${Math.random()*6}s infinite`;
    holder.appendChild(s);
  }
  const st=document.createElement("style");
  st.textContent="@keyframes rise{to{transform:translateY(-125vh) rotate(360deg);opacity:0}}";
  document.head.appendChild(st);
}