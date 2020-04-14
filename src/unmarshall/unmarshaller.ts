function unmarshal(xml: string): any {
  const Jsonix = require('jsonix').Jsonix;
  const PMML = require('../generated/PMML').PMML

  const context = new Jsonix.Context([PMML]);
  const unmarshaller = context.createUnmarshaller();

  let o = unmarshaller.unmarshalString(xml);

  return o;
}

export { unmarshal };