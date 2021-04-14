export class Layout {
    
    async buildLayout (dataObj: any) {
        var urlsList = "";
        
        for (let i = 0; i < dataObj.results.length; i++) {
            const element = dataObj.results[i].news_url;
            urlsList = urlsList + element + "\n";
        }

        return urlsList;
    }
}