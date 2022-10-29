let express = require('express');

let server = express();
server.get('/', (req, res) => {
    return res.json({ message: "success yeah" })
})
const port = 3000;
server.listen(port, () => {
    console.log('server running at port ', port)
})