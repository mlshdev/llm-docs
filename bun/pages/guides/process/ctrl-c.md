> Pinned source for Bun bun-v1.4.4: [docs/guides/process/ctrl-c.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/process/ctrl-c.mdx)
> Canonical documentation: https://bun.com/docs/guides/process/ctrl-c

# Listen for CTRL+C

The `ctrl+c` shortcut sends an *interrupt signal* to the running process. Intercept it by listening for the `SIGINT` event. To close the process, you must explicitly call `process.exit()`.

```ts process.ts icon="/icons/typescript.svg"
process.on("SIGINT", () => {
  console.log("Ctrl-C was pressed");
  process.exit();
});
```

***

See [Utils](https://bun.com/docs/runtime/utils) for more utilities.
