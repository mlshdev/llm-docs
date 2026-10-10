> Pinned source for Bun bun-v1.4.3: [docs/guides/write-file/stream.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/write-file/stream.mdx)
> Canonical documentation: https://bun.com/docs/guides/write-file/stream

# Write a ReadableStream to a file

To write a `ReadableStream` to disk, call `.writer()` on a `BunFile` to get a [`FileSink`](https://bun.com/docs/runtime/file-io#incremental-writing-with-filesink). The stream is an async iterable, so write each of its chunks to the `FileSink` with `for await`. Then call `.end()` to flush the buffer and close the file.

```ts
const stream: ReadableStream = ...;
const path = "./file.txt";
const writer = Bun.file(path).writer();

for await (const chunk of stream) {
  writer.write(chunk);
}

await writer.end();
```

***

`.writer()` creates the file if it doesn't exist, but does not truncate an existing file. If the file may already exist, delete it first.

***

See [`FileSink`](https://bun.com/docs/runtime/file-io#incremental-writing-with-filesink).
