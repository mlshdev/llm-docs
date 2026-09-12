> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationfillmode/both](https://developer.apple.com/documentation/realitykit/animationfillmode/both)

# both

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An option that displays the animation’s initial frame or final frame when playback occurs outside of the normal duration.

## Declaration

```swift
static let both: AnimationFillMode
```

<a id="discussion"></a>

## Discussion

For example, if you extend a hand-waving animation’s duration by one second in both directions by setting [trimStart](../sampledanimation/trimstart.md) to `-1.0`, and [trimEnd](../sampledanimation/trimend.md) to [duration](../sampledanimation/duration.md) \+ `1.0`, a [fillMode](../sampledanimation/fillmode.md) of `both` determines that the hand holds its initial appearance for one second before continuing to wave. Then, the animation freezes on its final hand-waving frame for one second before disappearing.

## See Also

### Choosing a fill mode

- [none](none.md): An option that indicates an animation doesn’t display frame data outside of its normal duration.
- [forwards](forwards.md): An option that freezes the last frame of the animation until it stops.
- [backwards](backwards.md): An option that shows the first animation frame while playback progresses to the beginning position.
- [init(rawValue:)](init%28rawvalue_%29.md): Creates a fill mode from its backing data type.
