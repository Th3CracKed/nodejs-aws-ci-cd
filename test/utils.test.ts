import { multiply } from "./../src/util/utils";

describe("multiply", () => {
    it("should be equal", () => {
        const result = multiply(4 , 2);
        expect(result).toEqual(8);
    });
});
