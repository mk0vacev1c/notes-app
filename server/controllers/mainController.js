/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
    const locals = {
      title: "NodeJs Notes",
      description: "NodeJS Notes App.",
    }
    res.render('index', locals);
}