//1
let nome = "Arkanus";
let reinoOrigen = "Sistemolandia";
let inimigo = "Legolas Adagorn";
let raca = "Elfo";
let amigo = "Stark";
let classe = "Ladino";
let subclasse = "Monge";
let nivel = 14;
let pontosVida = 115;
let moedas = 280;
let XP = 0;
//2
const NOME_ARMA = "Adaga antiBug";
let DANO_BASE = 30;
const BONUS_FURTIVO = 40;
const NOME_ARMADURA = "Botas de Codigos";
const DEFESA_BASE = 25;
//3
XP += 150;
moedas -= 30;
pontosVida += 40;
DANO_BASE *= 2;
//4
let ataqueTotal = nivel + DANO_BASE + BONUS_FURTIVO;
let defesaTotal = DEFESA_BASE + (nivel/2);
//5
let vidaSuficiente = pontosVida > 70;
let ataqueSuficiente = ataqueTotal > 60;
let nivelAlcancado = nivel > 10;
let podeEnfrentarOGuardião = vidaSuficiente && (ataqueSuficiente || nivelAlcancado);
//6
console.log(`👑A incrivelmente incrivel aventura do heroi: ${nome} o heroi ${raca} PARTE 1👑`);
console.log(" ");
console.log(`${nome} é um ladrão nascido em ${reinoOrigen} que era reindado por ${inimigo}`);
console.log(`Após um grande roubo feito por ${nome} ele foi exilado e teve de viver vagando pelo mundo`);
console.log(`Com sua incrivel e fiel ${NOME_ARMA} ele conseguiu atingir o nivel ${nivel}`);
console.log(`Ao longo dos anos de viajante ${nome} ele conseguiu as lendarias ${NOME_ARMADURA}`);
console.log(`Após conseguir essa armadura, ${nome} teve sua defesa aumentada para ${defesaTotal}`);
console.log(`Sua adaga que dava incriveis ${ataqueTotal} de dano durante uma noite foi roubada`);
console.log(`Todas as evidencias apontavam para seu inimigo que não era visto a muito tempo, ${inimigo}`);
console.log(`Durante suas buscas ${nome} percebeu que seu inimigo se encontrava escondido com um Guardião`);
console.log(`Enquanto nosso heroi se movia para enfrentar o Guardião encontrou um rosto amigavel, ${amigo}`);
console.log(`Após muitas horas de conversa ambos decidiram se unir para lutar contra o rei `);
console.log(`Enquanto se moviam para o covil do rei maligno nossos herois passaram por grandes cidades fazendo pequenos furtos`);
console.log(`Enfim quando chegaram no reino maligno ${nome} e ${amigo} com suas habilidades furtivas chegaram a sala do trono`);
console.log(`Sua vida era suficiente? ${vidaSuficiente}, Seu dano era suficiente? ${ataqueSuficiente}`)
console.log(`Durate o combate com o Guardião nossos herois venceram com certa dificuldade e sobrava somente o rei `);
console.log(`Em um combate mais que epico, lendario nossos herois quase perderam, porem ${amigo} consegue acertar um golpe certeiro no ${inimigo}`);
console.log(`Enquanto uma epica batalha perdurava no seu golpe final, ${inimigo} mata ${amigo} com a adaga que motivou tudo`);
console.log(`Após derrotar o rei maligno, vingar ${amigo} e recuperar ${NOME_ARMA}`);
console.log(`${nome} que era um simples ladrão foi coroado a rei por ter terminado a era de terror de ${inimigo}`);
