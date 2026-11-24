import { test, expect } from "bun:test";
import { add } from "./add";

test("add returns the sum", () => {
  expect(add(2, 3)).toBe(5);
});
