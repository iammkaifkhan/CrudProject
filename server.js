const app = require('./app.js');

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}...`);

})