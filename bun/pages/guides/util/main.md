> Pinned source for Bun bun-v1.4.2: [docs/guides/util/main.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/util/main.mdx)
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
