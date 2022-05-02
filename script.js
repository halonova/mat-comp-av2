var randomNumbers = new Set();
while(randomNumbers.size<6){
  randomNumbers.add(1 + Math.floor(Math.random() * 60));
}
var result = [...randomNumbers.values()]