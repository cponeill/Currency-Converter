var currency = require('./currency');

console.log('50 Bitcoins equals this amount of US Dollars:');
console.log(currency.bitcoinToUs(50));

console.log('30 US dollars equals this amount of Bitcoins:');
console.log(currency.USToBitcoin(30));
