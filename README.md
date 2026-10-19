# N1 · Crédito com clareza

Site demonstrativo do rebranding da N1 Crédito e Consórcios para o **FIAP NEXT — Enterprise Challenge**.

## Rodar
Abra `index.html` no navegador, sem instalar dependências. Para servir via HTTP, use `python -m http.server 4173 --bind 127.0.0.1` e acesse `http://127.0.0.1:4173`.

## Funcionalidades
- Identidade extraída do PDF do grupo; paleta oficial do projeto.
- Interface responsiva e navegação por teclado.
- Simulador de consórcio e crédito com cálculo instantâneo e premissas abertas.
- Conteúdos educativos e perguntas frequentes.
- Assistente por regras locais, sem integração com IA.
- Formulário demonstrativo que alimenta o CRM na mesma sessão.
- Pipeline com mudanças de etapa, contadores derivados e restauração dos exemplos.

## Apresentar no NEXT
1. Apresente o slogan e as quatro soluções.
2. Escolha “Meu imóvel” e ajuste valor/prazo no simulador.
3. Abra as premissas; compare com a aba Crédito.
4. Demonstre o assistente e um conteúdo educativo.
5. Envie um nome fictício no atendimento e clique “Ver no CRM”.
6. Mova o contato entre etapas para mostrar a integração comercial.

## GitHub Pages
O site usa caminhos relativos e não depende de servidor. No repositório indicado pelo grupo:
1. Envie `index.html`, `styles.css`, `app.js`, `assets/`, `.nojekyll` e os arquivos de documentação para a branch `main`.
2. Em **Settings → Pages → Build and deployment**, selecione **Deploy from a branch**.
3. Selecione `main`, pasta `/ (root)`, e salve.
4. Aguarde a publicação e use o link fornecido pelo GitHub.

Não envie `tmp/` nem o PDF original, que contém contatos pessoais. O `.gitignore` protege os arquivos temporários.

## Limitações intencionais
Não é o site oficial, não contrata crédito, não usa taxas reais, não envia WhatsApp e não armazena contatos. O CRM usa dados fictícios em memória. Gotham não foi incluída por não haver arquivo/licença disponível; a tipografia usa a pilha local Aptos/Segoe UI/Arial.

## Continuidade por outras IAs
Leia e atualize **CONTEXTO.md em toda alteração**. Esse arquivo mantém referências, decisões, histórico, validações e pendências.

## Estado atual
Implementação testada localmente em 19/10/2026. Repositório de destino confirmado: https://github.com/gabiaguiarl/nextN1. Publicação pendente: o conector atual tem somente leitura. Prévia local: http://127.0.0.1:4174.

## Revisão visual
Layout aproximado do mockup fornecido: fundo #f3f4fa, casal ilustrativo em assets/hero-casal.png, símbolo da marca e faixa de benefícios. Gotham configurada via fontes locais; falta fornecer os arquivos web licenciados para exibição consistente em qualquer computador. Foto gerada pela ferramenta nativa image_gen; prompt e rastreabilidade registrados em CONTEXTO.md.

## Publicação no GitHub Pages
Site: https://gabiaguiarl.github.io/nextN1/
Repositório: https://github.com/gabiaguiarl/nextN1
GitHub Pages ativado em 19/10/2026, fonte main / raiz. Atualizações enviadas a main são publicadas automaticamente. A pendência de acesso descrita anteriormente foi resolvida usando a conta do Git Credential Manager local.
