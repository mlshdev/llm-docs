> Release-pinned source for Bun bun-v1.4.0: [docs/guides/binary/typedarray-to-dataview.mdx](https://bun.com/docs/guides/binary/typedarray-to-dataview)

# Convert a Uint8Array to a DataView

A [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) is a *typed array*, a view over data in an underlying `ArrayBuffer`. To convert it to a `DataView`, create one over the same range of data.

```ts
const arr: Uint8Array = ...
const dv = new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
