import amount from '../../lib/amount.js';

test("plus", () => {
    const ret = amount.plus(234432.9, 0.2);
    expect(ret).toBe(234433.1);
});