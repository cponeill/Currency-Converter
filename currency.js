var bitcoinValue = 205.0; // Or whatever the value is at the moment. I am working on a way to bring that data into this script in real-time. 

function roundDecimalPlace(amount) {
  return Math.round(amount * 100) / 100;
}


// bitcoinToUs function is set in exports module so it can be used by code requiring this module.
exports.bitcoinnToUs = function(bitcoin) {
  return roundDecimalPlace(bitcoin * bitcoinValue);
}

// USToBitcoin function is also set in exports module.
exports.USToBitcoin = function(us) {
  return roundDecimalPlace(us / bitcoinValue);
}
