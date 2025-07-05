const soketi = require('@soketi/soketi');

// Configura e inicia o servidor Soketi
const instance = soketi.server({
    // Render fornecerá a porta através de uma variável de ambiente
    port: process.env.PORT || 6001,

    // Define o nosso aplicativo, usando as variáveis de ambiente que configuraremos no Render
    apps: [
        {
            id: process.env.SOKETI_APP_ID,
            key: process.env.SOKETI_APP_KEY,
            secret: process.env.SOKETI_APP_SECRET,
        },
    ],
});

// Inicia o servidor
instance.start().then(() => {
    console.log('Soketi server started successfully on Render!');
});
