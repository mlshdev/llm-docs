> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationplaybackcontroller/clock](https://developer.apple.com/documentation/realitykit/animationplaybackcontroller/clock)

# clock

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A reference clock to synchronize the animation with other events.

## Declaration

```swift
@MainActor @preconcurrency var clock: CMClockOrTimebase { get set }
```

## See Also

### Timing animation playback

- [duration](duration.md): The length of time the animation spans, in seconds.
- [speed](speed.md): The animation’s rate of playback.
- [time](time.md): The animation’s location within the timeline.
