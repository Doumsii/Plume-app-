const demos = [
  {
    user: 'Je me sens seul et incompris.',
    arabic: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ',
    ref: 'Sourate Al-Hadid (57:4)',
    tr: '« Il est avec vous où que vous soyez. »',
    invAr: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ',
    invPh: 'Yā ḥayyu yā qayyūmu bi-raḥmatika astaghīth',
    invFr: '« Ô Vivant, ô Celui qui subsiste par Lui-même, c\'est de Ta miséricorde que j\'implore secours. »',
    sira: 'Le Prophète ﷺ a vécu des années de rejet à La Mecque : sa propre tribu le tournait en dérision, ses proches le quittaient. Pourtant, c\'est dans ces années que la Révélation descendait le plus fréquemment. La solitude n\'était pas un signe d\'abandon.',
    siraSrc: 'Ibn Hishâm, As-Sîra an-Nabawiyya, vol. I',
    action: 'Aujourd\'hui, envoie un message sincère à une personne que tu as négligée. Pas pour recevoir, mais pour donner.',
  },
  {
    user: 'J\'aime trop ma mère, qu\'Allah la préserve.',
    arabic: 'وَبِالْوَالِدَيْنِ إِحْسَانًا',
    ref: 'Sourate Al-Isra (17:23)',
    tr: '« Et envers les parents, la bienfaisance. »',
    invAr: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    invPh: 'Rabbi irḥamhumā kamā rabbayānī ṣaghīrā',
    invFr: '« Seigneur, prends-les en miséricorde comme ils m\'ont élevé dans ma petite enfance. »',
    sira: 'Un homme demanda au Prophète ﷺ : « Qui mérite le plus ma bonne compagnie ? » Il répondit : « Ta mère. » « Puis qui ? » « Ta mère. » « Puis qui ? » « Ta mère. » « Puis qui ? » « Ton père. »',
    siraSrc: 'Al-Bukhari (nº 5971) et Muslim (nº 2548)',
    action: 'Appelle ta mère aujourd\'hui, ou récite cette invocation pour elle après chaque prière. C\'est l\'un des actes les plus aimés d\'Allah.',
  },
  {
    user: 'Depuis quelques jours, je tourne en rond. Je fais des choses mais rien ne me touche vraiment, comme si j\'étais là sans vraiment y être.',
    arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    ref: 'Sourate Ar-Ra\'d (13:28)',
    tr: '« C\'est par l\'invocation d\'Allah que les cœurs trouvent la quiétude. »',
    invAr: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
    invPh: 'Subḥānallāhi wa biḥamdih',
    invFr: '« Gloire à Allah et Sa louange. »',
    sira: 'Un jour, le Prophète ﷺ, souffrant, ne se leva pas pour prier la nuit pendant une ou deux nuits. Une femme vint lui dire : « Ô Muhammad, je crois que ton démon t\'a quitté : je ne l\'ai pas vu depuis deux ou trois nuits. » Allah révéla alors la sourate Ad-Duhâ : « Par le jour montant ! Et par la nuit quand elle s\'étend ! Ton Seigneur ne t\'a point abandonné, ni détesté. »',
    siraSrc: 'Al-Bukhari (nº 4950) et Muslim (nº 1797)',
    action: 'Répète « Subhānallāhi wa biḥamdih » cent fois aujourd\'hui, où que tu sois. Les savants l\'appellent l\'invocation qui ranime le cœur éteint.',
  },
  {
    user: 'Je suis tellement reconnaissant pour ce que j\'ai.',
    arabic: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
    ref: 'Sourate Ibrahim (14:7)',
    tr: '« Si vous êtes reconnaissants, J\'augmenterai certes Mes bienfaits envers vous. »',
    invAr: 'الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ',
    invPh: 'Al-ḥamdu lillāhi alladhī bi-ni\'matihi tatimmu aṣ-ṣāliḥāt',
    invFr: '« Toute louange à Allah, par Qui les bonnes choses s\'accomplissent. »',
    sira: 'Le Prophète ﷺ priait la nuit jusqu\'à en avoir les pieds enflés. Lorsque \'Â\'icha lui demandait pourquoi, il répondait : « Ne devrais-je pas être un serviteur reconnaissant ? » Sa gratitude n\'attendait aucune raison particulière : elle était une posture permanente du cœur.',
    siraSrc: 'Al-Bukhari (nº 4836) et Muslim (nº 2820)',
    action: 'Ce soir, écris trois bienfaits concrets de ta journée. Remercie Allah pour chacun d\'eux à voix haute. La gratitude exprimée se multiplie.',
  },
  {
    user: 'Mon fils a récité sa première sourate aujourd\'hui. Je n\'avais pas de mots.',
    arabic: 'وَالَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',
    ref: 'Sourate Al-Furqan (25:74)',
    tr: '« Seigneur, accorde-nous, de nos épouses et de nos descendants, la joie des yeux. »',
    invAr: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ',
    invPh: 'Bārakallāhu laka wa bāraka \'alayk',
    invFr: '« Qu\'Allah te bénisse et répande Sa bénédiction sur toi. »',
    sira: 'Le Prophète ﷺ s\'arrêtait au milieu de la prière pour raccourcir une sourate en entendant pleurer un enfant, afin de ne pas inquiéter sa mère. Il comprenait que les enfants sont une amanah, un dépôt sacré, et que chaque étape de leur éveil spirituel est une grâce à célébrer.',
    siraSrc: 'Al-Bukhari (nº 710), Muslim (nº 470)',
    action: 'Prends un moment pour faire une du\'a pour ton enfant aujourd\'hui : pour sa foi, sa santé, son cœur. C\'est l\'un des du\'as les plus exaucés.',
  },
  {
    user: 'Je sens que ma foi grandit, mais certaines pensées et certaines personnes autour de moi me tirent dans tous les sens. Je ne sais pas toujours où j\'en suis vraiment.',
    arabic: 'وَلَٰكِنَّ اللَّهَ حَبَّبَ إِلَيْكُمُ الْإِيمَانَ وَزَيَّنَهُ فِي قُلُوبِكُمْ',
    ref: 'Sourate Al-Hujurat (49:7)',
    tr: '« Mais Allah vous a rendu la foi aimable et l\'a embellie dans vos cœurs. »',
    invAr: 'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',
    invPh: 'Yā Muqalliba al-qulūbi, thabbit qalbī \'alā dīnik',
    invFr: '« Ô Toi qui retournes les cœurs, affermis mon cœur sur Ta religion. »',
    sira: 'Le Prophète ﷺ répétait souvent cette invocation, lui dont la foi était la plus solide de toute l\'humanité. Ce n\'était pas par doute : c\'était pour nous apprendre que la foi se cultive, se protège, se demande. Un cœur qui grandit a besoin d\'être ancré.',
    siraSrc: 'At-Tirmidhi (nº 2140), hadith hasan',
    action: 'Identifie une personne de ton entourage qui nourrit ta foi et rapproche-toi d\'elle cette semaine. L\'environnement façonne le cœur : choisis-le avec soin.',
  },
  {
    user: 'J\'ai besoin de courage pour prendre une grande décision.',
    arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
    ref: 'Sourate At-Talaq (65:3)',
    tr: '« Celui qui place sa confiance en Allah Il lui suffit. »',
    invAr: 'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ',
    invPh: 'Allāhumma innī astakhīruka bi\'ilmika wa astaqdiruka biqudratik',
    invFr: '« Ô Allah, je Te consulte par Ta science et Te demande la capacité par Ta puissance. »',
    sira: 'Face aux grandes décisions, le Prophète ﷺ pratiquait l\'istikharah, non pas pour recevoir un signe spectaculaire, mais pour aligner sa volonté sur celle d\'Allah. Il agissait ensuite avec confiance, sachant que ce qu\'Allah facilite est juste.',
    siraSrc: 'Al-Bukhari (nº 6382)',
    action: 'Fais deux rak\'at d\'istikharah ce soir. Pose ta décision sur papier avant de dormir. Demain matin, observe ce que tu ressens : le cœur apaisé est souvent une réponse.',
  },
];
const $=id=>document.getElementById(id);
const lines=$('lines');
function show(i){const d=demos[i];
  $('d-arabic').textContent=d.arabic;$('d-ref').textContent=d.ref;$('d-tr').textContent=d.tr;
  $('d-inv-ar').textContent=d.invAr;$('d-inv-ph').textContent=d.invPh;$('d-inv-fr').textContent=d.invFr;
  $('d-sira').textContent=d.sira;$('d-sira-src').textContent=d.siraSrc;$('d-action').textContent=d.action;
  [...lines.children].forEach((c,k)=>c.setAttribute('aria-pressed',k===i?'true':'false'));}
