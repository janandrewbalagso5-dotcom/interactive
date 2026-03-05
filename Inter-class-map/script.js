// ═══════════════════════════════════════════════
// ROOM COLORS
// ═══════════════════════════════════════════════
var RC={
  classroom:{f:'#eef0fb',s:'#b8c0e0'},
  lab:      {f:'#edf7ee',s:'#a8d4b0'},
  library:  {f:'#e8f4fd',s:'#90c8e8'},
  office:   {f:'#f5eeff',s:'#c4a8e8'},
  toilet:   {f:'#f0f9ff',s:'#90c8dc'},
  prayer:   {f:'#fffbeb',s:'#d4b860'},
  stair:    {f:'#f0ecff',s:'#b8a8dc'},
  corridor: {f:'#f5f5f5',s:'#d8d8d8'}
};

var FL={ground:'Ground',second:'2nd Floor',third:'3rd Floor'};

function mk(id,lb,tp,x,y,w,h){return{id:id,label:lb,type:tp,x:x,y:y,w:w,h:h};}

// ═══════════════════════════════════════════════
// FLOOR DATA
// ═══════════════════════════════════════════════
var DATA={
  // BASIC EDUCATION: vertical card on LEFT side of campus
  be:{
    name:'Basic Education', cardLeft:20, cardTop:190,
    svgW:148, svgH:606,
    floors:{
      ground:{label:'Ground Floor',rooms:[
        mk('be-g-tf', 'F.Toilet','toilet',32,  0, 54, 23),
        mk('be-g-tm', 'M.Toilet','toilet',32, 25, 54, 23),
        mk('be-g-stl','STAIR','stair',  0,  0, 30, 48),
        mk('be-g-c1', 'Cls 101','classroom',0, 52,146, 46),
        mk('be-g-c2', 'Cls 102','classroom',0, 102,146, 46),
        mk('be-g-c3', 'Cls 103','classroom',0, 152,146, 46),
        mk('be-g-c4', 'Cls 104','classroom',0, 202,146, 46),
        mk('be-g-c5', 'Cls 105','classroom',0, 252,146, 46),
        mk('be-g-c6', 'Cls 106','classroom',0, 302,146, 46),
        mk('be-g-c7', 'Cls 107','classroom',0, 352,146, 46),
        mk('be-g-c8', 'Cls 108','classroom',0, 402,146, 46),
        mk('be-g-c9', 'Cls 109','classroom',0, 452,146, 46),
        mk('be-g-c10','Cls 110','classroom',0, 502,146, 46),
        mk('be-g-str','STAIR','stair',     0, 552,146, 30),
        mk('be-g-pr', 'Prayer Room','prayer',0,585,146,20),
      ]},
      second:{label:'2nd Floor',rooms:[
        mk('be-2-stl',  'STAIR','stair',    0,  0, 30, 48),
        mk('be-2-tech', 'Tech Rm','lab',   32,  0,114, 48),
        mk('be-2-com',  'COM LAB','lab',    0, 52,146, 46),
        mk('be-2-sci1', 'SCI LAB','lab',    0,102,146, 46),
        mk('be-2-chem', 'Chem LAB','lab',   0,152,146, 46),
        mk('be-2-sci2', 'SCI LAB 2','lab',  0,202,146, 46),
        mk('be-2-princ','Principal\nOffice','office',0,252,146,52),
        mk('be-2-fac',  'FACULTY','office', 0,308,146, 52),
        mk('be-2-g11abm','Gr.11\nABM/HUMSS','classroom',0,364,146,50),
        mk('be-2-g12abm','Gr.12\nABM/HUMSS','classroom',0,418,146,50),
        mk('be-2-g12stem','Gr.12 STEM','classroom',0,472,146,46),
        mk('be-2-g11stem','Gr.11 STEM','classroom',0,522,146,40),
        mk('be-2-cr',   'CR','toilet',    104,565, 42, 22),
        mk('be-2-str',  'STAIR','stair',    0,565,100, 22),
        mk('be-2-tle',  'TLE LAB','lab',    0,590,146, 14),
      ]}
    }
  },

  // NEW BUILDING: horizontal card on TOP of campus
  nb:{
    name:'New Building', cardLeft:180, cardTop:20,
    svgW:848, svgH:138,
    floors:{
      ground:{label:'Ground Floor',rooms:[]},
      second:{label:'2nd Floor',rooms:[
        mk('nb-2-stl',  'STAIR','stair',    0,  0, 34,110),
        mk('nb-2-lib1', 'Library','library',38,  0, 80,110),
        mk('nb-2-lib2', 'Library','library',122, 0, 66,110),
        mk('nb-2-lib3', 'Library','library',192, 0, 66,110),
        mk('nb-2-r205', 'Room 205','classroom',262,0,66,110),
        mk('nb-2-r206', 'Room 206','classroom',332,0,66,110),
        mk('nb-2-comp', 'Comp Lab','lab',   402,  0, 68,110),
        mk('nb-2-r208', 'Room 208','classroom',474,0,66,110),
        mk('nb-2-r209', 'Room 209','classroom',544,0,66,110),
        mk('nb-2-r210', 'Room 210','classroom',614,0,66,110),
        mk('nb-2-crime','Crime Lab','lab',  684,  0, 68,110),
        mk('nb-2-r212', 'Room 212','classroom',756,0,60,110),
        mk('nb-2-str',  'STAIR','stair',   820,  0, 26,110),
        mk('nb-2-corr', 'CORRIDOR','corridor',38,112,808,22),
      ]},
      third:{label:'3rd Floor',rooms:[
        mk('nb-3-stl',  'STAIR','stair',   0,  0,  34,110),
        mk('nb-3-r301', 'Room 301','classroom',38, 0,66,110),
        mk('nb-3-r302', 'Room 302','classroom',108,0,66,110),
        mk('nb-3-r303', 'Room 303','classroom',178,0,66,110),
        mk('nb-3-r304', 'Room 304','classroom',248,0,66,110),
        mk('nb-3-r305', 'Room 305','classroom',318,0,66,110),
        mk('nb-3-r306', 'Room 306','classroom',388,0,66,110),
        mk('nb-3-r307', 'Room 307','classroom',458,0,66,110),
        mk('nb-3-r308', 'Room 308','classroom',528,0,66,110),
        mk('nb-3-r309', 'Room 309','classroom',598,0,66,110),
        mk('nb-3-r310', 'Room 310','classroom',668,0,66,110),
        mk('nb-3-r311', 'Room 311','classroom',738,0,66,110),
        mk('nb-3-cba',  'CBA\nVenture Lab','lab',808,0,38,110),
        mk('nb-3-str',  'STAIR','stair',   848,  0,  0,  0),
        mk('nb-3-corr', 'CORRIDOR','corridor',38,112,808,22),
      ]}
    }
  }
};

// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
var youId=null, destId=null, activeF={be:'ground',nb:'second'};

function getRoom(id){
  for(var b in DATA){var bd=DATA[b];for(var f in bd.floors){var rm=bd.floors[f].rooms.find(function(r){return r.id===id;});if(rm)return Object.assign({},rm,{bk:b,fk:f});}}
  return null;
}
function allRooms(){
  var out=[];
  for(var b in DATA){var bd=DATA[b];for(var f in bd.floors){bd.floors[f].rooms.filter(function(r){return r.type!=='corridor'&&r.w>0;}).forEach(function(r){out.push(Object.assign({},r,{bk:b,fk:f}));});}}
  return out;
}

// ═══════════════════════════════════════════════
// SVG BUILDER
// ═══════════════════════════════════════════════
function makeSVG(bk,fk){
  var bd=DATA[bk],fd=bd.floors[fk],W=bd.svgW,H=bd.svgH;
  if(!fd.rooms.length) return '<div class="empty-flr"><div style="font-size:22px">&#128679;</div>Coming soon</div>';
  var s='<svg width="'+W+'" height="'+H+'" xmlns="http://www.w3.org/2000/svg">';
  fd.rooms.forEach(function(r){
    if(r.w===0)return;
    var c=RC[r.type]||RC.classroom, cx=r.x+r.w/2, cy=r.y+r.h/2;
    var lines=r.label.split('\n');
    var maxch=Math.max.apply(null,lines.map(function(l){return l.length;}));
    var fs=Math.min(10,Math.max(6.5,Math.min(r.w,r.h)/(maxch*0.62)));
    var lh=fs*1.28, ty=cy-((lines.length-1)*lh/2);
    if(r.type==='corridor'){
      s+='<rect x="'+r.x+'" y="'+r.y+'" width="'+r.w+'" height="'+r.h+'" rx="2" fill="#f5f5f5" stroke="#d8d8d8" stroke-width="0.8"/>';
      s+='<text x="'+cx+'" y="'+cy+'" text-anchor="middle" dominant-baseline="middle" font-family="Inter,sans-serif" font-size="7.5" fill="#b0b8c8" font-weight="600" letter-spacing="1.5">CORRIDOR</text>';
      return;
    }
    s+='<g class="room-g" id="rg-'+r.id+'" onclick="tap(\''+r.id+'\',\''+bk+'\',\''+fk+'\')">';
    s+='<rect id="rc-'+r.id+'" x="'+r.x+'" y="'+r.y+'" width="'+r.w+'" height="'+r.h+'" rx="4" fill="'+c.f+'" stroke="'+c.s+'" stroke-width="1.5"/>';
    lines.forEach(function(ln,i){
      s+='<text x="'+cx+'" y="'+(ty+i*lh)+'" text-anchor="middle" dominant-baseline="middle" font-family="Inter,sans-serif" font-size="'+fs+'" fill="#334155" font-weight="600">'+ln+'</text>';
    });
    s+='</g>';
  });
  s+='<g id="pg-'+bk+'-'+fk+'"></g></svg>';
  return s;
}

