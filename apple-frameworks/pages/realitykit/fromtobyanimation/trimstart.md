> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/fromtobyanimation/trimstart](https://developer.apple.com/documentation/realitykit/fromtobyanimation/trimstart)

# trimStart

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The time, in seconds, at which the animation plays.

## Declaration

```swift
var trimStart: TimeInterval? { get set }
```

<a id="discussion"></a>

## Discussion

This property is `nil` by default, which plays the animation with `time` = `0`. If you set a value, the animation edits the duration according to the specified beginning time.

If you set a negative value for this property, the duration increases and the additional animation data fills in based on the [fillMode](fillmode.md) you choose.

## See Also

### Timing the animation

- [speed](speed.md): A factor that increases or decreases the animation’s rate of playback.
- [delay](delay.md): An amount of time that elapses before the animation plays.
- [duration](duration.md): The total playback time of the animation.
- [offset](offset.md): The time, in seconds, at which the animation begins within the duration.
- [timing](timing.md): An option that determines the animation’s pace over time.
- [trimDuration](trimduration.md): An optional duration that overrides the calculated duration.
- [trimEnd](trimend.md): The time, in seconds, at which the animation stops.
