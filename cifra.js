const mensagemSecreta = "minhamensagemSecreta"
console.log(mensagemSecreta)

function cifraMensagem(mensagem,movimentos){
    const mensagemCifrada = mensagem.split('').map(caractere =>{
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere + movimentos)
    })

    return mensagemCifrada.join('')
}
function descifraMensagem(mensagem,movimentos){
    const mensagemCifrada = mensagem.split('').map(caractere =>{
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere - movimentos)
    })

    return mensagemCifrada.join('')

}
const mensagemCifrada = cifraMensagem(mensagemSecreta, 3)

console.log(mensagemCifrada)

const mensagemDescifrada = descifraMensagem(mensagemCifrada, 3)



console.log(mensagemDescifrada)