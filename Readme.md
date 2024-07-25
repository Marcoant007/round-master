# round-util

A library to perform consistent rounding of numbers in JavaScript and TypeScript, ensuring precision for financial calculations and other use cases where accurate decimal rounding is essential.

## Installation

To install the library, use npm:

```sh
npm install round-master
```

## Usage
```sh

import { roundTo } from 'round-master';

const value = 1.23456789;
const roundedValue = roundTo(value, 2);

console.log(roundedValue); // 1.23
```

## Example 

```sh
import { roundTo } from 'round-master';

const values = [1.23456789, 0.1 + 0.2, -1.23456789, 123456789.123456789];
const decimals = [2, 2, 2, 8];

values.forEach((value, index) => {
    const roundedValue = roundTo(value, decimals[index]);
    console.log(`Original: ${value}, Rounded: ${roundedValue}`);
});
```


## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

