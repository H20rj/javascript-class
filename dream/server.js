import * as dotenv from 'dotenv';
dotenv.config()
import OpenAi from 'openai';

const openai = new OpenAi({
    apiKey: process.env.OPENAI,
});
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

app.post('/dream', async (req, res) => {
    const prompt = req.body.prompt;

    const aiResponse = await openai.images.generate({
        prompt,
        n: 1,
        size: '512x512',
    })

    const image = aiResponse.data[0].url;
    res.send({ image });
})

app.listen('8080', () => console.log('Make art on http://localhost:8080/dream'));


