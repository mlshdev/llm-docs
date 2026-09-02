> Release-pinned source for Bun bun-v1.4.0: [docs/guides/read-file/stream.mdx](https://bun.com/docs/guides/read-file/stream)

# Read a file as a ReadableStream

The `Bun.file()` function accepts a path and returns a `BunFile` instance. `BunFile` extends `Blob`, so you can read the file lazily in a variety of formats. Use `.stream()` to consume the file incrementally as a `ReadableStream`.

```ts
const path = "/path/to/package.json";
const file = Bun.file(path);

const stream = file.stream();
```

***

The stream is an [async iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), so you can read its chunks with `for await`.

```ts
for await (const chunk of stream) {
  chunk; // => Uint8Array
}
```

***

See [Streams](https://bun.com/docs/runtime/streams) for more on working with streams in Bun.
