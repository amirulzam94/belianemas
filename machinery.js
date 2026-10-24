// The quantities below follow the company's published machinery list. They are not live availability.
const machinery = [
  {id:'excavator',name:'Excavators',group:'Earthworks',models:[['Hitachi EX60-5',1],['Komatsu PC200-6A',1],['Komatsu PC200-7',1],['Komatsu PC200-8 Hydraulic',1],['Hitachi ZX200-5G',4],['Komatsu PC200-8M0',4],['Komatsu PC210-10M0',1],['Komatsu PC300-SE6',3],['Komatsu PC300-SE7',2],['Hitachi ZX350',14],['Caterpillar 320D GC',1],['Komatsu PC410LC-5',1]],photos:[['excavator-hitachi-hydraulic-excavator-zx350.webp','Hitachi ZX350'],['excavator-komatsu-hydraulic-excavator-pc200-8m0.webp','Komatsu PC200-8M0'],['excavator-caterpillar-320d-gc-hydraulic-excavator.webp','Caterpillar 320D GC'],['excavator-hitachi-hydraulic-excavator-zx200-5g.webp','Hitachi ZX200-5G']]},
  {id:'bulldozer',name:'Bulldozers',group:'Earthworks',models:[['Caterpillar D5RXL',1],['Caterpillar D6D LS',4],['Caterpillar D6D LGP',1],['Caterpillar D6G',3],['Caterpillar D6R2XL',1],['Komatsu D70LE-8',3],['Komatsu D75A-1',1]],photos:[['bulldozer-caterpillar-d6d-ls-bulldozer.webp','Caterpillar D6D LS'],['bulldozer-d6g-sr-track-type-tractor.webp','Caterpillar D6G'],['bulldozer-komatsu-d75a-1-bulldozer.webp','Komatsu D75A-1']]},
  {id:'compactor',name:'Compactors',group:'Roadworks',models:[['Bomag BW211D-40',2],['Caterpillar CS54B with MDP',3],['HAMM 3410',6]],photos:[['compactor-hamm-3410-compactor.webp','HAMM 3410'],['compactor-bomag-bw211d-40-compactor.webp','Bomag BW211D-40'],['compactor-caterpillar-cs54b-compactor-with-mdp.webp','Caterpillar CS54B']]},
  {id:'backpusher',name:'Backpushers',group:'Earthworks',models:[['Kubota Tractor M108S',4]],photos:[['backpusher-kubota-tractor-model-m108s.webp','Kubota M108S']]},
  {id:'motor-grader',name:'Motor graders',group:'Roadworks',models:[['Caterpillar 12G',1],['Caterpillar 12K',1],['Komatsu GD705A-4A',2]]},
  {id:'backhoe',name:'Backhoes',group:'Earthworks',models:[['Case 580SK',1],['Case 590',1],['John Deere 310L',1]],photos:[['backhoe-case-590-backhoe-loader.webp','Case 590'],['backhoe-john-deere-backhoe-loader-310l-2wd.webp','John Deere 310L']]},
  {id:'wheel-loader',name:'Wheel loaders',group:'Earthworks',models:[['Caterpillar 950G',2],['Caterpillar 950H Wheel Loader/Shovel',2]]},
  {id:'paving',name:'Paving machines',group:'Roadworks',models:[['Vogele Paver',1],['HAMM Pneumatic Tyre Roller',1],['HAMM Tandem Roller',1]]},
  {id:'dump-truck',name:'Dump trucks',group:'Transport',models:[['Nissan CPB15N',2],['Nissan CD48E',1],['Nissan CW48ZV',1],['Nissan CD4ZA',2],['Nissan CD48',2]],photos:[['dump-truck-nissan-cd4za-dump-truck-11tons.webp','Nissan CD4ZA'],['dump-truck-nissan-cw48zv-dump-truck-11-tons.webp','Nissan CW48ZV'],['dump-truck-nissan-cd48-dump-truck-11-tons.webp','Nissan CD48']]},
  {id:'mixer-truck',name:'Mixer trucks',group:'Transport',models:[['Hino CW52AH',1],['Hino FS1FKC',2],['Hino FS270B',4],['Nissan CS520HN',1],['Nissan CW53',4],['Nissan FW54H',1],['Nissan KC-CW53',1]]},
  {id:'water-truck',name:'Water trucks',group:'Transport',models:[['Hino FR2P',1],['Hino ZM500',2]]},
  {id:'crane',name:'Crawler / mobile cranes',group:'Lifting & piling',models:[['KATO NK200H-5, 20 ton',1],['ZOOMLION, 25 ton',1],['FUSHUN QUY50A-1915, 50T hydraulic crawler',2]],photos:[['crane-50t-fushun-quy50a-1915-hydraulic-crawler.webp','FUSHUN QUY50A-1915'],['crane-kato-nk200h-5-mobile-crane.webp','KATO NK200H-5'],['crane-zoomlion-25-ton-truck-crane.webp','ZOOMLION 25 ton']]},
  {id:'jaw-crusher',name:'Jaw crusher',group:'Production',models:[['EIK C680',1]]},
  {id:'vibro-hammer',name:'Vibro hammers',group:'Lifting & piling',models:[['Vibro Hammer #A330',2],['PVE-25',1]]},
  {id:'forklift',name:'Forklift',group:'Lifting & piling',models:[['Manitou MT728-4',1]],photos:[['forklift-manitou-mt728-4.webp','Manitou MT728-4']]},
  {id:'prime-mover',name:'Prime mover & trailers',group:'Transport',models:[['Nissan CDW482 Prime Mover',1],['3 Axles Semi Trailer Cargo Arm',1],['3 Axles Low Bed Trailer',1]],photos:[['trailer-nissan-cdw482-prime-mover.webp','Nissan CDW482'],['trailer-3-axles-semi-trailer-cargo-arm.webp','3 Axles Semi Trailer'],['trailer-3-axles-low-bed.webp','3 Axles Low Bed']]},
  {id:'lorry-crane',name:'Lorry crane',group:'Lifting & piling',models:[['Nissan CD48 Mounted with Cargo Crane',1]]},
  {id:'weighbridge',name:'Weighbridges',group:'Production',models:[['L.A.K System Fully Electronic Computerized, 60,000kg',2],['L.A.K System Weighbridge, 80,000kg',1]]},
  {id:'bored-piling',name:'Bored piling rigs',group:'Lifting & piling',models:[['SANY SR280R Hydraulic Rotary Drilling Rig',2]],photos:[['drilling-rig-sany-sr280r-hydraulic-rotary-drilling-rig.webp','SANY SR280R']]},
  {id:'micro-piling',name:'Micro piling rigs',group:'Lifting & piling',models:[['CMV MK900 D1 Drilling Rig',1],['Casagrande C-6 Drilling Rig',1]],photos:[['drilling-rig-cmv-mk900-d1-drilling-rig.webp','CMV MK900 D1'],['drilling-rig-casagrande-c-6-drilling-rig.webp','Casagrande C-6']]},
  {id:'batching-plant',name:'Batching plants',group:'Production',models:[['Wet Concrete Batching Plant, 60m³/hour',1],['Dry Concrete Batching Plant, 60m³/hour',1]]}
];

