// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
const S = {
  db:'sql', fp:'2605', deploy:'onpremise',
  users:10, usersApp:3, addons:0, dbsize:100, bufferPct:40,
  tipo:'nueva',
  conexion:'appserver'   // 'appserver' | 'pcusuario'
};

// ═══════════════════════════════════════
// FP DEFINITIONS
// ═══════════════════════════════════════
const FP = {
  sql:[
    {v:'9.3', l:'9.3 PL14',     t:'eom',   tx:'Fin soporte'},
    {v:'2008',l:'10.0 FP 2008', t:'stable',tx:'Estable'},
    {v:'2102',l:'10.0 FP 2102', t:'stable',tx:'Estable'},
    {v:'2105',l:'10.0 FP 2105', t:'stable',tx:'Estable'},
    {v:'2111',l:'10.0 FP 2111', t:'stable',tx:'Estable'},
    {v:'2202',l:'10.0 FP 2202', t:'stable',tx:'Estable'},
    {v:'2208',l:'10.0 FP 2208', t:'stable',tx:'Estable'},
    {v:'2302',l:'10.0 FP 2302', t:'stable',tx:'Estable'},
    {v:'2305',l:'10.0 FP 2305', t:'stable',tx:'Estable'},
    {v:'2308',l:'10.0 SP 2308', t:'stable',tx:'Estable'},
    {v:'2311',l:'10.0 FP 2311', t:'stable',tx:'Estable'},
    {v:'2402',l:'10.0 SP 2402', t:'stable',tx:'Estable'},
    {v:'2405',l:'10.0 FP 2405', t:'stable',tx:'Estable'},
    {v:'2408',l:'10.0 SP 2408', t:'stable',tx:'Estable'},
    {v:'2411',l:'10.0 SP 2411', t:'stable',tx:'Estable'},
    {v:'2502',l:'10.0 FP 2502', t:'warn',  tx:'Problemas'},
    {v:'2505',l:'10.0 SP 2505', t:'stable',tx:'Estable'},
    {v:'2508',l:'10.0 FP 2508', t:'stable',tx:'Estable'},
    {v:'2511',l:'10.0 SP 2511', t:'warn',  tx:'Problemas add-on'},
    {v:'2602',l:'10.0 FP 2602', t:'stable',tx:'Estable'},
    {v:'2605',l:'10.0 SP 2605', t:'ok',    tx:'Recomendado'},
    {v:'2608',l:'10.0 FP 2608', t:'stable',tx:'Lanzado'},
  ],
  hana:[
    {v:'9.3', l:'9.3 PL14',     t:'eom',   tx:'Fin soporte'},
    {v:'2008',l:'10.0 FP 2008', t:'stable',tx:'Estable'},
    {v:'2102',l:'10.0 FP 2102', t:'stable',tx:'Estable'},
    {v:'2105',l:'10.0 FP 2105', t:'stable',tx:'Estable'},
    {v:'2111',l:'10.0 FP 2111', t:'stable',tx:'Estable'},
    {v:'2202',l:'10.0 FP 2202', t:'stable',tx:'Estable'},
    {v:'2208',l:'10.0 FP 2208', t:'stable',tx:'Estable'},
    {v:'2305',l:'10.0 FP 2305', t:'stable',tx:'Estable'},
    {v:'2311',l:'10.0 SP 2311', t:'stable',tx:'Estable'},
    {v:'2402',l:'10.0 SP 2402', t:'stable',tx:'Estable'},
    {v:'2408',l:'10.0 SP 2408', t:'stable',tx:'Estable'},
    {v:'2411',l:'10.0 SP 2411', t:'stable',tx:'Estable'},
    {v:'2502',l:'10.0 FP 2502', t:'warn',  tx:'Problemas'},
    {v:'2508',l:'10.0 FP 2508', t:'stable',tx:'Estable'},
    {v:'2511',l:'10.0 SP 2511', t:'warn',  tx:'Problemas add-on'},
    {v:'2602',l:'10.0 FP 2602', t:'stable',tx:'Estable'},
    {v:'2605',l:'10.0 SP 2605', t:'ok',    tx:'Recomendado'},
    {v:'2608',l:'10.0 FP 2608', t:'stable',tx:'Lanzado'},
  ]
};

// ═══════════════════════════════════════
// PLATFORM MATRICES (SQL v1.38 · HANA v1.42 · corregidas)
// ═══════════════════════════════════════
const SW_SQL = {
  '9.3': {ws:['WS 2012 R2','WS 2016','WS 2019'],sql:['SQL 2012','SQL 2014','SQL 2016','SQL 2017'],wc:['Win 7 SP1','Win 8.1','Win 10'],office:'2013, 2016, 2019',odbc:'11/13/17',dotnet:'4.5.2'},
  '2008':{ws:['WS 2012 R2 (upgrade only)','WS 2016','WS 2019'],sql:['SQL 2016','SQL 2017','SQL 2019'],wc:['Win 10 x64'],office:'2016, 2019',odbc:'13/17',dotnet:'4.8'},
  '2102':{ws:['WS 2012 R2 (upgrade only)','WS 2016','WS 2019'],sql:['SQL 2016','SQL 2017','SQL 2019'],wc:['Win 10 x64'],office:'2016, 2019',odbc:'13/17',dotnet:'4.8'},
  '2105':{ws:['WS 2012 R2 (upgrade only)','WS 2016','WS 2019'],sql:['SQL 2016','SQL 2017','SQL 2019'],wc:['Win 10 x64'],office:'2016, 2019',odbc:'13/17',dotnet:'4.8'},
  '2111':{ws:['WS 2012 R2 (upgrade only)','WS 2016','WS 2019'],sql:['SQL 2016','SQL 2017','SQL 2019'],wc:['Win 10 x64'],office:'2016, 2019',odbc:'13/17',dotnet:'4.8'},
  '2202':{ws:['WS 2012 R2 (upgrade only)','WS 2016','WS 2019','WS 2022'],sql:['SQL 2016','SQL 2017','SQL 2019'],wc:['Win 10 x64'],office:'2016, 2019',odbc:'13/17',dotnet:'4.8'},
  '2208':{ws:['WS 2012 R2 (upgrade only)','WS 2016','WS 2019','WS 2022'],sql:['SQL 2016','SQL 2017','SQL 2019'],wc:['Win 10 x64'],office:'2016, 2019',odbc:'13/17',dotnet:'4.8'},
  '2302':{ws:['WS 2012 R2 (upgrade only)','WS 2016','WS 2019','WS 2022'],sql:['SQL 2016','SQL 2017','SQL 2019'],wc:['Win 10 x64'],office:'2016, 2019',odbc:'13/17/18',dotnet:'4.8'},
  '2305':{ws:['WS 2012 R2 (upgrade only)','WS 2016','WS 2019','WS 2022'],sql:['SQL 2016','SQL 2017','SQL 2019'],wc:['Win 10 x64','Win 11 x64'],office:'2019',odbc:'13/17/18',dotnet:'4.8'},
  '2308':{ws:['WS 2016','WS 2019','WS 2022'],sql:['SQL 2016','SQL 2017','SQL 2019'],wc:['Win 10 x64','Win 11 x64'],office:'2019',odbc:'13/17/18',dotnet:'4.8'},
  '2311':{ws:['WS 2016','WS 2019','WS 2022'],sql:['SQL 2016','SQL 2017','SQL 2019'],wc:['Win 10 x64','Win 11 x64'],office:'2019',odbc:'13/17/18',dotnet:'4.8'},
  '2402':{ws:['WS 2016','WS 2019','WS 2022'],sql:['SQL 2016','SQL 2017','SQL 2019'],wc:['Win 10 x64','Win 11 x64'],office:'2019',odbc:'17/18',dotnet:'4.8'},
  '2405':{ws:['WS 2016','WS 2019','WS 2022'],sql:['SQL 2016','SQL 2017','SQL 2019'],wc:['Win 10 x64','Win 11 x64'],office:'2019, 2021',odbc:'17/18',dotnet:'4.8'},
  '2408':{ws:['WS 2016','WS 2019','WS 2022'],sql:['SQL 2016','SQL 2017','SQL 2019'],wc:['Win 10 x64','Win 11 x64'],office:'2019, 2021',odbc:'17/18',dotnet:'4.8'},
  '2411':{ws:['WS 2016','WS 2019','WS 2022'],sql:['SQL 2016','SQL 2017','SQL 2019','SQL 2022'],wc:['Win 10 x64','Win 11 x64'],office:'2019, 2021',odbc:'17/18',dotnet:'4.8'},
  '2502':{ws:['WS 2016','WS 2019','WS 2022'],sql:['SQL 2016','SQL 2017','SQL 2019','SQL 2022'],wc:['Win 10 x64','Win 11 x64'],office:'2019, 2021',odbc:'17/18',dotnet:'4.8'},
  '2505':{ws:['WS 2016','WS 2019','WS 2022'],sql:['SQL 2016','SQL 2017','SQL 2019','SQL 2022'],wc:['Win 10 x64','Win 11 x64'],office:'2019, 2021',odbc:'17/18',dotnet:'4.8'},
  '2508':{ws:['WS 2016','WS 2019','WS 2022'],sql:['SQL 2016','SQL 2017','SQL 2019','SQL 2022'],wc:['Win 10 x64','Win 11 x64'],office:'2019, 2021',odbc:'13/17/18',dotnet:'4.8'},
  '2511':{ws:['WS 2016','WS 2019','WS 2022','WS 2025'],sql:['SQL 2016','SQL 2017','SQL 2019','SQL 2022'],wc:['Win 10 x64','Win 11 x64'],office:'2019, 2021',odbc:'13/17/18',dotnet:'4.8'},
  '2602':{ws:['WS 2016','WS 2019','WS 2022','WS 2025'],sql:['SQL 2016','SQL 2017','SQL 2019','SQL 2022'],wc:['Win 10 x64','Win 11 x64'],office:'2019, 2021',odbc:'13/17/18',dotnet:'4.8'},
  '2605':{ws:['WS 2019','WS 2022','WS 2025'],sql:['SQL 2019','SQL 2022'],wc:['Win 11 x64'],office:'2021',odbc:'17/18',dotnet:'4.8'},
  '2608':{ws:['WS 2019','WS 2022','WS 2025'],sql:['SQL 2019','SQL 2022'],wc:['Win 11 x64'],office:'2021',odbc:'17/18',dotnet:'4.8'},
};
const SW_HANA = {
  '9.3': {sles:'SLES 12 SP3 / SP4',hana:'HANA 2.0 SPS 02–04',ws:['WS 2012 R2','WS 2016','WS 2019'],wc:['Win 7 SP1','Win 10'],office:'2013, 2016',dotnet:'4.5.2'},
  '2008':{sles:'SLES 15 SP0 / SP1',hana:'HANA 2.0 SPS 04–05',ws:['WS 2016','WS 2019'],wc:['Win 10 x64'],office:'2016, 2019',dotnet:'4.8'},
  '2102':{sles:'SLES 15 SP1 / SP2',hana:'HANA 2.0 SPS 05',ws:['WS 2012 R2 (upgrade only)','WS 2016','WS 2019'],wc:['Win 10 x64'],office:'2016, 2019',dotnet:'4.8'},
  '2105':{sles:'SLES 15 SP1 / SP2',hana:'HANA 2.0 SPS 05',ws:['WS 2012 R2 (upgrade only)','WS 2016','WS 2019'],wc:['Win 10 x64'],office:'2016, 2019',dotnet:'4.8'},
  '2111':{sles:'SLES 15 SP1 / SP2 / SP3',hana:'HANA 2.0 SPS 05–06',ws:['WS 2012 R2 (upgrade only)','WS 2016','WS 2019'],wc:['Win 10 x64'],office:'2016, 2019',dotnet:'4.8'},
  '2202':{sles:'SLES 15 SP2 / SP3',hana:'HANA 2.0 SPS 05–06',ws:['WS 2012 R2 (upgrade only)','WS 2016','WS 2019','WS 2022'],wc:['Win 10 x64'],office:'2016, 2019',dotnet:'4.8'},
  '2208':{sles:'SLES 15 SP2 / SP3',hana:'HANA 2.0 SPS 05 Rev.056/059',ws:['WS 2012 R2 (upgrade only)','WS 2016','WS 2019','WS 2022'],wc:['Win 10 x64'],office:'2016, 2019',dotnet:'4.8'},
  '2305':{sles:'SLES 15 SP2 / SP3 / SP4',hana:'HANA 2.0 SPS 06–07',ws:['WS 2012 R2 (upgrade only)','WS 2016','WS 2019','WS 2022'],wc:['Win 10 x64','Win 11 x64'],office:'2019',dotnet:'4.8'},
  '2311':{sles:'SLES 15 SP2 / SP3 / SP4 / SP5',hana:'HANA 2.0 SPS 07',ws:['WS 2016','WS 2019','WS 2022'],wc:['Win 10 x64','Win 11 x64'],office:'2019',dotnet:'4.8'},
  '2402':{sles:'SLES 15 SP3 / SP4 / SP5',hana:'HANA 2.0 SPS 07',ws:['WS 2016','WS 2019','WS 2022'],wc:['Win 10 x64','Win 11 x64'],office:'2019',dotnet:'4.8'},
  '2408':{sles:'SLES 15 SP3 / SP4 / SP5',hana:'HANA 2.0 SPS 07–08',ws:['WS 2016','WS 2019','WS 2022'],wc:['Win 10 x64','Win 11 x64'],office:'2019, 2021',dotnet:'4.8'},
  '2411':{sles:'SLES 15 SP3 / SP4 / SP5',hana:'HANA 2.0 SPS 07–08',ws:['WS 2016','WS 2019','WS 2022'],wc:['Win 10 x64','Win 11 x64'],office:'2019, 2021',dotnet:'4.8'},
  '2502':{sles:'SLES 15 SP4 / SP5 / SP6',hana:'HANA 2.0 SPS 08',ws:['WS 2016','WS 2019','WS 2022'],wc:['Win 10 x64','Win 11 x64'],office:'2019, 2021',dotnet:'4.8'},
  '2508':{sles:'SLES 15 SP4 / SP5 / SP6',hana:'HANA 2.0 SPS 07–08',ws:['WS 2016','WS 2019','WS 2022'],wc:['Win 10 x64','Win 11 x64'],office:'2019, 2021',dotnet:'4.8'},
  '2511':{sles:'SLES 15 SP5 / SP6 / SP7',hana:'HANA 2.0 SPS 08',ws:['WS 2016','WS 2019','WS 2022','WS 2025'],wc:['Win 10 x64','Win 11 x64'],office:'2019, 2021',dotnet:'4.8'},
  '2602':{sles:'SLES 15 SP5 / SP6 / SP7',hana:'HANA 2.0 SPS 08',ws:['WS 2016','WS 2019','WS 2022','WS 2025'],wc:['Win 10 x64','Win 11 x64'],office:'2019, 2021',dotnet:'4.8'},
  '2605':{sles:'SLES 15 SP5 / SP6 / SP7',hana:'HANA 2.0 SPS 08+',ws:['WS 2019','WS 2022','WS 2025'],wc:['Win 11 x64'],office:'2021',dotnet:'4.8'},
  '2608':{sles:'SLES 15 SP5 / SP6 / SP7',hana:'HANA 2.0 SPS 08+',ws:['WS 2019','WS 2022','WS 2025'],wc:['Win 11 x64'],office:'2021',dotnet:'4.8'},
};

