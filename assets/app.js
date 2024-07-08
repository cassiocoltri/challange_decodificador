let botaoEnc = document.querySelector("#botao1");
let botaoDesc = document.querySelector("#botao2");
let botnCop = document.querySelector("#btnCop");
let texto_original = document.querySelector("#textoEncriptar");
let texto_novo = document.querySelector("#textoDescriptar");

escondeBotao();

botaoEnc.addEventListener("click", function(){

    texto_novo.innerHTML = encriptografarTexto();

    destroiElementos();
    mostraBotao();

});

botaoDesc.addEventListener("click", function(){

    texto_novo.innerHTML = desencriptografarTexto();

    destroiElementos();
    mostraBotao();

});

botnCop.addEventListener("click", async function(){
    await navigator.clipboard.writeText(texto_novo.value);
});

function encriptografarTexto() {
    let texto = texto_original.value;
    let palavra = Array.from(texto);

    for (let letra = 0; letra < palavra.length; letra++) {
        if(palavra[letra] == "a") palavra[letra] = palavra[letra].replace("a","ai");       
        if(palavra[letra] == "e") palavra[letra] = palavra[letra].replace("e","enter");
        if(palavra[letra] == "i") palavra[letra] = palavra[letra].replace("i","imes");
        if(palavra[letra] == "o") palavra[letra] = palavra[letra].replace("o","ober");
        if(palavra[letra] == "u") palavra[letra] = palavra[letra].replace("u","ufat");
    }
    
    let texto_novo = palavra.toString().replace(/[\,]/g, "");
    return texto_novo;
}

function desencriptografarTexto() {
    let texto = texto_original.value;
    let palavra = Array.from(texto);

    for (let letra = 0; letra < palavra.length; letra++) {

        /*
        Explicação:
        No caso do primeiro if, eu quero uma "palavra" que tenha duas letras, por isso o (letra + 1)
        Se essa palavra de duas letras forem menores que o comprimento do texto e sua primeira letra for igual a 'a' e tb igual a 'i'
        siguinifica que a palvra que quero é "ai".
        Sendo assim, pegue essa "palavra" e troque o 'i' dela por nada.

        No segundo if quero uma palavra que tenha cinco letras començando a primeira com 'e' e resto na mesma lógica anterior...
        */
        if( (letra + 1) < palavra.length && palavra[letra] == 'a' && palavra[letra + 1] == 'i'  ) {
            palavra[letra + 1] = palavra[letra + 1].replace('i','');       
        }     

        if( (letra + 4) < palavra.length && palavra[letra] == 'e' 
            && palavra[letra + 1] == 'n' 
            && palavra[letra + 2] == 't' 
            && palavra[letra + 3] == 'e' 
            && palavra[letra + 4] == 'r' ) {
            palavra[letra + 1] = palavra[letra + 1].replace('n','');
            palavra[letra + 2] = palavra[letra + 2].replace('t','');
            palavra[letra + 3] = palavra[letra + 3].replace('e','');
            palavra[letra + 4] = palavra[letra + 4].replace('r','');
        }

        if( (letra + 3) < palavra.length && palavra[letra] == 'i' 
            && palavra[letra + 1] == 'm'
            && palavra[letra + 2] == 'e'
            && palavra[letra + 3] == 's') {
            palavra[letra + 1] = palavra[letra + 1].replace('m','');
            palavra[letra + 2] = palavra[letra + 2].replace('e','');
            palavra[letra + 3] = palavra[letra + 3].replace('s','');
        }

        if( (letra + 3) < palavra.length && palavra[letra] == 'o'
            && palavra[letra + 1] == 'b'
            && palavra[letra + 2] == 'e'
            && palavra[letra + 3] == 'r') {
            palavra[letra + 1] = palavra[letra + 1].replace('b','');
            palavra[letra + 2] = palavra[letra + 2].replace('e','');
            palavra[letra + 3] = palavra[letra + 3].replace('r','');
        }

        if( (letra + 3 < palavra.length && palavra[letra] == 'u') 
            && palavra[letra + 1] == 'f'
            && palavra[letra + 2] == 'a'
            && palavra[letra + 3] == 't') {
            palavra[letra + 1] = palavra[letra + 1].replace('f','');
            palavra[letra + 2] = palavra[letra + 2].replace('a','');
            palavra[letra + 3] = palavra[letra + 3].replace('t','');
        }
    }
    
    let texto_novo = palavra.toString().replace(/[\,]/g, "");
    return texto_novo;

}

function destroiElementos(){

    document.getElementById('pessoa').remove();
    document.getElementById('aviso').remove();
    document.getElementById('aviso2').remove();

};

function escondeBotao(){

    document.getElementById('btnCop').style.display = 'none';

}

function mostraBotao(){

    document.getElementById('btnCop').style.display = 'block';

}