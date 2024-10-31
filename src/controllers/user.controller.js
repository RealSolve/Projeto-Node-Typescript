const getUsers = async (_req, res) => {
  try {
    res.status(200).json({
      message: 'Busca realizada com sucesso',
    });
  } catch (err) {
    res.status(500).json({
      message: 'Erro ao buscar usuários no banco',
      error: err.message,
    });
  }
};

module.exports = { getUsers };