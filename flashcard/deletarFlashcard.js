const { flashcards } = require('../data')

const deletarFlashcard = (req, res) => {
const { id } = req.params;
const index = flashcards.findIndex((f) => b.id == id);

if (index === -1) {
   return res.status(404).send('Flashcard não encontrado!');
}

  const FlashcardDeletado = .splice(index, 1)[0];

  
  res.status(200).send({
  message: 'Flashcard deletado com sucesso!',
  baralho: flashcardDeletado
  })
}

module.exports = deletarFlashcard;