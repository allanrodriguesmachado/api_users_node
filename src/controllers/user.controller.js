const AppError = require("../utils/AppError")

class UserController {
     create(request, response) {
        const {name} = request.body;

        if (!name) {
            throw new AppError("Atenção! informe o nome do usuário");
        }

        return response.status(201).json(`${name}`);
    }
}

module.exports = UserController;