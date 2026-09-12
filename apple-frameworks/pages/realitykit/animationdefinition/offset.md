> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationdefinition/offset](https://developer.apple.com/documentation/realitykit/animationdefinition/offset)

# offset

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The time, in seconds, at which the animation begins within the duration.

## Declaration

```swift
var offset: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `0`, which indicates that the animation plays with no offset. Setting a value for this property moves the animation data along the timeline and doesn’t change timing. If you set a [fillMode](../sampledanimation/fillmode.md) other than [none](../animationfillmode/none.md), the animation fills the vacant area created by the offset according to the characteristics of the specified fill mode.

## See Also

### Timing the animation

- [speed](speed.md): A factor that increases or decreases the animation’s rate of playback.
- [delay](delay.md): An amount of time that elapses before the animation plays.
- [duration](duration.md): The total playback time of the animation.
- [trimDuration](trimduration.md): An optional duration that overrides the source animation’s duration.
- [trimStart](trimstart.md): The time, in seconds, at which the animation plays.
- [trimEnd](trimend.md): The time, in seconds, at which the source animation stops.
- [trimmed(start:end:duration:)](trimmed%28start_end_duration_%29.md): Edits the animation duration according to the specified time.
