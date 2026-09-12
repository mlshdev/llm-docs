> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/fromtobyanimation/speed](https://developer.apple.com/documentation/realitykit/fromtobyanimation/speed)

# speed

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A factor that increases or decreases the animation’s rate of playback.

## Declaration

```swift
var speed: Float { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `1.0`, which doesn’t alter the animation’s duration. A value of `2.0` indicates that the duration is half the normal rate. A value of `0.5` indicates that the duration is twice the normal rate. Negative values play the animation in reverse.

This property doesn’t affect the animation’s [delay](delay.md).

## See Also

### Timing the animation

- [delay](delay.md): An amount of time that elapses before the animation plays.
- [duration](duration.md): The total playback time of the animation.
- [offset](offset.md): The time, in seconds, at which the animation begins within the duration.
- [timing](timing.md): An option that determines the animation’s pace over time.
- [trimDuration](trimduration.md): An optional duration that overrides the calculated duration.
- [trimStart](trimstart.md): The time, in seconds, at which the animation plays.
- [trimEnd](trimend.md): The time, in seconds, at which the animation stops.
