const flags = {
  'pt-BR': 'https://flagcdn.com/w20/br.png',
  'pt-PT': 'https://flagcdn.com/w20/pt.png',
  en: 'https://flagcdn.com/w20/us.png',
  es: 'https://flagcdn.com/w20/es.png',
};

const translations = {
  'pt-BR': {
    subtitle: 'Controle mensal inteligente, simples e visual.',
    saveBtn: 'Salvar', exportBtn: 'Exportar planilha', searchBtn: 'Pesquisar', compareBtn: 'Comparar meses',
    themeLight: 'Claro', themeDark: 'Escuro',
    fixedCostsTitle: 'Gastos fixos mensais (opcional)', fixedTotal: 'Total fixo mensal:', goalsTitle: 'Metas',
    planningTitle: 'Planejamento mensal', planningHelper: 'Preencha os valores para gerar o relatório automaticamente.',
    referenceMonth: 'Mês de referência', includeSalary: 'Incluir salário', salary: 'Salário',
    otherIncome: 'Outras entradas', otherExpenses: 'Outras saídas', generateDashboard: 'Gerar dashboard',
    summaryTitle: 'Resumo financeiro', totalIncomeLabel: 'Total de entradas', totalExpensesLabel: 'Total de saídas',
    monthlyBalanceLabel: 'Saldo do mês', savingRateLabel: 'Taxa de economia', goalsProgressTitle: 'Progresso das metas',
    searchReportTitle: 'Pesquisar relatório', searchMonthPlaceholder: 'Digite mês/ano (ex.: 01/2026)',
    compareTitle: 'Comparação mês a mês', periodA: 'Período A', periodB: 'Período B', compareBtnAction: 'Comparar',
    closeBtn: 'Fechar',
    phFixedName: 'Nome do gasto mensal', phValue: 'Valor', phGoalName: 'Nome da meta', phGoalCurrent: 'Valor atual',
    phGoalTarget: 'Valor da meta', phIncomeName: 'Nome da entrada', phExpenseName: 'Nome da saída',
    hintGenerated: 'Relatório gerado. Clique em salvar para guardar e compartilhar via link.',
    hintNeedGenerate: 'Gere um dashboard antes de salvar.',
    hintSavedCopied: 'Relatório salvo e link copiado. Abra o link em qualquer dispositivo conectado à internet.',
    hintSavedLink: 'Relatório salvo. Link de acesso:',
    hintNoExport: 'Nenhum relatório salvo para exportar.',
    listFixed: 'Gasto fixo', listGoal: 'Meta', listIncome: 'Entrada', listExpense: 'Saída', listReport: 'Relatório',
    noGoals: 'Adicione metas para acompanhar progresso.',
    compareInvalid: 'Selecione dois meses válidos para comparar.',
    compareText: (a,b,db,di,de,currency)=>`De ${a} para ${b}: saldo ${db >= 0 ? 'subiu' : 'caiu'} ${currency.format(Math.abs(db))}, entradas ${di >= 0 ? 'subiram' : 'caíram'} ${currency.format(Math.abs(di))} e saídas ${de >= 0 ? 'subiram' : 'caíram'} ${currency.format(Math.abs(de))}.`,
    reportLoaded: 'Relatório carregado por link compartilhado.',
    reportLoadError: 'Não foi possível carregar o relatório pelo link.',
  },
  'pt-PT': {
    subtitle: 'Controlo mensal inteligente, simples e visual.',
    saveBtn: 'Guardar', exportBtn: 'Exportar folha', searchBtn: 'Pesquisar', compareBtn: 'Comparar meses',
    themeLight: 'Claro', themeDark: 'Escuro', fixedCostsTitle: 'Despesas fixas mensais (opcional)', fixedTotal: 'Total fixo mensal:',
    goalsTitle: 'Metas', planningTitle: 'Planeamento mensal', planningHelper: 'Preencha os valores para gerar o relatório automaticamente.',
    referenceMonth: 'Mês de referência', includeSalary: 'Incluir salário', salary: 'Salário', otherIncome: 'Outras entradas',
    otherExpenses: 'Outras saídas', generateDashboard: 'Gerar dashboard', summaryTitle: 'Resumo financeiro',
    totalIncomeLabel: 'Total de entradas', totalExpensesLabel: 'Total de saídas', monthlyBalanceLabel: 'Saldo do mês',
    savingRateLabel: 'Taxa de poupança', goalsProgressTitle: 'Progresso das metas', searchReportTitle: 'Pesquisar relatório',
    searchMonthPlaceholder: 'Introduza mês/ano (ex.: 01/2026)', compareTitle: 'Comparação mês a mês', periodA: 'Período A', periodB: 'Período B', compareBtnAction: 'Comparar', closeBtn: 'Fechar',
    phFixedName: 'Nome da despesa mensal', phValue: 'Valor', phGoalName: 'Nome da meta', phGoalCurrent: 'Valor atual', phGoalTarget: 'Valor da meta', phIncomeName: 'Nome da entrada', phExpenseName: 'Nome da saída',
    hintGenerated: 'Relatório gerado. Clique em guardar para partilhar por ligação.', hintNeedGenerate: 'Gere um dashboard antes de guardar.', hintSavedCopied: 'Relatório guardado e ligação copiada.', hintSavedLink: 'Relatório guardado. Ligação:', hintNoExport: 'Nenhum relatório guardado para exportar.', listFixed: 'Despesa fixa', listGoal: 'Meta', listIncome: 'Entrada', listExpense: 'Saída', listReport: 'Relatório', noGoals: 'Adicione metas para acompanhar o progresso.', compareInvalid: 'Selecione dois meses válidos para comparar.', compareText: (a,b,db,di,de,currency)=>`De ${a} para ${b}: saldo ${db >= 0 ? 'subiu' : 'desceu'} ${currency.format(Math.abs(db))}.`, reportLoaded: 'Relatório carregado por ligação partilhada.', reportLoadError: 'Não foi possível carregar o relatório pela ligação.'
  },
  en: {
    subtitle: 'Smart, simple, visual monthly control.', saveBtn: 'Save', exportBtn: 'Export sheet', searchBtn: 'Search', compareBtn: 'Compare months', themeLight: 'Light', themeDark: 'Dark',
    fixedCostsTitle: 'Fixed monthly costs (optional)', fixedTotal: 'Fixed monthly total:', goalsTitle: 'Goals', planningTitle: 'Monthly planning', planningHelper: 'Fill in values to generate the report automatically.', referenceMonth: 'Reference month', includeSalary: 'Include salary', salary: 'Salary', otherIncome: 'Other income', otherExpenses: 'Other expenses', generateDashboard: 'Generate dashboard', summaryTitle: 'Financial summary', totalIncomeLabel: 'Total income', totalExpensesLabel: 'Total expenses', monthlyBalanceLabel: 'Monthly balance', savingRateLabel: 'Saving rate', goalsProgressTitle: 'Goals progress', searchReportTitle: 'Search report', searchMonthPlaceholder: 'Type month/year (e.g. 01/2026)', compareTitle: 'Month-to-month comparison', periodA: 'Period A', periodB: 'Period B', compareBtnAction: 'Compare', closeBtn: 'Close', phFixedName: 'Fixed cost name', phValue: 'Amount', phGoalName: 'Goal name', phGoalCurrent: 'Current amount', phGoalTarget: 'Target amount', phIncomeName: 'Income name', phExpenseName: 'Expense name', hintGenerated: 'Report generated. Click save to store and share by link.', hintNeedGenerate: 'Generate a dashboard before saving.', hintSavedCopied: 'Report saved and link copied.', hintSavedLink: 'Report saved. Link:', hintNoExport: 'No saved reports to export.', listFixed: 'Fixed cost', listGoal: 'Goal', listIncome: 'Income', listExpense: 'Expense', listReport: 'Report', noGoals: 'Add goals to track progress.', compareInvalid: 'Select two valid months to compare.', compareText: (a,b,db,di,de,currency)=>`From ${a} to ${b}: balance ${db >= 0 ? 'increased' : 'decreased'} by ${currency.format(Math.abs(db))}, income ${di >= 0 ? 'increased' : 'decreased'} by ${currency.format(Math.abs(di))}, expenses ${de >= 0 ? 'increased' : 'decreased'} by ${currency.format(Math.abs(de))}.`, reportLoaded: 'Report loaded from shared link.', reportLoadError: 'Could not load report from link.'
  },
  es: {
    subtitle: 'Control mensual inteligente, simple y visual.', saveBtn: 'Guardar', exportBtn: 'Exportar hoja', searchBtn: 'Buscar', compareBtn: 'Comparar meses', themeLight: 'Claro', themeDark: 'Oscuro', fixedCostsTitle: 'Gastos fijos mensuales (opcional)', fixedTotal: 'Total fijo mensual:', goalsTitle: 'Metas', planningTitle: 'Planificación mensual', planningHelper: 'Completa los valores para generar el informe automáticamente.', referenceMonth: 'Mes de referencia', includeSalary: 'Incluir salario', salary: 'Salario', otherIncome: 'Otras entradas', otherExpenses: 'Otras salidas', generateDashboard: 'Generar dashboard', summaryTitle: 'Resumen financiero', totalIncomeLabel: 'Total de entradas', totalExpensesLabel: 'Total de salidas', monthlyBalanceLabel: 'Saldo del mes', savingRateLabel: 'Tasa de ahorro', goalsProgressTitle: 'Progreso de metas', searchReportTitle: 'Buscar informe', searchMonthPlaceholder: 'Escribe mes/año (ej.: 01/2026)', compareTitle: 'Comparación mes a mes', periodA: 'Periodo A', periodB: 'Periodo B', compareBtnAction: 'Comparar', closeBtn: 'Cerrar', phFixedName: 'Nombre del gasto mensual', phValue: 'Valor', phGoalName: 'Nombre de la meta', phGoalCurrent: 'Valor actual', phGoalTarget: 'Valor meta', phIncomeName: 'Nombre del ingreso', phExpenseName: 'Nombre del gasto', hintGenerated: 'Informe generado. Haz clic en guardar para compartir por enlace.', hintNeedGenerate: 'Genera un dashboard antes de guardar.', hintSavedCopied: 'Informe guardado y enlace copiado.', hintSavedLink: 'Informe guardado. Enlace:', hintNoExport: 'No hay informes guardados para exportar.', listFixed: 'Gasto fijo', listGoal: 'Meta', listIncome: 'Entrada', listExpense: 'Salida', listReport: 'Informe', noGoals: 'Agrega metas para seguir el progreso.', compareInvalid: 'Selecciona dos meses válidos para comparar.', compareText: (a,b,db,di,de,currency)=>`De ${a} a ${b}: saldo ${db >= 0 ? 'subió' : 'bajó'} ${currency.format(Math.abs(db))}, entradas ${di >= 0 ? 'subieron' : 'bajaron'} ${currency.format(Math.abs(di))} y salidas ${de >= 0 ? 'subieron' : 'bajaron'} ${currency.format(Math.abs(de))}.`, reportLoaded: 'Informe cargado por enlace compartido.', reportLoadError: 'No se pudo cargar el informe desde el enlace.'
  },
};

