> Pinned source for Bun bun-v1.4.3: [docs/guides/util/sleep.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/util/sleep.mdx)
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
