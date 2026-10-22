/* =====================================================================
   CONTEÚDO DO SITE — Felipe Lima (@ofelipesm)
   ---------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar.
   Troque os textos e os caminhos entre aspas. Não mude os nomes antes
   dos dois-pontos (ex.: titulo:, video:, poster:).

   VÍDEOS
   - Coloque os arquivos em assets/videos/ (.mp4, vertical 720x1280 ou
     1080x1920, até ~10 MB cada para carregar rápido no celular).
   - `video:` é o caminho do arquivo, ex.: 'assets/videos/alphaville.mp4'.
   - `poster:` é a imagem que aparece antes do vídeo carregar
     (um frame do próprio vídeo). Os frames atuais ficam em
     assets/videos/posters/.
   - Se `video:` ficar vazio (''), o quadro aparece marcado como
     "Vídeo em breve", pronto para você só colocar o arquivo.
   ===================================================================== */

window.SITE = {
  pessoa: {
    nome: 'Felipe Lima',
    handle: '@ofelipesm',
    cargo: 'Video Maker & Creator',
    // Bio da página 1 do PDF (ortografia revisada).
    bio: 'Me chamo Felipe Lima, tenho 22 anos e há mais de 5 anos venho me aprofundando em métodos orgânicos de crescimento, explorando todas as estratégias desenvolvidas para impulsionar vendas e atrair o público-alvo ideal.',
    // Foto recortada (fundo transparente) usada no topo.
    foto: 'assets/fotos/felipe-recorte.webp',
    fotoAlt: 'Felipe Lima, em preto e branco, com o rosto em movimento',
  },

  contato: {
    // Número só com dígitos: 55 (Brasil) + 98 (DDD) + número.
    whatsappNumero: '5598970155479',
    whatsappExibicao: '+55 98 97015-5479',
    whatsappMensagem: 'Olá, Felipe! Vi seu portfólio e quero conversar sobre um projeto.',
    instagramUrl: 'https://www.instagram.com/ofelipesm/',
  },

  // Itens do menu. No topo eles ficam ao redor da foto; ao rolar, sobem para a barra.
  menu: [
    { rotulo: 'Sobre', alvo: '#sobre' },
    { rotulo: 'Serviços', alvo: '#servicos' },
    { rotulo: 'Trabalhos', alvo: '#trabalhos' },
    { rotulo: 'Cases', alvo: '#cases' },
    { rotulo: 'Resultados', alvo: '#resultados' },
  ],

  topo: {
    botao: 'Chamar no WhatsApp',
    rolar: 'Role para ver',
  },

  sobre: {
    titulo: 'Sobre mim',
  },

  servicos: {
    titulo: 'Serviços',
    // Os serviços do PDF, com vídeo em primeiro.
    itens: [
      'Edição de vídeos, fotos e gravações',
      'Gestão de redes sociais',
      'Branding design',
      'Planejamento estratégico',
    ],
  },

  trabalhos: {
    titulo: 'Trabalhos em destaque',
    // Vídeos verticais. Tocam ao passar o mouse (no celular, ao rolar).
    // Clique abre em tela cheia, com som. `semSom: true` deixa o vídeo sempre mudo.
    itens: [
      { cliente: 'Trapiche', video: 'assets/videos/trapiche.mp4', poster: 'assets/videos/posters/trapiche.webp', semSom: true },
      { cliente: '@esteticamarlapinho', video: 'assets/videos/esteticamarlapinho.mp4', poster: 'assets/videos/posters/esteticamarlapinho.webp' },
      { cliente: '@jleducacional', video: 'assets/videos/jleducacional.mp4', poster: 'assets/videos/posters/jleducacional.webp' },
      { cliente: '@alphathermeng', video: 'assets/videos/alphatherm.mp4', poster: 'assets/videos/posters/alphatherm.webp' },
      { cliente: 'Empório Fribal', video: 'assets/videos/fribal-expansao.mp4', poster: 'assets/videos/posters/fribal-expansao.webp' },
    ],
  },

  cases: {
    titulo: 'Cases',
    // Cada case: um celular (vídeo ou imagem) + as imagens do lado.
    // `formato`: 'grade' = 6 imagens em 3 colunas x 2 linhas (como no PDF);
    //            'fila'  = imagens verticais lado a lado.
    // `proporcao`: largura ÷ altura das imagens da grade (a proporção real dos posts,
    //               para não cortar o texto deles).
    itens: [
      {
        id: 'emporio-fribal',
        nome: 'Empório Fribal',
        logo: 'assets/cases/emporio-fribal/logo.webp',
        texto: [
          'Captação da expansão do Empório Fribal, acompanhando a obra da nova unidade.',
          'Os vídeos registram cada etapa do projeto e mostram ao público a nova fase da marca.',
        ],
        celular: { video: 'assets/videos/fribal-expansao.mp4', poster: 'assets/videos/posters/fribal-expansao.webp', legenda: 'Expansão Empório Fribal' },
        formato: 'fila',
        imagens: [
          'assets/cases/emporio-fribal/2.webp',
          'assets/cases/emporio-fribal/3.webp',
        ],
      },
      {
        id: 'alphaville-aracagi',
        nome: 'Alphaville Araçagi',
        logo: 'assets/cases/alphaville-aracagi/logo.webp',
        texto: [
          'Captações de casas de alto padrão no Alphaville Araçagi.',
          'Vídeos que valorizam a arquitetura, os acabamentos e os detalhes de cada ambiente.',
        ],
        celular: { video: 'assets/videos/alphaville.mp4', poster: 'assets/videos/posters/alphaville.webp', legenda: 'Alphaville Araçagi' },
        formato: 'fila',
        imagens: [
          'assets/cases/alphaville-aracagi/3.webp',
          'assets/cases/alphaville-aracagi/2.webp',
        ],
      },
      {
        id: 'alphathermeng',
        nome: '@alphathermeng',
        logo: '',
        texto: [
          'Na Alphatherm, foi feito o serviço de social media completo, com foco em aumentar os leads e os contratos.',
          'A empresa teve fortes métricas de crescimento, conquistando mais clientes e contratos estaduais e nacionais.',
          'Atualmente, a Alphatherm segue como a maior empresa de climatização do Maranhão.',
        ],
        celular: { video: 'assets/videos/alphatherm.mp4', poster: 'assets/videos/posters/alphatherm.webp', legenda: '@alphathermeng' },
        formato: 'grade',
        proporcao: 196 / 263,
        imagens: [1, 2, 3, 4, 5, 6].map((n) => `assets/cases/alphathermeng/${n}.webp`),
      },
      {
        id: 'jleducacional',
        nome: '@jleducacional',
        logo: '',
        texto: [
          'O JL Educacional foi um projeto em que começamos com um único expert e chegamos ao desenvolvimento de uma equipe de mentoria completa.',
          'Desenvolvimento de roteiro, iluminação profissional e gravações de alta qualidade foram feitos com o material da própria equipe.',
          'O JL segue crescendo como um grupo maior e com uma nova identidade, mais marcante, gerando mais resultado.',
        ],
        celular: { video: 'assets/videos/jleducacional.mp4', poster: 'assets/videos/posters/jleducacional.webp', legenda: '@jleducacional' },
        formato: 'grade',
        proporcao: 225 / 302,
        imagens: [1, 2, 3, 4, 5, 6].map((n) => `assets/cases/jleducacional/${n}.webp`),
      },
      {
        id: 'esteticamarlapinho',
        nome: '@esteticamarlapinho',
        logo: '',
        texto: [
          'Projeto focado na expert, com treinamento de posicionamento digital, construção de roteiro, primeiras publicações e rebranding da página.',
          'Mapeamento de público-alvo e maior captação de leads. Foco em cursos e na construção de autoridade da marca na área de estética facial.',
          'Projeto ainda em andamento, com mudanças constantes no perfil.',
        ],
        celular: { video: 'assets/videos/esteticamarlapinho.mp4', poster: 'assets/videos/posters/esteticamarlapinho.webp', legenda: '@esteticamarlapinho' },
        formato: 'grade',
        proporcao: 225 / 300,
        imagens: [1, 2, 3, 4, 5, 6].map((n) => `assets/cases/esteticamarlapinho/${n}.webp`),
      },
      {
        id: 'csoebenezer',
        nome: '@csoebenezer',
        logo: '',
        texto: [
          'Com mais de 25 mil seguidores alcançados organicamente, do absoluto zero, foi feito o trabalho de identidade visual, recriando todo o design antigo da página.',
          'A página teve gestão completa, com estratégias de posts: estático, carrossel e reels.',
          'Também foram idealizados trends e quadros exclusivos para a página e a comunidade.',
        ],
        // Sem vídeo: o celular mostra a imagem do perfil.
        celular: { video: '', imagem: 'assets/cases/csoebenezer/tela.webp', legenda: '@csoebenezer' },
        formato: 'grade',
        proporcao: 250 / 252,
        imagens: [1, 2, 3, 4, 5, 6].map((n) => `assets/cases/csoebenezer/${n}.webp`),
      },
      {
        id: 'upaondigital',
        nome: '@upaondigital',
        logo: '',
        texto: [
          'Nesta página, foi feita a identidade visual do zero, tendo o design como único foco do contrato, já que a marca ainda não tinha posicionamento no digital.',
          'Também foram idealizados todos os posts: carrosséis, estáticos e reels.',
        ],
        celular: { video: '', imagem: 'assets/cases/upaondigital/tela.webp', legenda: '@upaondigital' },
        formato: 'grade',
        proporcao: 251 / 253,
        imagens: [1, 2, 3, 4, 5, 6].map((n) => `assets/cases/upaondigital/${n}.webp`),
      },
    ],
  },

  resultados: {
    titulo: 'Resultados',
    // Números reais de produção (ex.: vídeos entregues, projetos gravados). Não invente.
    itens: [
      { numero: '+200', texto: 'vídeos entregues.' },
      { numero: '+20', texto: 'projetos captados.' },
    ],
  },

  final: {
    titulo: 'O próximo case pode ser o seu!',
    texto: 'Me chama no WhatsApp e conta o que a sua marca precisa mostrar.',
    botaoWhatsapp: 'Chamar no WhatsApp',
    botaoInstagram: 'Ver o Instagram',
  },
};
