/**
 * GET /
 * Dashboard 
*/
exports.dashboard = async (req, res) => {
    const locals = {
      title: "Dashboard",
      description: "NodeJS Notes App.",
    }
    res.render('dashboard/index', {locals,layout:'../views/layouts/dashboard'});
}