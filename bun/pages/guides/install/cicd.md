> Pinned source for Bun bun-v1.4.5: [docs/guides/install/cicd.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/install/cicd.mdx)
> Canonical documentation: https://bun.com/docs/guides/install/cicd

# Install dependencies with Bun in GitHub Actions

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
          bun-version: "latest" # or "canary" # [!code ++]
```

***

See the [`setup-bun` README](https://github.com/oven-sh/setup-bun).
