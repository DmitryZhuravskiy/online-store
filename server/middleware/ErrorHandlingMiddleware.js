const ApiError = require('../error/ApiError');

module.exports = function (err, req, res, next) {
    if (err instanceof ApiError) {
        res.status(err.status).json({message: err.mesage})
    }
    return res.status(500).json({message: 'непридвиденная ошибка'})
}