   const { flashcards } = require('../data');

   const buscarFlashcardPorPergunta = (req, res) => {
    const { termo } = req.query;

    const resultados = flashcards.filter(flashcard =>

        flashcards.pergunta.toLowerCase().includes(termo.toLowerCase());
    );
     if (resultados.length === 0){
        return res.status(404).send({ message: 'Nenhum flashcard encontrado com esta pergunta'});
     }
     res.status(200).send(resultados);
    
    };
    
    module.exports = buscarFlashcardsPorPergunta;

