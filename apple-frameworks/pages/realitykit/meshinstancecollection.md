> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshinstancecollection](https://developer.apple.com/documentation/realitykit/meshinstancecollection)

# MeshInstanceCollection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that holds a collection of mesh resource instances.

## Declaration

```swift
struct MeshInstanceCollection
```

## Topics

### Creating a collection

- [init()](meshinstancecollection/init%28%29.md)
- [init(\_:)](meshinstancecollection/init%28__%29.md)

### Using the collection

- [insert(\_:)](meshinstancecollection/insert%28__%29.md): Add a new instance to the container. Returns true if added. Returns false if it already exists.
- [remove(id:)](meshinstancecollection/remove%28id_%29.md): Remove an instance by name.
- [removeAll()](meshinstancecollection/removeall%28%29.md): Remove all the instances.
- [update(\_:)](meshinstancecollection/update%28__%29.md): Update an existing instance. The old instance is returned.
- [subscript(\_:)](meshinstancecollection/subscript%28__%29.md): Read an instance given its name.

### Instance Properties

- [count](meshinstancecollection/count.md): Number of instances.
- [isEmpty](meshinstancecollection/isempty.md): True if there are no instances.

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
- [MeshModelCollection](meshmodelcollection.md): An object that holds a collection of mesh models.
- [MeshPartCollection](meshpartcollection.md): An object that holds a collection of mesh parts.
