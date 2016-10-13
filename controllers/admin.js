/**
 * Created by varun on 12/10/16.
 */

module.exports = function(app) {
    app.post('/admin/get', function(req, res) {
        //res.send({});
        res.send({
            name: 'varun',
            event: 'excal',
            society: 'techno',
            status: 'admin'
        });
    });
    app.get('/admin/test', function(req, res) {
        res.send('Hey');
    });
};