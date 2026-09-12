> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/descriptor-swift.property](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/descriptor-swift.property)

# descriptor

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The descriptor used to create this mesh resource.

## Declaration

```swift
final var descriptor: LowLevelMeshResource.Descriptor { get }
```

## See Also

### Describing the mesh layout

- [LowLevelMeshResource.Descriptor](descriptor-swift.struct.md): An object that describes the data format and layout of the buffers in a low-level mesh.
- [LowLevelMeshResource.Layout](layout.md): An object that describes a set of attributes that share a buffer index, offset, and stride.
- [LowLevelMeshResource.Attribute](attribute.md): An object that determines how to store vertex attribute data in memory and map it to RealityKit custom shader attributes.
- [LowLevelMeshResource.VertexSemantic](vertexsemantic.md): The intended usage of a vertex attribute.
