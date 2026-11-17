/* =========================================================
   DADOS DO SITE — edite só este arquivo para atualizar textos,
   serviços e projetos. Campo vazio ("") esconde o item/botão.
   ========================================================= */
window.SITE = {
  marca: "Rafael Studio",
  dominio: "https://rafaelmestre.com.br",

  perfil: {
    nome: "Rafael Mestre",
    cargo: "Desenvolvedor Web",
    // palavras que se alternam no título do hero
    rotativo: ["sites", "sistemas web", "apps PWA", "landing pages"],
    chamada: "Crio sites e sistemas sob medida para pequenos negócios: rápidos, bonitos no celular e com preço justo.",
    local: "São Paulo, SP",
    foto: "assets/img/avatar.webp",   // troque pela foto recortada (PNG/WebP sem fundo)
    fotoRecortada: false              // true quando a foto não tiver fundo
  },

  contato: {
    whatsapp: "5511991253773",
    mensagemWhats: "Olá, Rafael! Vim pelo seu site e quero um orçamento.",
    email: "rafaelmestredosanjos@gmail.com"
  },

  redes: [
    { nome: "GitHub",    url: "https://github.com/rafaelmestre",           icone: "github" },
    { nome: "LinkedIn",  url: "https://www.linkedin.com/in/rafaelmanjos/", icone: "linkedin" },
    { nome: "Instagram", url: "https://www.instagram.com/mestre.rf/",      icone: "instagram" }
  ],

  // faixa que corre abaixo do hero
  faixa: ["Sites institucionais", "Landing pages", "Apps PWA", "Sistemas web", "Agendamento online", "Painéis de gestão"],

  servicos: [
    {
      titulo: "Sites institucionais",
      tags: ["Responsivo", "SEO", "Domínio próprio"],
      texto: "A presença online do seu negócio: quem você é, o que oferece e como falar com você — rápido, bonito no celular e fácil de achar no Google."
    },
    {
      titulo: "Landing pages",
      tags: ["Campanhas", "Captação", "WhatsApp"],
      texto: "Uma página focada em uma única ação: pedir orçamento, agendar ou comprar. Ideal para anúncios e lançamentos."
    },
    {
      titulo: "Sistemas web & apps PWA",
      tags: ["PWA", "Banco de dados", "Login"],
      texto: "Ferramentas sob medida que substituem planilhas e grupos de WhatsApp. Instalam no celular como app, sem precisar de loja."
    },
    {
      titulo: "Agendamento online",
      tags: ["Barbearias", "Estética", "Serviços"],
      texto: "Seu cliente escolhe o horário sozinho e recebe lembrete. Você para de perder tempo (e clientes) na troca de mensagens."
    },
    {
      titulo: "Manutenção & hospedagem",
      tags: ["Atualizações", "Suporte", "Netlify"],
      texto: "Cuido do site depois de pronto: ajustes de conteúdo, melhorias, domínio e hospedagem, sem dor de cabeça para você."
    }
  ],

  sobre: {
    titulo: "Tecnologia com visão de negócio",
    texto: [
      "Sou formando em Análise e Desenvolvimento de Sistemas pela PUC Minas e trabalho há anos com compras e suprimentos. Essa experiência me ensinou a olhar primeiro para o problema do negócio — custo, prazo e rotina — e só depois para a tecnologia.",
      "Meu propósito é levar sites, apps e sistemas de qualidade para microempreendedores e lojistas, a um preço justo."
    ],
    infos: [
      { rotulo: "Local", valor: "São Paulo, SP", icone: "pin" },
      { rotulo: "Formação", valor: "ADS · PUC Minas", icone: "cap" },
      { rotulo: "Atendimento", valor: "Remoto · todo o Brasil", icone: "globe" },
      { rotulo: "Disponibilidade", valor: "Aberto a projetos", icone: "spark" }
    ]
  },

  stack: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vite", "Supabase", "Firebase", "Git", "Netlify"],

  processo: [
    { titulo: "Conversa", texto: "Entendo o seu negócio, o objetivo e o que precisa estar no projeto." },
    { titulo: "Proposta", texto: "Você recebe escopo, prazo e valor fechados, sem surpresa no fim." },
    { titulo: "Desenvolvimento", texto: "Construo e mostro prévias durante o caminho para você acompanhar." },
    { titulo: "Entrega & suporte", texto: "Publico no seu domínio e sigo por perto para ajustes." }
  ],

  // projetos em destaque (cards grandes)
  projetos: [
    {
      nome: "Circlle",
      tipo: "Produto próprio · PWA",
      descricao: "A escala da banda sem planilha e sem foto perdida no WhatsApp: convite por link, escala com prévia e confirmação, repertório com tom e notificações no celular.",
      tags: ["Vite", "Supabase", "PWA"],
      imagem: "assets/img/circlle.webp",
      demo: "https://circlle.netlify.app/",
      codigo: "https://github.com/rafaelmestre/Circlle"
    },
    {
      nome: "Judge App",
      tipo: "Produto próprio · PWA",
      descricao: "O juiz de bolso da pelada: sorteio de coletes, fila automática, cronômetro, placar e histórico na nuvem. Funciona até sem sinal na quadra.",
      tags: ["JavaScript", "Supabase", "PWA"],
      imagem: "assets/img/judge.webp",
      demo: "https://appjudge.netlify.app/",
      codigo: "https://github.com/rafaelmestre/judge.app"
    }
  ],

  // projetos acadêmicos (área secundária)
  academicos: [
    {
      nome: "App de Gestão Automotiva",
      tipo: "TCC · ADS",
      descricao: "Agendamento, financeiro, estoque e calculadora de diluição para estética e mecânica automotiva.",
      tags: ["React", "Firebase"],
      imagem: "assets/img/estetica.webp",
      demo: "",
      codigo: "https://github.com/rafaelmestre/Prototipo_App_Est-tica"
    },
    {
      nome: "AutoGo",
      tipo: "Projeto em equipe · ADS",
      descricao: "Locação de veículos com web e mobile. Atuei no dashboard, nas telas de reserva e em validações do backend.",
      tags: ["React", "TypeScript", ".NET"],
      imagem: "assets/img/autogo.webp",
      demo: "",
      codigo: ""
    },
    {
      nome: "CuidaPet",
      tipo: "1º projeto · ADS",
      descricao: "Portal de atendimento veterinário público e guias de cuidados para pets.",
      tags: ["HTML/CSS", "JavaScript"],
      imagem: "assets/img/cuidapet.webp",
      demo: "https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-2-e1-proj-web-t3-cuidapet/",
      codigo: "https://github.com/rafaelmestre/projetoweb-frontend-cuidapet"
    }
  ]
};