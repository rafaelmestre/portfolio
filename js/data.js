/* =========================================================
   DADOS DO PORTFÓLIO — edite só este arquivo para atualizar
   - Link com url vazia ("") não aparece na página.
   - Projeto com demo/codigo vazio esconde o respectivo botão.
   ========================================================= */
window.PORTFOLIO = {
  perfil: {
    nome: "Rafael Mestre",
    titulo: "Compras & Suprimentos · Desenvolvedor em formação",
    resumo:
      "Responsável por compras e procurement no setor de equipamentos laboratoriais e hospitalares. " +
      "Formando em Análise e Desenvolvimento de Sistemas (PUC Minas, dez/2026), uno a visão de negócio " +
      "com tecnologia para criar ferramentas que resolvem problemas reais.",
    local: "São Paulo, SP",
    foto: "assets/img/avatar.webp",
    curriculo: "" // ex.: "assets/curriculo-rafael.pdf"
  },

  contato: {
    email: "rafaelmestredosanjos@gmail.com",  // mostra o botão "copiar e-mail"
    whatsapp: "5511991253773"                 // só números com DDI+DDD
  },

  links: [
    { nome: "LinkedIn",  url: "https://www.linkedin.com/in/rafaelmanjos/", icone: "linkedin" },
    { nome: "GitHub",    url: "https://github.com/rafaelmestre",           icone: "github" },
    { nome: "Instagram", url: "https://www.instagram.com/mestre.rf/",      icone: "instagram" }
  ],

  projetos: [
    // selo: etiqueta rosa no canto da capa (ex.: "Destaque", "Em desenvolvimento")
    // imagem: se o arquivo não existir, o card mostra uma capa gerada automaticamente
    {
      nome: "Judge App",
      descricao: "O juiz de bolso da pelada: sorteio de coletes, fila automática, cronômetro, placar e histórico na nuvem. PWA instalável que funciona até sem sinal na quadra.",
      tags: ["PWA", "JavaScript", "Supabase"],
      imagem: "assets/img/judge.webp",
      demo: "https://appjudge.netlify.app/",
      codigo: "https://github.com/rafaelmestre/judge.app",
      selo: "Destaque"
    },
    {
      nome: "App de Gestão para Estética e Mecânica Automotiva (TCC)",
      descricao: "Agendamento, calculadora de diluição de químicos, financeiro, estoque e notificações para um cliente real de estética e mecânica automotiva.",
      tags: ["React", "Firebase"],
      imagem: "assets/img/estetica.webp",
      demo: "",
      codigo: "https://github.com/rafaelmestre/Prototipo_App_Est-tica",
      selo: "TCC"
    },
    {
      nome: "AutoGo",
      descricao: "Sistema de locação de veículos em equipe (PUC Minas). Atuei no Dashboard, nas telas de reserva do app mobile e em validações do backend.",
      tags: ["React", "TypeScript", ".NET", "React Native"],
      imagem: "assets/img/autogo.webp",
      demo: "",
      codigo: "",
      selo: ""
    },
    {
      nome: "CuidaPet",
      descricao: "Portal que reúne unidades de atendimento veterinário público e guias de cuidados para cães, gatos e pets não convencionais. Projeto em equipe.",
      tags: ["HTML/CSS", "JavaScript"],
      imagem: "assets/img/cuidapet.webp",
      demo: "https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-2-e1-proj-web-t3-cuidapet/",
      codigo: "https://github.com/rafaelmestre/projetoweb-frontend-cuidapet",
      selo: ""   // a própria capa já indica
    },
    {
      nome: "Controle de Compras",
      descricao: "Web app de acompanhamento de pedidos e orçamento de compras, com sincronização em nuvem e exportação para Excel.",
      tags: ["JavaScript", "Firebase", "Excel"],
      imagem: "assets/img/compras.webp",
      demo: "",
      codigo: "https://github.com/rafaelmestre/controle-compras",
      selo: ""   // a própria capa já indica
    }
  ],

  habilidades: {
    "Front-end": ["HTML", "CSS", "JavaScript", "React", "TypeScript", "PWA"],
    "Back-end & dados": ["Firebase", "Supabase", ".NET", "Python"],
    "Ferramentas": ["Git", "GitHub", "Netlify", "VS Code", "Excel avançado"],
    "Negócio": ["Compras & Procurement", "SAP ERP (MM)", "Negociação", "Gestão de fornecedores"]
  }
};