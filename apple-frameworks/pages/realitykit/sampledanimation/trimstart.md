> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation/trimstart](https://developer.apple.com/documentation/realitykit/sampledanimation/trimstart)

# trimStart

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The optional time, in seconds, at which the animation plays.

## Declaration

```swift
var trimStart: TimeInterval? { get set }
```

<a id="discussion"></a>

## Discussion

This property is `nil` by default, which plays the animation from the starting frame defined by [start](start.md).

If you set a value for this property, the animation visually begins from an additional seconds offset from the starting frame and decreases the duration by that amount.

If you set a negative value for this property, the duration increases and the additional animation data fills in based on the [fillMode](fillmode.md) you choose.

## See Also

### Timing the animation

- [frameInterval](frameinterval.md): The duration within the animation timeline for each frame in the frames array.
- [start](start.md): An integer multiple of the frame interval at which the animation plays.
- [end](end.md): An integer multiple of the frame interval at which the animation stops.
- [speed](speed.md): A factor that changes the animation’s rate of playback.
- [delay](delay.md): An amount of time that elapses before the animation plays.
- [duration](duration.md): The total playback time of the animation.
- [offset](offset.md): The time, in seconds, at which the animation begins within the duration.
- [trimDuration](trimduration.md): An optional duration that overrides the calculated duration.
- [trimEnd](trimend.md): The optional time, in seconds, at which the animation stops.