const state = { fixedCosts: [], incomes: [], expenses: [], goals: [], lastReport: null, lang: 'pt-BR' };
const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const percent = new Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 });

const els = {
  fixedName: document.getElementById('fixedName'), fixedDate: document.getElementById('fixedDate'), fixedValue: document.getElementById('fixedValue'), fixedList: document.getElementById('fixedList'), fixedMonthly: document.getElementById('fixedMonthly'), addFixedBtn: document.getElementById('addFixedBtn'),
  goalName: document.getElementById('goalName'), goalCurrent: document.getElementById('goalCurrent'), goalTarget: document.getElementById('goalTarget'), goalList: document.getElementById('goalList'), addGoalBtn: document.getElementById('addGoalBtn'), goalsProgressList: document.getElementById('goalsProgressList'),
  monthRef: document.getElementById('monthRef'), salaryEnabled: document.getElementById('salaryEnabled'), salary: document.getElementById('salary'), salaryFieldWrap: document.getElementById('salaryFieldWrap'),
  incomeName: document.getElementById('incomeName'), incomeDate: document.getElementById('incomeDate'), incomeValue: document.getElementById('incomeValue'), incomeList: document.getElementById('incomeList'), addIncomeBtn: document.getElementById('addIncomeBtn'),
  expenseName: document.getElementById('expenseName'), expenseDate: document.getElementById('expenseDate'), expenseValue: document.getElementById('expenseValue'), expenseList: document.getElementById('expenseList'), addExpenseBtn: document.getElementById('addExpenseBtn'),
  totalIncome: document.getElementById('totalIncome'), totalExpenses: document.getElementById('totalExpenses'), monthlyBalance: document.getElementById('monthlyBalance'), savingRate: document.getElementById('savingRate'), reportMonth: document.getElementById('reportMonth'), saveHint: document.getElementById('saveHint'),
  themeToggle: document.getElementById('themeToggle'), themeLabel: document.getElementById('themeLabel'),
  langToggle: document.getElementById('langToggle'), langFlag: document.getElementById('langFlag'), langCode: document.getElementById('langCode'), langMenu: document.getElementById('langMenu'),
  saveBtn: document.getElementById('saveBtn'), exportBtn: document.getElementById('exportBtn'), searchBtn: document.getElementById('searchBtn'), compareBtn: document.getElementById('compareBtn'),
  searchDialog: document.getElementById('searchDialog'), searchInput: document.getElementById('searchInput'), searchResults: document.getElementById('searchResults'), closeSearch: document.getElementById('closeSearch'),
  compareDialog: document.getElementById('compareDialog'), compareA: document.getElementById('compareA'), compareB: document.getElementById('compareB'), compareResult: document.getElementById('compareResult'), runCompare: document.getElementById('runCompare'), closeCompare: document.getElementById('closeCompare'),
  form: document.getElementById('financeForm'),
};

