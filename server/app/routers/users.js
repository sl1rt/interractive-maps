const Router = require('../Router');
const methods = require('./../methods/users');
const router = new Router();

router.get('/users', methods.getUsers);
router.post('/users', methods.createUser);

module.exports = router;