// ═══════════════════════════════════════
// CALC — APP SERVER
// Parámetro clave: usersOnApp
//   conexion='appserver' → usersOnApp = S.users (todos)
//   conexion='pcusuario' → usersOnApp = S.usersApp (solo admin/técnicos)
// ═══════════════════════════════════════
function calcAppServer() {
  const {deploy, users, usersApp, addons, conexion} = S;
  const isCit  = deploy === 'citrix';
  const isVirt = deploy === 'virtual';
  // v3.0: en modo PC de usuario, los usuarios del App Server no pueden pasar del total (antes 1 total y 3 en App Server daba "-2 usuarios restantes")
  const usersOnApp = conexion === 'appserver' ? users : Math.min(usersApp, users);

  // RAM por usuario en App Server (SAP oficial: 1 GB; campo productivo: 2 GB)
  const ramPU   = isCit ? 1.25 : 2.0;
  // Base App Server: SO Windows (8 GB) + SAP B1 Server (4 GB) + Integration/SLD (2 GB)
  const ramBase = 14;
  // Add-ons corren en App Server (~150 MB/usuario/add-on)
  // En pcusuario: los add-ons corren en la PC del usuario, no en el App Server
  const ramAddon = conexion === 'appserver' ? usersOnApp * addons * 0.15 : 0;
  const rawRAM   = ramBase + (usersOnApp * ramPU) + ramAddon;
  const recRAM   = Math.max(16, Math.ceil(rawRAM / 8) * 8);
  const minRAM   = Math.max(8,  Math.ceil(rawRAM * 0.65 / 4) * 4);

  // CPU: 5–8 usuarios/core físico
  const upc   = isVirt ? 4 : 6;
  const cores = Math.max(2, Math.ceil(Math.ceil(usersOnApp / upc) / 2) * 2);

  // Disco: solo SO + binarios SAP
  const dOS = 60, dSAP = 40, dTotal = 100;

  const net = usersOnApp <= 10 ? '100 Mbps LAN' : usersOnApp <= 30 ? '1 Gbps LAN' : '1 Gbps dedicado';

  return { recRAM, minRAM, cores, upc, dOS, dSAP, dTotal, net,
           ramBase, ramPU, rawRAM, ramAddon, usersOnApp };
}

// ═══════════════════════════════════════
// CALC — DB SERVER SQL
// ═══════════════════════════════════════
function calcDBSQL() {
  const {deploy, users, dbsize, tipo, conexion} = S;

  // CPU DB Server:
  // Con App Server: conexiones agrupadas (connection pooling) → menos threads
  // Sin App Server (PC directo): cada PC abre su propia conexión → más threads → más cores
  let cores;
  if (conexion === 'appserver') {
    // App Server hace pooling → DB Server ve menos conexiones directas
    cores = Math.max(4, Math.ceil(Math.ceil(users / 10) / 2) * 2);
  } else {
    // Cada PC conecta directo → DB Server ve users conexiones simultáneas sin pooling
    // Requiere más cores para manejar threads concurrentes
    cores = Math.max(4, Math.ceil(Math.ceil(users / 6) / 2) * 2);
  }

  const net = '1 Gbps LAN';
  const dOS = 60;
  let recRAM, minRAM, ramLabel, dData, dLog, dTemp, dBack, dTotal, diskLabel;

  if (tipo === 'nueva') {
    // RAM nueva: base SQL + 1 GB/usuario (SAP HW Guide oficial para DB Server)
    // Add-ons NO afectan el DB Server
    const rawRAM = 16 + (users * 1.0) + 4;
    recRAM   = Math.max(16, Math.ceil(rawRAM / 8) * 8);
    minRAM   = Math.max(8,  Math.ceil(rawRAM * 0.65 / 4) * 4);
    ramLabel = '16 GB SQL + ' + users + ' usuarios×1 GB';
    dData    = Math.max(100, users * 3);
    dLog     = Math.ceil(dData * 0.25 / 10) * 10;
    dTemp    = Math.max(20, Math.ceil(dData * 0.25 / 10) * 10);
    dBack    = Math.ceil(dData * 2 / 10) * 10;
    diskLabel= 'Estimado por usuarios';

  } else {
    // RAM actualización: buffer pool (40% BD) + OS + sesiones SQL
    // El impacto de usuarios en DB Server es igual independientemente
    // de si conectan por App Server o directo — lo que cambia es el CPU
    const bufPool  = dbsize * (S.bufferPct / 100);
    const ramOS_DB = 8;
    const sqlOver  = 4;
    const ramUsers = users * 0.5; // sesiones SQL: 0.5 GB/usuario
    const rawRAM   = bufPool + ramOS_DB + sqlOver + ramUsers;
    recRAM   = Math.max(16, Math.ceil(rawRAM / 32) * 32);
    minRAM   = Math.max(16, Math.ceil((dbsize * 0.25 + ramOS_DB + ramUsers) / 16) * 16);
    ramLabel = 'BD×' + S.bufferPct + '% (' + Math.round(bufPool) + ' GB) + OS 8 GB + sesiones';
    dData    = Math.ceil(dbsize * 1.5 / 10) * 10;
    dLog     = Math.ceil(dbsize * 0.5  / 10) * 10;
    dTemp    = Math.max(20, Math.ceil(dData * 0.25 / 10) * 10);
    dBack    = Math.ceil(dbsize * 2 / 10) * 10;
    diskLabel= 'Calculado por BD';
  }

  dTotal = Math.ceil((dOS + dData + dLog + dTemp + dBack) / 50) * 50;
  return { recRAM, minRAM, ramLabel, cores, net, dOS, dData, dLog, dTemp, dBack, dTotal, diskLabel, tipo };
}

