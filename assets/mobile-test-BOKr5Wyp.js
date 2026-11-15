const s=`
/* управление поверх картинки, слегка видимое */
#touch-ui #joy { opacity: .38; background: rgba(255,255,255,.08); }
#touch-ui #joy-knob { background: rgba(255,210,122,.45); }
#touch-ui #tbtns button { opacity: .42; background: rgba(30,35,50,.35); border-color: rgba(255,255,255,.55); }
#touch-ui #tbtns button.big { background: rgba(190,60,60,.45); }
#touch-ui #tbtns button.on { opacity: .85; }
#touch-ui #joy:active { opacity: .6; }
/* низкие экраны (телефон в ландшафте): компактнее, не закрывает картинку */
@media (max-height: 480px) {
  #joy { left: 14px; bottom: 14px; width: 104px; height: 104px; }
  #joy-knob { width: 44px; height: 44px; }
  #tbtns { right: 10px; bottom: 10px; width: 196px; gap: 8px; }
  #tbtns button { width: 48px; height: 48px; font-size: 10px; }
  #tbtns button.big { width: 68px; height: 68px; font-size: 12px; }
  #tbtns button.small { width: 44px; height: 30px; }
}
/* диалог не заезжает под кнопки */
@media (pointer: coarse) { #dlg { width: min(860px, calc(100vw - 340px)); } }
/* кнопка «на весь экран» */
#fs-btn { position: fixed; top: 6px; left: 50%; transform: translateX(-50%); z-index: 15; opacity: .4; font: bold 12px "Courier New", monospace; color: #fff; background: rgba(20,25,40,.6); border: 1px solid rgba(255,255,255,.5); border-radius: 14px; padding: 4px 12px; cursor: pointer; }
#fs-btn:active { opacity: .9; }
body.is-fs #fs-btn { display: none; }
#rotate-hint .fs { margin-top: 4px; }
/* ?touch=1 — принудительно показать сенсорное управление на ПК для проверки */
${new URLSearchParams(location.search).get("touch")?"#touch-ui.hidden { display: block !important; }":""}
`,i=document.createElement("style");i.textContent=s;document.head.appendChild(i);async function c(){var n;const t=document.documentElement;try{document.fullscreenElement||await(t.requestFullscreen||t.webkitRequestFullscreen).call(t)}catch{}try{await screen.orientation.lock("landscape")}catch{}(n=document.getElementById("rotate-hint"))==null||n.classList.add("dismissed")}const e=document.createElement("button");e.id="fs-btn";e.type="button";e.textContent="⛶ На весь экран";e.addEventListener("click",c);document.body.appendChild(e);const o=document.getElementById("rotate-hint");if(o){const t=document.createElement("button");t.type="button",t.className="fs",t.textContent="На весь экран (альбомно)",t.addEventListener("click",c),o.insertBefore(t,document.getElementById("rotate-ok"))}const d=()=>{document.body.classList.toggle("is-fs",!!document.fullscreenElement),setTimeout(()=>window.__game&&window.__game.scale.refresh(),150)};document.addEventListener("fullscreenchange",d);window.addEventListener("resize",()=>window.__game&&window.__game.scale.refresh());
