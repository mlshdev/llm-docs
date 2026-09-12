> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationplaybackcontroller/speed](https://developer.apple.com/documentation/realitykit/animationplaybackcontroller/speed)

# speed

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The animation’s rate of playback.

## Declaration

```swift
@MainActor @preconcurrency var speed: Float { get set }
```

<a id="discussion"></a>

## Discussion

The animation applies the value of this property as an irrational factor of the unaltered speed. For example, a value of `2` plays the animation twice as fast, a value of `0.5` plays the animation at half speed, and a value of `1` plays the animation at the unaltered rate.

## See Also

### Timing animation playback

- [duration](duration.md): The length of time the animation spans, in seconds.
- [clock](clock.md): A reference clock to synchronize the animation with other events.
- [time](time.md): The animation’s location within the timeline.
