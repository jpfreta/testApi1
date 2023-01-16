import Express  from 'express';
import path from 'path';

export const routers = Express.Router();

routers.use(Express.static(path.join('source/views')));
routers.get('/', (req, res)=>{
	res.send('index');
});