
exports.getAllProducts = (req, res) => {
  res.json([{ id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }]);
};

exports.getProductById = (req, res) => {
  res.json({ id: req.params.id, name: 'Sample Product' });
};
