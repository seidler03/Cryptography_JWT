import {createHash} from 'crypto';

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash("uma String Qualquer"))

class Usuario{
    constructor(nome,senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    atentica(nome,senha){
        if(nome === this.nome && this.hash == criaHash(senha)){
            console.log("Usuário autenticado com sucesso!")
            return true;
        }

        console.log("Usuário ou senha incorretos")
        return false;
    }
}

const usuario = new Usuario('matheus', 'senha');

console.log(usuario)

usuario.atentica('matheus', 'senha')

usuario.atentica('matheus', 'senhaa')

