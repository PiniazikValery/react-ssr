import express from 'express';
import renderer from './renderer';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => { 
    const content = renderer();
    res.send(content);
});

app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
});
