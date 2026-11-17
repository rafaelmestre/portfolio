(() => {
  const S = window.SITE;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (v = "") => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const semMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const temMouse = matchMedia("(pointer: fine)").matches;

  /* ---------- ícones ---------- */
  const ICON = {
    github: '<path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/>',
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"/>',
    instagram: '<path fill-rule="evenodd" d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.3-3.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>',
    whatsapp: '<path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1l-.9 1.2c-.2.2-.3.2-.6.1a8.2 8.2 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7c0 1.6 1.2 3.1 1.3 3.3.2.2 2.3 3.5 5.5 4.9 2 .9 2.8.9 3.8.8.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3zM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zM12 .2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6A11.8 11.8 0 1 0 12 .2z"/>',
    mail: '<path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5zm2 .9v.3l8 5.3 8-5.3v-.3zm16 2.7-7.4 4.9a1 1 0 0 1-1.2 0L4 9.1V18h16z"/>',
    // ícones de traço (sobre)
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>'
  };
  const svg = (k, cls = "") => `<svg viewBox="0 0 24 24" class="${cls}" aria-hidden="true">${ICON[k] || ""}</svg>`;
  const whatsUrl = `https://wa.me/${S.contato.whatsapp}?text=${encodeURIComponent(S.contato.mensagemWhats)}`;

  /* ---------- hero ---------- */
  const P = S.perfil;
  $("#heroNome").textContent = P.nome;
  $("#heroChamada").textContent = P.chamada;
  $("#ctaWhats").href = whatsUrl;
  $("#heroImg").src = P.foto;
  $("#aboutImg").src = P.foto;
  if (!P.fotoRecortada) $("#heroPhoto").classList.add("framed");

  const redesHTML = S.redes.filter((r) => r.url)
    .map((r) => `<a href="${esc(r.url)}" target="_blank" rel="noopener" aria-label="${esc(r.nome)}">${svg(r.icone)}</a>`).join("");
  $("#heroSocial").innerHTML = redesHTML;
  $("#footerSocial").innerHTML = redesHTML;

  // código decorativo à esquerda
  $("#heroCode").innerHTML =
`<span class="k">const</span> dev = {
  nome: <span class="s">'Rafael Mestre'</span>,
  local: <span class="s">'São Paulo'</span>,
  faz: [<span class="s">'sites'</span>, <span class="s">'apps'</span>,
        <span class="s">'sistemas'</span>],
  preco: <span class="s">'justo'</span>,
};

<span class="k">function</span> criar(ideia) {
  <span class="k">return</span> ideia
    .planejar()
    .construir()
    .publicar();
}`;

  // texto que digita e apaga
  const typed = $("#typed");
  if (semMovimento) {
    typed.textContent = P.rotativo[0];
  } else {
    let i = 0, j = 0, apagando = false;
    (function loop() {
      const palavra = P.rotativo[i];
      j += apagando ? -1 : 1;
      typed.textContent = palavra.slice(0, j);
      let espera = apagando ? 45 : 85;
      if (!apagando && j === palavra.length) { apagando = true; espera = 1600; }
      else if (apagando && j === 0) { apagando = false; i = (i + 1) % P.rotativo.length; espera = 350; }
      setTimeout(loop, espera);
    })();
  }

  /* ---------- faixa ---------- */
  const faixa = S.faixa.map((t) => `<span>${esc(t)}</span>`).join("");
  $("#marquee").innerHTML = faixa + faixa; // duplicado para o loop contínuo

  /* ---------- serviços (acordeão) ---------- */
  $("#services").innerHTML = S.servicos.map((s, i) => `
    <article class="service reveal ${i === 0 ? "open" : ""}" style="--d:${i * 70}ms">
      <button class="service-head" type="button" aria-expanded="${i === 0}" aria-controls="sv-${i}">
        <span class="service-num">${String(i + 1).padStart(2, "0")}.</span>
        <span class="service-title">${esc(s.titulo)}</span>
        <span class="service-arrow" aria-hidden="true">↗</span>
      </button>
      <div class="service-body" id="sv-${i}" role="region">
        <div>
          <div class="service-tags">${s.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
          <p>${esc(s.texto)}</p>
        </div>
      </div>
    </article>`).join("");

  $("#services").addEventListener("click", (e) => {
    const head = e.target.closest(".service-head");
    if (!head) return;
    const item = head.parentElement;
    const abrir = !item.classList.contains("open");
    $$(".service", $("#services")).forEach((el) => {
      el.classList.remove("open");
      $(".service-head", el).setAttribute("aria-expanded", "false");
    });
    if (abrir) { item.classList.add("open"); head.setAttribute("aria-expanded", "true"); }
  });

  /* ---------- projetos ---------- */
  const iniciais = (n) => n.split(/\s+/).filter((w) => /^[A-Za-zÀ-ú]/.test(w)).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const media = (p) => `
    <div class="project-media" data-nome="${esc(p.nome)}">
      <img src="${esc(p.imagem)}" alt="Capa do projeto ${esc(p.nome)}" loading="lazy" />
    </div>`;

  $("#featured").innerHTML = S.projetos.map((p) => `
    <article class="project spot reveal">
      ${media(p)}
      <div class="project-body">
        <span class="project-type">${esc(p.tipo)}</span>
        <h3>${esc(p.nome)}</h3>
        <p>${esc(p.descricao)}</p>
        <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        <div class="project-actions">
          ${p.demo ? `<a class="btn btn-accent sm magnetic" href="${esc(p.demo)}" target="_blank" rel="noopener">Ver online <span class="btn-ico" aria-hidden="true">↗</span></a>` : ""}
          ${p.codigo ? `<a class="btn btn-ghost sm magnetic" href="${esc(p.codigo)}" target="_blank" rel="noopener">${svg("github", "gh")} Código</a>` : ""}
        </div>
      </div>
    </article>`).join("");

  $("#academic").innerHTML = S.academicos.map((p, i) => `
    <article class="mini reveal" style="--d:${i * 90}ms">
      ${media(p)}
      <div class="mini-body">
        <span class="project-type">${esc(p.tipo)}</span>
        <h4>${esc(p.nome)}</h4>
        <p>${esc(p.descricao)}</p>
        <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        ${(p.demo || p.codigo) ? `<div class="mini-links">
          ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">Ver online ↗</a>` : ""}
          ${p.codigo ? `<a href="${esc(p.codigo)}" target="_blank" rel="noopener">Código ↗</a>` : ""}
        </div>` : ""}
      </div>
    </article>`).join("");

  // imagem que ainda não existe na pasta → capa com iniciais
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (img.tagName !== "IMG" || !img.parentElement.classList.contains("project-media")) return;
    const box = img.parentElement;
    box.classList.add("gen");
    box.innerHTML = `<span class="ini" aria-hidden="true">${esc(iniciais(box.dataset.nome))}</span>`;
  }, true);

  /* ---------- sobre ---------- */
  $("#sobreTitulo").innerHTML = esc(S.sobre.titulo).replace("visão de negócio", '<span class="accent-text">visão de negócio</span>');
  $("#sobreTexto").innerHTML = S.sobre.texto.map((t) => `<p>${esc(t)}</p>`).join("");
  $("#infoGrid").innerHTML = S.sobre.infos.map((x, i) => `
    <div class="info reveal" style="--d:${i * 70}ms">
      <span class="info-ico">${svg(x.icone)}</span>
      <div><small>${esc(x.rotulo)}</small><strong>${esc(x.valor)}</strong></div>
    </div>`).join("");

  $("#stack").innerHTML = S.stack.map((t, i) => `<span class="reveal" style="--d:${i * 40}ms">${esc(t)}</span>`).join("");

  $("#steps").innerHTML = S.processo.map((p, i) => `
    <li class="step reveal" style="--d:${i * 90}ms">
      <h3>${esc(p.titulo)}</h3>
      <p>${esc(p.texto)}</p>
    </li>`).join("");

  /* ---------- contato ---------- */
  const fone = S.contato.whatsapp.replace(/^55(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  $("#contactLinks").innerHTML = `
    <a class="contact-link reveal" href="${whatsUrl}" target="_blank" rel="noopener">
      <span class="info-ico">${svg("whatsapp")}</span>
      <div><small>WhatsApp</small><strong>${esc(fone)}</strong></div><span class="go">↗</span>
    </a>
    <button class="contact-link reveal" type="button" id="copyEmail">
      <span class="info-ico">${svg("mail")}</span>
      <div><small>E-mail · clique para copiar</small><strong>${esc(S.contato.email)}</strong></div><span class="go">⧉</span>
    </button>`;

  const toast = (msg) => {
    const t = $("#toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2600);
  };
  $("#copyEmail").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(S.contato.email); toast("E-mail copiado ✓"); }
    catch { location.href = "mailto:" + S.contato.email; }
  });

  // envio do formulário sem sair da página (Netlify Forms)
  $("#form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const btn = $("button[type=submit]", form);
    btn.disabled = true;
    try {
      const r = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (!r.ok) throw new Error();
      form.reset();
      toast("Mensagem enviada! Já te respondo 🙌");
    } catch {
      toast("Não foi possível enviar. Me chama no WhatsApp!");
    } finally { btn.disabled = false; }
  });

  $("#ano").textContent = new Date().getFullYear();

  /* ---------- menu ---------- */
  const menuBtn = $("#menuBtn"), links = $("#navLinks");
  menuBtn.addEventListener("click", () => {
    const aberto = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", aberto);
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  // nav muda ao rolar + link ativo da seção atual
  const nav = $(".nav");
  const secoes = $$("main section[id]");
  const aoRolar = () => {
    nav.classList.toggle("scrolled", scrollY > 30);
    let atual = "";
    secoes.forEach((s) => { if (s.getBoundingClientRect().top < innerHeight * 0.4) atual = s.id; });
    $$("a", links).forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + atual));
  };
  addEventListener("scroll", aoRolar, { passive: true });
  aoRolar();

  /* ---------- EFEITOS ---------- */
  // 1. elementos surgem ao rolar
  const io = !semMovimento && "IntersectionObserver" in window
    ? new IntersectionObserver((ents) => ents.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      }), { threshold: 0.12, rootMargin: "0px 0px -50px 0px" })
    : null;
  $$(".reveal, .reveal-up").forEach((el, i) => {
    if (el.classList.contains("reveal-up")) el.style.setProperty("--d", `${i * 90}ms`);
    io ? io.observe(el) : el.classList.add("in");
  });

  if (temMouse && !semMovimento) {
    document.documentElement.classList.add("has-pointer");

    // 2. brilho laranja que segue o cursor (suavizado)
    const glow = $(".cursor-glow");
    let gx = innerWidth / 2, gy = innerHeight / 2, tx = gx, ty = gy;
    addEventListener("pointermove", (e) => { tx = e.clientX; ty = e.clientY; });
    (function anima() {
      gx += (tx - gx) * 0.12; gy += (ty - gy) * 0.12;
      glow.style.transform = `translate(${gx}px, ${gy}px)`;
      requestAnimationFrame(anima);
    })();

    // 3. botões magnéticos
    document.addEventListener("pointermove", (e) => {
      $$(".magnetic").forEach((b) => {
        const r = b.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        const perto = Math.hypot(dx, dy) < Math.max(r.width, r.height) * 0.9;
        b.style.setProperty("--mx", perto ? `${dx * 0.18}px` : "0px");
        b.style.setProperty("--my", perto ? `${dy * 0.25}px` : "0px");
      });
    });

    // 4. luz nos cards de projeto + leve inclinação 3D
    $$(".project").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        card.style.setProperty("--sx", `${x}px`);
        card.style.setProperty("--sy", `${y}px`);
        const rx = ((y / r.height) - 0.5) * -3, ry = ((x / r.width) - 0.5) * 3;
        card.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      card.addEventListener("pointerleave", () => { card.style.transform = ""; });
    });

    // 5. foto do hero acompanha o mouse (paralaxe)
    const visual = $(".hero-visual");
    addEventListener("pointermove", (e) => {
      const dx = (e.clientX / innerWidth - 0.5), dy = (e.clientY / innerHeight - 0.5);
      visual.style.translate = `${dx * -14}px ${dy * -10}px`;
    });
  }
})();