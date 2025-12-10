import{a as u,S as d,i as n}from"./assets/vendor-Cq7ZUixy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",g="53640533-1ad844143519c7c1e76be4a36";function y(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};return u.get(m,{params:r}).then(a=>a.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:i,comments:f,downloads:p})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${a}" alt="${e}" loading="lazy" />
  </a>
  <div class="info">
    <p class="info-item">
      <span class="info-label">Likes</span>${t}
    </p>
    <p class="info-item">
      <span class="info-label">Views</span>${i}
    </p>
    <p class="info-item">
      <span class="info-label">Comments</span>${f}
    </p>
    <p class="info-item">
      <span class="info-label">Downloads</span>${p}
    </p>
  </div>
</li>`).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function q(){c.classList.add("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",P);function P(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query.",position:"topRight"});return}b(),S(),y(r).then(a=>{const o=a.hits;if(!o.length){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o)}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q(),s.target.reset()})}
//# sourceMappingURL=index.js.map
