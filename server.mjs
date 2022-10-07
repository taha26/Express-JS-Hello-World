import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.port || 3000

app.use(cors());

app.get('/', (req, res) => {
    console.log('Hello World!', req.ip)
    res.send('Hello World ..!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})