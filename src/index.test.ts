import { greeting } from "./index";

describe("Index test", () => {
  test("Success test case", () => {
    expect(true).toBeTruthy();
  });

  test("Greeting", () => {
    expect(greeting("HJ")).toMatch("Greeting! HJ!");
  });
});
