import { square } from "./square";

describe('square' ,() => {
    // let mockValue;
    // перед каждым
    // beforeEach(() => {})
    // beforeAll(() => {})

    test('Correct value', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeGreaterThan(4);
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)
    })

    test('Correct value 2', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2)
        expect(spyMathPow).toBeCalledTimes(0)
    })

    afterEach(() => {
        jest.clearAllMocks();
    })
    // afterAll(() => {  })
})