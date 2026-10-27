(()=>{
'use strict';
const allowed=['home','notes','papers','feedback','library','tracker'];
const themeKey='proofdesk-theme-v1';const trackerKey='proofdesk-progress-v1';
const doc=document.documentElement;const q=s=>document.querySelector(s);const all=s=>[...document.querySelectorAll(s)];
function safeGet(k){try{return localStorage.getItem(k)}catch{return null}}
function safeSet(k,v){try{localStorage.setItem(k,v);return true}catch{return false}}
const osDark=()=>window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches;
let theme=safeGet(themeKey);theme=(theme==='dark'||theme==='light')?theme:(osDark()?'dark':'light');
function applyTheme(t){theme=t;doc.dataset.theme=t;const b=q('#themeButton');b.setAttribute('aria-pressed',String(t==='dark'));b.querySelector('.theme-button-text').textContent=t==='dark'?'Light mode':'Dark mode';safeSet(themeKey,t)}
applyTheme(theme);q('#themeButton').addEventListener('click',()=>applyTheme(theme==='dark'?'light':'dark'));
function route(){const wanted=window.location.hash.slice(1).toLowerCase();const active=allowed.includes(wanted)?wanted:'home';all('main .view').forEach(s=>s.hidden=s.id!==active);all('[data-route]').forEach(a=>{if(a.dataset.route===active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});document.title=({home:'The Proof Desk',notes:'Study Notes',papers:'Exam Papers',feedback:'Proof Feedback',library:'Reading Library',tracker:'My Progress'})[active]+' | The Proof Desk';window.scrollTo({top:0,behavior:'instant'})}
window.addEventListener('hashchange',route);route();
const ukDate=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',day:'numeric',month:'short',year:'numeric'});q('#todayLabel').textContent=ukDate.format(new Date());
const target=Date.UTC(2026,10,18,0,0,0);const now=Date.now();const days=Math.max(0,Math.ceil((target-now)/86400000));q('#daysRemaining').textContent=now>=target?'Past':String(days);q('.days-caption').textContent=now>=target?'event date passed':'days until BMO1';
let progress={};try{const v=JSON.parse(safeGet(trackerKey)||'{}');if(v&&typeof v==='object'&&!Array.isArray(v))progress=v}catch{}
function redraw(){const checks=all('[data-progress]');checks.forEach(el=>el.checked=!!progress[el.dataset.progress]);q('#studyReflection').value=typeof progress.reflection==='string'?progress.reflection:'';const n=checks.filter(el=>el.checked).length;q('#progressCount').textContent=`${n} / ${checks.length}`;q('#progressBarFill').style.width=`${n/checks.length*100}%`;q('#progressBar').setAttribute('aria-valuenow',n);q('#progressBar').setAttribute('aria-valuemax',checks.length)}
redraw();const say=m=>{q('#trackerMessage').textContent=m};function persist(){if(!safeSet(trackerKey,JSON.stringify(progress)))say('This browser could not save changes. Export a copy of your record instead.')}
all('[data-progress]').forEach(el=>el.addEventListener('change',()=>{progress[el.dataset.progress]=el.checked;persist();redraw()}));q('#studyReflection').addEventListener('input',e=>{progress.reflection=e.target.value;persist()});
q('#exportProgress').addEventListener('click',()=>{progress.exportedAt=new Date().toISOString();const blob=new Blob([JSON.stringify({version:1,source:'proof-desk-local',progress},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='proof-desk-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);say('Export saved to your downloads.')});
q('#importProgress').addEventListener('change',async e=>{const f=e.target.files?.[0];if(!f)return;try{if(f.size>200000)throw Error('File is too large');const payload=JSON.parse(await f.text());if(!payload||payload.version!==1||payload.source!=='proof-desk-local'||!payload.progress||typeof payload.progress!=='object'||Array.isArray(payload.progress))throw Error('Not a Proof Desk export');const o={};for(const el of all('[data-progress]'))o[el.dataset.progress]=payload.progress[el.dataset.progress]===true;o.reflection=typeof payload.progress.reflection==='string'?payload.progress.reflection.slice(0,4000):'';progress=o;persist();redraw();say('Progress imported into this browser.')}catch(err){say('Import failed: '+err.message)}finally{e.target.value=''}});
q('#resetProgress').addEventListener('click',()=>{if(!confirm('Clear your saved checklist and reflections from this browser?'))return;progress={};persist();redraw();say('Local record cleared.')});
})();
