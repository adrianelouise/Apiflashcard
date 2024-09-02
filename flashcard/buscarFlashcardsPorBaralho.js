  const { flashcards } = require('../data');

  function buscarFlashcardsPorBaralho(req, res) { 
      const { idBaralho } req.params;
      const resultados = flashcards.filter(flashcard =>
    flashcard.idBaralho == parseInt(idBaralho));

    if (resultados.lengt > 0){
        res.status(200).send(resultados);
    } else{
        res.status(404).send ( { message:'Nenhum flashcard encontrado para esse baralho.'});
    
    }
  }
  