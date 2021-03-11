const util = require("../utility/util.js");

describe("Utility", () => {
  describe("Add", () => {
    it("Should return the sum of two numbers ", () => {
      const addition = util.maths.add(2, 2);

      expect(addition).toEqual(4);
    });
  });

  describe("Subtract", () => {
    it("Should return the result of subtracting two numbers", () => {
      const subtraction = util.maths.subtract(10, 3);

      expect(subtraction).toEqual(7);
    });
  });
});
