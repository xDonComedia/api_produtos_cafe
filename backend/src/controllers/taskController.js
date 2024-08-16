const taskModel = require('../models/taskModel')

const getAll = async (request, response) => {
    const produtos = await taskModel.getAll();
    return response.status(200).json(produtos);

}

const createProduct = async (request, response) => {
    const createdProduct = await taskModel.createProduct(request.body)

    return response.status(201).json(createdProduct)
}

const deleteProduct = async (request, response) => {
    const { id } = request.params;

    await taskModel.deleteProduct(id)
    return response.status(204).json()
}

const updateProduct = async (request, response) => {
    const { id } = request.params;

    await taskModel.updateProduct(id, request.body)
    return response.status(204).json()

}

module.exports = {
    getAll,
    createProduct,
    deleteProduct,
    updateProduct
}