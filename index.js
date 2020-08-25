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
  const facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  const array = [];
  while (array.length < facts.length) {
  array.push(facts[i] + "!!!")
  i++;
  }
  return facts;
}