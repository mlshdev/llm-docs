> Release-pinned source for Bun bun-v1.4.2: [docs/guides/test/skip-tests.mdx](https://bun.com/docs/guides/test/skip-tests)

# Skip tests with the Bun test runner

To skip a test with the Bun test runner, use the `test.skip` function.

```ts test.test.ts icon="/icons/typescript.svg"
import { test, expect } from "bun:test";

test.skip("unimplemented feature", () => {
  expect(Bun.isAwesome()).toBe(true);
});
```

***

Running `bun test` doesn't execute this test. The terminal output marks it as skipped.

```sh terminal icon="terminal"
bun test
```

```txt
test.test.ts:
» unimplemented feature

 0 pass
 1 skip
 0 fail
Ran 1 test across 1 file. [74.00ms]
```

***

See also:

- [Mark a test as a todo](https://bun.com/docs/guides/test/todo-tests)
- [Writing tests](https://bun.com/docs/test/writing-tests)
