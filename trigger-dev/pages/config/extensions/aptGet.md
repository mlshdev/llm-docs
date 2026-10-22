> Pinned source for Trigger.dev v4.7.7: [docs/config/extensions/aptGet.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ffc950ee0d4fb2bdfbc0d368bba8d6e25e8d6e72/docs/config/extensions/aptGet.mdx)
> Canonical documentation: https://trigger.dev/docs/config/extensions/aptGet

# apt-get

Use the aptGet build extension to install system packages into the deployed image

You can install system packages into the deployed image using the `aptGet` extension:

```ts
import { defineConfig } from "@trigger.dev/sdk";
import { aptGet } from "@trigger.dev/build/extensions/core";

export default defineConfig({
  project: "<project ref>",
  // Your other config settings...
  build: {
    extensions: [aptGet({ packages: ["ffmpeg"] })],
  },
});
```

If you want to install a specific version of a package, you can specify the version like this:

```ts
import { defineConfig } from "@trigger.dev/sdk";

export default defineConfig({
  project: "<project ref>",
  // Your other config settings...
  build: {
    extensions: [aptGet({ packages: ["ffmpeg=6.0-4"] })],
  },
});
```
