const router = require('express').Router()
const {Todo} = require('../db')

//GET /api/todos
router.get('/', (req, res, next) => {
  Todo.findAll()
    .then(todos => res.json(todos))
    .catch(next)
})

//GET /api/todos/:todoId
router.get('/:todoId', (req, res, next) => {
  Todo.findById(req.params.todoId)
    .then(todo => res.json(todo))
    .catch(next)
})

//POST /api/todos
router.post('/', (req, res, next) => {
  Todo.create(req.body)
    .then(todo => res.json(todo))
    .catch(next)
})

router.put('/:todoId', (req, res, next) => {
  Todo.findById(req.params.todoId)
    .then(todo => todo.update(req.body))
    .then(todo => res.json(todo))
    .catch(next)
})

router.delete('/:todoId', (req, res, next) => {
  Todo.destroy({
    where: {
      id: req.params.todoId
    }
  })
    .then(() => res.status(204).end())
    .catch(next)
})

module.exports = router
