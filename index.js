qconst soketi = require('@soketi/soketi');

const instance = soketi.server({
    port: process.env.PORT || 6001,
    appManager.array.apps: [
        {
            id: process.env.SOKETI_APP_ID,
            key: process.env.SOKETI_APP_KEY,
            secret: process.env.SOKETI_APP_SECRET,
        },
    ],
});

instance.start();
