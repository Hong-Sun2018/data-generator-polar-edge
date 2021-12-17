import { insertRow }  from './database/DatabaseApi.js';
import { generateListOfData } from './services/GenerateRandamData.js'; 

console.log("hello world");
const timeStamp = Math.floor(Date.now()/1000)

const dataList = generateListOfData('001', 100, timeStamp, 300);

for (let data of dataList) {
    // console.log(data)
    insertRow(data);
}