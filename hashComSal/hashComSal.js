import {scryptSync, randomBytes, timingSafeEqual} from 'crypto'

function ciraHashComSal(senha){
    const sal = randomBytes(16).toString('hex')

    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex')
    return `${sal}:${senhaHasheada}`
}

class Usuario{
    constructor(nome,senha){
        this.nome = nome;
        [this.sal, this.hash] = ciraHashComSal(senha).split(':')
    }
    autentica(nome,senha){
        if(nome === this.nome){
            const testeHash = scryptSync(senha,this.sal,64);
            const hashReal = Buffer.from(this.hash, 'hex')

            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)

            if(hashesCorrespondem){
                console.log("Usuário Autenticado com Sucesso");
                return true;
            }
        }

        console.log("Usuário ou senha incorretos")
    }

}

const matheus = new Usuario('matheus', 'senhaSecreta')

console.log(matheus)

matheus.autentica('matheus', 'senhaSecreta')

matheus.autentica('matheuss', 'senhaSecretas')