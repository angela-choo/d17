function init(){function e(e){"about"==e.target.id?(r.classList.remove("hidden"),r.classList.add("fadeIn","items"),c.classList.add("hidden"),l.classList.add("hidden"),document.querySelector("#aboutheader").innerHTML="About Us",document.querySelector("#about-wrapper").style.backgroundImage="url('image/bg/about-us-bg-v2.jpg')"):"philosophy"==e.target.id?(c.classList.remove("hidden"),c.classList.add("fadeIn","items"),r.classList.add("hidden"),l.classList.add("hidden"),document.querySelector("#aboutheader").innerHTML="The Mon Sheong Philosophy",document.querySelector("#about-wrapper").style.backgroundImage="url('image/bg/ms-philosophy-bg.jpg')"):"team"==e.target.id?(l.classList.remove("hidden"),l.classList.add("fadeIn","items"),r.classList.add("hidden"),c.classList.add("hidden"),document.querySelector("#aboutheader").innerHTML="Meet the Team",document.querySelector("#about-wrapper").style.backgroundImage="none"):"overview"==e.target.id?(o.classList.remove("hidden"),o.classList.add("fadeIn","items"),u.classList.add("hidden"),L.classList.add("hidden"),m.classList.add("hidden"),h.classList.add("hidden"),g.classList.add("hidden"),p.classList.add("hidden"),v.classList.add("hidden"),document.querySelector("#discoverheader").innerHTML="Overview",document.querySelector("#discover-wrapper").style.backgroundImage="url('image/bg/overview-page.png')"):"trip"==e.target.id?(u.classList.remove("hidden"),u.classList.add("fadeIn","items"),o.classList.add("hidden"),L.classList.add("hidden"),m.classList.add("hidden"),h.classList.add("hidden"),g.classList.add("hidden"),p.classList.add("hidden"),v.classList.add("hidden"),document.querySelector("#discoverheader").innerHTML="Trip to China",document.querySelector("#discover-wrapper").style.backgroundImage="url('image/bg/trip-to-china-bg.png')"):"lessons"==e.target.id?(L.classList.remove("hidden"),L.classList.add("fadeIn","items"),o.classList.add("hidden"),u.classList.add("hidden"),m.classList.add("hidden"),h.classList.add("hidden"),g.classList.add("hidden"),p.classList.add("hidden"),v.classList.add("hidden"),document.querySelector("#discoverheader").innerHTML="Mandarin Course",document.querySelector("#discover-wrapper").style.backgroundImage="url('image/bg/mandarin-lesson-page.png')"):"retreat"==e.target.id?(m.classList.remove("hidden"),m.classList.add("fadeIn","items"),o.classList.add("hidden"),u.classList.add("hidden"),L.classList.add("hidden"),h.classList.add("hidden"),g.classList.add("hidden"),p.classList.add("hidden"),v.classList.add("hidden"),document.querySelector("#discoverheader").innerHTML="Leadership Retreat",document.querySelector("#discover-wrapper").style.backgroundImage="url('image/bg/leadership-retreat-page.png')"):"workshops"==e.target.id?(h.classList.remove("hidden"),h.classList.add("fadeIn","items"),o.classList.add("hidden"),u.classList.add("hidden"),L.classList.add("hidden"),m.classList.add("hidden"),g.classList.add("hidden"),p.classList.add("hidden"),v.classList.add("hidden"),document.querySelector("#discoverheader").innerHTML="Workshops",document.querySelector("#discover-wrapper").style.backgroundImage="url('image/bg/workshops-page.png')"):"speakers"==e.target.id?(g.classList.remove("hidden"),g.classList.add("fadeIn","items"),o.classList.add("hidden"),u.classList.add("hidden"),L.classList.add("hidden"),m.classList.add("hidden"),h.classList.add("hidden"),p.classList.add("hidden"),v.classList.add("hidden"),document.querySelector("#discoverheader").innerHTML="Speaker Series",document.querySelector("#discover-wrapper").style.backgroundImage="url('image/bg/speaker-series-page.png')"):"volunteer"==e.target.id?(p.classList.remove("hidden"),p.classList.add("fadeIn","items"),o.classList.add("hidden"),u.classList.add("hidden"),L.classList.add("hidden"),m.classList.add("hidden"),h.classList.add("hidden"),g.classList.add("hidden"),v.classList.add("hidden"),document.querySelector("#discoverheader").innerHTML="Volunteering",document.querySelector("#discover-wrapper").style.backgroundImage="url('image/bg/volunteering-page.png')"):"conference"==e.target.id&&(v.classList.remove("hidden"),v.classList.add("fadeIn","items"),o.classList.add("hidden"),u.classList.add("hidden"),L.classList.add("hidden"),m.classList.add("hidden"),h.classList.add("hidden"),g.classList.add("hidden"),p.classList.add("hidden"),document.querySelector("#discoverheader").innerHTML="Press Conference",document.querySelector("#discover-wrapper").style.backgroundImage="url('image/bg/press-conference-bg.png')")}function d(e){document.querySelector("#other").classList.remove("hidden");for(var d=0;d<k.length;d++)e.target.id.substr(1,1)==k[d].id.substr(1,1)?(k[d].classList.remove("hidden"),k[d].classList.add("fadeIn","items"),f[d].classList.add("selected")):(k[d].classList.add("hidden"),f[d].classList.remove("selected"))}function s(){C(0,400)}function t(e){e.preventDefault(),window.location.href.split("#")[0]}function a(e){"links1"==e.target.id?C(I,400):"links2"==e.target.id||"links3"==e.target.id?C(I+900,400):"links5"==e.target.id?C(I+2700,400):"links4"==e.target.id?C(I+3600,400):"links6"==e.target.id?C(I+4500,400):"links7"==e.target.id&&C(I+1800,400),console.log(e.target.id)}function i(e){C(I,400),"links1"==e.target.id?(r.classList.remove("hidden"),r.classList.add("fadeIn","items"),c.classList.add("hidden"),l.classList.add("hidden"),document.querySelector("#aboutheader").innerHTML="About Us",document.querySelector("#about-wrapper").style.backgroundImage="url('image/bg/about-us-bg-v2.jpg')"):"msf-link"==e.target.id?(c.classList.remove("hidden"),c.classList.add("fadeIn","items"),r.classList.add("hidden"),l.classList.add("hidden"),document.querySelector("#aboutheader").innerHTML="The Mon Sheong Philosophy",document.querySelector("#about-wrapper").style.backgroundImage="url('image/bg/ms-philosophy-bg.jpg')"):"team-link"==e.target.id&&(l.classList.remove("hidden"),l.classList.add("fadeIn","items"),r.classList.add("hidden"),c.classList.add("hidden"),document.querySelector("#aboutheader").innerHTML="Meet the Team",document.querySelector("#about-wrapper").style.backgroundImage="none")}function n(){window.pageYOffset>150?(w.style.display="block",w.classList.add("fadeIn","items"),w.classList.remove("fadeOut")):window.pageYOffset<150?(w.classList.add("fadeOut","items"),w.classList.remove("fadeIn")):w.style.display="none"}for(var r=document.getElementById("aboutContent"),c=document.getElementById("philosophyContent"),l=document.getElementById("teamContent"),o=document.getElementById("discoverContent"),u=document.getElementById("tripContent"),L=document.getElementById("lessonsContent"),m=document.getElementById("retreatContent"),h=document.getElementById("workshopsContent"),g=document.getElementById("speakersContent"),p=document.getElementById("volunteerContent"),v=document.getElementById("conferenceContent"),y=document.querySelectorAll(".pages"),b=0;b<y.length;b++)y[b].addEventListener("click",e,!1);for(var f=document.querySelectorAll(".categories li"),k=document.querySelectorAll(".answers"),b=0;b<f.length;b++)f[b].addEventListener("click",d,!1),f[b].setAttribute("id","q"+(b+1));for(var b=0;b<k.length;b++)k[b].setAttribute("id","a"+(b+1));var I=800,w=document.querySelector(".scrollToTop");w.addEventListener("click",t,!1),w.addEventListener("click",s,!1);var S=document.getElementById("logo");S.addEventListener("click",t,!1),S.addEventListener("click",s,!1);for(var q=document.querySelectorAll("a.links"),b=0;b<q.length;b++)q[b].setAttribute("id","links"+(b+1)),q[b].addEventListener("click",t,!1),q[b].addEventListener("click",a,!1);var E=document.querySelector("#links1");E.addEventListener("click",t,!1),E.addEventListener("click",i,!1);var T=document.querySelector("#msf-link");T.addEventListener("click",t,!1),T.addEventListener("click",i,!1);var M=document.querySelector("#team-link");M.addEventListener("click",t,!1),M.addEventListener("click",i,!1),window.addEventListener("scroll",n,!1);var C=function(){var e,d,s;return function(t,a){function i(){var t;s=(Date.now()-d)/a,s>=1&&(clearInterval(e),s=1),t=s*r+n,window.scrollBy(0,t-window.pageYOffset)}var n=window.pageYOffset,r=t-window.pageYOffset;return a=a||1e3,d=Date.now(),s=0,e&&clearInterval(e),e=setInterval(i,10)}}()}window.addEventListener("load",init);