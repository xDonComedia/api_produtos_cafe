const validateFieldProduto = (request, response, next) => {
    const { body } = request

    if (body.produto === undefined) {
        return response.status(400).json9({ message: 'o campo produto é obrigatorio' })
    }

    if (body.produto === "") {
        return response.status(400).json({ message: 'o campo produto não pode ser vazio' })
    }

    next()
}

const validateFieldPreco = (request, response, next) => {
    const { body } = request

    if (body.preco === undefined) {
        return response.status(400).json9({ message: 'o campo preco é obrigatorio' })
    }

    if (body.preco === "") {
        return response.status(400).json({ message: 'o campo preco não pode ser vazio' })
    }

    next()
}

module.exports = {
    validateFieldProduto,
    validateFieldPreco
}