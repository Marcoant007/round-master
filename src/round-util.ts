import BigNumber from 'bignumber.js';

function roundTo(value: number, decimals: number): number {
    if (typeof value !== 'number' || typeof decimals !== 'number') {
        throw new TypeError('Both value and decimals must be numbers');
    }
    const bigValue = new BigNumber(value);
    return parseFloat(bigValue.toFixed(decimals));
}

export { roundTo };
