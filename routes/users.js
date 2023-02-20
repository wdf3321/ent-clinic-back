import { Router } from 'express'
import content from '../middleware/content.js'
import * as auth from '../middleware/auth.js'
import { register, login, getUser, logout, editUser, getAllUser, getMyReserve, deleteUser, searchUserbyName, searchUserbyAccount, searchUserbyPhone } from '../controllers/users.js'
// ,, extend, , editCart, getCart
const router = Router()

router.post('/', content('application/json'), register)
router.post('/login', content('application/json'), auth.login, login)
router.delete('/logout', auth.jwt, logout)
router.get('/', auth.jwt, getUser)
router.post('/search/name', content('application/json'), searchUserbyName)
router.post('/search/account', content('application/json'), searchUserbyAccount)
router.post('/search/phone', content('application/json'), searchUserbyPhone)
router.patch('/:id', content('application/json'), auth.jwt, editUser)
router.get('/all', auth.jwt, getAllUser)
router.get('/:id', auth.jwt, getMyReserve)
router.delete('/:id', auth.jwt, deleteUser)
// router.patch('/extend', auth.jwt, extend)
// router.patch('/:id', content('multipart/form-data'), auth.jwt, editUser)
// router.post('/cart', content('application/json'), auth.jwt, editCart)
// router.get('/cart', auth.jwt, getCart)

export default router
