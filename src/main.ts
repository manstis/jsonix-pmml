import { hello, load } from "./shared/test";

const greeting: string = hello("Michael");
console.log(greeting);

const xml: string = "";
const pmml: object = load(xml);
console.log(pmml);