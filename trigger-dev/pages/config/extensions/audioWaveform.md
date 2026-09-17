> Pinned source for Trigger.dev v4.6.3: [docs/config/extensions/audioWaveform.mdx](https://github.com/triggerdotdev/trigger.dev/blob/2d03fee2e3ff368128302ed4c783ba4e32d1cb00/docs/config/extensions/audioWaveform.mdx)
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
    extensions: [audioWaveform()], // uses verson 1.1.0 of audiowaveform by default
  },
});
```
