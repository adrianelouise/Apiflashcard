const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


const  criarBaralho = require('./baralho/criarBaralho');
const  listarBaralho = require('./baralho/listarBaralho');
const  atualizarBaralho = require('./baralho/atualizarBaralho');
const deletarBaralho = require('./baralho/deletarBaralho');

const criarFlashcard = require('./flashcard/criarFlashcard');
const listarFlashcard = require('./flashcard/listarFlash');
const atualizarFlashcard = require('./flashcard/atualizarFlashcard');
const deletarFlashcard = require('./flashcard/deletarFlashcard');
const buscarFlashcardsPorBaralho = require('./flashcard/buscarFlashcardsPorBaralho');
const buscarFlashcardsPorPergunta = require('./flashcard/buscarFlashcardsPorPergunta');
const findFlashcardIndexById = require('./flashcard/findFlashcardIndexById');

app.post('/baralho', criarBaralho);
app.get('/baralho', listarBaralho);
app.put('/baralho/:id', atualizarBaralho);
app.delete('/baralho/:id',deletarBaralho);

app.post('/flashcard'. criarFlashcard);
app.get('/flashcard', listarFlashcard);
app.put('/flashcard/:id', atualizarFlashcard);
app.delete('/flashcard/:id',deletarFlashcard);
app.get('/flashcards/baralho/:idBaralho',buscarFlashcardsPorBaralho);

app.get('/flashcards/:id', findFlashcardIndexById );

app.get('/flashcards', buscarFlashcardsPorPergunta);

app.get('/',(req, res) => {
    res.send('Funcionando')
});

app.listen(port, () =>{
    console.log(`Servidor rodando em http:/localhost:${port}`);
});
