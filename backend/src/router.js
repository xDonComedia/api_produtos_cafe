const express = require('express')

const router = express.Router()

const taskController = require('./controllers/taskController')
const taskMiddleware = require('./middleware/productsMiddleware')

router.get('/produtos', taskController.getAll);
router.post('/produtos', taskMiddleware.validateFieldProduto, taskController.createProduct);
router.delete('/produtos/:id', taskController.deleteProduct);
router.put('/produtos/:id',
    taskMiddleware.validateFieldProduto,
    taskMiddleware.validateFieldPreco,
    taskController.updateProduct
);

module.exports = router