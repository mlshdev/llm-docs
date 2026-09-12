> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/orbitanimation/offset](https://developer.apple.com/documentation/realitykit/orbitanimation/offset)

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

The default value is `0`, which indicates that the animation plays with no offset. Setting a value for this property moves the animation data along the timeline and doesn’t change timing. If you set a [fillMode](fillmode.md) other than [none](../animationfillmode/none.md), the animation fills the vacant area created by the offset according to the characteristics of the specified fill mode.

## See Also

### Timing the animation

- [speed](speed.md): A factor that changes the animation’s rate of playback.
- [delay](delay.md): An amount of time that lapses before the animation plays.
- [duration](duration.md): The elapsed time for one complete rotation.
- [trimDuration](trimduration.md): An optional duration that overrides the calculated duration.
- [trimStart](trimstart.md): The optional time, in seconds, at which the animation plays.
- [trimEnd](trimend.md): The optional time, in seconds, at which the animation stops.
