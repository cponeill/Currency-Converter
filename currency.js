var bitcoinValue = 205.0;

function roundDecimalPlace(amount) {
  return Math.round(amount * 100) / 100;
}

exports.bitcoinnToUs = function(bitcoin) {
  return roundDecimalPlace(bitcoin * bitcoinValue);
}

exports.USToBitcoin = function(us) {
  return roundDecimalPlace(us / bitcoinValue);
}
