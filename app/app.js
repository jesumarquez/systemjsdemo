import $ from 'jquery';
import { Person } from './module1/index'
export class MyApp{
    getSpanText(spanId){
        let p = new Person('pepe');
        return $(spanId).text() + ' '  + p.name;
    }
};