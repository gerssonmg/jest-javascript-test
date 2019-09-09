test('the data', () => {
    function callback(data) {
        expect(data).toBe('peanut butter');
    }
    fetchData(callback);
});