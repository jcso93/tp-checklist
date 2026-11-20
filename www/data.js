// Checklist de 100% — Twilight Princess (versão GameCube, usada no Dusklight)
// Textos escritos à mão; confira durante o jogo e corrija o que estiver errado.

// g(nome, [itens]) — cada item é "Nome" ou ["Nome", "dica"]
const g = (name, items) => ({ name, items: items.map(i => Array.isArray(i) ? { n: i[0], h: i[1] } : { n: i }) });
// n(prefixo, qtd) — gera itens numerados ("Alma 1", "Alma 2"…)
const nums = (label, qty) => Array.from({ length: qty }, (_, i) => `${label} ${i + 1}`);

const CATEGORIES = [
  {
    id: "heart-pieces", title: "Pieces of Heart", icon: "💗", total: 45,
    groups: [
      g("Ordon", [["Pastoreio de cabras", "Rancho de Ordon, minigame"]]),
      g("Faron Woods", [["Caverna das tochas", "Acender as tochas"], ["Coruja perto da loja do Coro", "Estátua da coruja"]]),
      g("Forest Temple", [["Baú do Deku Like"], ["Sala do Tile Worm"]]),
      g("Hyrule Field – Faron", [["Árvore perto da primeira ponte de pedra"]]),
      g("Kakariko Gorge", [["Coração sobre o pilar de pedra"], ["Lantern Cavern"], ["Baú na saliência"]]),
      g("Hyrule Field – Eldin", [["Baú no penhasco"], ["Caverna magnética"], ["Torre da estátua da coruja"], ["Trilho do Spinner"]]),
      g("Hyrule Field – Lanayru", [["Trilhos do Spinner"], ["Caverna dos blocos de gelo"]]),
      g("Kakariko Village", [["Tiro com arco do Talo"], ["Baú perto da nascente"], ["Coração na encosta"]]),
      g("Castle Town", [["Entrega de Hot Spring Water"], ["Caixa de doação do Charlo"]]),
      g("Death Mountain", [["Caverna na saliência"]]),
      g("Goron Mines", [["Baú no teto magnético"], ["Sala dos Beamos"]]),
      g("Lake Hylia", [["Baú na Lanayru Spring"], ["Caverna perto da Howling Stone"], ["Ilha do Falbi (Flight-By-Fowl)"], ["Jogo de frutas do Plumm"]]),
      g("Lakebed Temple", [["Lustre"], ["Sala da ponte"]]),
      g("Hena's Fishing Hole", [["Coração sobre a pedra grande"]]),
      g("Sacred Grove", [["Câmara subterrânea"]]),
      g("Entrada do Temple of Time", [["Estátua da coruja"]]),
      g("Gerudo Desert", [["Assar o Bullbo"]]),
      g("Arbiter's Grounds", [["Alvo do Clawshot"], ["Sala de trilhos em vários níveis"]]),
      g("Snowpeak Mountain", [["Corrida de trenó com Yeto e Yeta"]]),
      g("Snowpeak Ruins", [["Lustres balançando"], ["Piso rachado"]]),
      g("Temple of Time", [["Sala da barreira elétrica"], ["Duas estátuas sobre trilhos"]]),
      g("Hidden Village", [["Levar 20 gatos ao Cucco Leader"]]),
      g("City in the Sky", [["Sala circular leste"], ["Corrente de Peahats"]]),
      g("Palace of Twilight", [["Sala do Darkfall"], ["Plataformas de luz"]]),
    ],
  },
  {
    id: "heart-containers", title: "Heart Containers (chefes)", icon: "❤️", total: 8,
    groups: [g("Chefes", [
      ["Diababa", "Forest Temple"], ["Fyrus", "Goron Mines"], ["Morpheel", "Lakebed Temple"],
      ["Stallord", "Arbiter's Grounds"], ["Blizzeta", "Snowpeak Ruins"], ["Armogohma", "Temple of Time"],
      ["Argorok", "City in the Sky"], ["Zant", "Palace of Twilight"],
    ])],
  },
  {
    id: "poes", title: "Poe Souls", icon: "👻", total: 60,
    groups: [
      g("Castle Town – casa do Jovani", nums("Alma", 1)),
      g("Faron Woods", nums("Alma", 1)),
      g("Hyrule Field – Faron", nums("Alma", 1)),
      g("Kakariko Gorge", nums("Alma", 2)),
      g("Hyrule Field – Castle Town / Lanayru", nums("Alma", 7)),
      g("Kakariko Village", nums("Alma", 2)),
      g("Kakariko Graveyard", nums("Alma", 2)),
      g("Death Mountain", nums("Alma", 1)),
      g("Lake Hylia", nums("Alma", 8)),
      g("Upper Zora's River", nums("Alma", 1)),
      g("Zora's Domain", nums("Alma", 2)),
      g("Sacred Grove", nums("Alma", 3)),
      g("Gerudo Desert", nums("Alma", 8)),
      g("Arbiter's Grounds", nums("Alma", 4)),
      g("Snowpeak Mountain", nums("Alma", 5)),
      g("Snowpeak Ruins", nums("Alma", 3)),
      g("Temple of Time", nums("Alma", 3)),
      g("Hidden Village", nums("Alma", 1)),
      g("City in the Sky", nums("Alma", 2)),
      g("Cave of Ordeals", [["Andar 17"], ["Andar 33"], ["Andar 44"]]),
    ],
  },
  {
    id: "bugs", title: "Golden Bugs", icon: "🦋", total: 24,
    groups: ["Beetle", "Butterfly", "Stag Beetle", "Grasshopper", "Phasmid", "Pill Bug", "Mantis", "Ladybug", "Snail", "Dragonfly", "Ant", "Dayfly"]
      .map(b => g(b, [`${b} (macho)`, `${b} (fêmea)`])),
  },
  {
    id: "skills", title: "Hidden Skills", icon: "⚔️", total: 7,
    groups: [g("Habilidades", [
      ["Ending Blow", "Ensinada pelo Espírito do Herói (forma de lobo)"], ["Shield Attack"], ["Back Slice"],
      ["Helm Splitter"], ["Mortal Draw"], ["Jump Strike"], ["Great Spin"],
    ])],
  },
  {
    id: "dungeons", title: "Dungeons", icon: "🏰", total: 9,
    groups: [g("Templos e castelo", [
      ["Forest Temple"], ["Goron Mines"], ["Lakebed Temple"], ["Arbiter's Grounds"], ["Snowpeak Ruins"],
      ["Temple of Time"], ["City in the Sky"], ["Palace of Twilight"], ["Hyrule Castle"],
    ])],
  },
  {
    id: "tears", title: "Tears of Light", icon: "💧", total: 48,
    note: "No GameCube são 16 por província (no HD são 12). Confira a contagem no jogo.",
    groups: [
      g("Faron", nums("Tear", 16)),
      g("Eldin", nums("Tear", 16)),
      g("Lanayru", nums("Tear", 16)),
    ],
  },
  {
    id: "bottles", title: "Garrafas", icon: "🧪", total: 4,
    groups: [g("Garrafas", [
      ["Garrafa 1", "Sera's Sundries, Ordon Village"], ["Garrafa 2", "Casa do Coro, Faron Woods"],
      ["Garrafa 3", "Hena's Fishing Hole, Upper Zora's River"], ["Garrafa 4", "Casa do Jovani, Castle Town"],
    ])],
  },
  {
    id: "upgrades", title: "Upgrades", icon: "🎒", total: 13,
    groups: [
      g("Carteira", [["Big Wallet", "Agitha: primeiro Golden Bug"], ["Giant Wallet", "Agitha: todos os 24 Golden Bugs"]]),
      g("Aljava", [["Big Quiver", "Jogo STAR, 1ª vez"], ["Giant Quiver", "Jogo STAR com os Double Clawshots"]]),
      g("Bombas", [["Bomb Bag 1", "Barnes, Kakariko Village"], ["Bomb Bag 2", "Primeira viagem de barco da Iza"], ["Bomb Bag 3", "Goron em Zora's Domain"], ["Giant Bomb Bag", "Iza's Rapid Ride, 25+ pontos"]]),
      g("Equipamento", [["Ordon Sword", "Fuga do castelo"], ["Master Sword", "Sacred Grove"], ["Hylian Shield", "Malo Mart de Kakariko"], ["Zora Armor", "Túmulo do rei Zora"], ["Magic Armor", "Doações no Malo Mart"]]),
    ],
  },
  {
    id: "items", title: "Itens-chave", icon: "🗝️", total: 16,
    groups: [g("Itens", [
      ["Fishing Rod", "Ordon Village"], ["Slingshot", "Ordon Village"], ["Lantern", "Ordon Village"],
      ["Gale Boomerang", "Forest Temple"], ["Iron Boots", "Death Mountain"], ["Hero's Bow", "Goron Mines"],
      ["Hawkeye", "Lanayru Province"], ["Clawshot", "Lakebed Temple"], ["Shadow Crystal", "Sacred Grove"],
      ["Ghost Lantern", "Poe Souls + Malo Mart"], ["Coral Earring", "Snowpeak Mountain"], ["Spinner", "Arbiter's Grounds"],
      ["Ball and Chain", "Snowpeak Ruins"], ["Dominion Rod", "Temple of Time"], ["Ilia's Charm (Horse Call)", "Hidden Village"],
      ["Double Clawshots", "City in the Sky"],
    ])],
  },
  {
    id: "ordeals", title: "Cave of Ordeals e Fadas", icon: "🧚", total: 6,
    groups: [g("Cave of Ordeals", [
      ["Andar 10: Great Fairy da Ordon Spring"], ["Andar 20: Great Fairy da Faron Spring"],
      ["Andar 30: Great Fairy da Eldin Spring"], ["Andar 40: Great Fairy da Lanayru Spring"],
      ["Andar 50: Great Fairy's Tears (precisa de garrafa vazia)"], ["Completar os 50 andares (inclui Poes dos andares 17, 33 e 44)"],
    ])],
  },
  {
    id: "fishing", title: "Pesca", icon: "🎣", total: 8,
    groups: [g("Peixes e iscas", [
      ["Greengill", "Qualquer lago ou rio"], ["Hyrule Bass", "Hena's, Eldin Spring"], ["Ordon Catfish", "Hena's, riacho de Ordon"],
      ["Hylian Pike", "Hena's, rios e Lake Hylia"], ["Reekfish", "Zora's Domain, poça sob a cachoeira"],
      ["Hylian Loach", "Hena's, vitórias-régias ao norte"], ["Sinking Lure", "Pegar Bass, Pike e Catfish com a isca de vara"],
      ["Frog Lure", "Primeiros 8 níveis de Rollgoal"],
    ])],
  },
  {
    id: "minigames", title: "Minigames e doações", icon: "🎯", total: 13,
    groups: [g("Minigames", [
      ["STAR: Big Quiver", "Castle Town"], ["STAR: Giant Quiver", "Com Double Clawshots, menos de 1:30"],
      ["Rollgoal: primeiros 8", "Hena's, rende a Frog Lure"], ["Rollgoal: todos os 64", "Rende carteira cheia"],
      ["Iza's Rapid Ride", "25 pontos, Giant Bomb Bag"], ["Pastoreio de cabras", "Ordon Ranch, Piece of Heart"],
      ["Fruit Pop Flight", "Lake Hylia, Piece of Heart"], ["Flight-By-Fowl", "Cabana do Falbi, Piece of Heart"],
      ["Doação do Charlo", "1.000 rupees no total, Piece of Heart"], ["Corrida de snowboard", "Snowpeak, Piece of Heart"],
      ["Caça aos gatos", "Hidden Village, 20 gatos"], ["Doações no Malo Mart", "Magic Armor"],
    ])],
  },
];

// Atribui IDs estáveis a cada item (usados para salvar o progresso).
CATEGORIES.forEach(c => {
  let count = 0;
  c.groups.forEach((gr, gi) => gr.items.forEach((it, ii) => { it.id = `${c.id}:${gi}:${ii}`; count++; }));
  c.total = count;
});
