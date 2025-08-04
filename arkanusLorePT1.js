//1
/*let nome = "Arkanus";
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
let insatisfacaoPovo = 0;

const NOME_ARMA = "Adaga antiBug";
let DANO_BASE = 30;
const BONUS_FURTIVO = 40;
const NOME_ARMADURA = "Botas de Codigos";
const DEFESA_BASE = 25;

let ataqueTotal = nivel + DANO_BASE + BONUS_FURTIVO;
let defesaTotal = DEFESA_BASE + (nivel/2);

let vidaSuficiente = pontosVida > 70;
let ataqueSuficiente = ataqueTotal > 60;
let nivelAlcancado = nivel > 10;
let podeEnfrentarOGuardião = vidaSuficiente && (ataqueSuficiente || nivelAlcancado);*/




//especificações
let nome = "Arkanus";
let reinoOrigen = "Sistemolandia";
let raca = "Elfo";
let classe = "Ladino";
let inimigo = "Ars Nouveau";
let amigo  = "Stark";
let subclasse = "Monge";
let nivel = 14;
let pontosVida = 115;
let moedas = 300;
let XP = 150;
let localAtual = "Sistemolandia"
let missaoAtual = "Evitar revoltas e fazer o povo ter uma vida boa"

//iventario
const NOME_ARMA = "Adaga antiBug";
let DANO_BASE = 30;
const BONUS_FURTIVO = 40;
const NOME_ARMADURA = "Botas de Codigos";
const DEFESA_BASE = 25;

let ataqueTotal = nivel + DANO_BASE + BONUS_FURTIVO;
let defesaTotal = DEFESA_BASE + (nivel/2);

let vidaSuficiente = pontosVida > 70;
let ataqueSuficiente = ataqueTotal > 60;
let nivelAlcancado = nivel > 10;
let podeEnfrentarOGuardião = vidaSuficiente && (ataqueSuficiente || nivelAlcancado);

//status
let insatisfacaoPovo = 0;
let forca = 10;
let defesa = 9;
let agilidade = 19;
let combatesVencidos = 4;


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
console.log("----------------------------------FIM DA PRIMEIRA PARTE--------------------------------------------------");
//Nivel 2 batalha dos Algoritimos
console.log("----------------------------------EPÍlOGO--------------------------------------------------");
console.log("A historia do Heroi e Arkanus continua com agora ele sendo rei e com muitos problemas");

if(moedas>=150){
    moedas-=150;
    console.log("Você reformou o reino, parabéns agora você tem ", moedas ," moedas de ouro");
}
if(classe == "Ladino"){
    console.log("O Povo percebeu que você é um ladrão, ele ficou irritado");
    insatisfacaoPovo += 1;
}
if(moedas<500){
    console.log("Isso não é uma boa quantia de dinheiro, o reino precisa de mais dinheiro e rápido");
}

console.log("Se não cuidar das vontades do povo ele vai ficar irritado e fazer uma revolução mantenha o nivel de insatisfação menor que 7");
console.log(`Com o pensamento de ${missaoAtual}, ${nome} começa a ter pensamentos sobre declarar guerra contra outros lugares `);

if(moedas>=200){
    console.log("Parabéns você tem tudo sobre controle");
}else{
    console.log("Já que está com poucas moedas, Arkanus acredita que declarar guerra contra outro lugar seja uma boa ideia...");
}

let reinoInimigo1 = "Mecha-Ânicos"
let emGuerra = true;

if(emGuerra==true){
    console.log(`${nome} após mandar a carta de declaração de guerra com motivos de melhora para o povo, reune o reino todo para falar para todos que eles acabaram de entrar em guerra`);
    insatisfacaoPovo+=1;
}
console.log("----------------------------FIM DO EPÍLOGO-----------------------------------------------------");
console.log("--------------------------COMEÇO DA SEGUNDA PARTE---------------------------------------------");

console.log(`O momento de guerra com os ${reinoInimigo1} começa oficialmete e com o nivel de insatisfação do povo em ${insatisfacaoPovo}`);

//status do nosso REINO como um geral
let vidaReino = 100;
let ataqueReino = 10;
insatisfacaoPovo = 2; //relembrando em que nível está
let conhecimentosMagicos = 14;

//status do reino inimigo
let reinoInimigoVida1 = 115;
let ataqueReinoInimigo = 16;
let conhecimentosReinoInimigo = 9;

console.log(`Após uma reunião com os estrategistas o nosso rei percebe que a resistencia do reino é boa, o ataque não é bom e os conhecimentos magicos são incriveis`);
if(ataqueReino>ataqueReinoInimigo){
    console.log("Nosso ataque é maior vamos destruílos e saquear tudo");
}else{
    insatisfacaoPovo+=1;
    console.log(`Ainda não é a hora, o povo fica ansioso, a insatisfação aumenta para ${insatisfacaoPovo}`);
}
console.log("A insatisfação do povo está aumentando muito, talvez seja melhor fazer alguma coisa para melhorar");
if(insatisfacaoPovo>=3){
    insatisfacaoPovo+=2;
    console.log(`Você tenta fazer uma comemoração, mas o desespero na sua face fica evidente, insatisfação vai para ${insatisfacaoPovo}`);
}else{
    console.log("tudo da certo");
}
console.log("Depois do fracasso da festa você quer resolver tudo e declara um ataque aos inimigos, mesmo que despreparado");