// ═══════════════════════════════════════
// CALC — DB SERVER HANA
// HANA no cambia con el tipo de conexión cliente
// Solo el CPU puede variar ligeramente
// ═══════════════════════════════════════
function calcDBHANA() {
  const {users, dbsize, tipo, conexion} = S;

  // CPU HANA: mínimo 8 cores, múltiplo de 4
  // Sin App Server: +2 cores extra por conexiones directas (sin pooling)
  const extra = conexion === 'pcusuario' ? 2 : 0;
  const rawC  = 8 + Math.ceil(users / 10) * 2 + extra;
  const cores = Math.ceil(rawC / 4) * 4;
  const net   = '10 Gbps recomendado';

  const dSWAP=128, dEFI=10, dRoot=120, dTmp=70, dSO=328;
  let recRAM, minRAM, ramLabel, dData, dShared, dLog, dUsrSap, dBackup, dTotal, dSAP, dAvail;

  if (tipo === 'nueva') {
    if      (users <= 5)  { recRAM=128; minRAM=64;  ramLabel='1–5 usuarios'; }
    else if (users <= 15) { recRAM=128; minRAM=64;  ramLabel='5–15 usuarios'; }
    else if (users <= 40) { recRAM=128; minRAM=96;  ramLabel='15–40 usuarios'; }
    else                  { recRAM=256; minRAM=128; ramLabel='40–80+ usuarios'; }
    dTotal=2000; const rem=dTotal-dSO;
    dData   = Math.round(rem*0.30/10)*10;
    dShared = Math.round(rem*0.30/10)*10;
    dLog    = Math.round(rem*0.24/10)*10;
    dUsrSap = Math.round(rem*0.06/10)*10;
    dBackup = dTotal-dSO-dData-dShared-dLog-dUsrSap;
  } else {
    const raw = dbsize * 1.5;
    recRAM  = Math.max(128, Math.ceil(raw/64)*64);
    minRAM  = Math.max(64,  Math.ceil(raw*0.85/32)*32);
    ramLabel= 'BD ' + dbsize + ' GB × 1.5';
    dData   = dbsize*3; dLog=dbsize; dShared=dbsize;
    dUsrSap = Math.max(100, Math.ceil(dbsize*0.1/10)*10);
    dBackup = dbsize*3;
    dTotal  = Math.ceil((dSO+dData+dShared+dLog+dUsrSap+dBackup)/100)*100;
  }

  dSAP   = dData+dShared+dLog+dUsrSap+dBackup;
  dAvail = dTotal-dSO-dSAP;
  return { recRAM, minRAM, ramLabel, cores, net,
           dSWAP, dEFI, dRoot, dTmp, dSO,
           dData, dShared, dLog, dUsrSap, dBackup, dSAP, dTotal, dAvail, tipo };
}

// ═══════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════
function bar(gb,tot){ return `<div class="bar-wrap"><div class="bar" style="width:${Math.min(100,Math.round(gb/tot*100))}%"></div></div>`; }
function fmtDisk(gb){ return gb>=1000?(gb/1000).toFixed(1)+' TB':gb+' GB'; }

function slesRows(s){
  const m=/^SLES 15 (.+)$/.exec(s||'');
  if(!m) return `<tr><td>SUSE Linux</td><td style="font-size:11px">${s}</td></tr>`;
  return m[1].split(' / ').map(x=>{
    const n=parseInt((/SP(\d+)/.exec(x)||[])[1],10);
    const cur=n>=7;
    return `<tr><td>SLES 15 ${x}</td><td>${cur?'<span class="bok">VIGENTE</span>':'<span class="bout">FUERA DE SOPORTE GENERAL</span>'}</td></tr>`;
  }).join('');
}

