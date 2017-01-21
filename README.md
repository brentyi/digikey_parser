A tiny package for retrieving part information from Digikey barcode numbers.

## Installation

```
npm install digikey_parser --save
```

## Usage

```
  const DigikeyParser = require('digikey_parser');

  DigikeyParser('5026370', function(data) {
    console.log(data);
  });
  
  // Expected output:
  // { manufacturer: 'Murata Electronics North America',
  //   partNumber: 'GRM155R62A104KE14D',
  //   description: 'CAP CER 0.1UF 100V X5R 0402' }
```
