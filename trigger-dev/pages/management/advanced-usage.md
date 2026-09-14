> Pinned source for Trigger.dev v4.6.0: [docs/management/advanced-usage.mdx](https://github.com/triggerdotdev/trigger.dev/blob/6172bcd1bc67044a295aa41acb49d92db954de3d/docs/management/advanced-usage.mdx)
> Canonical documentation: https://trigger.dev/docs/management/advanced-usage

# Advanced usage

Advanced usage of the Trigger.dev management API

### Accessing raw HTTP responses

All API methods return a `Promise` subclass `ApiPromise` that includes helpers for accessing the underlying HTTP response:

```ts
import { runs } from "@trigger.dev/sdk";

async function main() {
  const { data: run, response: raw } = await runs.retrieve("run_1234").withResponse();

  console.log(raw.status);
  console.log(raw.headers);

  const response = await runs.retrieve("run_1234").asResponse(); // Returns a Response object

  console.log(response.status);
  console.log(response.headers);
}
```
