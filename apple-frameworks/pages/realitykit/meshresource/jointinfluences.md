> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/jointinfluences](https://developer.apple.com/documentation/realitykit/meshresource/jointinfluences)

# MeshResource.JointInfluences

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A buffer of vertex-joint influences which bind the mesh part’s vertices to a skeleton via a skinning deformation.

## Declaration

```swift
struct JointInfluences
```

<a id="overview"></a>

## Overview

Each vertex is associated with a fixed number of influences. If `influencesPerVertex` is 4, then there should be four elements in the buffer of joint influences for each vertex in the mesh part.

> **Note**

> If a particular vertex needs fewer influences than the `influencesPerVertex` value, the influences for that vertex can be padded with zero-weight influences.

## Topics

### Initializers

- [init(influences:influencesPerVertex:)](jointinfluences/init%28influences_influencespervertex_%29.md): Associates every vertex in the mesh with a fixed number of influences per vertex.

### Instance Properties

- [influences](jointinfluences/influences.md): Buffer of joint influences.

## See Also

### Mesh skeletons

- [MeshResource.Skeleton](skeleton.md): A skeleton consists of a hierarchy of joints. Each joint defines a coordinate space. Portions of a model may be thought of as having a position in a joint’s local space.
- [MeshResource.Skeleton.Joint](skeleton/joint.md): A named joint in a [MeshResource.Skeleton](skeleton.md).
- [MeshSkeletonCollection](../meshskeletoncollection.md): An object that holds a collection of skeletons used by a mesh resource.
- [MeshJointInfluence](../meshjointinfluence.md): A binding to a joint, which consists of the joint’s index and the weight of that joint’s influence on a vertex.
