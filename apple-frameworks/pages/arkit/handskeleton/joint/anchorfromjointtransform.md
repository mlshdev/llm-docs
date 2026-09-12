> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/handskeleton/joint/anchorfromjointtransform](https://developer.apple.com/documentation/arkit/handskeleton/joint/anchorfromjointtransform)

# anchorFromJointTransform

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The position and orientation of this joint relative to the base joint of the skeleton.

## Declaration

```swift
var anchorFromJointTransform: simd_float4x4 { get }
```

## See Also

### Tracking the position of hand joints

- [parentFromJointTransform](parentfromjointtransform.md): The transform from the joint to its parent joint’s coordinate system.
- [isTracked](istracked.md): A Boolean value that indicates whether ARKit tracks a hand joint.
