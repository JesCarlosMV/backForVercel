import express from 'express';

const app = express();

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});

app.get('https://back-for-vercel.vercel.app/', (req, res) => {
  res.send('Hello World!');
});
