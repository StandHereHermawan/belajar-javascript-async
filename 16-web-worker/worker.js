// File Worker

addEventListener("message", function (message) {
    const total = message.data;
    for (let index = 0; index < total; index++) {
        postMessage(index);
    }
});
