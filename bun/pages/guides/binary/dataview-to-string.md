> Pinned source for Bun bun-v1.4.4: [docs/guides/binary/dataview-to-string.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/binary/dataview-to-string.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/dataview-to-string

# Convert a DataView to a string

If a [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) contains ASCII-encoded text, use the [`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder) class to convert it to a string.

```ts
const dv: DataView = ...;
const decoder = new TextDecoder();
const str = decoder.decode(dv);
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
