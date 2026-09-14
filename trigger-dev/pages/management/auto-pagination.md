> Pinned source for Trigger.dev v4.6.0: [docs/management/auto-pagination.mdx](https://github.com/triggerdotdev/trigger.dev/blob/6172bcd1bc67044a295aa41acb49d92db954de3d/docs/management/auto-pagination.mdx)
> Canonical documentation: https://trigger.dev/docs/management/auto-pagination

# Auto-pagination

Using auto-pagination with the Trigger.dev management API

All list endpoints in the management API support auto-pagination.
You can use `for await … of` syntax to iterate through items across all pages:

```ts
import { runs } from "@trigger.dev/sdk";

async function fetchAllRuns() {
  const allRuns = [];

  for await (const run of runs.list({ limit: 10 })) {
    allRuns.push(run);
  }

  return allRuns;
}
```

You can also use helpers on the return value from any `list` method to get the next/previous page of results:

```ts
import { runs } from "@trigger.dev/sdk";

async function main() {
  let page = await runs.list({ limit: 10 });

  for (const run of page.data) {
    console.log(run);
  }

  while (page.hasNextPage()) {
    page = await page.getNextPage();
    // ... do something with the next page
  }
}
```
