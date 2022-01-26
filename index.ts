import app from './src/app';

const port = process.env.SERVER_PORT || 3000

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
})