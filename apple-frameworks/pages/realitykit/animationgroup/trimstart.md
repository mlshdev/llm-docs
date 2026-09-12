> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationgroup/trimstart](https://developer.apple.com/documentation/realitykit/animationgroup/trimstart)

# trimStart

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The time, in seconds, at which the animations play.

## Declaration

```swift
var trimStart: TimeInterval? { get set }
```

<a id="discussion"></a>

## Discussion

This property is `nil` by default, which plays the animation with `time` = `0`. If you set a value, the animation edits the duration according to the specified beginning time.

If you set a negative value for this property, the duration increases and the additional animation data fills in based on the [fillMode](../animationview/fillmode.md) you choose.

## See Also

### Timing the group

- [speed](speed.md): A factor that increases or decreases the animation’s rate of playback.
- [delay](delay.md): An amount of time that lapses before the animation plays.
- [duration](duration.md): The total playback time of the animation.
- [offset](offset.md): The time, in seconds, at which the animations begin within the duration.
- [trimDuration](trimduration.md): An optional duration that overrides the calculated duration.
- [trimEnd](trimend.md): The time, in seconds, at which the animations stop.
