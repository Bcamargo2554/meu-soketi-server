const Soketi = require('@soketi/soketi');

// A forma correta de iniciar é usando "new Soketi(...)"
const instance = new Soketi({
    port: process.env.PORT || 6001,
    apps: [
        {
            id: process.env.SOKETI_APP_ID,
            key: process.env.SOKETI_APP_KEY,
            secret: process.env.SOKETI_APP_SECRET,
        },
    ],
});

// Inicia o servidor e loga o sucesso
instance.start().then(() => {
    console.log('Soketi server started successfully on Render!');
});

