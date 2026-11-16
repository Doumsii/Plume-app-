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
let tw=0;function think(i){const bx=$('demobox');[...lines.children].forEach((c,k)=>c.setAttribute('aria-pressed',k===i?'true':'false'));bx.classList.add('thinking');clearTimeout(tw);tw=setTimeout(()=>{show(i);bx.classList.remove('thinking');},matchMedia('(prefers-reduced-motion:reduce)').matches?0:3800);}
show(0);
const gate=$('gate');const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;const openGate=()=>{gate.classList.add('open');setTimeout(()=>document.body.classList.add('entered'),RM?0:900);};gate.addEventListener('click',openGate);gate.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')openGate();});setTimeout(openGate,RM?0:2600);

const T=[['Fatima','Asbahtou, invocation du matin','audio/fatima.mp3','app/fatima.jpg'],['Oways Ahmad','Radîtu billāhi rabbā','audio/raditu.mp3','app/oways.jpg'],['Ustadh Idriss','Al-Kahf, 9-12','audio/kahf.mp3','app/idriss.jpg'],['Ustadh Mounir','Fussilat, versets 27 à 33','audio/mounir.mp3','app/mounir.jpg'],['Ustadh Muhammad','Al-Fatiha','audio/fatiha.mp3','app/muhammad.jpg']];
const PEEK={souffle:[[['app/souffle1_p.jpg','Une citation pour l\'apaisement'],['app/souffle2_p.jpg','Une citation pour la gratitude']],'Le Souffle','Une pensée pour reprendre ton souffle, selon ton émotion du moment.'],oxygene:[[['app/voix_p.jpg','Les récitateurs du label'],['app/medit_p.jpg','Les méditations']],'Oxygène','Le Coran porté par les voix du label, et des méditations.'],heritage:[[['app/mushaf_p.jpg','Une page du Coran'],['app/ayyub_p.jpg','L\'invocation d\'Ayûb']],"L'Héritage",'Le Coran à lire et les invocations des prophètes.'],journal:[[['app/journal_bleu_p.jpg','La page du Journal'],['app/synthese_p.jpg','Le cheminement du mois']],'Le Journal','Tu écris ce que tu vis. Chaque mois, tu vois ton chemin.']};
const peek=$('peek');let lastDoor=null;
document.querySelectorAll('.dbtn').forEach(b=>b.onclick=()=>{const d=PEEK[b.dataset.k];const sh=$('shots');sh.textContent='';sh.className='shots n'+d[0].length;d[0].forEach(s=>{const im=document.createElement('img');im.className='screen';im.src=s[0];im.alt=s[1];sh.appendChild(im);});$('peekname').textContent=d[1];$('peektext').textContent=d[2];lastDoor=b;peek.hidden=false;$('peekclose').focus();});
const closePeek=()=>{peek.hidden=true;if(lastDoor)lastDoor.focus();};
peek.addEventListener('click',e=>{if(e.target===peek||e.target.id==='peekclose')closePeek();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!peek.hidden)closePeek();});
const au=$('au'),picks=$('picks'),big=$('big');let sel=0,loaded=-1;
const fmt=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');
function hint(){const t=T[sel];$('bigtime').textContent=!t[2]?'':(loaded===sel&&!au.paused?fmt(au.currentTime):'Toucher le portrait pour écouter');big.classList.toggle('on',loaded===sel&&!au.paused);}
function pickR(i){sel=i;const t=T[i];$('bigimg').src=t[3];$('bigname').textContent=t[0];$('bigtrack').textContent=t[1];big.setAttribute('aria-label',t[2]?'Écouter '+t[0]:t[0]);[...picks.children].forEach((b,k)=>b.setAttribute('aria-pressed',k===i?'true':'false'));if(loaded!==i&&!au.paused){au.pause();}hint();}
T.forEach((t,i)=>{const b=document.createElement('button');b.className='pick';b.type='button';b.id='pick-'+i;b.setAttribute('aria-label',t[0]);const im=document.createElement('img');im.src=t[3];im.alt='';im.loading='lazy';b.append(im);b.onclick=()=>pickR(i);picks.appendChild(b);});
big.onclick=()=>{const t=T[sel];if(!t[2])return;if(loaded!==sel){loaded=sel;au.src=t[2];au.play().catch(()=>{});}else{au.paused?au.play():au.pause();}};
['play','pause','ended','timeupdate'].forEach(e=>au.addEventListener(e,hint));
pickR(0);
