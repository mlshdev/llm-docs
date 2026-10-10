> Pinned source for Bun bun-v1.4.3: [docs/guides/util/main.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/util/main.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/main

# Get the absolute path to the current entrypoint

The `Bun.main` property contains the absolute path to the current entrypoint.

```ts foo.ts icon="/icons/typescript.svg"
console.log(Bun.main);
```

```ts index.ts icon="/icons/typescript.svg"
import "./foo.ts";
```

***

The printed path is the file executed with `bun run`.

```sh terminal icon="terminal"
bun run index.ts
```

```txt
/path/to/index.ts
```

```sh terminal icon="terminal"
bun run foo.ts
```

```txt
/path/to/foo.ts
```

***

See [Utils](https://bun.com/docs/runtime/utils).