// ═══════════════════════════════════════
// RENDER
// ═══════════════════════════════════════
function render() {
  const fi  = FP[S.db].find(f=>f.v===S.fp)||{};
  const sw  = S.db==='hana'?(SW_HANA[S.fp]||SW_HANA['2602']):(SW_SQL[S.fp]||SW_SQL['2602']);
  const isH = S.db==='hana';
  const app = calcAppServer();
  const db  = isH ? calcDBHANA() : calcDBSQL();
  const depLbl  = {onpremise:'On-Premise',citrix:'Citrix/WTS',virtual:'Virtualizado'}[S.deploy];
  const tipoLbl = S.tipo==='nueva'?'Instalación nueva':`Actualización · BD ${S.dbsize} GB`;
  const pcUsers = S.conexion==='pcusuario' ? S.users - app.usersOnApp : 0;

  // ── NOTAS GLOBALES ──
  const notes=[];
  if(fi.t==='eom')    notes.push({c:'n-danger',i:'⛔',t:'SAP Business One 9.3 está fuera de mantenimiento. Se recomienda migrar a 10.0.'});
  if(fi.t==='warn'&&S.fp==='2502') notes.push({c:'n-warn',i:'⚠️',t:'FP 2502: problemas críticos (SAP Note 3598537). No recomendado.'});
  if(fi.t==='warn'&&S.fp==='2511') notes.push({c:'n-warn',i:'⚠️',t:'SP 2511: incompatibilidades con add-ons de terceros. Verificar compatibilidad.'});
  if(fi.t==='road')   notes.push({c:'n-warn',i:'🗓️',t:`${fi.l} en roadmap SAP (mar 2026), aún no lanzado. Verificar PAM oficial al instalar.`});
  if(fi.t==='ok')     notes.push({c:'n-ok',i:'✅',t:`${fi.l}: Feature Package recomendado.`});
  if(isH && S.fp!=='9.3'){
    if(sw.ws.includes('WS 2016')) notes.push({c:'n-warn',i:'⚠️',t:'WS 2016: la instalación de EDS/ETS (documentos electrónicos) falla si el certificado SSL se creó con AES256-SHA256 — limitación del sistema (SAP Note 3644378). Alternativa: Windows Server 2019 o superior.'});
    if(sw.sles&&/^SLES 15/.test(sw.sles)) notes.push({c:'n-info',i:'🏷️',t:'SUSE: SLES 15 SP5 salió de soporte general el 31-dic-2024 (LTSS hasta 31-dic-2027) y SP6 el 31-dic-2025 (LTSS hasta 31-dic-2028). SP7 es el vigente (soporte general hasta 31-jul-2031). Para servidores nuevos usar SLES 15 SP7. Fechas: SUSE / endoflife.date, oct 2026.'});
    if(sw.sles) notes.push({c:'n-warn',i:'⚠️',t:'Documentos electrónicos (EDS): la instalación falla en SLES 15 SP5 o anterior; se requiere SLES 15 SP6 o superior (SAP Note 3743696). ETS tampoco soporta SP5 (matriz HANA v1.42, nota al pie 18).'});
    if(sw.wc.includes('Win 10 x64')||/2016|2019/.test(sw.office)) notes.push({c:'n-info',i:'🗓️',t:'Microsoft terminó el soporte de Windows 10 y de Office 2016/2019 el 14-oct-2025. La matriz HANA v1.42 de SAP aún los lista, pero para equipos nuevos conviene Windows 11 y Office 2021.'});
  }
  if(sw.ws&&sw.ws.some(w=>w.includes('upgrade only'))) notes.push({c:'n-warn',i:'⚠️',t:'WS 2012 R2 solo para clientes en actualización, no instalaciones nuevas en 10.0.'});

  // ── NOTAS APP SERVER ──
  const notesApp=[];
  if(S.conexion==='appserver'){
    notesApp.push({c:'n-info',i:'💡',t:`Todos los usuarios (${S.users}) conectan al App Server. RAM = ${app.ramBase} GB base + ${S.users}×${app.ramPU} GB${S.addons>0?' + add-ons ('+Math.round(app.ramAddon)+' GB)':''} = ${app.recRAM} GB.`});
  } else {
    notesApp.push({c:'n-info',i:'💡',t:`App Server para ${app.usersOnApp} usuarios (admin/técnicos). RAM = ${app.ramBase} GB base + ${app.usersOnApp}×${app.ramPU} GB = ${app.recRAM} GB.${pcUsers>0?` Los ${pcUsers} usuarios restantes corren SAP localmente en su PC.`:''}`});
    notesApp.push({c:'n-warn',i:'⚠️',t:`Add-ons en modo PC directa: cada PC de usuario debe tener los add-ons instalados localmente. El App Server NO gestiona add-ons para usuarios directos.`});
  }
  if(S.deploy==='citrix') notesApp.push({c:'n-info',i:'🖥️',t:'Citrix/WTS: usar RDP para conexiones WAN. 1 GB SAP B1 + 0.25 GB sesión Citrix por usuario.'});
  if(S.deploy==='virtual') notesApp.push({c:'n-info',i:'☁️',t:'Virtualizado: cada vCPU soporta <5 usuarios. Monitorear overcommit de CPU.'});

  // ── NOTAS DB SERVER ──
  const notesDB=[];
  if(S.conexion==='pcusuario'){
    notesDB.push({c:'n-warn',i:'🔗',t:`PC directa: ${S.users} PCs abren conexiones directas al DB Server sin connection pooling. Por eso el DB Server necesita más cores (${db.cores}) que con App Server.`});
  }
  if(!isH){
    if(S.tipo==='nueva'){
      notesDB.push({c:'n-info',i:'📐',t:`RAM = 16 GB SQL + ${S.users}×1 GB + 4 GB overhead = ${db.recRAM} GB. Disco estimado — ajustar al conocer el tamaño real de la BD.`});
    } else {
      notesDB.push({c:'n-info',i:'📐',t:`RAM = BD×${S.bufferPct}% (${Math.round(S.dbsize*S.bufferPct/100)} GB) + OS 8 GB + overhead 4 GB + sesiones = ${db.recRAM} GB. Mínimo viable (buffer 25%): ${db.minRAM} GB.`});
      notesDB.push({c:'n-info',i:'💽',t:`MDF=BD×1.5=${db.dData} GB · LDF=BD×0.5=${db.dLog} GB · TempDB=25% MDF=${db.dTemp} GB · Backup=BD×2=${db.dBack} GB.`});
    }
    notesDB.push({c:'n-info',i:'🏷️',t:'SQL Server 2019 y anteriores: fuera de distribución (ya no se venden licencias nuevas). Para servidores nuevos usar SQL Server 2022.'});
    notesDB.push({c:'n-info',i:'🔑',t:'Modo mixto obligatorio. Collation: SQL_Latin1_General_CP1_CI_AS. Max Server Memory = 90% RAM. MaxDOP = cores.'});
    if(['2302','2305','2308','2311','2402','2405','2408','2411','2502','2505','2508','2511','2602','2605','2608'].includes(S.fp)){
      notesDB.push({c:'n-info',i:'🔌',t:'ODBC: SQL 2016/2017→Driver 13 · SQL 2019→Driver 17 · SQL 2022→Driver 18. Instalar en DB Server y App Server.'});
    }
  } else {
    if(S.tipo==='nueva'){
      notesDB.push({c:'n-ok',i:'💾',t:`HANA nueva: disco fijo 2 TB. RAM recomendada ${db.recRAM} GB, mínimo ${db.minRAM} GB (${db.ramLabel}).`});
    } else {
      notesDB.push({c:'n-info',i:'📐',t:`RAM = BD×1.5 = ${Math.round(S.dbsize*1.5)} GB → ${db.recRAM} GB (múltiplo 64 GB). Disco: data=BD×3, log=BD×1, shared=BD×1, backup=BD×3.`});
    }
    notesDB.push({c:'n-info',i:'🔧',t:'Hardware certificado HANA (SAP Note 2382775). /hana/data y /hana/shared en NVMe SSD RAID. /hana/log en SSD separado.'});
  }

  // ── DISK HTML ──
  const diskAppHTML=`
    <div class="sec-t">Disco</div>
    <div class="disk-card">
      <div class="disk-shdr">VOLÚMENES APP SERVER</div>
      <div class="disk-row"><span class="dp">SO Windows Server (C:)</span><span class="dg">60 GB</span><span><span class="binf">Sistema</span></span></div>
      <div class="disk-row"><span class="dp">SAP B1 binarios + logs</span><span class="dg">40 GB</span><span><span class="binf">Aplicación</span></span></div>
      <div class="disk-row total"><span class="dp b">TOTAL</span><span class="dg a">100 GB</span><span></span></div>
    </div>`;

  const diskSQLHTML=`
    <div class="sec-t">Disco</div>
    <div class="disk-card">
      <div class="disk-shdr">VOLÚMENES SQL SERVER — ${db.diskLabel}</div>
      <div class="disk-row">${bar(db.dOS,db.dTotal)}<span class="dp">SO Windows Server (C:)</span><span class="dg">${db.dOS} GB</span><span><span class="binf">Sistema</span></span></div>
      <div class="disk-row">${bar(db.dData,db.dTotal)}<span class="dp b">Datos SQL (.mdf)</span><span class="dg a">${db.dData} GB</span><span><span class="bok">NVMe SSD RAID</span></span></div>
      <div class="disk-row">${bar(db.dLog,db.dTotal)}<span class="dp">Logs SQL (.ldf)</span><span class="dg">${db.dLog} GB</span><span><span class="bok">SSD separado</span></span></div>
      <div class="disk-row">${bar(db.dTemp,db.dTotal)}<span class="dp">TempDB</span><span class="dg">${db.dTemp} GB</span><span><span class="binf">Vol. independiente</span></span></div>
      <div class="disk-row">${bar(db.dBack,db.dTotal)}<span class="dp">Backup</span><span class="dg">${db.dBack} GB</span><span><span class="binf">Externo recom.</span></span></div>
      <div class="disk-row total"><span class="dp b">TOTAL DISCO</span><span class="dg a">${fmtDisk(db.dTotal)}</span><span><span class="breq">${(db.dTotal/1000).toFixed(1)} TB</span></span></div>
    </div>`;

  const diskHANAHTML=`
    <div class="sec-t">Disco</div>
    <div class="disk-card">
      <div class="disk-shdr">PARTICIONES SUSE LINUX — ${db.dSO} GB</div>
      <div class="disk-row"><span class="dp">SWAP</span><span class="dg">${db.dSWAP} GB</span><span><span class="binf">Sistema</span></span></div>
      <div class="disk-row"><span class="dp">/boot/efi</span><span class="dg">${db.dEFI} GB</span><span><span class="binf">Sistema</span></span></div>
      <div class="disk-row"><span class="dp">/ (root)</span><span class="dg">${db.dRoot} GB</span><span><span class="binf">Sistema</span></span></div>
      <div class="disk-row"><span class="dp">/tmp</span><span class="dg">${db.dTmp} GB</span><span><span class="binf">Sistema</span></span></div>
      <div class="disk-shdr">PARTICIONES SAP / HANA — ${db.dSAP} GB</div>
      <div class="disk-row">${bar(db.dData,db.dTotal)}<span class="dp b">/hana/data</span><span class="dg a">${db.dData} GB</span><span><span class="bok">NVMe SSD RAID</span></span></div>
      <div class="disk-row">${bar(db.dShared,db.dTotal)}<span class="dp b">/hana/shared</span><span class="dg a">${db.dShared} GB</span><span><span class="bok">NVMe SSD RAID</span></span></div>
      <div class="disk-row">${bar(db.dLog,db.dTotal)}<span class="dp">/hana/log</span><span class="dg">${db.dLog} GB</span><span><span class="bok">SSD separado</span></span></div>
      <div class="disk-row">${bar(db.dUsrSap,db.dTotal)}<span class="dp">/usr/sap</span><span class="dg">${db.dUsrSap} GB</span><span><span class="binf">Separado</span></span></div>
      <div class="disk-row">${bar(db.dBackup,db.dTotal)}<span class="dp">/backup</span><span class="dg">${db.dBackup} GB</span><span><span class="binf">Externo recom.</span></span></div>
      <div class="disk-row total"><span class="dp b">TOTAL DISCO</span><span class="dg a">${fmtDisk(db.dTotal)}</span><span><span class="breq">${(db.dTotal/1000).toFixed(1)} TB</span></span></div>
      ${db.dAvail>0?`<div class="disk-row"><span class="dp" style="color:var(--grn)">Espacio disponible</span><span class="dg" style="color:var(--grn)">${db.dAvail} GB</span><span></span></div>`:''}
    </div>`;

  // ── PC USUARIO BLOCK HTML (solo cuando conexion=pcusuario) ──
  // v3.0: sin bloque cuando todos los usuarios van por App Server (antes salía "0 equipos")
  const pcBlockHTML = S.conexion==='pcusuario' && pcUsers>0 ? `
    <hr class="srv-divider">
    <div class="srv-block">
      <div class="srv-hdr">
        <div class="srv-hdr-icon pc">💻</div>
        <div class="srv-hdr-info">
          <div class="srv-hdr-title">PC de Usuario (Fat Client)</div>
          <div class="srv-hdr-sub">${pcUsers} equipos con SAP Business One instalado localmente</div>
        </div>
      </div>
      <div class="kpi-grid">
        <div class="kpi accent-gold">
          <div class="kpi-lbl">RAM por PC</div>
          <div class="kpi-val">8<span class="kpi-unit">–16 GB</span></div>
          <div class="kpi-min">Mínimo absoluto: 4 GB</div>
          <div class="kpi-sub">SAP B1 + SO + Office</div>
        </div>
        <div class="kpi">
          <div class="kpi-lbl">Total PCs directas</div>
          <div class="kpi-val">${pcUsers}<span class="kpi-unit"> PCs</span></div>
          <div class="kpi-sub">De ${S.users} usuarios totales</div>
        </div>
        <div class="kpi">
          <div class="kpi-lbl">CPU por PC</div>
          <div class="kpi-val" style="font-size:14px;padding-top:4px">Core i5/i7</div>
          <div class="kpi-sub">4+ cores, 64-bit</div>
        </div>
        <div class="kpi">
          <div class="kpi-lbl">Disco por PC</div>
          <div class="kpi-val">256<span class="kpi-unit"> GB</span></div>
          <div class="kpi-sub">SSD recomendado</div>
        </div>
      </div>
      <div class="sec-t">Requisitos por PC de usuario</div>
      <table class="pc-table">
        <thead><tr><th>Componente</th><th>Mínimo</th><th>Recomendado</th><th>Notas</th></tr></thead>
        <tbody>
          <tr><td>RAM</td><td>4 GB</td><td>8–16 GB</td><td>SAP B1 + SO + Office + add-ons locales</td></tr>
          <tr><td>CPU</td><td>Intel Core i3 o equiv.</td><td>Intel Core i5/i7</td><td>64-bit obligatorio</td></tr>
          <tr><td>Disco</td><td>32 GB libre</td><td>256 GB SSD</td><td>Incluye SO + SAP B1 + datos temp</td></tr>
          <tr><td>Pantalla</td><td>1280×800 px</td><td>1920×1080 px</td><td>24-bit color</td></tr>
          <tr><td>Red</td><td>100 Mbps</td><td>1 Gbps</td><td>Conexión estable al DB Server</td></tr>
          <tr><td>SO</td><td>Windows 10 x64</td><td>Windows 11 x64</td><td>Según FP seleccionado</td></tr>
          ${S.addons>0?`<tr><td>Add-ons</td><td colspan="2">Instalar en cada PC</td><td>${S.addons} add-on(s) — se ejecutan localmente</td></tr>`:''}
        </tbody>
      </table>
      <div class="note n-warn" style="margin-top:10px"><span class="ni">⚠️</span><span>En modo PC directa, SAP B1 y los add-ons se instalan en cada equipo de usuario. Esto implica mayor esfuerzo de mantenimiento y actualización por equipo. Considerar este factor al planificar upgrades de FP.</span></div>
    </div>` : '';

  // ── SW TABLES ──
  const swTablesHTML=`
    <div class="sw-grid">
      <div class="sw-card">
        <div class="sw-hdr">🖥️ App Server — Windows Server</div>
        <table class="sw-t">${sw.ws.map(s=>`<tr><td>${s}</td><td><span class="bok">SOPORTADO</span></td></tr>`).join('')}</table>
      </div>
      <div class="sw-card">
        <div class="sw-hdr">🗄️ ${isH?'SAP HANA / SUSE Linux':'SQL Server'}</div>
        <table class="sw-t">${isH
          ?`<tr><td>SAP HANA</td><td style="font-size:11px">${sw.hana}</td></tr>${slesRows(sw.sles)}`
          :sw.sql.map(s=>{const out=/SQL (2012|2014|2016|2017|2019)$/.test(s);return `<tr><td>${s}</td><td>${out?'<span class="bout">FUERA DE DISTRIBUCIÓN</span>':'<span class="bok">SOPORTADO</span>'}</td></tr>`;}).join('')
        }</table>
      </div>
      <div class="sw-card">
        <div class="sw-hdr">💻 PC Cliente — Windows</div>
        <table class="sw-t">${sw.wc.map(s=>`<tr><td>${s}</td><td><span class="bok">SOPORTADO</span></td></tr>`).join('')}</table>
      </div>
      <div class="sw-card">
        <div class="sw-hdr">⚙️ Prerrequisitos</div>
        <table class="sw-t">
          <tr><td>.NET Framework</td><td><span class="breq">${sw.dotnet} OBLIGATORIO</span></td></tr>
          <tr><td>Microsoft Office</td><td style="font-size:11px">${sw.office}</td></tr>
          ${!isH?`<tr><td>ODBC Driver</td><td style="font-size:11px">v${sw.odbc}</td></tr>`:''}
          ${!isH?`<tr><td>Auth. SQL</td><td><span class="breq">MODO MIXTO</span></td></tr>
          <tr><td>Collation</td><td style="font-size:10px;font-family:monospace">SQL_Latin1_General_CP1_CI_AS</td></tr>`:''}
          <tr><td>Dominio Windows</td><td><span class="breq">REQUERIDO</span></td></tr>
          <tr><td>TLS</td><td>1.1 o superior</td></tr>
        </table>
      </div>
    </div>`;

  document.getElementById('main').innerHTML=`
    ${notes.length?`<div style="margin-bottom:16px">${notes.map(n=>`<div class="note ${n.c}"><span class="ni">${n.i}</span><span>${n.t}</span></div>`).join('')}</div>`:''}

    <!-- BLOQUE 1: APP SERVER -->
    <div class="srv-block">
      <div class="srv-hdr">
        <div class="srv-hdr-icon app">🖥️</div>
        <div class="srv-hdr-info">
          <div class="srv-hdr-title">Servidor de Aplicaciones (App Server)</div>
          <div class="srv-hdr-sub">${depLbl} · ${app.usersOnApp} usuarios en App Server · ${S.addons} add-on(s) · ${tipoLbl}</div>
        </div>
        <div class="srv-badge">${fi.l||S.fp}</div>
      </div>
      <div class="kpi-grid">
        <div class="kpi accent">
          <div class="kpi-lbl">RAM App Server</div>
          <div class="kpi-val">${app.recRAM}<span class="kpi-unit">GB</span></div>
          <div class="kpi-min">Mínimo: ${app.minRAM} GB</div>
          <div class="kpi-sub">${app.usersOnApp} usuarios×${app.ramPU} GB + base ${app.ramBase} GB</div>
        </div>
        <div class="kpi">
          <div class="kpi-lbl">CPU Cores</div>
          <div class="kpi-val">${app.cores}<span class="kpi-unit">cores</span></div>
          <div class="kpi-sub">~${app.upc} usuarios/core</div>
        </div>
        <div class="kpi">
          <div class="kpi-lbl">Disco total</div>
          <div class="kpi-val">100<span class="kpi-unit">GB</span></div>
          <div class="kpi-sub">SO + binarios SAP</div>
        </div>
        <div class="kpi">
          <div class="kpi-lbl">Red</div>
          <div class="kpi-val" style="font-size:13px;padding-top:4px">${app.net}</div>
          <div class="kpi-sub">Hacia DB Server y clientes</div>
        </div>
      </div>
      ${diskAppHTML}
      <div class="sec-t">Notas — App Server</div>
      ${notesApp.map(n=>`<div class="note ${n.c}"><span class="ni">${n.i}</span><span>${n.t}</span></div>`).join('')}
    </div>

    <hr class="srv-divider">

    <!-- BLOQUE 2: DB SERVER -->
    <div class="srv-block">
      <div class="srv-hdr">
        <div class="srv-hdr-icon ${isH?'db-hana':'db-sql'}">${isH?'⚡':'🗄️'}</div>
        <div class="srv-hdr-info">
          <div class="srv-hdr-title">Servidor de Base de Datos (${isH?'SAP HANA':'SQL Server'})</div>
          <div class="srv-hdr-sub">${tipoLbl} · ${S.conexion==='pcusuario'?S.users+' conexiones directas (sin pooling)':'Conexiones via App Server'}</div>
        </div>
      </div>
      <div class="kpi-grid">
        <div class="kpi accent">
          <div class="kpi-lbl">RAM DB Server</div>
          <div class="kpi-val">${db.recRAM}<span class="kpi-unit">GB</span></div>
          <div class="kpi-min">Mínimo: ${db.minRAM} GB</div>
          <div class="kpi-sub">${db.ramLabel}${(!isH&&S.tipo==='actualizacion')?`<span class="info-ico" onmouseenter="positionTip(this)">i<span class="tip">El <b>Buffer Pool</b> es la RAM que SQL Server dedica a mantener en caché las páginas de datos e índices más usados, para no tener que leerlas de disco. Se calcula como un % del tamaño de la BD. Entre más alto, más rápido responde SAP, pero más RAM necesitas. 25% es el mínimo viable, 40% el recomendado para producción, 60% para alto rendimiento.</span></span>`:''}</div>
        </div>
        <div class="kpi">
          <div class="kpi-lbl">CPU Cores</div>
          <div class="kpi-val">${db.cores}<span class="kpi-unit">cores</span></div>
          <div class="kpi-sub">${S.conexion==='pcusuario'?'Sin pooling — más cores':'Connection pooling App Server'}</div>
        </div>
        <div class="kpi">
          <div class="kpi-lbl">Disco total</div>
          <div class="kpi-val">${db.dTotal>=1000?(db.dTotal/1000).toFixed(1):db.dTotal}<span class="kpi-unit">${db.dTotal>=1000?'TB':'GB'}</span></div>
          <div class="kpi-sub">${isH?(S.tipo==='nueva'?'Fijo 2 TB':'Calculado por BD'):db.diskLabel}</div>
        </div>
        <div class="kpi">
          <div class="kpi-lbl">Red</div>
          <div class="kpi-val" style="font-size:13px;padding-top:4px">${db.net}</div>
          <div class="kpi-sub">${isH?'Internode: 10 GbE mín.':'Hacia App Server / PCs'}</div>
        </div>
        <div class="kpi">
          <div class="kpi-lbl">Procesador</div>
          <div class="kpi-val" style="font-size:11px;padding-top:5px;line-height:1.4">${isH?'Intel Xeon Scalable<br>(cert. HANA req.)':'Intel Xeon E3/E5<br>o equivalente'}</div>
          <div class="kpi-sub">64-bit obligatorio</div>
        </div>
      </div>
      ${isH?diskHANAHTML:diskSQLHTML}
      <div class="sec-t">Notas — DB Server</div>
      ${notesDB.map(n=>`<div class="note ${n.c}"><span class="ni">${n.i}</span><span>${n.t}</span></div>`).join('')}
    </div>

    <!-- BLOQUE 3: PC USUARIO (condicional) -->
    ${pcBlockHTML}

    <hr class="srv-divider">

    <!-- BLOQUE 4: SOFTWARE -->
    <div class="srv-block">
      <div class="srv-hdr">
        <div class="srv-hdr-icon sw">📋</div>
        <div class="srv-hdr-info">
          <div class="srv-hdr-title">Plataformas de Software Compatibles</div>
          <div class="srv-hdr-sub">${fi.l||S.fp} · ${isH?'SAP HANA':'MS SQL Server'}</div>
        </div>
      </div>
      ${swTablesHTML}
    </div>
  `;
}

