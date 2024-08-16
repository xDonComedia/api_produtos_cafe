const connection = require('./connection')

const getAll = async () => {
    const [produtos] = await connection.execute('SELECT * FROM products')
    return produtos
}

const createProduct = async (products) => {

    const { produto } = products

    const query = 'INSERT INTO products(produto, preco, descricao) VALUES (?, ?, ?)'

    const [createdProduct] = await connection.execute(query, [produto, '0.00', 'definir'])
    return { insertID: createdProduct.insertID }

}

const deleteProduct = async (id) => {
    const removedProduct = await connection.execute('DELETE FROM products WHERE id = ?', [id])
    return removedProduct

}

const updateProduct = async (id, products) => {
    const { produto, preco } = products

    const query = 'UPDATE products SET produto = ?, preco = ? WHERE id =?'

    const updatedProduct = await connection.execute(query, [produto, preco, id])
    return updatedProduct

}

module.exports = {
    getAll,
    createProduct,
    deleteProduct,
    updateProduct
}