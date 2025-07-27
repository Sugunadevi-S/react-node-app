    const express = require('express');
    const app = express();
    const port = 5000;

    app.get('/', (req, res) => {
        res.send('Hello from Express!');
    });

    app.listen(port, () => {
        console.log(`Express server running at http://localhost:${port}/`);
    });