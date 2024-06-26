require("express-async-errors");
const connection = require("./database/sqlite")

const  express = require("express");
const AppError = require("./utils/AppError")

const routes = require("./routes")

const app = express();
app.use(express.json())

connection();

app.use(routes)

app.use((error, request, response, next ) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
});

app.listen(3333);