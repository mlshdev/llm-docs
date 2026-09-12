> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikcomponent/joint/rotationstiffness](https://developer.apple.com/documentation/realitykit/ikcomponent/joint/rotationstiffness)

# rotationStiffness

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The per-axis rotational stiffness of the joint.

## Declaration

```swift
var rotationStiffness: SIMD3<Float> { get set }
```

<a id="discussion"></a>

## Discussion

A joint with higher stiffness will rotate less to reach demands.

This value is in the closed range `[0, 1]`, where `0` means the joint is free to rotate, and `1` allows no movement.
