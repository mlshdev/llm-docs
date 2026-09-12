> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationgroup/delay](https://developer.apple.com/documentation/realitykit/animationgroup/delay)

# delay

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An amount of time that lapses before the animation plays.

## Declaration

```swift
var delay: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `0`, which indicates that the animation plays with no delay. If you set a value for this property, the animation plays from its start time after the specified delay lapses.

During the delayed time, the animation doesn’t update. However, to fill the delayed time with some portion of animation, set a negative [trimStart](trimstart.md) instead and choose a [fillMode](../orbitanimation/fillmode.md) that displays the desired portion of animation.

## See Also

### Timing the group

- [speed](speed.md): A factor that increases or decreases the animation’s rate of playback.
- [duration](duration.md): The total playback time of the animation.
- [offset](offset.md): The time, in seconds, at which the animations begin within the duration.
- [trimDuration](trimduration.md): An optional duration that overrides the calculated duration.
- [trimStart](trimstart.md): The time, in seconds, at which the animations play.
- [trimEnd](trimend.md): The time, in seconds, at which the animations stop.
