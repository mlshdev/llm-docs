> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/attribute](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/attribute)

# LowLevelMeshResource.Attribute

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that determines how to store vertex attribute data in memory and map it to RealityKit custom shader attributes.

## Declaration

```swift
struct Attribute
```

## Topics

### Initializers

- [init()](attribute/init%28%29.md): Creates an attribute with all fields set to their zero/default values.
- [init(semantic:format:layoutIndex:offset:)](attribute/init%28semantic_format_layoutindex_offset_%29.md): Creates an attribute with the given semantic, format, layout index, and byte offset.

### Instance Properties

- [format](attribute/format.md): The format of the vertex attribute.
- [layoutIndex](attribute/layoutindex.md): The index of the layout that contains this attribute.
- [offset](attribute/offset.md): The location of an attribute in vertex data, determined by the byte offset from the start of the vertex data.
- [semantic](attribute/semantic.md): The semantic of the vertex attribute, which describes how you want the renderer to interpret the attribute.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing the mesh layout

- [descriptor](descriptor-swift.property.md): The descriptor used to create this mesh resource.
- [LowLevelMeshResource.Descriptor](descriptor-swift.struct.md): An object that describes the data format and layout of the buffers in a low-level mesh.
- [LowLevelMeshResource.Layout](layout.md): An object that describes a set of attributes that share a buffer index, offset, and stride.
- [LowLevelMeshResource.VertexSemantic](vertexsemantic.md): The intended usage of a vertex attribute.
