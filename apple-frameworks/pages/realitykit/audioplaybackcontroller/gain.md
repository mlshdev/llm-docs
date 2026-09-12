> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioplaybackcontroller/gain](https://developer.apple.com/documentation/realitykit/audioplaybackcontroller/gain)

# gain

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The individual gain in decibels of the audio playback controller output.

## Declaration

```swift
@MainActor @preconcurrency var gain: AudioPlaybackController.Decibel { get set }
```

<a id="discussion"></a>

## Discussion

The gain must be zero or negative, where zero is nominal loudness and negative infinity is silent. If the gain is positive, it will be reset to zero.

Use the [fade(to:duration:)](fade%28to_duration_%29.md) method to change the gain gradually and create smooth transitions.

## See Also

### Setting the volume

- [fade(to:duration:)](fade%28to_duration_%29.md): Transitions the gain to the given value over a time interval using a linear curve.
