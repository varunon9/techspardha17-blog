/**
 * Created by varun on 10/10/16.
 */
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.set('config', require('./config'));

app.use(bodyParser.json({
    limit: '2mb'
})); // support json encoded bodies

app.use(bodyParser.urlencoded({
    limit: '2mb',
    extended: true
})); // support encoded bodies

app.set('views', __dirname + '/views');
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, '0.0.0.0', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});

//middlewares goes here
//app.use(require('./middlewares'));
//routes goes here
//app.use(require('./controllers'));

//catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

//error handlers
//development error handler: will print stacktrace
if (app.get('env') == 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            errorMessage: err.message,
            error: err
        });
    });
}
//production error handler: no stacktrace leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        errorMessage: err.message,
        error: ''
    });
});
