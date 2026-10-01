> Pinned source for Trigger.dev v4.7.0: [docs/config/extensions/aptGet.mdx](https://github.com/triggerdotdev/trigger.dev/blob/f049c346c80844a3932156f476ec516023bb7f4d/docs/config/extensions/aptGet.mdx)
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
