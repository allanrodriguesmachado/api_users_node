
const {Router} = require("express");

const usersRoutes = Router();

const UsersController = require("../controllers/user.controller");

function myMiddleware(request, response, next) {
    if (!request.body.isAdmin) {
        return response.json({
            message: "User unauthorizad"
        })
    }

    next();
}

const userController = new UsersController()

usersRoutes.post("/", myMiddleware, userController.create);

module.exports = usersRoutes;