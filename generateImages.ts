import { constructLayerToDna } from "./src/core";
import { Image } from "./src/draw";

(async() => {
    try {
        const _dnaListJSON: number[][] = require('./generated/stats/_dnaList.json');
        
        if(!_dnaListJSON) {
            console.log(`DNA List is empty!!!`);
            return;
        }

        const start = performance.now();
        for(const _ in _dnaListJSON) {
            const _dnaLayerObjectList =  constructLayerToDna(_dnaListJSON[_]);
            
            const create = new Image(_dnaLayerObjectList);
            await create.generate(+_);
        }

        const stop = performance.now();

        console.log(`Execution time: ${stop - start} ms, ${(stop-start)/60000} mins`);
    } catch(error) {
        console.log(error);
    }
})();
