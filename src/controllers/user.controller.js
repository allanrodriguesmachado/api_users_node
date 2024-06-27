const AppError = require("../utils/AppError")
const sqlConnection = require("../database/sqlite")


class UserController {
    async create(request, response) {
        const {first_name, email} = request.body;

        const database = await sqlConnection();
        const checkUserExist = await database.get(
            "SELECT * FROM users WHERE email = (?)", [email]
        )

        if(checkUserExist) {
            throw new AppError("Este já esta cadastrado")
        }

        await database.run("INSERT INTO users (first_name, email) VALUES (?,?)", [first_name, email])

        return response.status(201).json()
    }
}

module.exports = UserController;