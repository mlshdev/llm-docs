> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation/frameinterval](https://developer.apple.com/documentation/realitykit/sampledanimation/frameinterval)

# frameInterval

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The duration within the animation timeline for each frame in the frames array.

## Declaration

```swift
var frameInterval: Float { get set }
```

## See Also

### Timing the animation

- [start](start.md): An integer multiple of the frame interval at which the animation plays.
- [end](end.md): An integer multiple of the frame interval at which the animation stops.
- [speed](speed.md): A factor that changes the animation’s rate of playback.
- [delay](delay.md): An amount of time that elapses before the animation plays.
- [duration](duration.md): The total playback time of the animation.
- [offset](offset.md): The time, in seconds, at which the animation begins within the duration.
- [trimDuration](trimduration.md): An optional duration that overrides the calculated duration.
- [trimStart](trimstart.md): The optional time, in seconds, at which the animation plays.
- [trimEnd](trimend.md): The optional time, in seconds, at which the animation stops.
