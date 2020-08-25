// add solution here
function theBeatlesPlay(arrayMusician, arrayInstrument) {
  var i = 0;
  var array = [];
  for ( i = 0; i < arrayMusician.length; i++) {
    array.push(arrayMusician[i] + " plays " + arrayInstrument[i]);
  }
  return array;
}
function johnLennonFacts(facts) {
  const facts = [];
  const array = [];
  i = 0;
  while (i < facts.length) {
  facts.push(facts[i] + "!!!")
  i++;
  }
  return facts;
}