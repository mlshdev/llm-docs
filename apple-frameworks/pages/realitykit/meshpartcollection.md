> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshpartcollection](https://developer.apple.com/documentation/realitykit/meshpartcollection)

# MeshPartCollection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that holds a collection of mesh parts.

## Declaration

```swift
struct MeshPartCollection
```

## Topics

### Creating a collection

- [init()](meshpartcollection/init%28%29.md)
- [init(\_:)](meshpartcollection/init%28__%29.md)

### Using the collection

- [insert(\_:)](meshpartcollection/insert%28__%29.md): Add a new part to the container. Returns true if added. Returns false if it already exists.
- [remove(id:)](meshpartcollection/remove%28id_%29.md): Remove a part by id.
- [removeAll()](meshpartcollection/removeall%28%29.md): Remove all the parts.
- [update(\_:)](meshpartcollection/update%28__%29.md): Update an existing part. The old part is returned.

### Instance Properties

- [count](meshpartcollection/count.md): Number of parts.
- [isEmpty](meshpartcollection/isempty.md): True if there are no parts.

### Subscripts

- [subscript(\_:)](meshpartcollection/subscript%28__%29.md): Read a part given its id.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Mesh description

- [MeshBuffer](meshbuffer.md): Mesh buffer containing elements of any type.
- [MeshBufferContainer](meshbuffercontainer.md): Conforming objects contain a table of mesh buffers.
- [MeshBufferSemantic](meshbuffersemantic.md): A protocol that holds an identifier value for mesh buffers.
- [MeshBuffers](meshbuffers.md): An object that holds the data for an model entity’s mesh.
- [AnyMeshBuffer](anymeshbuffer.md): Mesh buffer stored in the container.
- [MeshInstanceCollection](meshinstancecollection.md): An object that holds a collection of mesh resource instances.
- [MeshModelCollection](meshmodelcollection.md): An object that holds a collection of mesh models.
