function hello(word: string): string {
  return `Hello ${word}!`;
}

function load(xml: string): object {
  const Jsonix = require('jsonix').Jsonix;
  console.log(Jsonix.toString());

  const PMML = require('PMML').PMML
  console.log(PMML.toString());

  const context = new Jsonix.Context([PMML]);
  const unmarshaller = context.createUnmarshaller();

  let o = unmarshaller.unmarshalString(xml);
  console.log(o);

  return o;
}

export { hello, load };