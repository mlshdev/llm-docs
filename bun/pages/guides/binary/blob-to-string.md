> Release-pinned source for Bun bun-v1.4.0: [docs/guides/binary/blob-to-string.mdx](https://bun.com/docs/guides/binary/blob-to-string)

# Convert a Blob to a string

The [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) class provides several methods for consuming its contents in different formats, including `.text()`.

```ts
const blob = new Blob(["hello world"]);
const str = await blob.text();
// => "hello world"
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
