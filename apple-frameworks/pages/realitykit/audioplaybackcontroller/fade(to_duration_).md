> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioplaybackcontroller/fade(to:duration:)](https://developer.apple.com/documentation/realitykit/audioplaybackcontroller/fade(to:duration:))

# fade(to:duration:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Transitions the gain to the given value over a time interval using a linear curve.

## Declaration

```swift
@MainActor @preconcurrency func fade(to newValue: AudioPlaybackController.Decibel, duration: TimeInterval)
```

## Parameters

- `newValue`: The target decibel level.
- `duration`: How long in seconds the fade should last.

<a id="discussion"></a>

## Discussion

The target gain must be zero or negative, where zero is nominal loudness and negative infinity is silent. If the gain is positive, it will be reset to zero.

## See Also

### Setting the volume

- [gain](gain.md): The individual gain in decibels of the audio playback controller output.