demos.forEach((d,i)=>{const b=document.createElement('button');b.className='line';b.type='button';b.id='line-'+i;
  b.textContent='« '+(d.user.length>70?d.user.slice(0,d.user.indexOf('.')+1):d.user)+' »';b.onclick=()=>think(i);lines.appendChild(b);});
let tw=0;function think(i){const bx=$('demobox');[...lines.children].forEach((c,k)=>c.setAttribute('aria-pressed',k===i?'true':'false'));bx.classList.remove('idle');bx.classList.add('thinking');clearTimeout(tw);tw=setTimeout(()=>{show(i);bx.classList.remove('thinking');},matchMedia('(prefers-reduced-motion:reduce)').matches?0:3800);}
$('demobox').classList.add('idle');
const gate=$('gate');const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;const openGate=()=>{gate.classList.add('open');setTimeout(()=>document.body.classList.add('entered'),RM?0:600);};gate.addEventListener('click',openGate);gate.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')openGate();});setTimeout(openGate,RM?0:1200);

const T=[['Fatima','Asbahtou, invocation du matin','audio/fatima.mp3','app/fatima.jpg','La voix de l\'application',[]],['Oways Ahmad','Radîtu billāhi rabbā','audio/raditu.mp3','app/oways.jpg','Fondateur du label',[['YouTube','https://youtube.com/@plumedo2_records']]],['Ustadh Idriss','Al-Kahf, 9-12','audio/kahf.mp3','app/idriss.jpg','Détenteur d\'une ijaza en Hafs, Instant Coranique',[['YouTube','https://youtube.com/@instantcoranique'],['Instagram','https://www.instagram.com/instant_coranique'],['TikTok','https://www.tiktok.com/@instant_coranique']]],['Ustadh Mounir','Fussilat, versets 27 à 33','audio/mounir.mp3','app/mounir.jpg','Fondateur de Bibliodin, doctorant en théologie islamique',[['Bibliodin','https://bibliodin.com/'],['Instagram','https://www.instagram.com/mounirmonprofdarabe'],['YouTube','https://youtube.com/@mounirmonprofdarabe8460']]],['Ustadh Muhammad','Al-Fatiha','audio/fatiha.mp3','app/muhammad.jpg','Fondateur du centre Muddakir, professeur de Coran et d\'arabe',[['YouTube','https://youtube.com/@muddakkir']]]];
const PEEK={souffle:[[['app/souffle1_p.jpg','Une citation pour l\'apaisement'],['app/souffle2_p.jpg','Une citation pour la gratitude']],'Le Souffle','Une pensée pour reprendre ton souffle, selon ton émotion du moment.'],oxygene:[[['app/voix_p.jpg','Les récitateurs du label'],['app/medit_p.jpg','Les méditations']],'Oxygène','Le Coran porté par les voix du label, et des méditations.'],heritage:[[['app/mushaf_p.jpg','Une page du Coran'],['app/ayyub_p.jpg','L\'invocation d\'Ayûb']],"L'Héritage",'Le Coran à lire et les invocations des prophètes.'],journal:[[['app/journal_bleu_p.jpg','La page du Journal'],['app/synthese_p.jpg','Le cheminement du mois']],'Le Journal','Tu écris ce que tu vis. Chaque mois, tu vois ton chemin.']};
const peek=$('peek');let lastDoor=null;
/* Petit retour haptique : vibration sur Android, interrupteur invisible sur iOS 17.4 et plus ; sinon rien. */
const tick=(()=>{const lab=document.querySelector('.hap');const RMt=matchMedia('(prefers-reduced-motion:reduce)').matches;
return()=>{if(RMt)return;try{if(navigator.vibrate){navigator.vibrate(12);return;}}catch(_){}try{if(lab)lab.click();}catch(_){}};})();
document.querySelectorAll('.dbtn').forEach(b=>b.onclick=()=>{tick();const d=PEEK[b.dataset.k];const sh=$('shots');sh.textContent='';sh.className='shots n'+d[0].length;d[0].forEach(s=>{const im=document.createElement('img');im.className='screen';im.src=s[0];im.alt=s[1];sh.appendChild(im);});$('peekname').textContent=d[1];$('peektext').textContent=d[2];lastDoor=b;peek.hidden=false;$('peekclose').focus();});
const closePeek=()=>{peek.hidden=true;if(lastDoor)lastDoor.focus();};
peek.addEventListener('click',e=>{if(e.target===peek||e.target.id==='peekclose')closePeek();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!peek.hidden)closePeek();});
const au=$('au'),picks=$('picks'),big=$('big');let sel=0,loaded=-1;
const fmt=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');
function hint(){const t=T[sel];$('bigtime').textContent=!t[2]?'':(loaded===sel&&!au.paused?fmt(au.currentTime):'Toucher le portrait pour écouter');big.classList.toggle('on',loaded===sel&&!au.paused);}
function pickR(i){sel=i;const t=T[i];$('bigimg').src=t[3];$('bigname').textContent=t[0];$('bigtrack').textContent=t[1];$('bigrole').textContent=t[4]||'';const L=$('biglinks');L.textContent='';(t[5]||[]).forEach(l=>{const a=document.createElement('a');a.href=l[1];a.target='_blank';a.rel='noopener';a.textContent=l[0]+' \u2197';L.appendChild(a);});big.setAttribute('aria-label',t[2]?'Écouter '+t[0]:t[0]);[...picks.children].forEach((b,k)=>b.setAttribute('aria-pressed',k===i?'true':'false'));if(loaded!==i&&!au.paused){au.pause();}hint();}
T.forEach((t,i)=>{const b=document.createElement('button');b.className='pick';b.type='button';b.id='pick-'+i;b.setAttribute('aria-label',t[0]);const im=document.createElement('img');im.src=t[3];im.alt='';im.loading='lazy';b.append(im);b.onclick=()=>pickR(i);picks.appendChild(b);});
big.onclick=()=>{const t=T[sel];if(!t[2])return;if(loaded!==sel){loaded=sel;au.src=t[2];au.play().catch(()=>{});}else{au.paused?au.play():au.pause();}};
['play','pause','ended','timeupdate'].forEach(e=>au.addEventListener(e,hint));
pickR(0);

