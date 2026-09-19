> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/blendtreeanimation/speed

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

The default value is `1.0`, which doesn’t alter the animation’s rate of playback. A value of `2.0` plays the animation at twice the normal rate, and a speed of `0.5` makes the animation finish after twice the normal time. A negative value plays the animation in reverse.

This property doesn’t affect the animation’s [delay](../fromtobyanimation/delay.md).

## See Also

### Timing the animation

- [delay](delay.md): An amount of time that lapses before the animation plays.
- [duration](duration.md): The total playback time of the animation.
- [offset](offset.md): The time, in seconds, at which the animation begins within the duration.
- [trimDuration](trimduration.md): An optional duration that overrides the calculated duration.
- [trimStart](trimstart.md): The optional time, in seconds, at which the source animation plays.
- [trimEnd](trimend.md): The optional time, in seconds, at which the source animation stops.
