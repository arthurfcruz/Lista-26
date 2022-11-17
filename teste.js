class Livro{
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade

    constructor(titulo, autor, editora, anoPublicacao){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoPublicacao = anoPublicacao
        this.Disponibilidade = true
    }
}

class Biblioteca{
    Nome
    Endereco
    Telefone
    AcervoDeLivros = []

    constructor(nome, endereco, telefone){
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
    }

    BuscarLivro(nomeLivro){
        
        for (let index = 0; index < this.AcervoDeLivros.length; index++) {
            if (nomeLivro == this.AcervoDeLivros[index].Titulo) {
                console.log(this.AcervoDeLivros[index].Autor, this.AcervoDeLivros[index].Editora, this.AcervoDeLivros[index].AnoPublicacao, this.AcervoDeLivros[index].Disponibilidade)
            }
        }
        
    }

    EmprestarLivro(nomeLivro){
        
        for (let index = 0; index < this.AcervoDeLivros.length; index++) {
            if (nomeLivro == this.AcervoDeLivros[index].Titulo){
                if (this.AcervoDeLivros[index].Disponibilidade == true) {
                    this.AcervoDeLivros[index].Disponibilidade = false               
                    return true
                }else return false
            }
        }
        
    }

    DevolverLivro(nomeLivro){
        
        for (let index = 0; index < this.AcervoDeLivros.length; index++) {
            if (nomeLivro == this.AcervoDeLivros[index].Titulo){
                this.AcervoDeLivros[index].Disponibilidade = true          
            }
        }
    }
    
    AdicionarLivro(livro){
        this.AcervoDeLivros.push(livro)
    }
}

let harryPotter = new Livro ('Harry Potter e a Pedra Filosofal', 'J. K. Rowling', 'Rocco', 1998)

let senhorDosAneis = new Livro ('O Senhor dos anéis: A sociedade do anel', 'J. R. R. Tolkien', 'HarperCollins', 1954)

let oCapital = new Livro ('O Capital', 'Karl Marx', 'edipro', 1867)

let biblioteca1 = new Biblioteca('Biblioteca Pública Municipal', 'Avenida Mandacaru, 317', '(44) 3127-6055')