/* Avis : défilement lent et continu, deux flèches pour avancer ou reculer d'une bulle, glisser au doigt ou à la souris.
   Le doigt déplace la bande de la distance parcourue (jamais vers une position absolue), puis elle glisse un peu
   et le défilement lent reprend après un court moment. */
(()=>{const fr=document.querySelector('.avis .frame'),tr=fr&&fr.querySelector('.track');if(!tr)return;
const RMv=matchMedia('(prefers-reduced-motion:reduce)').matches;const SPEED=RMv?0:22;
let x=0,half=0,step=0,hover=false,hold=false,anim=null,vel=0,pauseUntil=0,last=performance.now();
const measure=()=>{const b=tr.children;const n=b.length/2;const gap=parseFloat(getComputedStyle(tr).columnGap)||26;step=b[0].getBoundingClientRect().width+gap;half=step*n;};
const wrap=()=>{if(!half)return;while(x<=-half)x+=half;while(x>0)x-=half;};
const frame=t=>{const dt=Math.min(.05,(t-last)/1000);last=t;
 if(anim){const k=Math.min(1,(t-anim.t0)/anim.d);const e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;x=anim.from+(anim.to-anim.from)*e;if(k>=1)anim=null;}
 else if(hold){}
 else if(Math.abs(vel)>8){x+=vel*dt;vel*=Math.pow(.03,dt);}
 else{vel=0;if(!hover&&!document.hidden&&performance.now()>pauseUntil)x-=SPEED*dt;}
 wrap();tr.style.transform='translate3d('+x.toFixed(2)+'px,0,0)';requestAnimationFrame(frame);};
const go=d=>{measure();vel=0;const from=x;const to=from+(d>0?-step:step);anim={from,to,t0:performance.now(),d:RMv?1:650};pauseUntil=performance.now()+2500;};
document.querySelector('.arw.next').addEventListener('click',()=>go(1));
document.querySelector('.arw.prev').addEventListener('click',()=>go(-1));
fr.addEventListener('mouseenter',()=>hover=true);fr.addEventListener('mouseleave',()=>hover=false);
let d=null;
fr.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;measure();d={id:e.pointerId,x0:e.clientX,y0:e.clientY,lx:e.clientX,lt:e.timeStamp,lock:null};vel=0;anim=null;});
fr.addEventListener('pointermove',e=>{if(!d||e.pointerId!==d.id)return;
 if(!d.lock){const ax=Math.abs(e.clientX-d.x0),ay=Math.abs(e.clientY-d.y0);if(ax<6&&ay<6)return;d.lock=ax>=ay?'x':'y';
   if(d.lock==='x'){hold=true;if(e.pointerType==='mouse'){try{fr.setPointerCapture(e.pointerId);}catch(_){}}d.lx=e.clientX;d.lt=e.timeStamp;return;}}
 if(d.lock!=='x')return;
 const dx=e.clientX-d.lx,dtm=Math.max(1,e.timeStamp-d.lt)/1000;x+=dx;wrap();vel=vel*.6+(dx/dtm)*.4;d.lx=e.clientX;d.lt=e.timeStamp;});
