> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/handskeleton/joint/istracked](https://developer.apple.com/documentation/arkit/handskeleton/joint/istracked)

# isTracked

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether ARKit tracks a hand joint.

## Declaration

```swift
var isTracked: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the environment provides insufficient lighting, or if an object occludes the hand joint, `isTracked` may return `false`. Even under these circumstances, ARKit returns a plausible transform for the joint.

Check for `isTracked` when you require high accuracy for the joint transform. Don’t check for this property in situations where you expect to occlude hand joints, such as in a custom gesture implementation.

## See Also

### Tracking the position of hand joints

- [anchorFromJointTransform](anchorfromjointtransform.md): The position and orientation of this joint relative to the base joint of the skeleton.
- [parentFromJointTransform](parentfromjointtransform.md): The transform from the joint to its parent joint’s coordinate system.
