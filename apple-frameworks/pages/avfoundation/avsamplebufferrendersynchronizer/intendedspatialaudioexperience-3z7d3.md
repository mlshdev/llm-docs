> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/intendedspatialaudioexperience-3z7d3

# intendedSpatialAudioExperience

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The synchronizer’s intended Spatial Audio experience.

## Declaration

```swift
var intendedSpatialAudioExperience: any SpatialAudioExperience { get set }
```

<a id="discussion"></a>

## Discussion

The value applies to all [AVSampleBufferAudioRenderer](../avsamplebufferaudiorenderer.md) objects within this synchronizer.

If unspecified, the property value defaults to [CAAutomaticSpatialAudio](../../audiotoolbox/caautomaticspatialaudio.md).