const t = (key) => (translations[state.lang] || translations['pt-BR'])[key] || key;
function safeNumber(value) { const n = Number(value); return Number.isFinite(n) && n > 0 ? n : 0; }
function clamp(value, min = 0, max = 1) { return Math.max(min, Math.min(max, value)); }
function formatMonth(monthValue) { if (!monthValue) return '--/----'; const [y, m] = monthValue.split('-'); return `${m}/${y}`; }
function setCurrentMonth() { const d = new Date(); els.monthRef.value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`; }

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
  els.fixedName.placeholder = t('phFixedName');
  els.fixedValue.placeholder = t('phValue');
  els.goalName.placeholder = t('phGoalName');
  els.goalCurrent.placeholder = t('phGoalCurrent');
  els.goalTarget.placeholder = t('phGoalTarget');
  els.incomeName.placeholder = t('phIncomeName');
  els.incomeValue.placeholder = t('phValue');
  els.expenseName.placeholder = t('phExpenseName');
  els.expenseValue.placeholder = t('phValue');
  els.langCode.textContent = state.lang === 'en' ? 'EN' : state.lang === 'es' ? 'ES' : state.lang.toUpperCase();
  els.langFlag.src = flags[state.lang];
  const currentTheme = document.documentElement.getAttribute('data-theme');
  els.themeLabel.textContent = currentTheme === 'dark' ? t('themeDark') : t('themeLight');
  renderAllLists();
  renderGoalsProgress();
}

function setLanguage(lang) {
  state.lang = translations[lang] ? lang : 'pt-BR';
  localStorage.setItem('lang', state.lang);
  applyLanguage();
}

function initializeLanguage() { setLanguage(localStorage.getItem('lang') || 'pt-BR'); }

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  els.themeLabel.textContent = theme === 'dark' ? t('themeDark') : t('themeLight');
}
function initializeTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') return setTheme(saved);
  setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function renderList(listElement, list, label) {
  listElement.innerHTML = '';
  list.forEach((item, idx) => {
    const li = document.createElement('li');
    const datePart = item.date ? ` • ${item.date}` : '';
    li.innerHTML = `<span>${item.name || `${label} ${idx + 1}`}${datePart}</span><strong>${currency.format(item.value)}</strong>`;
    listElement.appendChild(li);
  });
}
function renderAllLists() {
  renderList(els.fixedList, state.fixedCosts, t('listFixed'));
  renderList(els.incomeList, state.incomes, t('listIncome'));
  renderList(els.expenseList, state.expenses, t('listExpense'));
  renderList(els.goalList, state.goals.map((g) => ({ name: g.name, date: `${currency.format(g.current)} / ${currency.format(g.target)}`, value: g.target })), t('listGoal'));
}

function updateFixedTotal() {
  const total = state.fixedCosts.reduce((acc, item) => acc + item.value, 0);
  els.fixedMonthly.textContent = currency.format(total);
  renderList(els.fixedList, state.fixedCosts, t('listFixed'));
}
function addFixedCost() {
  const name = els.fixedName.value.trim(); const date = els.fixedDate.value; const value = safeNumber(els.fixedValue.value);
  if (!value) return;
  state.fixedCosts.push({ name, date, value });
  els.fixedName.value = ''; els.fixedDate.value = ''; els.fixedValue.value = '';
  updateFixedTotal();
}
function addGoal() {
  const name = els.goalName.value.trim(); const current = safeNumber(els.goalCurrent.value); const target = safeNumber(els.goalTarget.value);
  if (!target) return;
  state.goals.push({ name: name || `${t('listGoal')} ${state.goals.length + 1}`, current, target, value: target });
  els.goalName.value = ''; els.goalCurrent.value = ''; els.goalTarget.value = '';
  renderAllLists(); renderGoalsProgress();
}
function renderGoalsProgress() {
  els.goalsProgressList.innerHTML = '';
  if (!state.goals.length) { els.goalsProgressList.innerHTML = `<p class="helper">${t('noGoals')}</p>`; return; }
  state.goals.forEach((goal) => {
    const ratio = goal.target > 0 ? clamp(goal.current / goal.target) : 0;
    const item = document.createElement('div');
    item.className = 'goal-progress-item';
    item.innerHTML = `<div class="goal-progress-head"><strong>${goal.name}</strong><span>${percent.format(ratio)}</span></div><div class="progress-track"><div class="progress-fill" style="width:${ratio * 100}%"></div></div><div class="goal-progress-meta">${currency.format(goal.current)} de ${currency.format(goal.target)}</div>`;
    els.goalsProgressList.appendChild(item);
  });
}

function addIncome() { const name = els.incomeName.value.trim(); const date = els.incomeDate.value; const value = safeNumber(els.incomeValue.value); if (!value) return; state.incomes.push({ name, date, value }); els.incomeName.value = ''; els.incomeDate.value = ''; els.incomeValue.value = ''; renderList(els.incomeList, state.incomes, t('listIncome')); }
function addExpense() { const name = els.expenseName.value.trim(); const date = els.expenseDate.value; const value = safeNumber(els.expenseValue.value); if (!value) return; state.expenses.push({ name, date, value }); els.expenseName.value = ''; els.expenseDate.value = ''; els.expenseValue.value = ''; renderList(els.expenseList, state.expenses, t('listExpense')); }

function generateDashboard(event) {
  event.preventDefault();
  const monthRef = els.monthRef.value;
  const salary = els.salaryEnabled.checked ? safeNumber(els.salary.value) : 0;
  const fixedTotal = state.fixedCosts.reduce((acc, item) => acc + item.value, 0);
  const otherIncomes = state.incomes.reduce((acc, item) => acc + item.value, 0);
  const otherExpenses = state.expenses.reduce((acc, item) => acc + item.value, 0);
  const totalIncome = salary + otherIncomes;
  const totalExpenses = fixedTotal + otherExpenses;
  const monthlyBalance = totalIncome - totalExpenses;
  const savingRate = totalIncome > 0 ? monthlyBalance / totalIncome : 0;
  state.lastReport = { monthRef, totalIncome, totalExpenses, monthlyBalance, savingRate, fixedTotal, otherExpenses, goals: state.goals };
  els.totalIncome.textContent = currency.format(totalIncome);
  els.totalExpenses.textContent = currency.format(totalExpenses);
  els.monthlyBalance.textContent = currency.format(monthlyBalance);
  els.savingRate.textContent = percent.format(savingRate);
  els.reportMonth.textContent = formatMonth(monthRef);
  renderGoalsProgress();
  els.saveHint.textContent = t('hintGenerated');
}

function getArchive() { try { return JSON.parse(localStorage.getItem('financeAiReports') || '[]'); } catch { return []; } }
function setArchive(archive) { localStorage.setItem('financeAiReports', JSON.stringify(archive)); }

async function saveReport() {
  if (!state.lastReport) { els.saveHint.textContent = t('hintNeedGenerate'); return; }
  const archive = getArchive();
  const report = { ...state.lastReport, savedAt: new Date().toISOString() };
  archive.push(report); setArchive(archive);
  const encoded = encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(report)))));
  const shareLink = `${location.origin}${location.pathname}?report=${encoded}`;
  try { await navigator.clipboard.writeText(shareLink); els.saveHint.textContent = t('hintSavedCopied'); }
  catch { els.saveHint.textContent = `${t('hintSavedLink')} ${shareLink}`; }
}

function exportCsv() {
  const archive = getArchive();
  if (!archive.length) { els.saveHint.textContent = t('hintNoExport'); return; }
  const header = ['mesReferencia', 'entradas', 'saidas', 'saldo', 'taxaEconomia', 'salvoEm'];
  const rows = archive.map((r) => [formatMonth(r.monthRef), r.totalIncome.toFixed(2), r.totalExpenses.toFixed(2), r.monthlyBalance.toFixed(2), `${(r.savingRate * 100).toFixed(2)}%`, r.savedAt]);
  const csv = [header.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'finance-ai-relatorios.csv'; a.click(); URL.revokeObjectURL(url);
}

function openSearch() { els.searchDialog.showModal(); els.searchInput.value = ''; els.searchResults.innerHTML = ''; }
function runSearch() {
  const q = els.searchInput.value.trim();
  const filtered = getArchive().filter((r) => formatMonth(r.monthRef).includes(q));
  renderList(els.searchResults, filtered.map((r) => ({ name: `Ref. ${formatMonth(r.monthRef)} • saldo`, value: r.monthlyBalance })), t('listReport'));
}

function populateCompareSelects() {
  const options = getArchive().map((r, i) => `<option value="${i}">${formatMonth(r.monthRef)} • ${currency.format(r.monthlyBalance)}</option>`).join('');
  els.compareA.innerHTML = options; els.compareB.innerHTML = options;
}
function compareReports() {
  const archive = getArchive();
  const a = archive[Number(els.compareA.value)]; const b = archive[Number(els.compareB.value)];
  if (!a || !b) { els.compareResult.textContent = t('compareInvalid'); return; }
  const db = b.monthlyBalance - a.monthlyBalance; const di = b.totalIncome - a.totalIncome; const de = b.totalExpenses - a.totalExpenses;
  els.compareResult.textContent = t('compareText')(formatMonth(a.monthRef), formatMonth(b.monthRef), db, di, de, currency);
}
function openCompare() { populateCompareSelects(); els.compareResult.textContent = ''; els.compareDialog.showModal(); }

function hydrateFromUrl() {
  const encoded = new URLSearchParams(location.search).get('report');
  if (!encoded) return;
  try {
    const report = JSON.parse(decodeURIComponent(escape(atob(decodeURIComponent(encoded)))));
    state.lastReport = report; state.goals = Array.isArray(report.goals) ? report.goals : [];
    els.totalIncome.textContent = currency.format(report.totalIncome);
    els.totalExpenses.textContent = currency.format(report.totalExpenses);
    els.monthlyBalance.textContent = currency.format(report.monthlyBalance);
    els.savingRate.textContent = percent.format(report.savingRate);
    els.reportMonth.textContent = formatMonth(report.monthRef);
    renderGoalsProgress(); els.saveHint.textContent = t('reportLoaded');
  } catch { els.saveHint.textContent = t('reportLoadError'); }
}

function toggleSalaryField() { els.salary.disabled = !els.salaryEnabled.checked; els.salaryFieldWrap.style.opacity = els.salaryEnabled.checked ? '1' : '.55'; }

els.form.addEventListener('submit', generateDashboard);
els.addFixedBtn.addEventListener('click', addFixedCost);
els.addGoalBtn.addEventListener('click', addGoal);
els.addIncomeBtn.addEventListener('click', addIncome);
els.addExpenseBtn.addEventListener('click', addExpense);
els.salaryEnabled.addEventListener('change', toggleSalaryField);
els.saveBtn.addEventListener('click', saveReport);
els.exportBtn.addEventListener('click', exportCsv);
els.searchBtn.addEventListener('click', openSearch);
els.searchInput.addEventListener('input', runSearch);
els.closeSearch.addEventListener('click', () => els.searchDialog.close());
els.compareBtn.addEventListener('click', openCompare);
els.runCompare.addEventListener('click', compareReports);
els.closeCompare.addEventListener('click', () => els.compareDialog.close());
els.themeToggle.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
els.langToggle.addEventListener('click', () => els.langMenu.classList.toggle('hidden'));
document.querySelectorAll('.lang-option').forEach((btn) => btn.addEventListener('click', () => { setLanguage(btn.dataset.lang); els.langMenu.classList.add('hidden'); }));
document.addEventListener('click', (event) => { if (!event.target.closest('.lang-wrap')) els.langMenu.classList.add('hidden'); });

initializeTheme();
initializeLanguage();
setCurrentMonth();
toggleSalaryField();
updateFixedTotal();
renderGoalsProgress();
hydrateFromUrl();
