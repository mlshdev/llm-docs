> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/fromtobyanimation/duration](https://developer.apple.com/documentation/realitykit/fromtobyanimation/duration)

# duration

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The total playback time of the animation.

## Declaration

```swift
var duration: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

The framework sets a value for this property depending on the underlying animation data and the specified [speed](../animationview/speed.md).

You can override the default duration by defining [trimStart](trimstart.md), [trimEnd](trimend.md), or [trimDuration](trimduration.md).

## See Also

### Timing the animation

- [speed](speed.md): A factor that increases or decreases the animation’s rate of playback.
- [delay](delay.md): An amount of time that elapses before the animation plays.
- [offset](offset.md): The time, in seconds, at which the animation begins within the duration.
- [timing](timing.md): An option that determines the animation’s pace over time.
- [trimDuration](trimduration.md): An optional duration that overrides the calculated duration.
- [trimStart](trimstart.md): The time, in seconds, at which the animation plays.
- [trimEnd](trimend.md): The time, in seconds, at which the animation stops.
