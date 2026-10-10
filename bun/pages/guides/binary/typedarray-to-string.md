> Pinned source for Bun bun-v1.4.3: [docs/guides/binary/typedarray-to-string.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/binary/typedarray-to-string.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/typedarray-to-string

# Convert a Uint8Array to a string

Bun implements the Web-standard [`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder) class for converting binary data types like `Uint8Array` to strings.

```ts
const arr = new Uint8Array([104, 101, 108, 108, 111]);
const decoder = new TextDecoder();
const str = decoder.decode(arr);
// => "hello"
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
