> Pinned source for Bun bun-v1.4.2: [docs/guides/test/mock-clock.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/test/mock-clock.mdx)
> Canonical documentation: https://bun.com/docs/guides/test/mock-clock

# Set the system time in Bun's test runner

Set the system time in tests with the `setSystemTime` function from `bun:test`.

```ts
import { test, expect, setSystemTime } from "bun:test";

test("party like it's 1999", () => {
  const date = new Date("1999-01-01T00:00:00.000Z");
  setSystemTime(date); // it's now January 1, 1999

  const now = new Date();
  expect(now.getFullYear()).toBe(1999);
  expect(now.getMonth()).toBe(0);
  expect(now.getDate()).toBe(1);
});
```

***

Call `setSystemTime` in a [lifecycle hook](https://bun.com/docs/test/lifecycle) like `beforeAll` to give your tests a deterministic "fake clock".

```ts
import { test, expect, beforeAll, setSystemTime } from "bun:test";

beforeAll(() => {
  const date = new Date("1999-01-01T00:00:00.000Z");
  setSystemTime(date); // it's now January 1, 1999
});

// tests...
```

***

To reset the system clock to the actual time, call `setSystemTime` with no arguments.

```ts
import { test, expect, beforeAll, setSystemTime } from "bun:test";

setSystemTime(); // reset to actual time
```

***

See [Dates and times](https://bun.com/docs/test/dates-times).
