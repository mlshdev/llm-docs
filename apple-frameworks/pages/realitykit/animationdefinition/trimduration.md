> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationdefinition/trimduration](https://developer.apple.com/documentation/realitykit/animationdefinition/trimduration)

# trimDuration

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An optional duration that overrides the source animation’s duration.

## Declaration

```swift
var trimDuration: TimeInterval? { get set }
```

<a id="discussion"></a>

## Discussion

The framework calculates [duration](../fromtobyanimation/duration.md), but you can set this property to override it. This property is `nil` by default, which indicates that the animation stops after one play that spans [duration](duration.md).

If you set a non-zero value for this property and both [trimStart](trimstart.md) and [trimEnd](trimend.md) are `nil`, the animation observes this property as an edited duration.

When you set [repeatMode](repeatmode.md) to make the animation repeat:

- If this property is `nil`, the animation repeats forever.
- If set to a value greater than [duration](duration.md), the animation repeats for the specified duration.

## See Also

### Timing the animation

- [speed](speed.md): A factor that increases or decreases the animation’s rate of playback.
- [delay](delay.md): An amount of time that elapses before the animation plays.
- [duration](duration.md): The total playback time of the animation.
- [offset](offset.md): The time, in seconds, at which the animation begins within the duration.
- [trimStart](trimstart.md): The time, in seconds, at which the animation plays.
- [trimEnd](trimend.md): The time, in seconds, at which the source animation stops.
- [trimmed(start:end:duration:)](trimmed%28start_end_duration_%29.md): Edits the animation duration according to the specified time.
