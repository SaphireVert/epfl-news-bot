import nodeFetch from 'node-fetch';
var xml2js = require('xml2js')
var parser = new xml2js.Parser(/* options */)

export class Fetch {
    
    asyncBypass() {
        return this.test()
    }

    async test() {
        const test = await (await nodeFetch('https://actu.epfl.ch/api/v1/news/')).json();
        return test.results[0].title;
    }
    
    async getUrlList() {
        const jsonObj = await (await nodeFetch('https://actu.epfl.ch/api/v1/news/')).json();
        var urlsList = "";
        console.log(jsonObj);
        
        for (let i = 0; i < jsonObj.results.length; i++) {
            const element = jsonObj.results[i].news_url;
            urlsList = urlsList + element + "\n";
        }

        return urlsList;
    }

    async getUrl() {
        const test = await (await nodeFetch('https://actu.epfl.ch/api/v1/news/')).json();
        console.log(test.results[0].title);
    }

    async request() {
        return await nodeFetch('https://actu.epfl.ch/api/v1/news/')
            .then((res) => res.text())
            .then((body: string) => {
                return this.xml2jsobject(body)
            })
    }

    xml2jsobject(data: string) {
        return parser
            .parseStringPromise(data)
            .then(function (result: object) {
                return result
            })
            .catch(function (err: Error) {
                // logger.error(err)
            })
    }
    
}

