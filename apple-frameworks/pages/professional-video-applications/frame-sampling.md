> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional-video-applications/frame-sampling](https://developer.apple.com/documentation/professional-video-applications/frame-sampling)

# Frame Sampling

**Interface languages:** Swift, Objective-C

**Framework:** Professional Video Applications  
**Kind:** Article

Adjust the clip’s frame rate to match the project’s frame rate.

<a id="overview"></a>

## Overview

Final Cut Pro uses frame sampling to adjust playback speed for time maps and rate conforming. The `frameSampling` attribute accepts one of the following rate conform settings: `floor`, `nearest-neighbor`, `frame-blending`, `optical-flow-classic`, or `optical-flow`. If you apply both time maps and rate conforming on the same clip, specify the same frame sampling method in both.

> **Note**

>  The Final Cut Pro UI uses the term *retime* to refer to a time map.

## See Also

### Timeline Characteristics

- [Timeline Attributes](timeline-attributes.md): Define characteristics of a timeline.
- [Timing Attributes](timing-attributes.md): Schedule the element and its contained or anchored items in a timeline.
- [timeMap](timemap.md): Adjust or retime the playback speed of an element.
- [conform-rate](conform-rate.md): Apply rate conforming to match media frame rate to timeline frame rate.
