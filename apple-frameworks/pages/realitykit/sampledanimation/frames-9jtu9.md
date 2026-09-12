> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation/frames-9jtu9](https://developer.apple.com/documentation/realitykit/sampledanimation/frames-9jtu9)

# frames

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An array of weights in which each element represents a discrete state of the target entity at a given point in the animation’s timeline.

## Declaration

```swift
var frames: [BlendShapeWeights] { get set }
```

<a id="discussion"></a>

## Discussion

This array contains sequential values for the animated property when [bindTarget](../animationdefinition/bindtarget.md) is an array of weights.