const end=e=>{if(!d||(e&&e.pointerId!==d.id))return;const was=d.lock==='x';d=null;hold=false;pauseUntil=performance.now()+2500;
 if(was){vel=Math.max(-2200,Math.min(2200,vel));if(performance.now()-last>120)vel=0;}else vel=0;};
fr.addEventListener('pointerup',end);fr.addEventListener('pointercancel',end);fr.style.touchAction='pan-y';
addEventListener('resize',measure);measure();requestAnimationFrame(frame);})();

/* Bandeau du haut : logo pour remonter, il se range quand on descend et revient quand on remonte.
   Flèche « revenir en haut » après un bon bout de page ; note et flèche s'effacent pendant qu'on fait défiler. */
(()=>{const bar=document.getElementById('sitebar'),up=document.getElementById('upbtn');if(!bar)return;
const RMh=matchMedia('(prefers-reduced-motion:reduce)').matches;let lastY=scrollY,tick=false,st=0;
const top=e=>{if(e)e.preventDefault();scrollTo({top:0,behavior:RMh?'auto':'smooth'});};
document.querySelectorAll('.brand').forEach(b=>b.addEventListener('click',top));if(up)up.addEventListener('click',top);
const onScroll=()=>{const y=scrollY,peekOpen=(document.getElementById('peek')||{}).hidden===false;
 bar.classList.toggle('scrolled',y>30);
 if(y>260&&y>lastY+6&&!peekOpen)bar.classList.add('hide');else if(y<lastY-6||y<=260)bar.classList.remove('hide');
 lastY=y;if(up)up.classList.toggle('show',y>innerHeight*1.3);
 document.body.classList.add('scrolling');clearTimeout(st);st=setTimeout(()=>document.body.classList.remove('scrolling'),900);};
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(()=>{tick=false;onScroll();});}},{passive:true});
setTimeout(()=>document.body.classList.add('ready'),RMh?0:4200);
onScroll();})();

