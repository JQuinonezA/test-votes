import express from 'express'

import aunthenticationRoutes from './aunthentication.routes';
import usersRoutes from './users.routes';
import provinceRoutes from './province.routes';
const router = express.Router();

export default (): express.Router => {
   // aunthenticationRoutes(router);
    usersRoutes(router);
    provinceRoutes(router);
    return router;
};