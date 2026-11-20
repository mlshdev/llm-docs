> Pinned source for Bun bun-v1.4.5: [docs/guides/util/main.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/util/main.mdx)
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
