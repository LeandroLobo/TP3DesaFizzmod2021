import express from 'express';
import randomNumbers from './lib/random-numbers.js';
import proyectInfo from './lib/proyect-info.js';
import operation from './lib/operation.js';

const app = express();

/*********************************************************
 * Routing GET
 * '/' defined in 'public' folder as static resource
 *********************************************************/
app.use(express.static('public'));

app.get('/random', (req,res) => {
    res.send(randomNumbers());
});

app.get('/info', async (req,res) => {
    res.send(await proyectInfo());
});

app.get('/operaciones', (req,res) => {
    res.send(operation(req.query));
});

/*********************************************************
 * Running server
 *********************************************************/
app.set('PORT', process.env.PORT || 8888);

const server = app.listen(app.get('PORT'), () => {
    console.log('\n-------------------------------------------');
    console.log(`Server ready, listening at PORT: ${server.address().port}`);
    console.log('-------------------------------------------\n');
});

server.on('error', error => console.log(`Server error => ${error}`));