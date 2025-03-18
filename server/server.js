const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOptions));

app.get('/api', (req, res) => {
    res.json({ 
        infantry: [
            { name: "Test1" },
            { name: "Test2" },
            { name: "Test3" },
            { name: "Test4" },
            { name: "Test5" }
        ] 
    });
});
app.listen(8070, () => {
    console.log('Server is running on port 8070');
});