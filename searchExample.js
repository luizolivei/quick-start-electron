const log = require('electron-log');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const search = async () => {
    try {
        const result = "not found";
        await delay(Math.random() * (4000 - 2000) + 2000);
        log.info('Searching here!.');
        return result;
    } catch (e) {
        log.error('Error during searc: ', e);
        return "Error during search";
    }
};

module.exports = search;
