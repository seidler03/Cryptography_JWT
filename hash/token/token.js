import jwt from 'jsonwebtoken'

const chaveSecreta = "Matheus Seidler"
const token = jwt.sign(
    {
        apelido: "Matheus",
        curso: "eletrônica"
    }, chaveSecreta
)

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado)