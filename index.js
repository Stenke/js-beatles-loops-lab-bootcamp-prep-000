// add solution here
function theBeatlesPlay(arrayMusician, arrayInstrument) {
  var emptyArray = [];
  for ( i = 0; i < arrayMusician.length; i++) {
    emptyArray.push(arrayMusician[i] + " plays " + arrayInstrument[i]);
  }
  return emptyArray;
}