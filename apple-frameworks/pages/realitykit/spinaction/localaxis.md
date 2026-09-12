> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spinaction/localaxis](https://developer.apple.com/documentation/realitykit/spinaction/localaxis)

# localAxis

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A vector that describes the axis of rotation (in local space).

## Declaration

```swift
var localAxis: SIMD3<Float>
```

<a id="discussion"></a>

## Discussion

The default value of this property is `[0, 1, 0]`, meaning the rotation occurs around the y-axis.
