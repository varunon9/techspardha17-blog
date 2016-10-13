/**
 * Created by varun on 13/10/16.
 */

module.exports = function(req, res, next) {
    console.log('Authentication called');
    next();
};