// ═══════════════════════════════════════════════
// RENDER
// ═══════════════════════════════════════════════
function render(){
  var slots=document.getElementById('bslots');
  slots.innerHTML='';
  Object.keys(DATA).forEach(function(bk){
    var bd=DATA[bk];
    var el=document.createElement('div');
    el.className='bldg'; el.id='bc-'+bk;
    el.style.left=bd.cardLeft+'px'; el.style.top=bd.cardTop+'px';
    var fks=Object.keys(bd.floors), af=activeF[bk];
    var h='<div class="bldg-head"><div class="bldg-name '+(bk==='be'?'be-color':'nb-color')+'">'+bd.name+'</div><div class="floor-tabs" id="ft-'+bk+'">';
    fks.forEach(function(fk){ h+='<button class="ftab'+(fk===af?' on-'+bk:'')+'" onclick="switchF(\''+bk+'\',\''+fk+'\')">'+(FL[fk]||fk)+'</button>'; });
    h+='</div></div><div class="flr-wrap" id="fw-'+bk+'" style="width:'+bd.svgW+'px;height:'+bd.svgH+'px;">';
    fks.forEach(function(fk){ h+='<div class="flr-layer'+(fk===af?' show':'')+'" id="fl-'+bk+'-'+fk+'">'+makeSVG(bk,fk)+'</div>'; });
    h+='</div>';
    el.innerHTML=h; slots.appendChild(el);
  });
  highlight(); drawPath();
}

// ═══════════════════════════════════════════════
// FLOOR SWITCH
// ═══════════════════════════════════════════════
function switchF(bk,fk){
  activeF[bk]=fk;
  Object.keys(DATA[bk].floors).forEach(function(f2){
    var l=document.getElementById('fl-'+bk+'-'+f2);
    if(l) l.classList.toggle('show',f2===fk);
  });
  var ft=document.getElementById('ft-'+bk);
  if(ft){ var bs=ft.querySelectorAll('.ftab'); var fks=Object.keys(DATA[bk].floors);
    bs.forEach(function(b,i){b.className='ftab'+(fks[i]===fk?' on-'+bk:'');});
  }
  highlight(); drawPath();
}

// ═══════════════════════════════════════════════
// TAP ROOM
// ═══════════════════════════════════════════════
function tap(id,bk,fk){
  if(!youId){ youId=id; toast('&#128205; Now tap your destination'); highlight(); return; }
  if(id===youId){ youId=null;destId=null; clearPathSVG(); highlight(); hideSidebar(); toast('&#128205; Tap a room to set your location'); return; }
  destId=id; highlight(); drawPath(); showSidebar();
}

// ═══════════════════════════════════════════════
// HIGHLIGHTS
// ═══════════════════════════════════════════════
function highlight(){
  document.querySelectorAll('.room-g').forEach(function(g){g.classList.remove('you','dest');});
  if(youId){var g=document.getElementById('rg-'+youId);if(g)g.classList.add('you');}
  if(destId){var g2=document.getElementById('rg-'+destId);if(g2)g2.classList.add('dest');}
}

// ═══════════════════════════════════════════════
// PATH
// ═══════════════════════════════════════════════
function clearPathSVG(){
  document.querySelectorAll('[id^="pg-"]').forEach(function(g){g.innerHTML='';});
  document.getElementById('xsvg').innerHTML='';
}
function ctr(r){return{x:r.x+r.w/2,y:r.y+r.h/2};}

