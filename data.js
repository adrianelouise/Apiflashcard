let baralhos = [
    {id: 1, titulo: "Vocabulário Básico"},
    {id: 2, titulo: "Verbos Comuns"}
]; 

let flashcards = [
    {id: 1, pergunta: "Como se diz livro em espanhol?", resposta:"Libro", idBaralho: 1 },
    {id: 2, pergunta: "Qual e a palavra para cachorro em espanhol?", resposta:"Perro", idBaralho: 1 },
    {id: 3, pergunta: "Como se conjuga o verbo comer na primeira pessoa do singular no presente?", resposta:"Como (Yo como)", idBaralho: 2 },
    {id: 4, pergunta: "Como se diz nós somos em espanhol?", resposta:"Nosotros somos", idBaralho: 2 }
];

module.exports = {baralhos, flashcards}

