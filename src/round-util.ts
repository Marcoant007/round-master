function roundTo(value: number, decimals: number): number {
    if (typeof value !== 'number' || typeof decimals !== 'number') {
        throw new TypeError('Both value and decimals must be numbers');
    }

    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

export { roundTo };
