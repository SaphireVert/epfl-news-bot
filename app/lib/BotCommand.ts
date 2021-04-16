import { Fetch } from "./Fetch";
import { Layout } from "./Layout";

const fetch = new Fetch();
const layout = new Layout();

export class BotCommand {
    async latest (format?: string, count?: number) {
        // layout.test;
        // console.log(await layout.buildLayout({data: testToto, layout: {format: "full", count: 5}}));
        let jsonObj = await fetch.getJson('https://actu.epfl.ch/api/v1/news/');
        console.log("JsonObj value: " + jsonObj.results);
        
        let text = await layout.buildLayout(jsonObj, format, count)
        
        console.log("Typeof text: " + typeof text);
        console.log(text);
        if (typeof text != 'undefined') {
            return text;
        } else {
            return 'parsing error...';
        }
    }
}