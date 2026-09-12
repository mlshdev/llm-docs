> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skeletonresource/joint/children](https://developer.apple.com/documentation/realitykit/skeletonresource/joint/children)

# children

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The child joints of this joint. All children must have unique names within the same parent. `JointBuilder` preserves the order children are declared in the closure body, so iteration over `children` is deterministic.

## Declaration

```swift
let children: [SkeletonResource.Joint]
```

## See Also

### Inspecting a joint

- [id](id.md): The identifier of the joint, automatically derived from the joint name.
- [restPoseTransform](restposetransform.md): The rest pose transform of the joint. Defines position, rotation, and scale relative to the parent joint in local space. Used as the reference pose for all animations and deformations.
