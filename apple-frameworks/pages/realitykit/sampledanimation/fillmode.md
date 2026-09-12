> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation/fillmode](https://developer.apple.com/documentation/realitykit/sampledanimation/fillmode)

# fillMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An option that determines which data displays outside of the normal duration.

## Declaration

```swift
var fillMode: AnimationFillMode { get set }
```

<a id="discussion"></a>

## Discussion

This property determines what to display when the framework samples the animation outside of the range defined by its underlying duration. The animation applies this property when:

- Playback progresses toward, but hasn’t yet reached, a nonzero [offset](../animationdefinition/offset.md). - A range determined by [trimStart](../animationdefinition/trimstart.md), [trimEnd](../animationdefinition/trimend.md), or [trimDuration](../animationdefinition/trimduration.md) exceeds the animation’s underlying duration.

## See Also

### Repeating animation playback

- [repeatMode](repeatmode.md): An option that determines how the animation repeats.