function drawPath(){
  clearPathSVG();
  if(!youId||!destId)return;
  var fr=getRoom(youId), to=getRoom(destId);
  if(!fr||!to)return;
  var fc=ctr(fr), tc=ctr(to);

  if(fr.bk===to.bk&&fr.fk===to.fk){
    // same floor
    var corrY=fr.y+fr.h+8;
    if(fr.bk==='be') injectPth(fr.bk,fr.fk,[fc,{x:fr.x+fr.w+5,y:fc.y},{x:to.x+to.w+5,y:tc.y},tc],fr,to);
    else injectPth(fr.bk,fr.fk,[fc,{x:fc.x,y:corrY},{x:tc.x,y:corrY},tc],fr,to);
    switchF(fr.bk,fr.fk);
  } else if(fr.bk===to.bk){
    // same building diff floor
    var st=DATA[fr.bk].floors[fr.fk].rooms.find(function(r){return r.type==='stair'&&r.w>0;});
    var sc=st?ctr(st):fc;
    injectPth(fr.bk,fr.fk,fr.bk==='be'?[fc,sc]:[fc,{x:fc.x,y:fr.y+fr.h+8},{x:sc.x,y:fr.y+fr.h+8},sc],fr,null);
    var st2=DATA[to.bk].floors[to.fk].rooms.find(function(r){return r.type==='stair'&&r.w>0;});
    var sc2=st2?ctr(st2):tc;
    injectPth(to.bk,to.fk,to.bk==='be'?[sc2,tc]:[sc2,{x:tc.x,y:to.y+to.h+8},tc],null,to);
    switchF(to.bk,to.fk);
  } else {
    // different buildings
    var stA=DATA[fr.bk].floors[fr.fk].rooms.find(function(r){return r.type==='stair'&&r.w>0;});
    var scA=stA?ctr(stA):fc;
    injectPth(fr.bk,fr.fk,fr.bk==='be'?[fc,scA]:[fc,{x:fc.x,y:fr.y+fr.h+8},{x:scA.x,y:fr.y+fr.h+8},scA],fr,null);
    var stB=DATA[to.bk].floors[to.fk].rooms.find(function(r){return r.type==='stair'&&r.w>0;});
    var scB=stB?ctr(stB):tc;
    injectPth(to.bk,to.fk,to.bk==='be'?[scB,tc]:[scB,{x:tc.x,y:to.y+to.h+8},tc],null,to);
    drawXPath(fr,to);
  }
}

function injectPth(bk,fk,pts,fromR,toR){
  var g=document.getElementById('pg-'+bk+'-'+fk);
  if(!g||pts.length<2)return;
  var d=pts.map(function(p,i){return(i===0?'M':'L')+p.x.toFixed(1)+','+p.y.toFixed(1);}).join(' ');
  var h='<path d="'+d+'" class="rt-glow"/><path d="'+d+'" class="rt-path"/>';
  if(fromR){var c=ctr(fromR);h+='<circle cx="'+c.x+'" cy="'+(fromR.y+9)+'" r="9" fill="#7c3aed"/><text x="'+c.x+'" y="'+(fromR.y+9)+'" text-anchor="middle" dominant-baseline="middle" font-size="10" fill="#fff" font-weight="800">&#9650;</text>';}
  if(toR){var c2=ctr(toR);h+='<circle cx="'+c2.x+'" cy="'+(toR.y+9)+'" r="9" fill="#e91e8c"/><text x="'+c2.x+'" y="'+(toR.y+9)+'" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#fff" font-weight="800">&#9733;</text>';}
  g.innerHTML=h;
}

function drawXPath(fr,to){
  var bd_fr=DATA[fr.bk], bd_to=DATA[to.bk];
  // absolute campus coords of each building exit
  var fx, fy, tx2, ty2;
  if(fr.bk==='be'){
    fx=bd_fr.cardLeft+bd_fr.svgW+16; fy=bd_fr.cardTop+80;
    tx2=bd_to.cardLeft+20; ty2=bd_to.cardTop+bd_to.svgH+20;
  } else {
    fx=bd_fr.cardLeft+30; fy=bd_fr.cardTop+bd_fr.svgH+16;
    tx2=bd_to.cardLeft+bd_to.svgW+16; ty2=bd_to.cardTop+80;
  }
  var mx=(fx+tx2)/2, my=(fy+ty2)/2;
  var svg=document.getElementById('xsvg');
  svg.innerHTML='<path d="M'+fx+','+fy+' Q'+mx+','+my+' '+tx2+','+ty2+'" class="rt-cross"/>'
    +'<circle cx="'+fx+'" cy="'+fy+'" r="5" fill="#e91e8c" opacity=".6"/>'
    +'<circle cx="'+tx2+'" cy="'+ty2+'" r="5" fill="#e91e8c" opacity=".6"/>';
}