// ═══════════════════════════════════════
// CONTROLS
// ═══════════════════════════════════════
function renderFP(){
  const el=document.getElementById('fp-list'); el.innerHTML='';
  FP[S.db].forEach(f=>{
    const b=document.createElement('button');
    b.className='fp-item'+(f.v===S.fp?' active':'');
    b.innerHTML=`<span class="fp-dot"></span><span class="fp-name">${f.l}</span><span class="tag tag-${f.t}">${f.tx}</span>`;
    b.onclick=()=>{S.fp=f.v;renderFP();render();};
    el.appendChild(b);
  });
  if(!FP[S.db].find(f=>f.v===S.fp)){S.fp='2602';renderFP();}
}
function selectDB(v){
  S.db=v;
  document.getElementById('btn-sql').className ='db-btn'+(v==='sql' ?' active':'');
  document.getElementById('btn-hana').className='db-btn'+(v==='hana'?' active':'');
  document.getElementById('bufferpool-row').style.display=(S.tipo==='actualizacion'&&v==='sql')?'block':'none';
  updateDBHint();
  renderFP();render();
}
function selectDeploy(v){
  S.deploy=v;
  document.querySelectorAll('.dep-btn').forEach(b=>b.className='dep-btn'+(b.dataset.val===v?' active':''));
  render();
}
function selectTipo(v){
  S.tipo=v;
  document.getElementById('tipo-nueva').className='tipo-btn'+(v==='nueva'       ?' active':'');
  document.getElementById('tipo-act').className  ='tipo-btn'+(v==='actualizacion'?' active':'');
  document.getElementById('dbsize-row').style.display=v==='actualizacion'?'block':'none';
  document.getElementById('bufferpool-row').style.display=(v==='actualizacion'&&S.db==='sql')?'block':'none';
  document.getElementById('tipo-hint').textContent=v==='nueva'
    ?'Sin BD existente. Disco y RAM estimados por usuarios.'
    :'Ingresa el tamaño actual de la BD. RAM y disco calculados sobre la BD real.';
  updateDBHint();
  render();
}
function positionTip(ico){
  const tip = ico.querySelector('.tip');
  const r = ico.getBoundingClientRect();
  const tw = tip.offsetWidth  || 260;
  const th = tip.offsetHeight || 80;
  const iconCenterX = r.left + r.width / 2;
  const left = Math.max(10, Math.min(iconCenterX - tw / 2, window.innerWidth - tw - 10));
  const arrowLeft = Math.max(10, Math.min(iconCenterX - left - 5, tw - 20));
  let top;
  if (r.top - th - 14 < 10) {
    top = r.bottom + 10;
    tip.classList.add('tip-below'); tip.classList.remove('tip-above');
  } else {
    top = r.top - th - 10;
    tip.classList.add('tip-above'); tip.classList.remove('tip-below');
  }
  tip.style.left = left + 'px';
  tip.style.top  = top  + 'px';
  tip.style.setProperty('--arrow-left', arrowLeft + 'px');
}
function selectBufferPct(v){
  S.bufferPct=v;
  document.getElementById('buf-25').className='buf-btn'+(v===25?' active':'');
  document.getElementById('buf-40').className='buf-btn'+(v===40?' active':'');
  document.getElementById('buf-60').className='buf-btn'+(v===60?' active':'');
  render();
}
function selectConexion(v){
  S.conexion=v;
  document.getElementById('con-appserver').className='con-btn'+(v==='appserver'?' active':'');
  document.getElementById('con-pcusuario').className='con-btn'+(v==='pcusuario' ?' active':'');
  document.getElementById('appserver-users-section').style.display=v==='pcusuario'?'block':'none';
  const hints={
    appserver:'Todos los usuarios conectan al App Server. La RAM del App Server escala con el número de usuarios.',
    pcusuario:'Los usuarios corren SAP B1 en su propia PC y conectan directo al DB Server. El App Server solo gestiona licencias/SLD y los usuarios admin indicados.'
  };
  document.getElementById('con-hint').textContent=hints[v];
  render();
}
function updateDBHint(){
  const el=document.getElementById('dbsize-hint');
  if(!el) return;
  el.textContent=S.db==='hana'
    ?'HANA carga toda la BD en RAM. Proyectar crecimiento a 5 años.'
    :'SQL Server usa ~40% de la BD en buffer pool (OLTP). Proyectar crecimiento a 5 años.';
}
function setUsers(v)   { S.users  =parseInt(v); render(); }
function setUsersApp(v){ S.usersApp=parseInt(v); render(); }
function setAddons(v)  { S.addons =parseInt(v); render(); }
function setDBSize(v){
  const n=parseInt(v)||100;
  S.dbsize=Math.max(10,Math.min(20000,Math.round(n/10)*10));
  render();
}
function fixDBSize(el){
  el.value=Math.max(10,Math.min(20000,Math.round((parseInt(el.value)||100)/10)*10));
  setDBSize(el.value);
}
// ═══════════════════════════════════════
// BIENVENIDA (v3.0, 2026-11-09)
// Solo navegación y presentación: usa selectDB/selectTipo de arriba,
// no toca fórmulas ni matrices.
// ═══════════════════════════════════════
const DB_LBL={sql:'Microsoft SQL Server',hana:'SAP HANA'};
function wizStep(n){
  const w=document.getElementById('welcome');
  w.dataset.step=n;
  w.querySelector(`.wz-step[data-n="${n}"] .wz-card`).focus();
}
function wizDB(v){
  selectDB(v);
  document.getElementById('wz-db-lbl').textContent=DB_LBL[v];
  wizStep('2');
}
function wizBack(){ wizStep('1'); }
function wizTipo(v){
  selectTipo(v);
  document.body.classList.remove('wz-open');
  window.scrollTo(0,0);
}
function goHome(){
  document.body.classList.add('wz-open');
  window.scrollTo(0,0);
  wizStep('1');
}
function hoyISO(){
  const d=new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function fechaLarga(iso){
  const [y,m,d]=iso.split('-').map(Number); // fecha local: new Date('AAAA-MM-DD') la toma en UTC y puede correr un día
  return new Date(y,m-1,d).toLocaleDateString('es-CO',{day:'numeric',month:'long',year:'numeric'});
}
// ═══════════════════════════════════════
// INFORME EN WORD (v3.1, 2026-11-09; ajustes v3.2, 2026-11-09)
// Solo presentación: lee S y llama a calcAppServer / calcDBSQL / calcDBHANA y a
// SW_SQL / SW_HANA. No cambia fórmulas ni matrices. El texto sigue el formato
// "Informe de revisión" de Heinsohn; todas las cifras salen de la calculadora.
// ═══════════════════════════════════════
const HBT='Heinsohn Business Technology';
function miles(n){ return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,'.'); }
function gb(n){ return miles(n)+' GB'; }
function coma(n){ return String(n).replace('.',','); }
function limpiarTexto(s){ return String(s==null?'':s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F￾￿]/g,''); }
function lineas(s){ return limpiarTexto(s).split(/\r?\n/).map(x=>x.trim()).filter(Boolean); }
function fechaCorta(iso){ const [y,m,d]=iso.split('-'); return d+'/'+m+'/'+y; }
// App Server sin usuarios RDP: mismo cálculo con 0 usuarios (se restaura el estado al terminar)
function appSinUsuarios(){
  const bak={users:S.users,conexion:S.conexion};
  S.users=0; S.conexion='appserver';
  try{ return calcAppServer(); } finally{ S.users=bak.users; S.conexion=bak.conexion; }
}
function soWindows(sw){
  const l=(sw.ws||[]).filter(w=>!/upgrade only/.test(w));
  const w=l.includes('WS 2022')?'WS 2022':l[l.length-1];
  return w.replace(/^WS /,'Windows Server ');
}
function soSuse(sw){
  const m=/^SLES (\d+) (.+)$/.exec(sw.sles||'');
  if(!m) return {txt:'SUSE Linux Enterprise Server',vigente:true};
  const sps=m[2].split(' / '), last=sps[sps.length-1];
  return {txt:'SUSE Linux Enterprise Server '+m[1]+' '+last, vigente:parseInt((/SP(\d+)/.exec(last)||[])[1],10)>=7};
}
// ── Soporte y licencias de Microsoft (v3.2) ──
// Datos consultados el 2026-11-09 en las páginas de Microsoft (ciclo de vida y Product Terms).
// Actualizar esta fecha y estas tablas cada vez que se vuelvan a consultar.
const LIC_FECHA='2026-11-09';
const SQL_FIN={'2012':'2022-07-12','2014':'2024-07-09','2016':'2026-07-14','2017':'2027-10-12','2019':'2030-01-08','2022':'2033-01-11'}; // fin del soporte extendido
const WS_FIN={'2012 R2':'2023-10-10','2016':'2027-01-12','2019':'2029-01-09','2022':'2031-10-14'};
function anioSQL(s){ return (/(\d{4})$/.exec(s)||[])[1]||''; }
// SQL Server a instalar: la versión más reciente que el Feature Package soporta (en 2605 es SQL Server 2022)
function sqlRecomendada(sw){
  const v=(sw.sql||[]).map(anioSQL).filter(Boolean).map(Number);
  return v.length?'SQL Server '+Math.max(...v):'';
}
function frSoporte(fin,ref){ return fin<=ref?'sin soporte de Microsoft desde el '+fechaLarga(fin):'soporte de Microsoft hasta el '+fechaLarga(fin); }
function buildReportData(f){
  const isH=S.db==='hana', nueva=S.tipo==='nueva';
  const fi=FP[S.db].find(x=>x.v===S.fp)||{};
  const sw=isH?(SW_HANA[S.fp]||SW_HANA['2602']):(SW_SQL[S.fp]||SW_SQL['2602']);
  const db=isH?calcDBHANA():calcDBSQL();
  const app=calcAppServer(), app0=appSinUsuarios();
  const virt=S.deploy==='virtual', modelo=virt?'Virtualizado':(S.deploy==='citrix'?'Físico (Citrix/WTS)':'Físico'); // sale del tipo de despliegue elegido en la calculadora
  const pc=S.conexion==='pcusuario', pcUsers=pc?S.users-S.usersApp:0;
  const verSAP=S.fp==='9.3'?'SAP 9.3 PL14':'SAP 10 '+(fi.l||S.fp).replace(/^10\.0 /,'');
  const cliente=limpiarTexto(f.cliente).trim();
  const winSO=soWindows(sw), suse=soSuse(sw), sqlRec=isH?'':sqlRecomendada(sw), ref=f.fecha;
  const info=[
    ['Fecha de revisión',fechaCorta(f.fecha)],
    ...(limpiarTexto(f.tiempo).trim()?[['Tiempo de la actividad',limpiarTexto(f.tiempo).trim()]]:[]),
    ['Nombre del Cliente (dirigido a)',cliente],
    ['Tipo de Consultoría','Validación de servidores para '+(nueva?'instalación':'actualización')+' SAP'],
    ['Arquitectura BD',isH?'SAP HANA':sqlRec],
    ['Versión SAP a '+(nueva?'instalar':'actualizar'),verSAP]
  ];
  const bloqueDB={
    titulo:isH?'Servidor SUSE Linux (SAP HANA)':'Servidor Windows SQL',
    filas:[
      ['Modelo de Sistema',modelo],
      ['S.O. Base',isH?suse.txt:winSO],
      ['Servidor Virtualizado',virt?'Sí':'No'],
      ['RAM',gb(db.recRAM)],
      ['Capacidad de almacenamiento',gb(db.dTotal)],
      ['Procesador',db.cores+' Core']
    ]
  };
  const bloqueApp={
    titulo:'Servidor Windows de Aplicaciones',
    filas:[
      ['Modelo de Sistema',modelo],
      ['S.O. Base',winSO],
      ['Servidor Virtualizado',virt?'Sí':'No'],
      ['RAM',gb(app0.recRAM)+' sin usuarios RDP / '+gb(app.recRAM)+' con usuarios RDP'],
      ['Capacidad de almacenamiento',gb(app.dTotal)],
      ['Procesador',app0.cores+' Core sin usuarios RDP / '+app.cores+' Core con usuarios RDP']
    ]
  };
  // ── Observaciones ──
  const obs=[];
  if(isH){
    obs.push('Servidor de base de datos: la capacidad de almacenamiento de '+gb(db.dTotal)+(nueva?' es fija para una instalación nueva':' se calcula sobre el tamaño de la base de datos ('+S.dbsize+' GB)')+' y se distribuye así: sistema operativo '+gb(db.dSO)+', /hana/data '+gb(db.dData)+', /hana/shared '+gb(db.dShared)+', /hana/log '+gb(db.dLog)+', /usr/sap '+gb(db.dUsrSap)+' y /backup '+gb(db.dBackup)+'. Debe ser hardware certificado para SAP HANA (SAP Note 2382775).');
    obs.push(nueva
      ?'La RAM de '+gb(db.recRAM)+' (mínimo '+gb(db.minRAM)+') se define según el número de usuarios ('+S.users+').'
      :'La RAM de '+gb(db.recRAM)+' (mínimo '+gb(db.minRAM)+') se calcula sobre el tamaño de la base de datos ('+S.dbsize+' GB × 1,5), porque SAP HANA trabaja cargando los datos en memoria.');
  }else{
    obs.push('Servidor de base de datos: la capacidad de almacenamiento de '+gb(db.dTotal)+(nueva?' se estima por el número de usuarios ('+S.users+')':' se calcula para las bases de datos ('+S.dbsize+' GB), copias de seguridad y sistema operativo')+' y se distribuye así: sistema operativo '+gb(db.dOS)+', datos '+gb(db.dData)+', log '+gb(db.dLog)+', TempDB '+gb(db.dTemp)+' y copias de seguridad '+gb(db.dBack)+'.'+(nueva?' Debe ajustarse cuando se conozca el tamaño real de la base de datos.':''));
    obs.push(nueva
      ?'La RAM de '+gb(db.recRAM)+' (mínimo '+gb(db.minRAM)+') equivale a 16 GB para SQL Server, 1 GB por usuario ('+S.users+') y 4 GB adicionales.'
      :'La RAM de '+gb(db.recRAM)+' (mínimo '+gb(db.minRAM)+') incluye el buffer pool de SQL Server ('+S.bufferPct+' % de la base de datos, '+gb(S.dbsize*S.bufferPct/100)+'), el sistema operativo, SQL Server y las sesiones de los usuarios.');
  }
  obs.push('Servidor de aplicaciones: la RAM y los núcleos del procesador dependen de los usuarios que se conectan por RDP ('+app.usersOnApp+(pc?' de '+S.users:'')+'). La capacidad de almacenamiento de '+gb(app.dTotal)+' es para el sistema operativo ('+gb(app.dOS)+') y las instalaciones de SAP ('+gb(app.dSAP)+').'+((!pc&&S.addons>0)?' Incluye el consumo de '+S.addons+' add-on(s).':''));
  if(pc) obs.push('Los '+pcUsers+' usuarios restantes ejecutan SAP Business One en su propio equipo y se conectan directo a la base de datos. Cada equipo requiere como mínimo 4 GB de RAM (recomendado 8 a 16 GB), procesador de 4 núcleos o más y disco SSD de 256 GB'+(S.addons>0?', y los '+S.addons+' add-on(s) se instalan en cada equipo':'')+'.');
  const consulta='consultado el '+fechaLarga(LIC_FECHA);
  if(isH){
    obs.push('Versiones de SUSE Linux soportadas para '+verSAP+': '+sw.sles+'. Versión elegida: '+suse.txt+(suse.vigente?' (vigente).':' (fuera de soporte general).'));
  }else{
    const nSql=anioSQL(sqlRec), sinSop=sw.sql.filter(x=>anioSQL(x)!==nSql&&SQL_FIN[anioSQL(x)]&&SQL_FIN[anioSQL(x)]<=ref).map(x=>x.replace('SQL','SQL Server'));
    obs.push('Versión de SQL Server a instalar: '+sqlRec+' (la más reciente que soporta '+verSAP+'; soportadas por SAP: '+sw.sql.map(x=>x.replace('SQL','SQL Server')).join(', ')+'). Licenciamiento de Microsoft ('+consulta+'): Microsoft comercializa hoy solo SQL Server 2025, que SAP Business One aún no soporta en este Feature Package; '+sqlRec+' se licencia con los derechos de downgrade de esa licencia o con el proveedor, y tiene '+(SQL_FIN[nSql]?frSoporte(SQL_FIN[nSql],ref):'soporte según el ciclo de vida de Microsoft')+'.'+(sinSop.length?' Ya sin soporte de Microsoft: '+sinSop.join(', ')+'.':'')+' Confirmar la disponibilidad con el proveedor de licencias antes de comprar. Para la instalación debe ir habilitado el collation SQL_Latin1_General_CP1_CI_AS.');
  }
  const nWs=(/(\d{4})/.exec(winSO)||[])[1];
  obs.push('Sistema operativo Windows Server: '+winSO+(WS_FIN[nWs]?' ('+frSoporte(WS_FIN[nWs],ref)+')':'')+'. Windows Server soportados por SAP para '+verSAP+': '+sw.ws.map(w=>w.replace(/^WS /,'')).join(', ')+'. Microsoft comercializa hoy Windows Server 2025; las versiones anteriores se licencian con derechos de downgrade según el contrato ('+consulta+'). Confirmar con el proveedor de licencias.');
  const cierre=[
    'El cálculo para definir los requerimientos de la base de datos y del servidor de aplicaciones se basa en '+(nueva?'la cantidad de usuarios (estimación para una base de datos nueva)':'el tamaño total de las bases de datos ('+S.dbsize+' GB)')+', así como en la cantidad de usuarios concurrentes en el sistema ('+S.users+').',
    'Tenga en cuenta que el consumo requerido indicado debe mantenerse para garantizar el óptimo funcionamiento del sistema y así evitar lentitud o fallas repentinas en su operatividad.',
    'Recuerde que, si maneja servidor RDP para conexiones a los usuarios, cada uno deberá contar con al menos '+coma(app.ramPU)+' GB de memoria RAM. Si fuesen '+app.usersOnApp+' usuarios su total de memoria sería de '+coma(app.ramPU*app.usersOnApp)+' GB.'
  ];
  const resultado='Antes de iniciar el proceso de '+(nueva?'instalación':'actualización')+', se deben tener estas recomendaciones de configuración de hardware aplicadas. En dado caso que esto no ocurra, podrá experimentar total lentitud en el sistema y fallos sobre los cuales el sistema deje de operar. Por favor tenga en cuenta mantener dichas recomendaciones para un óptimo funcionamiento. Tan pronto estos requerimientos sean configurados, se programará una sesión sobre la cual se certificará el servidor para dar inicio a la '+(nueva?'instalación':'actualización')+'.';
  // nombre de archivo sin tildes ni caracteres prohibidos: algunos navegadores ignoran el nombre si trae tildes
  const nombreArchivo=('Informe de revision - '+cliente+' - '+f.fecha).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z0-9 ._()-]+/g,' ').replace(/\s+/g,' ').trim()+'.docx';
  return {
    cliente, titulo:'INFORME DE REVISIÓN '+cliente.toUpperCase(), info,
    participantes:(f.participantes||[]).map(p=>({n:limpiarTexto(p.n).trim(),c:limpiarTexto(p.c).trim(),e:limpiarTexto(p.e).trim()})),
    objetivo:'Realizar revisión de los servidores para calcular y certificar los requerimientos necesarios para el funcionamiento del sistema basado en '+(nueva?'la cantidad de usuarios previstos':'la cantidad de licencias actuales y tamaño de las bases de datos')+'.',
    actividades:'Definir las características requeridas para la construcción del hardware en servidores '+(virt?'virtualizados':'físicos')+'. Las especificaciones se calculan de la siguiente manera:',
    bloques:[bloqueDB,bloqueApp], obs, cierre, resultado,
    consideraciones:lineas(f.consideraciones), compromisos:lineas(f.compromisos),
    archivo:nombreArchivo
  };
}

