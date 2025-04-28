
exports.createOrder = (req, res) => {
  const order = req.body;
  res.status(201).json({ message: 'Order created', order });
};

exports.getOrders = (req, res) => {
  res.json([{ id: 101, status: 'shipped' }, { id: 102, status: 'pending' }]);
};
