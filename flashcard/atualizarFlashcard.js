const { flashcards } = require('../data');

const atualizarFlashcard = (req, res) => {
 const { id } = req.params;
 const novoTitulo = req.body.titulo;

const baralho = flashcards.find((b) => b.id == id);

if (!flashcard) {
  return res.status(404).send({ message: 'Baralho não encontrado' });
}

flashcard.pergunta= novoPergunta;
  res.status(200).send({
  message: 'Flashcard atualizado com sucesso!',
  flashcards: flashcard
});
}

module.exports = atualizarFlashcard;