// ── .docx sin librerías: un .docx es un zip de XML (aquí sin compresión) ──
const CRC_T=(()=>{const t=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c>>>0;}return t;})();
function crc32(b){ let c=0xFFFFFFFF; for(let i=0;i<b.length;i++) c=CRC_T[(c^b[i])&255]^(c>>>8); return (c^0xFFFFFFFF)>>>0; }
function zipStore(files){
  const enc=new TextEncoder(), parts=[], central=[]; let off=0;
  const d=new Date(), dt=((d.getFullYear()-1980)<<9)|((d.getMonth()+1)<<5)|d.getDate(), tm=(d.getHours()<<11)|(d.getMinutes()<<5)|(d.getSeconds()>>1);
  files.forEach(f=>{
    const nm=enc.encode(f.name), data=enc.encode(f.text), crc=crc32(data), n=data.length;
    const lh=new DataView(new ArrayBuffer(30));
    lh.setUint32(0,0x04034b50,true); lh.setUint16(4,20,true); lh.setUint16(6,0x0800,true); lh.setUint16(10,tm,true); lh.setUint16(12,dt,true);
    lh.setUint32(14,crc,true); lh.setUint32(18,n,true); lh.setUint32(22,n,true); lh.setUint16(26,nm.length,true);
    parts.push(new Uint8Array(lh.buffer),nm,data);
    const ch=new DataView(new ArrayBuffer(46));
    ch.setUint32(0,0x02014b50,true); ch.setUint16(4,20,true); ch.setUint16(6,20,true); ch.setUint16(8,0x0800,true); ch.setUint16(12,tm,true); ch.setUint16(14,dt,true);
    ch.setUint32(16,crc,true); ch.setUint32(20,n,true); ch.setUint32(24,n,true); ch.setUint16(28,nm.length,true); ch.setUint32(42,off,true);
    central.push(new Uint8Array(ch.buffer),nm);
    off+=30+nm.length+n;
  });
  const csize=central.reduce((a,p)=>a+p.length,0), end=new DataView(new ArrayBuffer(22));
  end.setUint32(0,0x06054b50,true); end.setUint16(8,files.length,true); end.setUint16(10,files.length,true); end.setUint32(12,csize,true); end.setUint32(16,off,true);
  const all=[...parts,...central,new Uint8Array(end.buffer)], out=new Uint8Array(all.reduce((a,p)=>a+p.length,0));
  let o=0; all.forEach(p=>{out.set(p,o);o+=p.length;});
  return out;
}
function xe(s){ return limpiarTexto(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function wRun(t,o={}){ return '<w:r><w:rPr>'+(o.b?'<w:b/>':'')+(o.color?'<w:color w:val="'+o.color+'"/>':'')+(o.sz?'<w:sz w:val="'+o.sz+'"/>':'')+'</w:rPr><w:t xml:space="preserve">'+xe(t)+'</w:t></w:r>'; }
function wP(t,o={}){
  return '<w:p><w:pPr>'+(o.style?'<w:pStyle w:val="'+o.style+'"/>':'')+(o.keep?'<w:keepNext/>':'')+(o.num?'<w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr>':'')+(o.before?'<w:spacing w:before="'+o.before+'"/>':'')+(o.jc?'<w:jc w:val="'+o.jc+'"/>':'')+'</w:pPr>'+(t===''?'':wRun(t,o))+'</w:p>';
}
function wCell(w,t,o={}){
  return '<w:tc><w:tcPr><w:tcW w:w="'+w+'" w:type="dxa"/>'+(o.fill?'<w:shd w:val="clear" w:color="auto" w:fill="'+o.fill+'"/>':'')+'</w:tcPr><w:p><w:pPr>'+(o.keep===false?'':'<w:keepNext/>')+'<w:spacing w:before="40" w:after="40"/></w:pPr>'+wRun(t,o)+'</w:p></w:tc>';
}
const W_BORDERS='<w:tblBorders>'+['top','left','bottom','right','insideH','insideV'].map(b=>'<w:'+b+' w:val="single" w:sz="4" w:space="0" w:color="8EA9C1"/>').join('')+'</w:tblBorders>';
function wTable(cols,rows,o={}){
  const tot=cols.reduce((a,b)=>a+b,0);
  let x='<w:tbl><w:tblPr><w:tblW w:w="'+tot+'" w:type="dxa"/>'+W_BORDERS+'<w:tblLayout w:type="fixed"/><w:tblCellMar><w:left w:w="100" w:type="dxa"/><w:right w:w="100" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>'+cols.map(c=>'<w:gridCol w:w="'+c+'"/>').join('')+'</w:tblGrid>';
  rows.forEach((r,i)=>{
    const head=o.head&&i===0;
    x+='<w:tr><w:trPr><w:cantSplit/>'+(head?'<w:tblHeader/>':'')+'</w:trPr>'+r.map((c,j)=>wCell(cols[j],c,Object.assign(head?{fill:'1F4E79',color:'FFFFFF',b:true}:(o.labels&&j===0?{fill:'D9EAF7',b:true}:{}),{keep:i<rows.length-1}))).join('')+'</w:tr>';
  });
  return x+'</w:tbl>';
}
function buildDocx(d){
  const body=[];
  body.push(wP(d.titulo,{style:'Title'}));
  body.push(wP('1. Información del Cliente',{style:'Heading1'}));
  body.push(wTable([3400,5960],d.info,{labels:true}));
  body.push(wP('2. Participantes de la revisión',{style:'Heading1'}));
  body.push(wTable([3300,2700,3360],[['Nombre','Cargo','Empresa'],...d.participantes.map(p=>[p.n,p.c,p.e])],{head:true}));
  body.push(wP('3. Objetivo de la revisión',{style:'Heading1'}));
  body.push(wP(d.objetivo));
  body.push(wP('4. Actividades',{style:'Heading1'}));
  body.push(wP(d.actividades,{keep:true}));
  d.bloques.forEach((b,i)=>{
    body.push(wP(String.fromCharCode(97+i)+'. '+b.titulo+':',{b:true,keep:true,before:i?240:120}));
    body.push(wTable([3400,5960],b.filas,{labels:true}));
  });
  body.push(wP('En referencia a los puntos anteriormente descritos, se realizan las siguientes observaciones:',{keep:true,before:240}));
  d.obs.forEach(t=>body.push(wP(t,{num:true})));
  d.cierre.forEach(t=>body.push(wP(t)));
  body.push(wP('5. Resultado',{style:'Heading1'}));
  body.push(wP(d.resultado));
  let n=6;
  if(d.consideraciones.length){ body.push(wP(n+++'. Consideraciones',{style:'Heading1'})); d.consideraciones.forEach(t=>body.push(wP(t,{num:true}))); }
  if(d.compromisos.length){ body.push(wP(n+++'. Compromisos',{style:'Heading1'})); d.compromisos.forEach(t=>body.push(wP(t,{num:true}))); }
  const NS='xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"';
  const hdr='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:hdr '+NS+'><w:p><w:pPr><w:pBdr><w:bottom w:val="single" w:sz="6" w:space="4" w:color="1F4E79"/></w:pBdr><w:tabs><w:tab w:val="right" w:pos="9360"/></w:tabs></w:pPr>'+wRun('Revisión Técnica',{b:true,color:'1F4E79',sz:18})+'<w:r><w:tab/></w:r>'+wRun('Código: PT-GINF-001 · Versión formato: 2022/11/15',{color:'555555',sz:18})+'</w:p></w:hdr>';
  const fld=(c)=>'<w:r><w:rPr><w:sz w:val="16"/></w:rPr><w:fldChar w:fldCharType="begin"/></w:r><w:r><w:rPr><w:sz w:val="16"/></w:rPr><w:instrText xml:space="preserve"> '+c+' </w:instrText></w:r><w:r><w:rPr><w:sz w:val="16"/></w:rPr><w:fldChar w:fldCharType="separate"/></w:r><w:r><w:rPr><w:sz w:val="16"/></w:rPr><w:t>1</w:t></w:r><w:r><w:rPr><w:sz w:val="16"/></w:rPr><w:fldChar w:fldCharType="end"/></w:r>';
  const ftr='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:ftr '+NS+'><w:p><w:pPr><w:pBdr><w:top w:val="single" w:sz="4" w:space="4" w:color="8EA9C1"/></w:pBdr><w:tabs><w:tab w:val="right" w:pos="9360"/></w:tabs></w:pPr>'+wRun('Confidencial © Desarrollado por '+HBT,{color:'555555',sz:16})+'<w:r><w:tab/></w:r>'+wRun('Página ',{color:'555555',sz:16})+fld('PAGE')+wRun(' de ',{color:'555555',sz:16})+fld('NUMPAGES')+'</w:p></w:ftr>';
  const doc='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document '+NS+'><w:body>'+body.join('')+'<w:sectPr><w:headerReference w:type="default" r:id="rId10"/><w:footerReference w:type="default" r:id="rId11"/><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1296" w:left="1440" w:header="708" w:footer="567" w:gutter="0"/></w:sectPr></w:body></w:document>';
  const styles='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles '+NS+'><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri" w:cs="Calibri"/><w:sz w:val="22"/><w:szCs w:val="22"/><w:lang w:val="es-CO"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="264" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>'
    +'<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>'
    +'<w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="120" w:after="240"/><w:jc w:val="center"/></w:pPr><w:rPr><w:b/><w:color w:val="1F4E79"/><w:sz w:val="32"/></w:rPr></w:style>'
    +'<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:spacing w:before="320" w:after="120"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:color w:val="1F4E79"/><w:sz w:val="26"/></w:rPr></w:style></w:styles>';
  const numbering='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:numbering '+NS+'><w:abstractNum w:abstractNumId="0"><w:multiLevelType w:val="singleLevel"/><w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="•"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="540" w:hanging="270"/></w:pPr><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/></w:rPr></w:lvl></w:abstractNum><w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num></w:numbering>';
  const R='http://schemas.openxmlformats.org/officeDocument/2006/relationships';
  return zipStore([
    {name:'[Content_Types].xml',text:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/><Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/><Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/></Types>'},
    {name:'_rels/.rels',text:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="'+R+'/officeDocument" Target="word/document.xml"/></Relationships>'},
    {name:'word/_rels/document.xml.rels',text:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="'+R+'/styles" Target="styles.xml"/><Relationship Id="rId2" Type="'+R+'/numbering" Target="numbering.xml"/><Relationship Id="rId10" Type="'+R+'/header" Target="header1.xml"/><Relationship Id="rId11" Type="'+R+'/footer" Target="footer1.xml"/></Relationships>'},
    {name:'word/document.xml',text:doc},{name:'word/styles.xml',text:styles},{name:'word/numbering.xml',text:numbering},
    {name:'word/header1.xml',text:hdr},{name:'word/footer1.xml',text:ftr}
  ]);
}
function descargarBlob(bytes,nombre){
  const blob=new Blob([bytes],{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob); a.download=nombre;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),4000);
}

// ── Diálogo "Generar informe" ──
function addPart(n,c,e){
  const row=document.createElement('div'); row.className='part-row';
  row.innerHTML='<input class="dim-num" placeholder="Nombre" aria-label="Nombre del participante" required maxlength="80" autocomplete="off"><input class="dim-num" placeholder="Cargo" aria-label="Cargo" required maxlength="60" autocomplete="off"><input class="dim-num" placeholder="Empresa" aria-label="Empresa" required maxlength="80" autocomplete="off"><button type="button" class="part-del" aria-label="Quitar participante" onclick="delPart(this)">×</button>';
  const i=row.querySelectorAll('input'); i[0].value=n||''; i[1].value=c||''; i[2].value=e||'';
  document.getElementById('inf-parts').appendChild(row);
}
function delPart(b){ if(document.getElementById('inf-parts').children.length>1) b.parentNode.remove(); }
function openReport(){
  const f=document.getElementById('inf-fecha');
  if(!f.value) f.value=hoyISO();
  if(!document.getElementById('inf-parts').children.length) addPart('Jhonatan Andica Calderón','Consultor SAP',HBT);
  document.getElementById('inf-srv').textContent={virtual:'Virtualizados (despliegue elegido: Virtualizado)',citrix:'Físicos con Citrix/WTS (despliegue elegido: Citrix/WTS)',onpremise:'Físicos (despliegue elegido: On-Premise)'}[S.deploy]||'Físicos';
  document.getElementById('dlg-informe').showModal();
}
function descargarInforme(e){
  e.preventDefault();
  const elc=document.getElementById('inf-cliente'); // un texto de solo espacios no cuenta como lleno
  if(!elc.value.trim()){ elc.value=''; elc.reportValidity(); return false; }
  const v=id=>document.getElementById(id).value.trim();
  const partes=[...document.querySelectorAll('#inf-parts .part-row')].map(r=>{ const i=r.querySelectorAll('input'); return {n:i[0].value.trim(),c:i[1].value.trim(),e:i[2].value.trim()}; }).filter(p=>p.n);
  const d=buildReportData({cliente:v('inf-cliente'),fecha:v('inf-fecha'),tiempo:v('inf-tiempo'),participantes:partes,consideraciones:document.getElementById('inf-consid').value,compromisos:document.getElementById('inf-compr').value});
  descargarBlob(buildDocx(d),d.archivo);
  document.getElementById('dlg-informe').close();
  return false;
}

// INIT
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',()=>{renderFP();render();});
}else{
  renderFP();render();
}
