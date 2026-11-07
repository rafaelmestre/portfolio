(() => {
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);

  /* ---------- Ícones (SVG inline, sem dependências) ---------- */
  const ICON = {
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"/>',
    github: '<path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/>',
    instagram: '<path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 4.6a5.2 5.2 0 1 0 0 10.4 5.2 5.2 0 0 0 0-10.4zm0 8.6a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8zm5.4-9.9a1.2 1.2 0 1 0 0 2.5 1.2 1.2 0 0 0 0-2.5z"/>',
    whatsapp: '<path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1l-.9 1.2c-.2.2-.3.2-.6.1a8.2 8.2 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7c0 1.6 1.2 3.1 1.3 3.3.2.2 2.3 3.5 5.5 4.9 2 .9 2.8.9 3.8.8.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3zM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zM12 .2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6A11.8 11.8 0 1 0 12 .2z"/>',
    mail: '<path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5zm2 .9v.3l8 5.3 8-5.3v-.3zm16 2.7-7.4 4.9a1 1 0 0 1-1.2 0L4 9.1V18h16z"/>',
    file: '<path d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V9h5.5zM8 13h8v1.6H8zm0 3.5h8v1.6H8z"/>',
    ext: '<path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14zM5 5h6v2H7v10h10v-4h2v6H5z"/>',
    code: '<path d="m8.7 16.6-4.6-4.6 4.6-4.6L7.3 6 1.3 12l6 6zm6.6 0 4.6-4.6-4.6-4.6L16.7 6l6 6-6 6z"/>'
  };
  const svg = (k) => `<svg viewBox="0 0 24 24" fill-rule="evenodd" aria-hidden="true">${ICON[k] || ICON.ext}</svg>`;
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Efeito: aparecer ao rolar ---------- */
  const semMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const io = "IntersectionObserver" in window && !semMovimento
    ? new IntersectionObserver((entradas) => {
        entradas.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;
  function observarReveal() {
    document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => (io ? io.observe(el) : el.classList.add("is-in")));
  }

  /* ---------- Perfil ---------- */
  const p = D.perfil;
  $("#foto").src = p.foto;
  $("#nome").textContent = p.nome;
  $("#titulo").textContent = p.titulo;
  $("#resumo").textContent = p.resumo;
  $("#local").textContent = "📍 " + p.local;
  $("#ano").textContent = new Date().getFullYear();

  // Botões do hero
  const linksAtivos = D.links.filter((l) => l.url);
  const cta = [];
  linksAtivos
    .filter((l) => ["linkedin", "github"].includes(l.icone))
    .forEach((l, i) =>
      cta.push(`<a class="btn ${i === 0 ? "primary" : ""}" href="${esc(l.url)}" target="_blank" rel="noopener" data-track="hero-${esc(l.icone)}">${svg(l.icone)}${esc(l.nome)}</a>`)
    );
  if (p.curriculo) cta.push(`<a class="btn" href="${esc(p.curriculo)}" download data-track="curriculo">${svg("file")}Currículo</a>`);
  $("#cta").innerHTML = cta.join("");

  /* ---------- Projetos + filtro ---------- */
  const projetos = D.projetos; // a ordem do data.js é a ordem na página
  const tags = [...new Set(projetos.flatMap((pr) => pr.tags))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  let filtro = "Todos";

  const iniciais = (nome) => nome.split(/\s+/).filter((w) => /^[A-Za-zÀ-ú]/.test(w)).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  const capaGerada = (nome) => `<span class="ini" aria-hidden="true">${esc(iniciais(nome))}</span>`;
  const card = (pr, i) => `
    <article class="card reveal" style="--d:${(i % 3) * 90}ms">
      <div class="cover ${pr.imagem ? "" : "gen"}" data-nome="${esc(pr.nome)}">
        ${pr.imagem ? `<img src="${esc(pr.imagem)}" alt="Capa do projeto ${esc(pr.nome)}" loading="lazy" />` : capaGerada(pr.nome)}
        ${pr.selo ? `<span class="badge">${esc(pr.selo)}</span>` : ""}
      </div>
      <div class="card-body">
        <h3>${esc(pr.nome)}</h3>
        <p>${esc(pr.descricao)}</p>
        <ul class="tags">${pr.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        ${(pr.demo || pr.codigo) ? `<div class="card-actions">
          ${pr.demo ? `<a class="btn primary" href="${esc(pr.demo)}" target="_blank" rel="noopener" data-track="demo-${esc(pr.nome)}">${svg("ext")}Ver online</a>` : ""}
          ${pr.codigo ? `<a class="btn" href="${esc(pr.codigo)}" target="_blank" rel="noopener" data-track="codigo-${esc(pr.nome)}">${svg("code")}Código</a>` : ""}
        </div>` : ""}
      </div>
    </article>`;

  function renderProjetos() {
    const lista = filtro === "Todos" ? projetos : projetos.filter((pr) => pr.tags.includes(filtro));
    $("#gridProjetos").innerHTML = lista.length ? lista.map(card).join("") : '<p class="empty">Nenhum projeto com essa tecnologia.</p>';
    observarReveal();
  }
  // Imagem ainda não colocada na pasta? Troca pela capa gerada.
  $("#gridProjetos").addEventListener("error", (e) => {
    if (e.target.tagName !== "IMG") return;
    const cover = e.target.parentElement;
    cover.classList.add("gen");
    e.target.outerHTML = capaGerada(cover.dataset.nome);
  }, true);
  function renderFiltros() {
    $("#filtros").innerHTML = ["Todos", ...tags]
      .map((t) => `<button type="button" class="chip" aria-pressed="${t === filtro}" data-tag="${esc(t)}">${esc(t)}</button>`)
      .join("");
  }
  $("#filtros").addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    filtro = b.dataset.tag;
    renderFiltros();
    renderProjetos();
  });
  renderFiltros();
  renderProjetos();

  /* ---------- Habilidades ---------- */
  $("#skills").innerHTML = Object.entries(D.habilidades)
    .map(([grupo, itens], i) => `<div class="skill-group reveal" style="--d:${i * 80}ms"><h3>${esc(grupo)}</h3><ul>${itens.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`)
    .join("");

  /* ---------- Contato ---------- */
  const contato = [];
  if (D.contato.whatsapp) {
    contato.push(`<a class="btn" href="https://wa.me/${esc(D.contato.whatsapp.replace(/\D/g, ""))}" target="_blank" rel="noopener" data-track="whatsapp">${svg("whatsapp")}WhatsApp<span class="arrow">↗</span></a>`);
  }
  linksAtivos.forEach((l) =>
    contato.push(`<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener" data-track="contato-${esc(l.icone)}">${svg(l.icone)}${esc(l.nome)}<span class="arrow">↗</span></a>`)
  );
  if (D.contato.email) {
    contato.push(`<button class="btn" type="button" id="copyEmail" data-track="email">${svg("mail")}Copiar e-mail<span class="arrow">⧉</span></button>`);
  }
  $("#links").innerHTML = contato.join("");

  const toast = (msg) => {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("show"), 2200);
  };
  $("#copyEmail")?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(D.contato.email);
      toast("E-mail copiado ✓");
    } catch {
      location.href = "mailto:" + D.contato.email;
    }
  });

  observarReveal();

  /* ---------- Efeito: luz que segue o mouse nos cards (só desktop) ---------- */
  if (matchMedia("(pointer: fine)").matches && !semMovimento) {
    document.addEventListener("pointermove", (e) => {
      const c = e.target.closest(".card, .skill-group, .contact-card");
      if (!c) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", `${e.clientX - r.left}px`);
      c.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  }

  /* ---------- Tema ---------- */
  $("#themeBtn").addEventListener("click", () => {
    const novo = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = novo;
    try { localStorage.setItem("tema", novo); } catch (e) {}
  });

  /* ---------- Métricas (ativa quando o GoatCounter for configurado) ---------- */
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-track]");
    if (el && window.goatcounter?.count) {
      window.goatcounter.count({ path: "click-" + el.dataset.track, title: el.dataset.track, event: true });
    }
  });
})();