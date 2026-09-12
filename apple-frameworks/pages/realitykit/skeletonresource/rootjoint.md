> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skeletonresource/rootjoint](https://developer.apple.com/documentation/realitykit/skeletonresource/rootjoint)

# rootJoint

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The root joint of the skeleton hierarchy.

## Declaration

```swift
final var rootJoint: SkeletonResource.Joint { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> Each access walks the resource and rebuilds the entire `Joint` tree. Bind the value to a `let` once when iterating or recursing over the hierarchy rather than re-reading the property in a loop.

## See Also

### Defining the joint hierarchy

- [SkeletonResource.Joint](joint.md): Describes a single joint of a `Skeleton`
- [SkeletonResource.JointBuilder](jointbuilder.md): A result builder for declaratively constructing the children of a joint.
