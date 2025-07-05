const soketi = require('@soketi/soketi');

// A forma correta é chamar o pacote importado diretamente como uma função.
// Ele retorna uma 'Promise' que, quando resolvida, significa que o servidor está no ar.
soketi({
    port: process.env.PORT || 6001,
    apps: [
        {
            id: process.env.SOKETI_APP_ID,
            key: process.env.SOKETI_APP_KEY,
            secret: process.env.SOKETI_APP_SECRET,
        },
    ],
}).then(server => {
    // Opcional: Apenas para logar que o servidor foi iniciado com sucesso.
    // O importante é que a função `soketi()` mantém o processo vivo.
    console.log('Soketi server instance has been started successfully!');
    console.log('Listening for connections...');
});
