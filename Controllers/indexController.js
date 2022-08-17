const controlador = {
    index:(req, res, next) => {
        res.render('index', { title: 'Express' });
      },
    users: (req, res, next) => {
        res.send('respond with a resource');
      }
};

module.exports = controlador;