> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationfillmode/backwards](https://developer.apple.com/documentation/realitykit/animationfillmode/backwards)

# backwards

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An option that shows the first animation frame while playback progresses to the beginning position.

## Declaration

```swift
static let backwards: AnimationFillMode
```

<a id="discussion"></a>

## Discussion

For example, if you wind a hand-waving animation’s duration back one second by setting [trimStart](../sampledanimation/trimstart.md) to `-1.0`, a [fillMode](../sampledanimation/fillmode.md) of `backwards` determines that the hand holds its initial appearance for one second before waving.

## See Also

### Choosing a fill mode

- [none](none.md): An option that indicates an animation doesn’t display frame data outside of its normal duration.
- [forwards](forwards.md): An option that freezes the last frame of the animation until it stops.
- [both](both.md): An option that displays the animation’s initial frame or final frame when playback occurs outside of the normal duration.
- [init(rawValue:)](init%28rawvalue_%29.md): Creates a fill mode from its backing data type.
