> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/skeleton/joint](https://developer.apple.com/documentation/realitykit/meshresource/skeleton/joint)

# MeshResource.Skeleton.Joint

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A named joint in a [MeshResource.Skeleton](../skeleton.md).

## Declaration

```swift
struct Joint
```

## Topics

### Initializers

- [init(name:parentIndex:inverseBindPoseMatrix:restPoseTransform:)](joint/init%28name_parentindex_inversebindposematrix_restposetransform_%29.md): Creates a single joint in a skeleton.

### Instance Properties

- [inverseBindPoseMatrix](joint/inversebindposematrix.md): A matrix which transforms from the authored pose (the “bind pose”) of the bound model to the local space of this joint.
- [name](joint/name.md): The name of this joint.
- [parentIndex](joint/parentindex.md): The index of this joint’s parent, or nil if this joint has no parent.
- [restPoseTransform](joint/restposetransform.md): The local transform of this joint in skeleton’s rest pose, specified relative to this joint’s parent (or relative to model space, if this joint has no parent).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Mesh skeletons

- [MeshResource.Skeleton](../skeleton.md): A skeleton consists of a hierarchy of joints. Each joint defines a coordinate space. Portions of a model may be thought of as having a position in a joint’s local space.
- [MeshSkeletonCollection](../../meshskeletoncollection.md): An object that holds a collection of skeletons used by a mesh resource.
- [MeshJointInfluence](../../meshjointinfluence.md): A binding to a joint, which consists of the joint’s index and the weight of that joint’s influence on a vertex.
- [MeshResource.JointInfluences](../jointinfluences.md): A buffer of vertex-joint influences which bind the mesh part’s vertices to a skeleton via a skinning deformation.
