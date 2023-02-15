import amount from '../../lib/amount.js';

test("minus", () => {
    const ret = amount.minus(234432.9, 0.2);
    expect(ret).toBe(234432.7);
});