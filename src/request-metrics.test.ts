import { describe, expect, test } from "bun:test";
import { recordRequestAttempt, withRequestMetrics } from "./request-metrics.ts";

describe("request metrics", () => {
  test("isolates concurrent request counters", async () => {
    const [left, right] = await Promise.all([
      withRequestMetrics(async () => {
        recordRequestAttempt();
        await Promise.resolve();
        recordRequestAttempt();
        return "left";
      }),
      withRequestMetrics(async () => {
        recordRequestAttempt();
        return "right";
      }),
    ]);
    expect(left).toEqual({ value: "left", requestAttempts: 2 });
    expect(right).toEqual({ value: "right", requestAttempts: 1 });
  });
});
