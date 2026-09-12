> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/intendedspatialexperience-55ca0](https://developer.apple.com/documentation/corehaptics/chhapticengine/intendedspatialexperience-55ca0)

# intendedSpatialExperience

**Framework:** CoreHaptics  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The CHHapticEngine’s intended [SpatialAudioExperience](../../audiotoolbox/spatialaudioexperience.md).

## Declaration

```swift
var intendedSpatialExperience: any SpatialAudioExperience { get set }
```

<a id="discussion"></a>

## Discussion

Only useful for engines that have audio output.

If unspecified, the property value defaults to [AutomaticSpatialAudio](../../audiotoolbox/automaticspatialaudio.md).
