> Pinned source for Bun bun-v1.4.2: [docs/guides/util/sleep.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/util/sleep.mdx)
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
