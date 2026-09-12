> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationfillmode/none](https://developer.apple.com/documentation/realitykit/animationfillmode/none)

# none

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An option that indicates an animation doesn’t display frame data outside of its normal duration.

## Declaration

```swift
static let none: AnimationFillMode
```

<a id="discussion"></a>

## Discussion

For example, if you rewind an animation of a hand waving for one second by setting [trimStart](../sampledanimation/trimstart.md) to `-1.0`, a [fillMode](../sampledanimation/fillmode.md) of `none` determines that the hand is invisible for one second before appearing and waving.

## See Also

### Choosing a fill mode

- [forwards](forwards.md): An option that freezes the last frame of the animation until it stops.
- [backwards](backwards.md): An option that shows the first animation frame while playback progresses to the beginning position.
- [both](both.md): An option that displays the animation’s initial frame or final frame when playback occurs outside of the normal duration.
- [init(rawValue:)](init%28rawvalue_%29.md): Creates a fill mode from its backing data type.
