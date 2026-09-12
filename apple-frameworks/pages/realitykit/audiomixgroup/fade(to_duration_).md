> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiomixgroup/fade(to:duration:)](https://developer.apple.com/documentation/realitykit/audiomixgroup/fade(to:duration:))

# fade(to:duration:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Transitions the gain to a value over a time interval using a linear curve.

## Declaration

```swift
mutating func fade(to gain: Audio.Decibel, duration: TimeInterval)
```

## Parameters

- `gain`: The overall level for audio from a group after the fade is complete.
- `duration`: The duration of the fade in seconds.
