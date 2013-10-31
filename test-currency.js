// Path uses ./ to indicate that module exists within same directory as application script
var currency = require('./currency');

// Use currency modules bitcoinToUs function.
console.log('50 Bitcoins equals this amount of US Dollars:');
console.log(currency.bitcoinToUs(50));

// User curreny modules USToBitcoin function.
console.log('30 US dollars equals this amount of Bitcoins:');
console.log(currency.USToBitcoin(30));

// User currency modules bitcoinToCanada function.
console.log('100 Canadian Dollars equals this amount of Bitcoins');
console.log(currency.canadianToBitcoin);
