> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/part](https://developer.apple.com/documentation/realitykit/meshresource/part)

# MeshResource.Part

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A part of a model consisting of a single material.

## Declaration

```swift
struct Part
```

## Topics

### Initializers

- [init(id:materialIndex:)](part/init%28id_materialindex_%29.md): Create a new part.

### Instance Properties

- [jointInfluences](part/jointinfluences.md): A buffer of vertex-joint influences which defines how the mesh deforms in response to the skeleton that it is bound to. Each vertex may be influenced by one or more joints defined by the skeleton.
- [materialIndex](part/materialindex.md): Material index for the part.
- [skeletonID](part/skeletonid.md): Identifier of the skeleton that this mesh part is bound to (if it is skinned).
- [triangleIndices](part/triangleindices.md): Index buffer for triangles.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [MeshBufferContainer](../meshbuffercontainer.md)

## See Also

### Mesh resource data

- [MeshResource.Contents](contents-swift.struct.md): Value of the contents of the resource.
- [MeshResource.Instance](instance.md): An object that transforms a model to a location.
- [MeshResource.Model](model.md): A model consists of a list of parts.
