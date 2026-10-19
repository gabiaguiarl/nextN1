'use strict';
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const money = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
let mode = 'consorcio';
const goals = { imovel: 'Meu imóvel', veiculo: 'Meu veículo', negocio: 'Meu negócio', projeto: 'Meus projetos' };
function calculate(value, months, type) {
  return type === 'consorcio' ? value * 1.18 / months : value * 0.015 / (1 - Math.pow(1.015, -months));
}
function updateSimulation() {
  const value = Number($('#amount').value), months = Number($('#term').value);
  $('#amount-label').textContent = money(value);
  $('#term-label').textContent = `${months} meses`;
  $('#payment').textContent = money(calculate(value, months, mode));
  $('#calculation').textContent = mode === 'consorcio'
    ? `Exemplo: carta de ${money(value)} + taxa de administração fictícia de 18% no total, divididas por ${months} meses. Total ilustrativo: ${money(value * 1.18)}. Não inclui fundo de reserva, seguros ou reajustes. A contemplação depende de sorteio ou lance; não há data garantida.`
    : `Exemplo pelo sistema Price, com taxa fictícia de 1,5% ao mês e ${months} parcelas fixas. Soma ilustrativa das parcelas: ${money(calculate(value, months, mode) * months)}. Não inclui IOF, tarifas ou seguros e não representa o CET. Sujeito a análise de crédito na contratação real.`;
}
$$('[data-mode]').forEach(button => button.addEventListener('click', () => {
  mode = button.dataset.mode;
  $$('[data-mode]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  $('#term').max = mode === 'credito' ? '60' : '180';
  if (Number($('#term').value) > Number($('#term').max)) $('#term').value = $('#term').max;
  updateSimulation();
}));
$('#amount').addEventListener('input', updateSimulation);
$('#term').addEventListener('input', updateSimulation);
$$('[data-goal]').forEach(button => button.addEventListener('click', () => {
  $('#goal').value = button.dataset.goal;
  $('#amount').value = { imovel: 200000, veiculo: 80000, negocio: 150000, projeto: 40000 }[button.dataset.goal];
  updateSimulation(); $('#simulador').scrollIntoView({ behavior: 'smooth' });
}));
$('.menu-toggle').addEventListener('click', () => {
  const open = $('#navigation').classList.toggle('open'); $('.menu-toggle').setAttribute('aria-expanded', String(open));
});
$$('#navigation a').forEach(link => link.addEventListener('click', () => { $('#navigation').classList.remove('open'); $('.menu-toggle').setAttribute('aria-expanded', 'false'); }));
let returnFocus = null;
function openDialog(id) { returnFocus = document.activeElement; $$('dialog[open]').forEach(dialog => dialog.close()); $(id).showModal(); }
$$('dialog').forEach(dialog => {
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => { if (!document.querySelector('dialog[open]')) returnFocus?.focus(); });
});
function contact() { $('#contact-form').hidden = false; $('#contact-success').hidden = true; $('#contact-form').reset(); openDialog('#contact-dialog'); }
$$('[data-contact]').forEach(button => button.addEventListener('click', contact));
const sampleLeads = () => [
  { name: 'Alex · exemplo', goal: 'Meu imóvel', value: 200000, mode: 'consorcio', channel: 'WhatsApp', stage: 0 },
  { name: 'Bia · exemplo', goal: 'Meu veículo', value: 80000, mode: 'consorcio', channel: 'Telefone', stage: 1 },
  { name: 'Rafa · exemplo', goal: 'Meu negócio', value: 150000, mode: 'credito', channel: 'E-mail', stage: 2 }
];
let leads = sampleLeads();
const stages = ['Novo contato', 'Em atendimento', 'Proposta apresentada'];
function element(tag, text, className) { const node = document.createElement(tag); if (text) node.textContent = text; if (className) node.className = className; return node; }
function renderCRM() {
  const metrics = $('#crm-metrics'); metrics.replaceChildren();
  [[leads.length, 'Oportunidades fictícias'], [leads.filter(lead => lead.stage === 1).length, 'Em atendimento'], [leads.filter(lead => lead.stage === 2).length, 'Propostas apresentadas']].forEach(([count, label]) => {
    const box = element('div'); box.append(element('strong', String(count)), element('span', label)); metrics.append(box);
  });
  const pipeline = $('#pipeline'); pipeline.replaceChildren();
  stages.forEach((stage, index) => {
    const column = element('section', '', 'pipeline-column'); column.append(element('h3', `${stage} · ${leads.filter(lead => lead.stage === index).length}`));
    leads.forEach((lead, leadIndex) => {
      if (lead.stage !== index) return;
      const card = element('div', '', 'lead'); card.append(element('strong', lead.name), element('p', `${lead.goal} · ${money(lead.value)}`), element('p', `${lead.mode === 'consorcio' ? 'Consórcio' : 'Crédito'} · ${lead.channel}`));
      const select = element('select'); select.setAttribute('aria-label', `Etapa de ${lead.name}`);
      stages.forEach((label, stageIndex) => { const option = element('option', label); option.value = stageIndex; option.selected = stageIndex === lead.stage; select.append(option); });
      select.addEventListener('change', () => { leads[leadIndex].stage = Number(select.value); renderCRM(); }); card.append(select); column.append(card);
    });
    pipeline.append(column);
  });
}
function openCRM() { renderCRM(); openDialog('#crm-dialog'); }
$('#open-crm').addEventListener('click', openCRM);
$('#see-lead').addEventListener('click', openCRM);
$('#reset-crm').addEventListener('click', () => { leads = sampleLeads(); renderCRM(); });
$('#contact-form').addEventListener('submit', event => {
  event.preventDefault(); const name = $('#name').value.trim(); if (!name) { $('#name').setCustomValidity('Informe um nome fictício.'); $('#name').reportValidity(); return; }
  leads.push({ name, goal: goals[$('#goal').value], value: Number($('#amount').value), mode, channel: $('#channel').value, stage: 0 });
  $('#contact-form').hidden = true; $('#contact-success').hidden = false; $('#see-lead').focus();
});
$('#name').addEventListener('input', () => $('#name').setCustomValidity(''));
const articles = {
  consorcio: { title: 'Consórcio: um plano para a sua conquista.', paragraphs: ['No consórcio, pessoas se reúnem em um grupo para formar uma poupança comum, administrada por uma empresa autorizada. Cada participante paga parcelas e concorre à contemplação conforme as regras do contrato.', 'A carta de crédito é disponibilizada após a contemplação, que pode ocorrer por sorteio ou lance. Não é possível garantir quando ela acontecerá. Por isso, o consórcio exige planejamento e pode não atender a uma necessidade imediata.', 'Além do valor da carta, avalie a taxa de administração, possíveis seguros, fundo de reserva e reajustes. Sem juros de financiamento não significa sem custos.', 'Antes de contratar, leia as regras do grupo e confira a administradora nos canais oficiais do Banco Central.'] },
  credito: { title: 'Crédito consciente começa com informação.', paragraphs: ['Antes de contratar, defina a finalidade do crédito e quanto a parcela comprometeria do seu orçamento. Preserve espaço para despesas essenciais e imprevistos.', 'Compare o Custo Efetivo Total (CET), não apenas a taxa de juros ou o valor da prestação. O CET reúne os encargos e despesas da operação.', 'Prazos maiores podem reduzir a prestação e aumentar o total pago. Observe o valor total, as garantias exigidas, os encargos por atraso e as condições de quitação antecipada.', 'Use a simulação como ponto de partida. A contratação real depende de análise e das condições oferecidas pela instituição.'] },
  planejamento: { title: 'Seu próximo passo, com um plano.', paragraphs: ['Comece com um objetivo específico: o que deseja conquistar, qual o valor estimado e em quanto tempo gostaria de realizar esse plano?', 'Liste entradas e despesas para entender o espaço real no seu orçamento. Considere os gastos que não aparecem todos os meses e mantenha uma reserva para imprevistos.', 'Explore cenários. Uma mudança no valor pretendido ou no prazo pode alterar bastante o compromisso mensal. O melhor plano precisa fazer sentido para a sua realidade.', 'Revisite o planejamento quando sua vida mudar. Conhecimento e acompanhamento ajudam a transformar uma decisão importante em um caminho mais claro.'] }
};
function content(title, paragraphs, eyebrow = 'APRENDA COM A N1') { const body = $('#content-body'); body.replaceChildren(element('p', eyebrow, 'eyebrow'), element('h2', title)); paragraphs.forEach(text => body.append(element('p', text))); openDialog('#content-dialog'); }
$$('[data-article]').forEach(button => button.addEventListener('click', () => { const article = articles[button.dataset.article]; content(article.title, article.paragraphs); }));
$('#privacy').addEventListener('click', () => content('Uma demonstração, com transparência.', ['Este projeto acadêmico foi desenvolvido para o FIAP NEXT / Enterprise Challenge e não é o site oficial da N1. Não oferece contratação financeira.', 'O formulário e o assistente não enviam mensagens, dados pessoais ou solicitações a nenhuma empresa. Use apenas nomes fictícios. As oportunidades ficam na memória da página e são apagadas ao recarregar ou fechar a aba.', 'Não utilizamos cookies de análise, rastreadores, armazenamento local ou serviços de IA. A hospedagem no GitHub Pages pode manter registros técnicos de acesso conforme sua própria política.', 'O CRM, as taxas e os exemplos são demonstrativos. Uma versão de produção precisaria de integrações, segurança, consentimentos e política de privacidade próprios.'], 'PRIVACIDADE DA DEMONSTRAÇÃO'));
$$('[data-chat]').forEach(button => button.addEventListener('click', () => openDialog('#chat-dialog')));
function answer(question) {
  const normalized = question.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  if (/atendimento|consultor|whatsapp|pessoa|humano/.test(normalized)) return 'O atendimento é centralizado na proposta da nova N1. Para experimentar, feche esta conversa e clique em “Vamos conversar”. O formulário cria um contato fictício no CRM, sem enviar mensagens.';
  if (/simul|parcela|valor|taxa/.test(normalized)) return 'No simulador, escolha consórcio ou crédito e ajuste valor e prazo. Abra “Entenda os valores” para consultar as premissas. Todas as taxas são fictícias; a simulação não é uma proposta comercial.';
  if (/consorcio|contemplac|lance|sorteio/.test(normalized)) return 'O consórcio reúne pessoas em um grupo. A contemplação acontece por sorteio ou lance conforme o contrato, sem data garantida. Há taxa de administração e podem existir outros custos. É importante conhecer as regras antes de escolher.';
  if (/credito|emprestimo|juros|cet/.test(normalized)) return 'O crédito depende de aprovação e possui condições definidas pela instituição. Compare o CET, o total pago e o impacto da parcela no orçamento. No protótipo, você pode explorar um exemplo com taxa fictícia.';
  if (/oi|ola|bom dia/.test(normalized)) return 'Olá! Quer entender consórcio, crédito, simulação ou atendimento? Escolha um tema abaixo.';
  return 'Este assistente demonstrativo responde sobre consórcio, crédito, simulação e atendimento. Para uma análise pessoal, seria necessário conversar com um consultor. Qual desses temas você quer explorar?';
}
function sendQuestion(question) { const messages = $('#chat-messages'); messages.append(element('p', question, 'user-message'), element('p', answer(question), 'bot-message')); messages.scrollTop = messages.scrollHeight; }
$$('[data-question]').forEach(button => button.addEventListener('click', () => sendQuestion(button.dataset.question)));
$('#chat-form').addEventListener('submit', event => { event.preventDefault(); const question = $('#chat-input').value.trim(); if (question) sendQuestion(question); $('#chat-input').value = ''; $('#chat-input').focus(); });
updateSimulation();
