> Pinned source for Trigger.dev v4.6.4: [docs/management/advanced-usage.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/management/advanced-usage.mdx)
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
