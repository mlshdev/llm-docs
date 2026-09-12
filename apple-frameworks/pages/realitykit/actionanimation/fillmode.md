> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionanimation/fillmode](https://developer.apple.com/documentation/realitykit/actionanimation/fillmode)

# fillMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An option that determines which data displays outside of the normal duration.

## Declaration

```swift
var fillMode: AnimationFillMode { get set }
```

<a id="discussion"></a>

## Discussion

This property determines what to display when the framework samples the animation outside of the range defined by its underlying duration. The animation applies this property when:

- Playback progresses toward, but hasn’t yet reached, a nonzero [offset](../animationdefinition/offset.md). - A range determined by [trimStart](../animationdefinition/trimstart.md), [trimEnd](../animationdefinition/trimend.md), or [trimDuration](../animationdefinition/trimduration.md) exceeds the animation’s underlying duration.