/* Pourquoi Plume d'O² : chemin en trois pas, qui avance seul jusqu'au premier toucher. */
(()=>{const sec=document.getElementById('pourquoi');if(!sec)return;
const steps=[...sec.querySelectorAll('.mq-step')],cards=[...sec.querySelectorAll('.mq-card')];
const bar=document.createElement('div');bar.className='mq-bar';bar.innerHTML='<b></b>';sec.querySelector('.mq-path').appendChild(bar);const fill=bar.firstChild;
let cur=0,timer=null,stopped=false;const RMm=matchMedia('(prefers-reduced-motion:reduce)').matches;const DUR=9000;
const show=i=>{cur=i;steps.forEach((s,k)=>{s.classList.toggle('on',k===i);s.setAttribute('aria-selected',k===i?'true':'false');});cards.forEach((c,k)=>c.classList.toggle('on',k===i));};
const run=()=>{if(stopped||RMm)return;fill.style.transition='none';fill.style.transform='scaleX(0)';void fill.offsetWidth;fill.style.transition='transform '+DUR+'ms linear';fill.style.transform='scaleX(1)';clearTimeout(timer);timer=setTimeout(()=>{show((cur+1)%steps.length);run();},DUR);};
const stop=()=>{stopped=true;clearTimeout(timer);bar.style.visibility='hidden';};
steps.forEach((s,k)=>s.addEventListener('click',()=>{stop();show(k);}));
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){run();io.disconnect();}});},{threshold:.35});
io.observe(sec);if(RMm)bar.style.display='none';})();

/* Ambiance sonore du Journal : jamais lancée seule. Élément <audio> (joue aussi sur iPhone en mode silencieux),
   fondu quand le navigateur permet de régler le volume, retrait pendant une récitation du label.
   Si le fichier ne se charge pas, un petit message le dit et l'état « allumé » n'est jamais retenu. */
