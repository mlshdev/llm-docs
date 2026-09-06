> Release-pinned source for Bun bun-v1.4.2: [docs/guides/util/main.mdx](https://bun.com/docs/guides/util/main)

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
