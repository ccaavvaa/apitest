import * as express from 'express';
let router = express.Router();
let app:express.Application = express();

router.get('/x', (req, res)=>{
    console.log('get');
    res.send(new Buffer('hello x'));
})

app.use('/app', router);
app.listen(8080); 
export {app}