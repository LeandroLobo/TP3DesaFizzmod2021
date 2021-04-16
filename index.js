import express from 'express';
import randomNumbers from './lib/random-numbers.js';
import proyectInfo from './lib/proyect-info.js';

const app = express();

//app.use(express.urlencoded({extended: true}));
//app.use(express.json());

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