(()=>{try{
const b=document.getElementById('amb');if(!b)return;
const KEY='plume_ambiance',VOL=0.9,SRC='audio/ambiance.mp3?v=2';
let a=null,on=false,ducked=false,fadeT=null,toastT=null;
const store=v=>{try{localStorage.setItem(KEY,v);}catch(e){}};const stored=()=>{try{return localStorage.getItem(KEY);}catch(e){return null;}};
const toast=m=>{let t=document.getElementById('ambtoast');if(!t){t=document.createElement('div');t.id='ambtoast';t.setAttribute('role','status');document.body.appendChild(t);}
  t.textContent=m;t.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('on'),4500);};
const ui=()=>{b.setAttribute('aria-pressed',on?'true':'false');b.setAttribute('aria-label',on?"Couper l'ambiance sonore":"Activer l'ambiance sonore du Journal");};
const audio=()=>{if(!a){a=new Audio();a.loop=true;a.preload='auto';a.volume=0;a.src=SRC;}return a;};
const setVol=v=>{try{a.volume=Math.max(0,Math.min(1,v));}catch(e){}};
const fade=(to,ms,done)=>{clearInterval(fadeT);if(!a)return;const from=a.volume,t0=performance.now();
  fadeT=setInterval(()=>{const k=Math.min(1,(performance.now()-t0)/ms);setVol(from+(to-from)*k);if(k>=1){clearInterval(fadeT);done&&done();}},40);};
const fail=err=>{if(window.console)console.error('ambiance',err&&err.name,err&&err.message,a&&a.error&&a.error.code);
  on=false;ui();store('off');clearInterval(fadeT);
  const blocked=err&&err.name==='NotAllowedError';
  toast(blocked?"Touche à nouveau la note pour lancer le son.":"L'ambiance sonore n'a pas pu se charger. Réessaie dans un instant.");};
const play=()=>{audio();setVol(0);const p=a.play();
  const go=()=>fade(ducked?0:VOL,3000);
  if(p&&p.then)p.then(go,fail);else go();};
const stop=()=>fade(0,1200,()=>{if(!on&&a)a.pause();});
b.addEventListener('click',()=>{if(on){on=false;ui();store('off');stop();}else{on=true;ui();play();}});
/* Un son déjà lancé n'est retenu « allumé » que s'il a vraiment démarré. */
const mark=()=>{if(on)store('on');};
audio().addEventListener('playing',mark);
a.addEventListener('error',()=>{if(on)fail(a.error||{name:'MediaError'});});
const au=document.getElementById('au');if(au){au.addEventListener('play',()=>{ducked=true;if(on)fade(0,800,()=>{if(ducked&&a)a.pause();});});
  const back=()=>{ducked=false;if(on&&a){const p=a.play();if(p&&p.catch)p.catch(()=>{});fade(VOL,2500);}};au.addEventListener('pause',back);au.addEventListener('ended',back);}
document.addEventListener('visibilitychange',()=>{if(!a)return;if(document.hidden)a.pause();else if(on&&!ducked){const p=a.play();if(p&&p.catch)p.catch(()=>{});}});
/* Retour d'un visiteur qui l'avait allumée : on attend son premier geste, puis on essaie. L'icône reste « éteinte » tant que rien ne joue. */
if(stored()==='on'){const go=e=>{if(e.target.closest&&e.target.closest('#amb'))return;document.removeEventListener('pointerdown',go,true);document.removeEventListener('keydown',go,true);
  if(on)return;on=true;ui();const p=(audio(),setVol(0),a.play());const ok=()=>fade(ducked?0:VOL,3000);
  if(p&&p.then)p.then(ok,()=>{on=false;ui();});else ok();};
  document.addEventListener('pointerdown',go,true);document.addEventListener('keydown',go,true);}
}catch(err){if(window.console)console.error('ambiance',err);}})();

/* Portes sur téléphone : flèches pour passer de l'une à l'autre (le doigt glisse aussi, nativement). */
(()=>{const w=document.getElementById('dwrap');if(!w)return;const r=w.querySelector('.doors'),p=w.querySelector('.dprev'),n=w.querySelector('.dnext');if(!r||!p||!n)return;
const f=()=>r.querySelector('figure');const stepW=()=>{const a=r.querySelectorAll('figure');return a.length>1?a[1].offsetLeft-a[0].offsetLeft:(f()?f().offsetWidth:0);};
const upd=()=>{const m=r.scrollWidth-r.clientWidth;p.disabled=r.scrollLeft<4;n.disabled=r.scrollLeft>m-4;};
const RMd=matchMedia('(prefers-reduced-motion:reduce)').matches;
const go=d=>{tick();r.scrollBy({left:d*stepW(),behavior:RMd?'auto':'smooth'});};
p.addEventListener('click',()=>go(-1));n.addEventListener('click',()=>go(1));
r.addEventListener('scroll',()=>requestAnimationFrame(upd),{passive:true});addEventListener('resize',upd);upd();})();
