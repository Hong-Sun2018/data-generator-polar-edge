import { insertRow }  from './database/DatabaseApi.js';
import { generateRandomData } from './services/GenerateRandamData.js'; 

console.log("hello world");

for (let i=0 ; i< 10; i++) {
    insertRow(generateRandomData('0001'));
}


