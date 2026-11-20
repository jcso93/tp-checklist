const KEY = "tp-checklist-v1";
let state = {};
try { state = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { state = {}; }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

const $ = s => document.querySelector(s);
const view = $("#view"), title = $("#title"), backBtn = $("#back");
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const doneIn = c => c.groups.reduce((n, gr) => n + gr.items.filter(i => state[i.id]).length, 0);
const pct = (d, t) => (t ? Math.round((d / t) * 100) : 0);

function home() {
  title.textContent = "Twilight Princess";
  backBtn.hidden = true;
  const td = CATEGORIES.reduce((n, c) => n + doneIn(c), 0);
  const tt = CATEGORIES.reduce((n, c) => n + c.total, 0);
  view.innerHTML = `
    <section class="total">
      <div class="pct">${pct(td, tt)}%</div>
      <small>${td} de ${tt} itens · versão GameCube</small>
      <div class="bar"><i style="width:${pct(td, tt)}%"></i></div>
    </section>
    <section class="grid">
      ${CATEGORIES.map(c => {
        const d = doneIn(c);
        return `<a class="card ${d === c.total ? "complete" : ""}" href="#/c/${c.id}">
          <div class="ico">${c.icon}</div>
          <div class="name">${esc(c.title)}</div>
          <div class="count">${d}/${c.total}</div>
          <div class="bar"><i style="width:${pct(d, c.total)}%"></i></div>
        </a>`;
      }).join("")}
    </section>`;
}

function category(id) {
  const c = CATEGORIES.find(x => x.id === id);
  if (!c) return location.replace("#/");
  title.textContent = c.title;
  backBtn.hidden = false;
  let filter = "all", q = "";
  view.innerHTML = `
    <div class="tools">
      <input id="q" type="search" placeholder="Buscar…">
      <select id="f"><option value="all">Todos</option><option value="todo">Pendentes</option><option value="done">Feitos</option></select>
    </div>
    ${c.note ? `<p class="note">${esc(c.note)}</p>` : ""}
    <div id="list"></div>
    <button class="danger" id="reset">Zerar esta categoria</button>`;
  const list = $("#list");

  function draw() {
    const d = doneIn(c);
    title.textContent = `${c.title} · ${d}/${c.total}`;
    const html = c.groups.map(gr => {
      const items = gr.items.filter(i => {
        if (filter === "todo" && state[i.id]) return false;
        if (filter === "done" && !state[i.id]) return false;
        return !q || (i.n + " " + (i.h || "") + " " + gr.name).toLowerCase().includes(q);
      });
      if (!items.length) return "";
      const gd = gr.items.filter(i => state[i.id]).length;
      return `<div class="group"><h2>${esc(gr.name)}<span>${gd}/${gr.items.length}</span></h2>
        ${items.map(i => `<button class="item ${state[i.id] ? "done" : ""}" data-id="${i.id}">
          <span class="box">✓</span>
          <span class="txt"><b>${esc(i.n)}</b>${i.h ? `<small>${esc(i.h)}</small>` : ""}</span></button>`).join("")}</div>`;
    }).join("");
    list.innerHTML = html || `<p class="empty">Nada por aqui.</p>`;
  }

  list.addEventListener("click", e => {
    const b = e.target.closest(".item");
    if (!b) return;
    const k = b.dataset.id;
    if (state[k]) delete state[k]; else state[k] = 1;
    save();
    const scroll = window.scrollY;
    draw();
    window.scrollTo(0, scroll);
  });
  $("#q").addEventListener("input", e => { q = e.target.value.trim().toLowerCase(); draw(); });
  $("#f").addEventListener("change", e => { filter = e.target.value; draw(); });
  $("#reset").addEventListener("click", () => {
    if (!confirm(`Zerar tudo em "${c.title}"?`)) return;
    c.groups.forEach(gr => gr.items.forEach(i => delete state[i.id]));
    save(); draw();
  });
  draw();
}

function route() {
  const m = location.hash.match(/^#\/c\/(.+)$/);
  window.scrollTo(0, 0);
  m ? category(m[1]) : home();
}

backBtn.addEventListener("click", () => history.length > 1 ? history.back() : (location.hash = "#/"));
$("#menu").addEventListener("click", () => {
  if (confirm("Zerar TODO o progresso?")) { state = {}; save(); route(); }
});
window.addEventListener("hashchange", route);
route();
