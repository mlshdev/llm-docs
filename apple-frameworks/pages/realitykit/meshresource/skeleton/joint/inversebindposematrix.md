> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/skeleton/joint/inversebindposematrix](https://developer.apple.com/documentation/realitykit/meshresource/skeleton/joint/inversebindposematrix)

# inverseBindPoseMatrix

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A matrix which transforms from the authored pose (the “bind pose”) of the bound model to the local space of this joint.

## Declaration

```swift
var inverseBindPoseMatrix: simd_float4x4
```

<a id="discussion"></a>

## Discussion

> **Note**

> The bind pose matrix transforms a vertex from a joint’s local coordinate space to the position of that vertex in the model’s bind pose. This property is the *inverse* bind pose matrix, so it transforms a vertex from its position in the model’s bind pose to the local coordinate space of this joint.
