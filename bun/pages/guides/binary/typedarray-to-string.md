> Release-pinned source for Bun bun-v1.4.2: [docs/guides/binary/typedarray-to-string.mdx](https://bun.com/docs/guides/binary/typedarray-to-string)

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
