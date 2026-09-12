> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioplaybackgroupcontroller/gain](https://developer.apple.com/documentation/realitykit/audioplaybackgroupcontroller/gain)

# gain

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The individual gain in decibels for all audio resources in the group.

## Declaration

```swift
@MainActor @preconcurrency var gain: Audio.Decibel { get set }
```

<a id="discussion"></a>

## Discussion

The gain must be zero or negative, where zero is nominal loudness and negative infinity is silent. If the gain is positive, it will be reset to zero.

Use the [fade(to:duration:)](fade%28to_duration_%29.md) method to change the gain gradually and create smooth transitions.