// ═══════════════════════════════════════════════
// SIDEBAR
// ═══════════════════════════════════════════════
function showSidebar(){
  var fr=getRoom(youId), to=getRoom(destId);
  if(!fr||!to)return;
  var bn=function(b){return b==='be'?'Basic Education':'New Building';};
  document.getElementById('rFrom').textContent=fr.label.replace('\n',' ');
  document.getElementById('rFromSub').textContent=bn(fr.bk)+' · '+(FL[fr.fk]||fr.fk);
  document.getElementById('rTo').textContent=to.label.replace('\n',' ');
  document.getElementById('rToSub').textContent=bn(to.bk)+' · '+(FL[to.fk]||to.fk);
  var ss=[];
  ss.push('Start at <strong>'+fr.label.replace('\n',' ')+'</strong>.');
  if(fr.bk!==to.bk){
    ss.push('Walk to the corridor and exit the building.');
    ss.push('Cross the campus to <strong>'+bn(to.bk)+'</strong>.');
    if(fr.fk!==to.fk)ss.push('Take the staircase to <strong>'+(FL[to.fk]||to.fk)+'</strong>. &#9851;');
    ss.push('Follow the corridor to your destination.');
  } else if(fr.fk!==to.fk){
    ss.push('Walk to the corridor.');
    ss.push('Take the staircase to <strong>'+(FL[to.fk]||to.fk)+'</strong>. &#9851; Stairs at both ends.');
    ss.push('Follow the corridor.');
  } else {
    ss.push('Walk along the corridor '+(fr.bk==='be'?(to.y>fr.y?'downward':'upward'):(to.x>fr.x?'right':'left'))+'.');
  }
  ss.push('Arrive at <strong>'+to.label.replace('\n',' ')+'</strong>. &#10003;');
  document.getElementById('steps').innerHTML=ss.map(function(s,i){
    return'<div class="step"><div class="step-n">'+(i+1)+'</div><div class="step-t">'+s+'</div></div>';
  }).join('');
  document.getElementById('sbEmpty').style.display='none';
  document.getElementById('routePanel').classList.add('show');
}
function hideSidebar(){
  document.getElementById('sbEmpty').style.display='';
  document.getElementById('routePanel').classList.remove('show');
}
function clearRoute(){
  youId=null;destId=null;clearPathSVG();highlight();hideSidebar();
  toast('&#128205; Tap a room to begin');
}

// ═══════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════
var toastTmr;
function toast(msg){
  var t=document.getElementById('toast'); document.getElementById('toastMsg').innerHTML=msg;
  t.classList.remove('hide'); clearTimeout(toastTmr);
  toastTmr=setTimeout(function(){t.classList.add('hide');},2600);
}

// ═══════════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════════
var si=document.getElementById('searchInput'), sd=document.getElementById('sdrop');
si.addEventListener('input',function(){
  var q=si.value.trim().toLowerCase();
  if(!q){sd.classList.remove('open');return;}
  var ms=allRooms().filter(function(r){return r.label.toLowerCase().includes(q);}).slice(0,8);
  if(!ms.length){sd.classList.remove('open');return;}
  sd.innerHTML=ms.map(function(r){
    return'<div class="sd-item" onclick="pickSearch(\''+r.id+'\',\''+r.bk+'\',\''+r.fk+'\')">'
      +'<span class="sd-badge '+(r.bk==='be'?'be-badge':'nb-badge')+'">'+(r.bk==='be'?'BE':'NB')+'</span>'
      +r.label.replace('\n',' ')+' &ndash; '+(FL[r.fk]||r.fk)+'</div>';
  }).join('');
  sd.classList.add('open');
});
document.addEventListener('click',function(e){if(!e.target.closest('.search-box'))sd.classList.remove('open');});
function pickSearch(id,bk,fk){
  sd.classList.remove('open'); si.value='';
  switchF(bk,fk); tap(id,bk,fk);
  var c=document.getElementById('bc-'+bk);
  if(c)c.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
render();
toast('&#128205; Tap any room to begin navigating');