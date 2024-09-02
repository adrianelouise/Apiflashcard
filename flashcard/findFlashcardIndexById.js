  const { flashcards } = require('../data');

  const buscarFlashcardPorId = (req, res) => {
    const{ id } = req.params;
     
    const flashcard = flashcards.find(flashcard => flashcard.id == id);

    if('!flashcard') {
           return res.status(404).send({ message: 'Flashcard não encontrado.'})
        
    }
    res.status(200).send(flashcard);
  };

  module.exports = buscarFlashPorId;