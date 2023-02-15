import amount from '../../lib/amount.js';

test("plus", () => {
    const ret = amount.cmp(234432.9, 0.2);
    expect(ret).toBe(1);
});