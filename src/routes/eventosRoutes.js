import express from 'express';
import EventosController from '../controllers/eventosController.js';

const router = express.Router();

router
  .get('/eventos', EventosController.listarEventos);
//   .get('/autores/:id', AutoresController.listarAutorPorId)
//   .get('/autores/:id/livros', AutoresController.listarLivrosPorAutor)
//   .post('/autores', AutoresController.cadastrarAutor)
//   .put('/autores/:id', AutoresController.atualizarAutor)
//   .delete('/autores/:id', AutoresController.excluirAutor);

export default router;
