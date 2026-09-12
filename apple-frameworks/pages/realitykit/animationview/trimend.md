> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationview/trimend](https://developer.apple.com/documentation/realitykit/animationview/trimend)

# trimEnd

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The time, in seconds, at which the source animation stops.

## Declaration

```swift
var trimEnd: TimeInterval? { get set }
```

<a id="discussion"></a>

## Discussion

This property is `nil` by default, which plays the animation until `time` = [duration](duration.md). If you set a value, the animation edits the duration according to the specified ending time.

## See Also

### Timing the animation

- [speed](speed.md): A factor that increases or decreases the animation’s rate of playback.
- [delay](delay.md): An amount of time that lapses before the animation plays.
- [duration](duration.md): The total playback time of the animation.
- [offset](offset.md): The time, in seconds, at which the animation begins within the duration.
- [trimDuration](trimduration.md): An optional duration that overrides the calculated duration.
- [trimStart](trimstart.md): The time, in seconds, at which the source animation plays.
