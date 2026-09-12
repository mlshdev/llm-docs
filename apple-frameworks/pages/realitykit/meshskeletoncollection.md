> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshskeletoncollection](https://developer.apple.com/documentation/realitykit/meshskeletoncollection)

# MeshSkeletonCollection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

An object that holds a collection of skeletons used by a mesh resource.

## Declaration

```swift
struct MeshSkeletonCollection
```

## Topics

### Initializers

- [init()](meshskeletoncollection/init%28%29.md)
- [init(\_:)](meshskeletoncollection/init%28__%29.md)

### Instance Properties

- [count](meshskeletoncollection/count.md): Number of skeletons.
- [isEmpty](meshskeletoncollection/isempty.md): True if there are no skeletons.

### Instance Methods

- [insert(\_:)](meshskeletoncollection/insert%28__%29.md): Add a new skeleton to the container. Returns true if added. Returns false if it already exists.
- [remove(id:)](meshskeletoncollection/remove%28id_%29.md): Remove a skeleton by id.
- [removeAll()](meshskeletoncollection/removeall%28%29.md): Remove all the skeletons.
- [update(\_:)](meshskeletoncollection/update%28__%29.md): Update an existing skeleton. The old instance is returned.

### Subscripts

- [subscript(\_:)](meshskeletoncollection/subscript%28__%29.md): Read a skeleton given its id.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Mesh skeletons

- [MeshResource.Skeleton](meshresource/skeleton.md): A skeleton consists of a hierarchy of joints. Each joint defines a coordinate space. Portions of a model may be thought of as having a position in a joint’s local space.
- [MeshResource.Skeleton.Joint](meshresource/skeleton/joint.md): A named joint in a [MeshResource.Skeleton](meshresource/skeleton.md).
- [MeshJointInfluence](meshjointinfluence.md): A binding to a joint, which consists of the joint’s index and the weight of that joint’s influence on a vertex.
- [MeshResource.JointInfluences](meshresource/jointinfluences.md): A buffer of vertex-joint influences which bind the mesh part’s vertices to a skeleton via a skinning deformation.
