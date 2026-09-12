> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/intendedspatialexperience-7uqrm](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/intendedspatialexperience-7uqrm)

# intendedSpatialExperience

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The AUAudioUnit’s intended spatial audio experience.

## Declaration

```swift
var intendedSpatialExperience: any SpatialAudioExperience { get set }
```

<a id="discussion"></a>

## Discussion

This value is only useful for output audio units; otherwise it’s a no-op.

If unspecified, the property value defaults to [AutomaticSpatialAudio](../automaticspatialaudio.md).
