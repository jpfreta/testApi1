import Express from 'express';
import { routers } from '../router/router';

export const server = Express();
server.use('/', routers);
server.listen(6131, ()=>{console.log('App On http://localhost:6131');});