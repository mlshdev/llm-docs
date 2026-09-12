> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/handskeleton/joint/parentfromjointtransform](https://developer.apple.com/documentation/arkit/handskeleton/joint/parentfromjointtransform)

# parentFromJointTransform

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The transform from the joint to its parent joint’s coordinate system.

## Declaration

```swift
var parentFromJointTransform: simd_float4x4 { get }
```

<a id="Discussion"></a>

## Discussion

The root joint’s [parentFromJointTransform](parentfromjointtransform.md) is an identity matrix.

## See Also

### Tracking the position of hand joints

- [anchorFromJointTransform](anchorfromjointtransform.md): The position and orientation of this joint relative to the base joint of the skeleton.
- [isTracked](istracked.md): A Boolean value that indicates whether ARKit tracks a hand joint.
