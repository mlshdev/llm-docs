> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/orbitanimation/speed](https://developer.apple.com/documentation/realitykit/orbitanimation/speed)

# speed

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A factor that changes the animation’s rate of playback.

## Declaration

```swift
var speed: Float { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `1.0`, which doesn’t alter the animation’s duration. A value of `2.0` indicates that the duration is half the normal rate. A value of `0.5` indicates that the duration is twice the normal rate. Negative values play the animation in reverse.

This property doesn’t affect the animation’s [delay](../fromtobyanimation/delay.md).

## See Also

### Timing the animation

- [delay](delay.md): An amount of time that lapses before the animation plays.
- [duration](duration.md): The elapsed time for one complete rotation.
- [offset](offset.md): The time, in seconds, at which the animation begins within the duration.
- [trimDuration](trimduration.md): An optional duration that overrides the calculated duration.
- [trimStart](trimstart.md): The optional time, in seconds, at which the animation plays.
- [trimEnd](trimend.md): The optional time, in seconds, at which the animation stops.
