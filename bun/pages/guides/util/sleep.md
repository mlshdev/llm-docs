> Pinned source for Bun bun-v1.4.5: [docs/guides/util/sleep.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/util/sleep.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/sleep

# Sleep for a fixed number of milliseconds

`Bun.sleep()` returns a void `Promise` that resolves after a given number of milliseconds.

```ts
// sleep for 1 second
await Bun.sleep(1000);
```

***

Internally, `Bun.sleep()` is equivalent to the following [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout) snippet.

```ts
await new Promise(resolve => setTimeout(resolve, ms));
```

***

See [Utils](https://bun.com/docs/runtime/utils).
