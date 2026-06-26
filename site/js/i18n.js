/* ===== Marché Freshco — FR/EN i18n =====
   English is read from the DOM (default markup). French strings below.
   Elements are tagged with data-i18n="key". Toggle persists in localStorage. */
const FR = {
  /* nav (shared) */
  "nav.home":"Accueil",
  "nav.produce":"Produits",
  "nav.products":"Boutique",
  "nav.market":"Le marché",
  "nav.visit":"Visiter",
  "nav.hours":"Ouvert jusqu'à 22h",
  "nav.find":"Nous trouver",

  /* hero */
  "hero.fresh":"Frais",
  "hero.t1":"Frais,",
  "hero.t2":"chaque",
  "hero.t3":"jour.",
  "hero.sub":"De vrais fruits. De vrais légumes. Tout un garde-manger du monde — choisi frais et à juste prix, au cœur de Pierrefonds.",
  "hero.scroll":"Défiler <span>↓</span>",

  /* marquee */
  "mq.veg":"Légumes",
  "mq.spices":"Épices",
  "mq.rice":"Riz & céréales",
  "mq.drinks":"Boissons du monde",
  "mq.tea":"Thé",
  "mq.bakery":"Boulangerie",

  /* manifesto */
  "man.1":"Pas d'étalages fatigués.",
  "man.2":"Pas de légumes mystères.",
  "man.3":"Juste des <em>fruits frais</em>, des <em>légumes</em> croquants,",
  "man.4":"et un garde-manger qui parle",
  "man.5":"toutes les langues du quartier.",

  /* category 01 */
  "c1.kick":"01 — Le marché",
  "c1.h":"Produits frais,<br/><span class=\"ink-green\">chaque jour.</span>",
  "c1.p":"Pommes, poivrons, herbes, agrumes, plantains, manioc et trouvailles tropicales — empilés à la main chaque matin. Colorés, abondants et à prix juste pour les vraies familles.",
  "c1.l1":"Fruits & légumes","c1.l2":"Herbes fraîches","c1.l3":"Tropical & spécialités",

  /* category 02 */
  "c2.kick":"02 — Garde-manger du monde",
  "c2.h":"Halal & international,<br/><span class=\"ink-orange\">dans une seule allée.</span>",
  "c2.p":"Riz basmati, lentilles & dals, farine atta, ghee, tout un mur d'épices et de thé — les essentiels des cuisines sud-asiatique, moyen-orientale, africaine & caribéenne, certifiés halal.",
  "c2.l1":"Riz & céréales","c2.l2":"Épices & thé","c2.l3":"Certifié halal",

  /* category 03 */
  "c3.kick":"03 — Boissons & collations",
  "c3.h":"Un frigo venu<br/><span class=\"ink-green\">du monde entier.</span>",
  "c3.p":"Jus de mangue & tropicaux, boissons maltées, yogourts à boire, laits en poudre et les collations de votre enfance — frais, en stock et prêts à emporter.",
  "c3.l1":"Jus du monde","c3.l2":"Collations","c3.l3":"Lait & poudres",

  /* story */
  "st.kick":"Pourquoi le quartier l'adore",
  "st.h":"Allées propres. Sourires sincères.<br/>Des prix qui ont du sens.",
  "st.s1":"★ Note Google",
  "st.s2":"rayons sous un même toit",
  "st.s3":"halal & frais en rayon",
  "st.s4val":"22h",
  "st.s4":"ouvert tard, tous les jours",
  "st.quote":"« Une grande variété de produits, un magasin très propre et un service très sympathique. Belle qualité, bons prix. »<span>— nos voisins sur Google</span>",

  /* testimonials */
  "tm.kick":"Aimé par le quartier",
  "tm.h":"Ce que les gens en disent",
  "tm.q1":"Tout était très bien organisé et il y a une grande variété de produits. Très satisfaite de mes achats — je recommande vivement pour la qualité et le service !",
  "tm.q2":"Un très bon service à la clientèle, on vous accueille chaleureusement, et c'est vraiment propre.",
  "tm.q3":"Des gens super avec d'excellents prix.",
  "tm.src":"Avis Google",
  "tm.cta":"Voir plus d'avis sur Google →",

  /* departments */
  "dp.title":"Tout, en un seul arrêt.",
  "dp.produce":"Produits","dp.rice":"Riz & céréales","dp.spices":"Épices",
  "dp.tea":"Thé & collations","dp.dairy":"Lait & poudres","dp.drinks":"Boissons du monde",
  "dp.halal":"Halal","dp.household":"Maison","dp.beauty":"Beauté","dp.bakery":"Boulangerie",

  /* visit / footer (shared) */
  "vs.title":"Venez goûter<br/><span class=\"ink-orange\">au frais.</span>",
  "vs.find":"Nous trouver",
  "vs.hours":"Heures",
  "vs.hoursp":"Tous les jours<br/>Ouvert jusqu'à 22h00",
  "vs.say":"Dites bonjour",
  "vs.sayp":"Produits frais chaque jour<br/>Halal & international",
  "vs.dir":"Itinéraire →",

  /* ===== products page ===== */
  "sh.kick":"Vu sur nos rayons",
  "sh.h":"Qu'y a-t-il<br/><span class=\"ink-orange\">en magasin.</span>",
  "sh.p":"Un vrai aperçu de ce qui remplit les allées — produits frais empilés chaque jour, un garde-manger du monde halal & international, et les collations et boissons de votre enfance. En voici un avant-goût.",
  "sh.scroll":"Parcourir <span>↓</span>",
  "sn.produce":"Produits","sn.pantry":"Riz & garde-manger","sn.spices":"Épices & thé",
  "sn.dairy":"Lait & boissons","sn.bakery":"Boulangerie","sn.more":"Halal & plus",

  "p1.kick":"01 — Produits frais",
  "p1.h":"Fruits & légumes, chaque jour",
  "p1.p":"Empilés à la main chaque matin — colorés, abondants et à prix juste pour les vraies familles.",
  "pc.apples.h":"Pommes","pc.apples.p":"Rouges, vertes & jaunes — croquantes et réapprovisionnées chaque jour",
  "pc.bananas.h":"Bananes & plantains","pc.bananas.p":"Bananes sucrées et plantains à cuire",
  "pc.peppers.h":"Poivrons","pc.peppers.p":"Poivrons rouges, verts & jaunes",
  "pc.tomatoes.h":"Tomates","pc.tomatoes.p":"Mûries sur vigne, prêtes à cuisiner",
  "pc.herbs.h":"Herbes fraîches","pc.herbs.p":"Coriandre, persil, menthe & plus",
  "pc.more.h":"Et bien plus","pc.more.p":"Oranges & clémentines, raisins, poires, pommes de terre, oignons & ail, chou-fleur, aubergine, manioc & igname.",

  "p2.kick":"02 — Riz, céréales & garde-manger",
  "p2.h":"Les essentiels de chaque cuisine",
  "p2.p":"La base des cuisines sud-asiatique, moyen-orientale, africaine & caribéenne — toutes certifiées halal.",
  "pc.rice.h":"Riz basmati","pc.rice.p":"Basmati long grain & riz du quotidien",
  "pc.lentils.h":"Lentilles & dals","pc.lentils.p":"Lentilles rouges & vertes, pois chiches, haricots",
  "pc.cooking.h":"Essentiels de cuisine","pc.cooking.p":"Farine atta & blé, ghee, huiles, pâtes, conserves & poisson.",

  "p3.kick":"03 — Épices & thé",
  "p3.h":"Tout un mur de saveurs",
  "p3.p":"Épices simples et mélanges prêts, plus le thé auquel chacun est fidèle.",
  "pc.spices.h":"Épices & masalas","pc.spices.p":"Curcuma, piment, cumin, garam masala & plus",
  "pc.tea.h":"Thé","pc.tea.p":"Thé noir, chai & feuilles en vrac",

  "p4.kick":"04 — Lait, boissons & collations",
  "p4.h":"Un frigo venu du monde entier",
  "p4.p":"Frais, en stock et prêts à emporter en sortant.",
  "pc.milk.h":"Laits en poudre","pc.milk.p":"Laits entiers en poudre & lait concentré",
  "pc.juices.h":"Jus du monde","pc.juices.p":"Jus de mangue, tropicaux & d'agrumes",
  "pc.snacks.h":"Collations & plus","pc.snacks.p":"Yogourts & boissons maltées, boissons gazeuses, biscuits, chips & namkeen.",

  "p5.kick":"05 — Boulangerie",
  "p5.h":"Pain frais, chaque jour",
  "p5.p":"Moelleux, chaud et cuit du jour — prenez un pain au passage.",
  "pc.bread.h":"Pain & naan","pc.bread.p":"Pains plats, naan, petits pains & miches",
  "pc.beyond.h":"Au-delà de l'alimentaire","pc.beyond.p":"Un coin beauté & cosmétiques ainsi que les articles ménagers & d'entretien du quotidien.",

  "bn.h":"100% halal.<br/><span class=\"ink-orange\">Toujours frais.</span>",
  "bn.p":"Tout sous un même toit — et des visages sympathiques pour vous aider à trouver. Venez voir ce qu'il y a en magasin aujourd'hui.",
  "bn.btn":"Visiter le marché →",

  /* tags (shared, reused) */
  "tag.fresh":"Frais","tag.tropical":"Tropical","tag.daily":"Chaque jour","tag.instore":"En magasin",
  "tag.halal":"Halal","tag.pantry":"Garde-manger","tag.aromatic":"Aromatique","tag.brew":"Infusion",
  "tag.dairy":"Laitier","tag.chilled":"Frais","tag.onestop":"Tout en un"
};

function setLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    if(el.dataset.en === undefined) el.dataset.en = el.innerHTML;
    const k = el.dataset.i18n;
    el.innerHTML = (lang === 'fr' && FR[k] !== undefined) ? FR[k] : el.dataset.en;
  });
  document.querySelectorAll('[data-lang-toggle]').forEach(b=>{
    b.textContent = lang === 'fr' ? 'EN' : 'FR';
    b.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer au français');
  });
  try{ localStorage.setItem('freshco-lang', lang); }catch(e){}
}

function initI18n(){
  let lang = 'en';
  try{ lang = localStorage.getItem('freshco-lang') || 'en'; }catch(e){}
  setLang(lang);
  document.querySelectorAll('[data-lang-toggle]').forEach(b=>{
    b.addEventListener('click', ()=> setLang(document.documentElement.lang === 'fr' ? 'en' : 'fr'));
  });
}

if(document.readyState !== 'loading') initI18n();
else document.addEventListener('DOMContentLoaded', initI18n);
