# Contexto do projeto — N1 / FIAP NEXT

## Objetivo
Demonstração acadêmica do reposicionamento da N1 Crédito e Consórcios para o Enterprise Challenge FIAP NEXT. Não é o site oficial nem realiza operações financeiras.

## Referências e decisões (19/10/2026)
- PDF fornecido: Reposicionamento Estratégico – N1 Crédito e Consórcios, 13 páginas. Identidade nas páginas 5 e 6; funcionalidades nas páginas 8–10.
- Paleta: #152943, #106DCE, #499C76. Slogan: Crédito com clareza. Decisão com confiança.
- Logotipo extraído do próprio PDF; sem redesenhar a marca. Gotham não foi fornecida/licenciada; usar fonte de sistema com desenho geométrico próximo.
- HTML/CSS/JS estáticos, sem build ou backend, compatíveis com GitHub Pages e abertura local.
- Simulador educativo com premissas explícitas; assistente de respostas locais; atendimento demonstrativo; CRM em memória por sessão, sem persistência de dados pessoais.
- Nenhuma projeção do PDF é apresentada como resultado real; não inventar avaliações ou depoimentos.
- Não publicar PDF original: contém telefones pessoais da equipe.

## Arquivos
- index.html: experiência pública e diálogos.
- styles.css: identidade e responsividade.
- app.js: simulador, atendimento, conteúdo e CRM.
- assets/: logotipo e símbolo extraídos do material autorizado.
- README.md: execução, publicação e roteiro de apresentação.

## Regra de continuidade
A cada alteração, atualizar este arquivo com implementação, validação e pendências. Ler antes de trabalhar. Não adicionar chaves, serviços pagos ou envio de contatos sem solicitação. Recursos reais de IA, WhatsApp e CRM exigem backend e integração futura.

## Histórico
- 19/10/2026: análise do PDF e do site institucional; preparação da identidade, arquitetura estática e funcionalidades demonstrativas.

## Implementação e validação — 19/10/2026
- Concluída a landing page responsiva com 4 objetivos, identidade do PDF, simulador, artigos, FAQ, contato, assistente e CRM.
- Logotipo e símbolo em assets/ foram extraídos da imagem incorporada na página 5 do PDF; preservada a transparência.
- Consórcio: valor × 1,18 / prazo (18% de administração fictícia total). Crédito: Price a 1,5% a.m. fictícia, prazo de 24 a 60 meses. Premissas e custos excluídos visíveis.
- CRM mantém apenas memória da aba; exemplos explicitamente fictícios. Entradas do usuário inseridas com textContent, sem interpretar HTML.
- Validado: node --check app.js; HTTP 200 da prévia local; navegação desktop; contato → novo lead → mudança de etapa; atualização de contadores; resposta do chatbot; menu mobile; cálculo por teclado.
- Conferido visualmente em desktop e viewport mobile 390 × 844. Largura do conteúdo igual à viewport útil (375 px), sem rolagem horizontal. Consórcio de R$ 205 mil / 120 meses exibiu R$ 2.015,83, conforme fórmula.
- Prévia local disponível na porta 4174. O servidor só serve arquivos locais e não recebe dados do formulário.
- GitHub: repositório correto confirmado pela API: gabiaguiarl/nextN1, público, vazio, branch padrão main. Conta do conector: fabiobrazil; permissões pull=true, push=false, admin=false. Não publicado por falta de acesso de escrita. Não confundir o último caractere de gabiaguiarl (letra l) com número 1.
- README contém instruções de GitHub Pages e roteiro para a apresentação.
- Pendência: autenticar uma conta com escrita no repositório, enviar arquivos e habilitar Pages (main / root). Não há URL pública verificada ainda.
- Conteúdo educativo conferido com fontes do Banco Central: https://www.bcb.gov.br/meubc/faqs/s/consorcio e https://www.bcb.gov.br/meubc/faqs/p/cuidados-na-hora-de-contratar-uma-operacao-de-credito .
- Pacote N1-FIAP-site.zip preparado para transferência manual; não inclui PDF, imagens temporárias ou dados pessoais.

## Revisão visual solicitada — 19/10/2026
- Referência: novo print do mockup de notebook/celular enviado pelo usuário.
- Fundo principal alterado para #f3f4fa; hero compacto com título “Crédito inteligente. Conquistas reais.”, foto ilustrativa de casal e símbolo original sobreposto; faixa azul-marinho com Segurança, Atendimento, Soluções e Parceria.
- Preservados simulador, assistente, formulário e CRM. Soluções com apresentação mais próxima do mockup.
- Gotham configurada por @font-face local para Book/Medium/Bold. Arquivo da fonte não encontrado em assets, Windows Fonts, Desktop ou Downloads; não há webfont incorporada. Necessário usuário fornecer .woff2 licenciado para garantir Gotham em todos os dispositivos; fallback de sistema permanece.
- Imagem assets/hero-casal.png gerada com ferramenta nativa image_gen; é ilustrativa, não depoimento real. Prompt: fotografia editorial realista de casal brasileiro adulto, homem com camisa azul-marinho e mulher com blusa creme, diante de casa contemporânea, enquadramento da cintura para cima, olhando à esquerda, casal nos dois terços direitos, parede clara à esquerda para mesclar com #f3f4fa, luz natural, sem texto/logotipo/marca-d'água.
- Verificação da revisão: navegador confirmou fundo rgb(243,244,250), equivalente a #f3f4fa; sem overflow horizontal em desktop (1351 px úteis) e mobile (375 px úteis). Conferida composição da foto, símbolo, título e faixa de benefícios. app.js não alterado.

## Publicação no GitHub — 19/10/2026
- Usuário autorizou publicação da versão atual. Git Credential Manager local possui a conta gabiaguiarl; conector permanece somente leitura.
- Preparação de envio dos arquivos estáticos para main e ativação do GitHub Pages na raiz. Excluídos tmp, PDF original e pacote ZIP.

