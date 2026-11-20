// Checklist de 100% — Twilight Princess (versão GameCube, usada no Dusklight)
// Nomes de itens, lugares, chefes e habilidades ficam em inglês; as instruções ("d") ficam em português.
// Textos escritos à mão; confira durante o jogo e corrija o que estiver errado.

// g(nome, [[nome, instrução], ...])
const g = (name, items) => ({ name, items: items.map(i => Array.isArray(i) ? { n: i[0], d: i[1] } : { n: i }) });
const nums = (label, qty, d) => Array.from({ length: qty }, (_, i) => [`${label} ${i + 1}`, d]);

const CATEGORIES = [
  {
    id: "heart-pieces", title: "Pieces of Heart", icon: "💗",
    note: "Instruções em português; itens e lugares em inglês. \"Human\" e \"Wolf\" indicam em qual forma você precisa estar.",
    groups: [
      g("Ordon Village", [["Goat Herding", "Minigame no Ordon Ranch. Precisa de Epona, como Human."]]),
      g("Faron Woods", [
        ["Torch cave", "Caverna com tochas. Precisa da Lantern, como Human."],
        ["Owl Statue near Coro's shop", "Precisa da Dominion Rod com força total, além de Bombs ou Ball and Chain. Faça como Human e depois como Wolf."],
      ]),
      g("Forest Temple", [
        ["Chest behind Deku Like", "Use Bombs no Deku Like, como Human."],
        ["Tile Worm room", "Precisa da Gale Boomerang, como Human."],
      ]),
      g("Hyrule Field (Faron)", [["Tree by the first stone bridge", "Derrube o coração da árvore com a Gale Boomerang."]]),
      g("Kakariko Gorge", [
        ["Heart above the rock pillar", "Alcance com a Gale Boomerang."],
        ["Lantern Cavern", "Precisa de Bombs e Lantern, como Human."],
        ["Ledge chest under pillar vines", "Precisa dos Double Clawshots, como Human."],
      ]),
      g("Hyrule Field (Eldin)", [
        ["Cliff chest north of Kakariko", "Precisa do Hero's Bow com bomb arrows."],
        ["Magnetic cave north of Bridge of Eldin", "Precisa de Clawshot, Iron Boots e Bombs."],
        ["Owl Statue tower at Bridge of Eldin", "Precisa da Dominion Rod com força total e da Bridge of Eldin restaurada."],
        ["Spinner track north of Bridge of Eldin", "Precisa do Spinner. Faça como Human e depois como Wolf."],
      ]),
      g("Hyrule Field (Lanayru)", [
        ["Spinner rails north of Great Hylian Bridge", "Precisa do Spinner e de Bombs."],
        ["Ice-block cave north of Castle Town", "Precisa de Bombs e Ball and Chain."],
      ]),
      g("Kakariko Village", [
        ["Talo's watchtower archery", "Minigame de arco com o Hero's Bow."],
        ["Chest at the bottom of the spring", "Precisa de Bombs e Iron Boots."],
        ["Heart on the slope above the spring", "Precisa do Hero's Bow (bomb arrows) e da Gale Boomerang."],
      ]),
      g("Castle Town", [
        ["Hot Spring Water delivery", "Precisa de 1.000 Rupees para o Malo Mart e de ter terminado o Lakebed Temple."],
        ["Charlo's donation box", "Doe 1.000 Rupees no total."],
      ]),
      g("Death Mountain", [["Ledge cave on the trail", "Só depois de terminar a Goron Mines."]]),
      g("Goron Mines", [
        ["Magnetic ceiling chest", "Precisa das Iron Boots."],
        ["Room with two Beamos", "Precisa das Iron Boots."],
      ]),
      g("Lake Hylia", [
        ["Lanayru Spring torch chest", "Precisa de Clawshot e Lantern."],
        ["Cave south of the Howling Stone", "Precisa de Bombs, Hero's Bow e Lantern."],
        ["Falbi's Flight-By-Fowl island", "Jogo do Falbi custa 20 Rupees."],
        ["Plumm's Fruit Pop Flight", "Minigame de frutas. Precisa da Master Sword, como Wolf."],
      ]),
      g("Lakebed Temple", [
        ["Chandelier in the main hall", "Precisa do Clawshot."],
        ["Bridge room with switch and gate", "Precisa do Clawshot."],
      ]),
      g("Hena's Fishing Hole", [["Heart on the big rock", "Precisa da Gale Boomerang, mais Clawshot ou Fishing Rod."]]),
      g("Sacred Grove", [["Underground chamber under the boulder", "Precisa de Bombs. Faça como Human e depois como Wolf."]]),
      g("Temple of Time entrance", [["Owl Statue at the foot of the stairs", "Precisa da Dominion Rod com força total."]]),
      g("Gerudo Desert", [["Roast Bullbo", "Sem requisito. Funciona como Human ou Wolf."]]),
      g("Arbiter's Grounds", [
        ["Clawshot target in the Poe chamber", "Precisa do Clawshot."],
        ["Multi-level rail room", "Precisa do Spinner."],
      ]),
      g("Snowpeak Mountain", [["Yeto and Yeta sled race", "Precisa ter terminado o Snowpeak Ruins."]]),
      g("Snowpeak Ruins", [
        ["Swinging chandeliers, 2nd floor", "Precisa da Ball and Chain."],
        ["Cracked floor above the Freezard cages", "Precisa da Ball and Chain."],
      ]),
      g("Temple of Time", [
        ["Electric barrier room", "Precisa da Dominion Rod."],
        ["Two statues on rails, floor 5", "Precisa da Dominion Rod."],
      ]),
      g("Hidden Village", [["20 cats for the Cucco Leader", "Precisa ter restaurado a memória da Ilia. Faça como Wolf."]]),
      g("City in the Sky", [
        ["Circular east room with the big plant", "Precisa dos Double Clawshots."],
        ["Peahat chain on the outer tower", "Precisa dos Double Clawshots."],
      ]),
      g("Palace of Twilight", [
        ["Darkfall room, first wing", "Precisa de Sol ou Master Sword com luz, e Clawshot."],
        ["Light platforms, second wing", "Precisa de Sol ou Master Sword com luz."],
      ]),
    ],
  },
  {
    id: "heart-containers", title: "Heart Containers", icon: "❤️",
    note: "Cada Heart Container vem ao derrotar o chefe do templo.",
    groups: [g("Bosses", [
      ["Diababa", "Chefe do Forest Temple."], ["Fyrus", "Chefe da Goron Mines."], ["Morpheel", "Chefe do Lakebed Temple."],
      ["Stallord", "Chefe do Arbiter's Grounds."], ["Blizzeta", "Chefe do Snowpeak Ruins."], ["Armogohma", "Chefe do Temple of Time."],
      ["Argorok", "Chefe da City in the Sky."], ["Zant", "Chefe do Palace of Twilight."],
    ])],
  },
  {
    id: "poes", title: "Poe Souls", icon: "👻",
    note: "São 60 no total. Use os sentidos do Wolf para achar as Poes. O Jovani troca 20 por Great Fairy's Tears, e com as 60 ele é curado.",
    groups: [
      g("Jovani's House (Castle Town)", [["Poe 1", "Dentro da casa. Escave como Wolf."]]),
      g("Faron Woods", [["Poe 1", "Árvore central da clareira com neblina. Use o Midna jump."]]),
      g("Hyrule Field (Faron)", [["Poe 1", "Penhasco pequeno perto da ponte de madeira. Sem requisito."]]),
      g("Kakariko Gorge", [
        ["Poe 1", "Penhasco com árvore, acima do desfiladeiro."],
        ["Poe 2", "Dentro da Lantern Cavern. Precisa de Bombs e Lantern."],
      ]),
      g("Hyrule Field (Castle Town / Lanayru)", [
        ["Poe 1", "Ponte de pedra sobre o rio ao norte de Castle Town."],
        ["Poe 2", "Primeira gruta no círculo de capim alto. Escave como Wolf."],
        ["Poe 3", "Segunda gruta no círculo de capim alto. Escave como Wolf."],
        ["Poe 4", "Ruínas do anfiteatro."],
        ["Poe 5", "Saída sul de Castle Town."],
        ["Poe 6", "Ponte de madeira no portão leste."],
        ["Poe 7", "Penhasco ao sul da Great Hylian Bridge. Precisa do Hero's Bow (bomb arrows) e do Clawshot."],
      ]),
      g("Kakariko Village", [
        ["Poe 1", "Galpão queimado do Barnes."],
        ["Poe 2", "Perto do caminho da torre de vigia."],
      ]),
      g("Kakariko Graveyard", [
        ["Poe 1", "Centro do cemitério."],
        ["Poe 2", "Sob uma lápide."],
      ]),
      g("Death Mountain", [["Poe 1", "Penhasco acima da trilha. Use o canhão dos Gorons, depois de terminar a Goron Mines."]]),
      g("Lake Hylia", [
        ["Poe 1", "Plataforma de pouso do Falbi. O jogo custa 20 Rupees."],
        ["Poe 2", "Capim a sudeste do lago."],
        ["Poe 3", "Margem rochosa ao sul do lago."],
        ["Poe 4", "Penhasco abaixo do início do Flight-By-Fowl. Custa 20 Rupees."],
        ["Poe 5", "Perto da torre de vigia ao sul."],
        ["Poe 6", "Lantern Cavern, primeira Poe. Precisa de Bombs e Lantern."],
        ["Poe 7", "Lantern Cavern, segunda Poe. Precisa de Bombs e Lantern."],
        ["Poe 8", "Lantern Cavern, terceira Poe. Precisa de Bombs e Lantern."],
      ]),
      g("Upper Zora's River", [["Poe 1", "Área de capim ao sul."]]),
      g("Zora's Domain", [
        ["Poe 1", "Penhasco junto da cachoeira."],
        ["Poe 2", "Penhasco ao norte. Use o Midna jump."],
      ]),
      g("Sacred Grove", [
        ["Poe 1", "Atrás da cachoeira."],
        ["Poe 2", "Sob a pedra na arena do Skull Kid. Precisa de Bombs."],
        ["Poe 3", "No pedestal da Master Sword."],
      ]),
      g("Gerudo Desert", [
        ["Poe 1", "Rocha no sudeste do deserto."],
        ["Poe 2", "Sob a laje da Bridge of Eldin."],
        ["Poe 3", "Cantinho de areia a oeste."],
        ["Poe 4", "Árvore no penhasco ao norte. Precisa do Clawshot."],
        ["Poe 5", "Primeira gruta com caveira. Escave como Wolf e use Bombs."],
        ["Poe 6", "Segunda gruta com caveira. Escave como Wolf e use Bombs."],
        ["Poe 7", "Bulblin Camp."],
        ["Poe 8", "Entrada do Arbiter's Grounds."],
      ]),
      g("Arbiter's Grounds", [
        ["Poe 1", "Câmara central."],
        ["Poe 2", "Poço de areia, lado leste. Escave como Wolf."],
        ["Poe 3", "Sala grande antes do corredor oeste. Precisa do Spinner."],
        ["Poe 4", "Fourfold Poe."],
      ]),
      g("Snowpeak Mountain", [
        ["Poe 1", "Topo do morro a sudeste."],
        ["Poe 2", "Perto da árvore no lado leste."],
        ["Poe 3", "Congelada na caverna que leva ao Snowpeak Top. Precisa da Ball and Chain."],
        ["Poe 4", "Árvore de frente para o penhasco."],
        ["Poe 5", "Mesa de pedra antes do Snowpeak Ruins."],
      ]),
      g("Snowpeak Ruins", [
        ["Poe 1", "Hall de entrada gelado."],
        ["Poe 2", "Estátua de armadura no saguão. Precisa da Ball and Chain."],
        ["Poe 3", "Sala gelada no segundo andar. Precisa da Ball and Chain."],
      ]),
      g("Temple of Time", [
        ["Poe 1", "Estátua do hall de entrada. Precisa da Dominion Rod com força total."],
        ["Poe 2", "Terceiro andar, atrás das grades douradas. Precisa da Dominion Rod."],
        ["Poe 3", "Sexto andar, antes da sala da Boss Key. Precisa da Dominion Rod."],
      ]),
      g("Hidden Village", [["Poe 1", "Varanda da casa a nordeste. Precisa do Clawshot."]]),
      g("City in the Sky", [
        ["Poe 1", "Ala oeste, terceiro andar. Precisa dos Double Clawshots."],
        ["Poe 2", "Sala aberta antes da Boss Key. Precisa dos Double Clawshots."],
      ]),
      g("Cave of Ordeals", [
        ["Floor 17", "Use os sentidos do Wolf para achar a Poe."],
        ["Floor 33", "Use os sentidos do Wolf para achar a Poe."],
        ["Floor 44", "Use os sentidos do Wolf para achar a Poe."],
      ]),
    ],
  },
  {
    id: "bugs", title: "Golden Bugs", icon: "🦋",
    note: "Entregue todos à Agitha, em Castle Town. O primeiro rende a Big Wallet e os 24 rendem a Giant Wallet.",
    groups: [
      g("Beetle", [["Male Beetle", "Hyrule Field (Faron)."], ["Female Beetle", "Hyrule Field (Faron)."]]),
      g("Ant", [["Male Ant", "Kakariko Graveyard."], ["Female Ant", "Kakariko Village."]]),
      g("Grasshopper", [["Male Grasshopper", "Hyrule Field (Eldin)."], ["Female Grasshopper", "Hyrule Field (Eldin)."]]),
      g("Phasmid", [["Male Phasmid", "Hyrule Field (Eldin)."], ["Female Phasmid", "Hyrule Field (Eldin)."]]),
      g("Pill Bug", [["Male Pill Bug", "Kakariko Gorge."], ["Female Pill Bug", "Kakariko Gorge."]]),
      g("Mantis", [["Male Mantis", "Great Hylian Bridge."], ["Female Mantis", "Great Hylian Bridge."]]),
      g("Butterfly", [["Male Butterfly", "Hyrule Field (Lanayru)."], ["Female Butterfly", "Hyrule Field (Lanayru)."]]),
      g("Stag Beetle", [["Male Stag Beetle", "Hyrule Field (Lanayru)."], ["Female Stag Beetle", "Hyrule Field (Lanayru)."]]),
      g("Ladybug", [["Male Ladybug", "Hyrule Field (Lanayru)."], ["Female Ladybug", "Hyrule Field (Lanayru)."]]),
      g("Dragonfly", [["Male Dragonfly", "Zora's Domain."], ["Female Dragonfly", "Upper Zora's River."]]),
      g("Dayfly", [["Male Dayfly", "Gerudo Desert."], ["Female Dayfly", "Gerudo Desert."]]),
      g("Snail", [["Male Snail", "Sacred Grove."], ["Female Snail", "Entrada do Temple of Time (hall)."]]),
    ],
  },
  {
    id: "skills", title: "Hidden Skills", icon: "⚔️",
    note: "Ensinadas pelo Golden Wolf, em ordem fixa. Antes, uivar a melodia na Howling Stone; depois encontre o lobo como Human Link.",
    groups: [g("Skills", [
      ["Ending Blow", "Faron Woods, no caminho antes do Forest Temple."],
      ["Shield Attack", "Ordon Spring."],
      ["Back Slice", "Hyrule Field, num pilar na entrada leste de Castle Town."],
      ["Helm Splitter", "Hyrule Field, fora da entrada sul de Castle Town."],
      ["Mortal Draw", "Gerudo Desert, a nordeste, depois das barricadas dos Bulblins."],
      ["Jump Strike", "Kakariko Graveyard."],
      ["Great Spin", "Castle Town, na praça central."],
    ])],
  },
  {
    id: "dungeons", title: "Dungeons", icon: "🏰",
    groups: [g("Temples & Castle", [
      ["Forest Temple", "Rende a Gale Boomerang. Chefe: Diababa."],
      ["Goron Mines", "Rende o Hero's Bow. Chefe: Fyrus."],
      ["Lakebed Temple", "Rende o Clawshot. Chefe: Morpheel."],
      ["Arbiter's Grounds", "Rende o Spinner. Chefe: Stallord."],
      ["Snowpeak Ruins", "Rende a Ball and Chain. Chefe: Blizzeta."],
      ["Temple of Time", "Rende a Dominion Rod. Chefe: Armogohma."],
      ["City in the Sky", "Rende os Double Clawshots. Chefe: Argorok."],
      ["Palace of Twilight", "Chefe: Zant."],
      ["Hyrule Castle", "Dungeon final."],
    ])],
  },
  {
    id: "tears", title: "Tears of Light", icon: "💧",
    note: "No GameCube são 16 por província (no HD seriam 12). Mate os Shadow Insects com a forma de lobo e leve cada lágrima à luz da província.",
    groups: [
      g("Faron", nums("Tear", 16, "Shadow Insect de Faron.")),
      g("Eldin", nums("Tear", 16, "Shadow Insect de Eldin.")),
      g("Lanayru", nums("Tear", 16, "Shadow Insect de Lanayru.")),
    ],
  },
  {
    id: "bottles", title: "Bottles", icon: "🧪",
    groups: [g("Bottles", [
      ["Sera's Sundries (Ordon Village)", "Vem com meia porção de goat milk."],
      ["Coro's house (Faron Woods)", "Vem com óleo de lamparina e custa 100 Rupees."],
      ["Hena's Fishing Hole (Upper Zora's River)", "Vem vazia. Pesque no lago."],
      ["Jovani's house (Castle Town)", "Troque 20 Poe Souls por Great Fairy's Tears."],
    ])],
  },
  {
    id: "upgrades", title: "Upgrades", icon: "🎒",
    groups: [
      g("Wallets", [
        ["Big Wallet", "Entregue o primeiro Golden Bug à Agitha."],
        ["Giant Wallet", "Entregue os 24 Golden Bugs à Agitha."],
      ]),
      g("Quivers", [
        ["Big Quiver", "Vença o primeiro STAR Game (60 flechas)."],
        ["Giant Quiver", "Vença o STAR Game dos Double Clawshots (100 flechas)."],
      ]),
      g("Bomb Bags", [
        ["Bomb Bag 1", "Compre as Barnes Bombs em Kakariko Village."],
        ["Bomb Bag 2", "Primeira viagem de barco da Iza."],
        ["Bomb Bag 3", "Liberte o Goron em Zora's Domain."],
        ["Giant Bomb Bag", "Faça 25 pontos ou mais no Iza's Rapid Ride."],
      ]),
      g("Equipment", [
        ["Ordon Sword", "Recupere depois da fuga do castelo."],
        ["Master Sword", "Tire do pedestal no Sacred Grove."],
        ["Hylian Shield", "Compre no Malo Mart de Kakariko Village."],
        ["Zora Armor", "Pegue no túmulo do rei Zora."],
        ["Magic Armor", "Faça as doações no Malo Mart de Castle Town e compre."],
      ]),
    ],
  },
  {
    id: "items", title: "Key Items", icon: "🗝️",
    groups: [g("Items", [
      ["Fishing Rod", "Ordon Village."], ["Slingshot", "Ordon Village."], ["Lantern", "Ordon Village."],
      ["Gale Boomerang", "Forest Temple."], ["Iron Boots", "Death Mountain."], ["Hero's Bow", "Goron Mines."],
      ["Hawkeye", "Lanayru Province."], ["Clawshot", "Lakebed Temple."], ["Shadow Crystal", "Capítulo Midna, Zelda and the Master Sword."],
      ["Ghost Lantern", "Poe Souls e Malo Mart."], ["Coral Earring", "Snowpeak Mountain."], ["Spinner", "Arbiter's Grounds."],
      ["Ball and Chain", "Snowpeak Ruins."], ["Dominion Rod", "Temple of Time."], ["Ilia's Charm (Horse Call)", "Hidden Village."],
      ["Double Clawshots", "City in the Sky."],
    ])],
  },
  {
    id: "ordeals", title: "Cave of Ordeals", icon: "🧚",
    groups: [g("Great Fairies", [
      ["Floor 10", "Depois dele, precisa do Spinner. As fadas aparecem na Ordon Spring."],
      ["Floor 20", "Depois dele, precisa da Ball and Chain. As fadas aparecem na Faron Spring."],
      ["Floor 30", "Depois dele, precisa da Dominion Rod. As fadas aparecem na Eldin Spring."],
      ["Floor 40", "Depois dele, precisa dos Double Clawshots. As fadas aparecem na Lanayru Spring."],
      ["Floor 50", "Enche uma garrafa vazia com Great Fairy's Tears."],
      ["Full clear (floors 1–50)", "Inclui as Poes dos andares 17, 33 e 44."],
    ])],
  },
  {
    id: "fishing", title: "Fishing", icon: "🎣",
    groups: [g("Fish & Lures", [
      ["Greengill", "Quase qualquer lago, riacho ou rio."],
      ["Hyrule Bass", "Hena's Fishing Hole e Eldin Spring."],
      ["Ordon Catfish", "Hena's Fishing Hole e riacho de Ordon Village."],
      ["Hylian Pike", "Hena's Fishing Hole, rios e Lake Hylia."],
      ["Reekfish", "Zora's Domain, na poça abaixo da cachoeira."],
      ["Hylian Loach", "Hena's Fishing Hole, nas vitórias-régias ao norte. Precisa da Frog Lure ou da Sinking Lure."],
      ["Sinking Lure", "Pegue Bass, Pike e Catfish com a vara de isca."],
      ["Frog Lure", "Termine os 8 primeiros níveis do Rollgoal."],
    ])],
  },
  {
    id: "minigames", title: "Mini-games", icon: "🎯",
    groups: [g("Mini-games & Donations", [
      ["STAR Game: Big Quiver", "Castle Town, 10 Rupees."],
      ["STAR Game: Giant Quiver", "Com os Double Clawshots. 15 Rupees, em menos de 1:30."],
      ["Rollgoal: first 8 levels", "Cabana do Hena. Rende a Frog Lure."],
      ["Rollgoal: all 64 levels", "Cabana do Hena. Rende a carteira cheia."],
      ["Iza's Rapid Ride", "25 pontos rendem a Giant Bomb Bag."],
      ["Goat Herding", "Ordon Ranch com a Epona. Rende Piece of Heart."],
      ["Fruit Pop Flight", "Lake Hylia, como Wolf Link. Rende Piece of Heart."],
      ["Flight-By-Fowl", "Cabana do Falbi, 20 Rupees. Rende Piece of Heart."],
      ["Charlo's donation", "1.000 Rupees no total. Rende Piece of Heart."],
      ["Snowboard race", "Snowpeak Top, com a Yeta. Rende Piece of Heart."],
      ["Cat hunt", "Hidden Village, 20 gatos. Rende Piece of Heart."],
      ["Malo Mart donations", "Castle Town. Libera a Magic Armor."],
    ])],
  },
];

// IDs estáveis (usados para salvar o progresso) e totais.
CATEGORIES.forEach(c => {
  let count = 0;
  c.groups.forEach((gr, gi) => gr.items.forEach((it, ii) => { it.id = `${c.id}:${gi}:${ii}`; count++; }));
  c.total = count;
});
