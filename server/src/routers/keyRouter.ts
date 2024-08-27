import express from 'express'

export const keyRouter = express.Router()
// /api/keys/paypal
keyRouter.get('/paypal', (req, res) => {
  res.json({ clientId: process.env.PAYPAL_CLIENT_ID || 'Aavkx2j02nHQazP6RQqlU9QLhu8RPe8bCUHvS_yVd-j2pU1ANCH5La6mZux1scIL-ncQX84eFN1zXjCt' })
})