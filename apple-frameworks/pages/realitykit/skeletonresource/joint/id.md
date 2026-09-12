> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skeletonresource/joint/id](https://developer.apple.com/documentation/realitykit/skeletonresource/joint/id)

# id

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The identifier of the joint, automatically derived from the joint name.

## Declaration

```swift
var id: String { get }
```

## See Also

### Inspecting a joint

- [restPoseTransform](restposetransform.md): The rest pose transform of the joint. Defines position, rotation, and scale relative to the parent joint in local space. Used as the reference pose for all animations and deformations.
- [children](children.md): The child joints of this joint. All children must have unique names within the same parent. `JointBuilder` preserves the order children are declared in the closure body, so iteration over `children` is deterministic.
