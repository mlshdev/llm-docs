> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/intendedspatialaudioexperience-2wthu

# intendedSpatialAudioExperience

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The intended spatial audio experience applied to all AVSampleBufferAudioRenderers within this synchronizer.

## Declaration

```objectivec
@property (nonatomic, copy) CASpatialAudioExperience * intendedSpatialAudioExperience;
```

<a id="discussion"></a>

## Discussion

The default value of CAAutomaticSpatialAudio means the renderers use their AVAudioSession’s intended spatial experience. If the anchoring strategy is impossible (e.g. it uses a destroyed UIScene’s identifier), the renderers follow a “front” anchoring strategy instead.
