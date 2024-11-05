import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbConnection } from './database/db.js'

import messageRoutes from './routes/messageRoute.js'

const app = express()
dotenv.config({path: "./.env"})

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/v1/message',messageRoutes)

dbConnection();

export default app;