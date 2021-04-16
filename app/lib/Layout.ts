export class Layout {

    async buildLayout (dataObj: any, format?: string, count?: number) {
        // console.log(`format value is: ${format} and count value is ${count}`);

        if (typeof count == 'undefined' || isNaN(count)) {
            // console.log("count is undefined");
            count = 10;
        }
        
        
        if (typeof format != 'undefined') {
            switch (format) {
                case 'auto': {
                    return await this.autoLayout(dataObj, count);
                    break;
                }
                case 'digest': {
                    return await this.digestLayout(dataObj, count);
                    break;
                }
                case 'full': {
                    return await this.fullLayout(dataObj, count);
                }
                default: {
                    return await this.autoLayout(dataObj, count);
                    break;
                }
            }
        } else {
            // console.log("format is undefined");
            return await this.autoLayout(dataObj, count);
        }
    }

    private async autoLayout(dataObj: any, count: number) {
        // console.log("auto layout");
        // console.log(count);
        let maxEntry: number = 5;
        if (count == 0) {
            console.error("No entry in dataObj...");
        } else if (count <= maxEntry) {
            return await this.fullLayout(dataObj, count);
        } else if (count > maxEntry) {
            return await this.digestLayout(dataObj, count);
        } else {
            console.error("Unknown error...");
        }
    }

    private async fullLayout(dataObj: any, count: number) {
        // console.log("full layout");
        var urlsList = "";
        for (let i = 0; i < count; i++) {
            const element = dataObj.results[i].news_url;
            urlsList = urlsList + element + "\n";
        }
        return urlsList;
    }

    private async digestLayout(dataObj: any, count: number) {
        // console.log("digest layout");
        
        var urlsList = "";
        for (let i = 0; i < count; i++) {
            const element = dataObj.results[i].news_url;
            urlsList = urlsList + element + "\n";
        }
        return urlsList;
    }
    
    // private async genericLayout(dataObj: any, elementsToDisplay: any) {
    //     var urlsList = "";
    //     for (let i = 0; i < count; i++) {
    //         const element = dataObj.results[i].news_url;
    //         urlsList = urlsList + element + "\n";
    //     }
    //     return urlsList;
    // }
}