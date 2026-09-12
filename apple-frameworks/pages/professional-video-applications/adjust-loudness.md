> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional-video-applications/adjust-loudness](https://developer.apple.com/documentation/professional-video-applications/adjust-loudness)

# adjust-loudness

**Interface languages:** Swift, Objective-C

**Framework:** Professional Video Applications  
**Kind:** Article

Modifies the loudness.

<a id="overview"></a>

## Overview

To modify the loudness, use the following attributes:

| Attribute | Description |
| --- | --- |
| `amount` | Specifies the overall loudness amount, as a percentage, to increase or decrease. A value between 0 and 100. |
| `uniformity` | Specifies the dynamic range, as a percentage, to increase or decrease. A value between 0 and 100. |

## See Also

### Audio Adjustment Elements

- [adjust-EQ](adjust-eq.md): Specifies the equalization to apply to a clip.
- [adjust-humReduction](adjust-humreduction.md): Applies hum reduction at the frequency, either 50 or 60 Hz, that the frequency attribute specifies.
- [adjust-matchEQ](adjust-matcheq.md): Specifies the equalization to apply, in an internal format, to match another clip’s frequency characteristics.
- [adjust-noiseReduction](adjust-noisereduction.md): Applies noise reduction with a value between 0 and 100 that the amount attribute specifies.
- [adjust-panner](adjust-panner.md): Modifies the audio-panning levels.
- [adjust-volume](adjust-volume.md): Modifies the volume of a clip in dB.
