
exports.registerUser = (req, res) => {
  const user = req.body;
  res.status(201).json({ message: 'User registered', user });
};

exports.loginUser = (req, res) => {
  res.json({ message: 'Login successful', token: 'fake-jwt-token' });
};
