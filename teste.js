let livros = []

class Livro{
    titulo
    autor
    editora
    anoPublicacao
    disponibilidade
}

let harryPotter = new Livro ()
harryPotter.titulo = 'Harry Potter e a Pedra Filosofal'
harryPotter.autor = 'J. K. Rowling'
harryPotter.editora = 'Rocco'
harryPotter.anoPublicacao = 1998
harryPotter.disponibilidade = true
livros.push(harryPotter)

let senhorDosAneis = new Livro ()
senhorDosAneis.titulo = 'O Senhor dos anéis: A sociedade do anel'
senhorDosAneis.autor = 'J. R. R. Tolkien'
senhorDosAneis.editora = 'HarperCollins'
senhorDosAneis.anoPublicacao = 1954
senhorDosAneis.disponibilidade = true
livros.push(senhorDosAneis)

let oCapital = new Livro ()
oCapital.titulo = 'O Capital'
oCapital.autor = 'Karl Marx '
oCapital.editora = 'edipro'
oCapital.anoPublicacao = 1867
oCapital.disponibilidade = false
livros.push(oCapital)

class Biblioteca{
    nome
    endereco
    telefone

    buscarLivro(nomeLivro){
        
        nomeLivro = prompt('qual o nome do livro que deseja buscar?')
        
        for (let index = 0; index < titulo.length; index++) {
            if (nomeLivro == titulo[index]) {
                console.log(autor[index], editora[index], anoPublicacao[index], disponibilidade[index])
            }
        }
        
    }

    emprestarLivro(nomeLivro){
        
        for (let index = 0; index < titulo.length; index++) {
            if (nomeLivro == titulo[index]){
                if (disponibilidade[index] == true) {
                    disponibilidade[index] = false               
                    return true
                }else return false
            }
        }
        
    }

    devolverLivro(nomeLivro){
        
        for (let index = 0; index < titulo.length; index++) {
            if (nomeLivro == titulo[index]){
                disponibilidade[index] = true          
            }
        }
    }
}

let biblioteca1 = new Biblioteca
biblioteca1.nome = 'Biblioteca Pública Municipal'
biblioteca1.endereco = 'Avenida Mandacaru, 317'
biblioteca1.telefone = '(44) 3127-6055'
