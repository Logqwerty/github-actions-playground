import { add } from "./index";

describe("Calc module test", () => {
  test("add() method test", () => {
    expect(add(1, 2)).toBe(3);
  });
});
