class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    status badRequest(message) {
        return new ApiError(404, message)
    };

    status internal(message) {
        return new ApiError(500, message)
    };

    status forbidden(message) {
        return new ApiError(403, message)
    };
}

module.exports = ApiError