const root=document.getElementById('machinery-root');
if(root){
  const total=item=>item.models.reduce((sum,model)=>sum+model[1],0);
  const groups=['All equipment','Earthworks','Roadworks','Transport','Lifting & piling','Production'];
  const photoPath=file=>`assets/machinery/${file}`;
  root.innerHTML=`${policyPageHeader('Plant & Machinery','Find the equipment behind our building and civil engineering work. Browse by type, or search for a specific model.','machinery-background','top')}<section class="machine-register shell" id="equipment-register" aria-labelledby="register-title"><div class="machine-register-heading"><div><p class="machine-overline">EQUIPMENT REGISTER</p><h2 id="register-title">Find the right plant.</h2></div></div><div class="machine-controls"><label class="machine-search"><span class="machine-search-icon" aria-hidden="true">⌕</span><span class="sr-only">Search machinery by type, brand or model</span><input id="machine-search" type="search" placeholder="Search machine, brand or model" autocomplete="off"><kbd>/</kbd></label><div class="machine-filters" aria-label="Filter equipment by use"></div></div><div class="machine-workspace"><aside class="machine-rail" aria-label="Equipment categories"><div class="machine-rail-heading">CATEGORIES</div><div class="machine-category-list" id="machine-category-list"></div></aside><div class="machine-detail" id="machine-detail" aria-live="polite"></div></div></section>`;
  const search=root.querySelector('#machine-search');
  const filterBox=root.querySelector('.machine-filters');
  const list=root.querySelector('#machine-category-list');
  const detail=root.querySelector('#machine-detail');
  let activeGroup='All equipment';
  let activeId=machinery.some(item=>item.id===location.hash.slice(1))?location.hash.slice(1):'excavator';
  let activePhoto=0;
  const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  function visibleItems(){const term=search.value.trim().toLocaleLowerCase();return machinery.filter(item=>(activeGroup==='All equipment'||item.group===activeGroup)&&(!term||item.name.toLocaleLowerCase().includes(term)||item.group.toLocaleLowerCase().includes(term)||item.models.some(model=>model[0].toLocaleLowerCase().includes(term))))}
  function renderFilters(){filterBox.innerHTML=groups.map(group=>`<button type="button" class="machine-filter ${group===activeGroup?'is-active':''}" data-group="${escapeHtml(group)}" aria-pressed="${group===activeGroup}">${escapeHtml(group)}</button>`).join('')}
  function renderList(items){list.innerHTML=items.map(item=>`<button type="button" class="machine-category ${item.id===activeId?'is-active':''}" data-id="${item.id}" aria-current="${item.id===activeId?'true':'false'}"><span class="machine-category-name">${escapeHtml(item.name)}</span><span class="machine-category-qty">${total(item)} <small>${total(item)===1?'unit':'units'}</small></span></button>`).join('')}
  function renderDetail(item){
    if(!item){detail.innerHTML='<div class="machine-empty"><span>NO MATCHES</span><h3>No equipment found.</h3><p>Try a different model, brand or equipment type.</p><button type="button" id="machine-clear">Clear search and filters <span aria-hidden="true">↗</span></button></div>';return}
    const term=search.value.trim().toLocaleLowerCase();
    const matchingModels=term&&!item.name.toLocaleLowerCase().includes(term)&&!item.group.toLocaleLowerCase().includes(term)?item.models.filter(model=>model[0].toLocaleLowerCase().includes(term)):item.models;
    const images=item.photos||[];
    const selected=images[Math.min(activePhoto,images.length-1)];
    detail.innerHTML=`<div class="machine-detail-top"><div><p class="machine-detail-group">${escapeHtml(item.group)} / EQUIPMENT</p><h3>${escapeHtml(item.name)}</h3></div></div>${selected?`<figure class="machine-photo"><div class="machine-photo-stage"><img src="${photoPath(selected[0])}" alt="${escapeHtml(selected[1])}" loading="lazy"></div>${images.length>1?`<div class="machine-photo-choices" aria-label="Equipment images">${images.map((photo,i)=>`<button type="button" class="machine-photo-choice ${i===activePhoto?'is-active':''}" data-photo="${i}" aria-label="Show ${escapeHtml(photo[1])}" aria-pressed="${i===activePhoto}"><img src="${photoPath(photo[0])}" alt="" loading="lazy"></button>`).join('')}</div>`:''}</figure>`:`<div class="machine-photo-unavailable"><span>PLANT & MACHINERY</span><strong>${escapeHtml(item.name)}</strong><span>MODEL REGISTER BELOW <i aria-hidden="true">↘</i></span></div>`}<div class="machine-models-heading"><span>MODEL REGISTER</span><span>${matchingModels.length} ${matchingModels.length===1?'MODEL':'MODELS'}</span></div><div class="machine-models">${matchingModels.map(model=>`<div class="machine-model"><span>${escapeHtml(model[0])}</span><strong>${model[1]} <small>${model[1]===1?'unit':'units'}</small></strong></div>`).join('')}</div>`;
  }
  function render(){const items=visibleItems();if(items.length&&!items.some(item=>item.id===activeId)){activeId=items[0].id;activePhoto=0}renderFilters();renderList(items);renderDetail(items.find(item=>item.id===activeId))}
  filterBox.addEventListener('click',event=>{const button=event.target.closest('[data-group]');if(!button)return;activeGroup=button.dataset.group;render()});
  list.addEventListener('click',event=>{const button=event.target.closest('[data-id]');if(!button)return;activeId=button.dataset.id;activePhoto=0;history.replaceState(null,'',`#${activeId}`);render();if(matchMedia('(max-width: 900px)').matches){if(window.siteLenis)window.siteLenis.scrollTo(detail);else detail.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'})}});
  detail.addEventListener('click',event=>{const choice=event.target.closest('[data-photo]');if(choice){activePhoto=Number(choice.dataset.photo);renderDetail(machinery.find(item=>item.id===activeId))}if(event.target.closest('#machine-clear')){search.value='';activeGroup='All equipment';activeId='excavator';activePhoto=0;render();search.focus()}});
  search.addEventListener('input',render);
  document.addEventListener('keydown',event=>{if(event.key==='/'&&!/input|textarea|select/i.test(document.activeElement?.tagName)){event.preventDefault();search.focus()}});
  addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(machinery.some(item=>item.id===id)){activeId=id;activePhoto=0;activeGroup='All equipment';search.value='';render()}});
  render();
}
