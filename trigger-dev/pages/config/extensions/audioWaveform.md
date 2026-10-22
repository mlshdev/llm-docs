> Pinned source for Trigger.dev v4.7.7: [docs/config/extensions/audioWaveform.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ffc950ee0d4fb2bdfbc0d368bba8d6e25e8d6e72/docs/config/extensions/audioWaveform.mdx)
> Canonical documentation: https://trigger.dev/docs/config/extensions/audioWaveform

# Audio Waveform

Use the audioWaveform build extension to add support for Audio Waveform in your project

Previously, we installed [Audio Waveform](https://github.com/bbc/audiowaveform) in the build image. That's been moved to a build extension:

```ts
import { defineConfig } from "@trigger.dev/sdk";
import { audioWaveform } from "@trigger.dev/build/extensions/audioWaveform";

export default defineConfig({
  project: "<project ref>",
  // Your other config settings...
  build: {
    extensions: [audioWaveform()], // uses version 1.10.1 of audiowaveform by default
  },
});
```

To use a different version, pass the `version` and `checksum` options to `audioWaveform()`.
