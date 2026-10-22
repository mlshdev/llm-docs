> Pinned source for Bun bun-v1.4.4: [docs/guides/runtime/cicd.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/runtime/cicd.mdx)
> Canonical documentation: https://bun.com/docs/guides/runtime/cicd

# Install and run Bun in GitHub Actions

Use the official [`setup-bun`](https://github.com/oven-sh/setup-bun) GitHub Action to install `bun` in your GitHub Actions runner.

```yaml workflow.yml icon="file-code"
name: my-workflow
jobs:
  my-job:
    name: my-job
    runs-on: ubuntu-latest
    steps:
      # ...
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2 # [!code ++]

      # run any `bun` or `bunx` command
      - run: bun install # [!code ++]
      - run: bun index.ts # [!code ++]
      - run: bun run build # [!code ++]
```

***

To specify a version of Bun to install:

```yaml workflow.yml icon="file-code"
name: my-workflow
jobs:
  my-job:
    name: my-job
    runs-on: ubuntu-latest
    steps:
      # ...
      - uses: oven-sh/setup-bun@v2
        with: # [!code ++]
          bun-version: 1.3.3 # or "latest", "canary", "1.3.x" # [!code ++]
```

***

To type check your project, run [`bun check`](https://bun.com/docs/runtime/check#run-in-ci). GitHub shows each type error as an annotation on the pull request diff.

```yaml workflow.yml icon="file-code"
name: my-workflow
jobs:
  my-job:
    name: my-job
    runs-on: ubuntu-latest
    steps:
      # ...
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install
      - run: bun check # [!code ++]
```

***

See the [`setup-bun` README](https://github.com/oven-sh/setup-bun) for all options.
