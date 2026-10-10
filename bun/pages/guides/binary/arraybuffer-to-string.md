> Pinned source for Bun bun-v1.4.3: [docs/guides/binary/arraybuffer-to-string.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/binary/arraybuffer-to-string.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/arraybuffer-to-string

# Convert an ArrayBuffer to a string

Bun implements the Web-standard [`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder) class for converting between binary data types and strings.

```ts
const buf = new ArrayBuffer(64);
const decoder = new TextDecoder();
const str = decoder.decode(buf);
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
