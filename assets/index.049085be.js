(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}})();const d=document.getElementById("buttonMenu"),o=document.getElementById("mainHeader"),a=document.getElementById("mainOverlay"),u="is-active",l=matchMedia("(max-width : 734px)"),m=()=>o.classList.toggle(u),s=()=>o.classList.remove(u);document.onscroll=s;const f=n=>{n.target.tagName==="A"&&s()},v=n=>{n.code==="Escape"&&s()},L=()=>{d.addEventListener("click",m),a.addEventListener("click",s),o.addEventListener("click",f),o.addEventListener("keydown",v)},y=()=>{d.removeEventListener("click",m),a.removeEventListener("click",s),o.removeEventListener("click",f),o.removeEventListener("keydown",v)},E=n=>{n.matches?L():y()},h=()=>{l.matches&&L(),l.addEventListener("change",E)};h();
