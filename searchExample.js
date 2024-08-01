const log = require('electron-log');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const search = async ({first, second}) => {
    try {
        const result = `you had search for ${first} ${second}`;
        await delay(Math.random() * (4000 - 2000) + 2000);
        log.info('Searching here!.');
        return result;
    } catch (e) {
        log.error('Error during searc: ', e);
        return "Error during search";
    }
};

module.exports = search;
