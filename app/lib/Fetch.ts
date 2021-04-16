import nodeFetch from 'node-fetch';
var xml2js = require('xml2js')
var parser = new xml2js.Parser(/* options */)

export class Fetch {
    async getJson(url: string) {
        const jsonObj = await (await nodeFetch(url)).json();
        return jsonObj;
    }
}

