> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/vertexattribute](https://developer.apple.com/documentation/realitykit/lowleveldeformation/vertexattribute)

# LowLevelDeformation.VertexAttribute

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that describes the format and stride of a single vertex attribute.

## Declaration

```swift
struct VertexAttribute
```

## Topics

### Creating a vertex attribute

- [init(semantic:format:stride:)](vertexattribute/init%28semantic_format_stride_%29.md): Creates a vertex attribute.

### Accessing layout information

- [stride](vertexattribute/stride.md): The distance, in bytes, between consecutive vertices for this attribute.

### Instance Properties

- [format](vertexattribute/format.md): The format of the vertex attribute.
- [semantic](vertexattribute/semantic.md): The semantic of the vertex attribute.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing mesh data

- [input](input.md): The input vertex data for this deformation.
- [output](output.md): The output vertex data for this deformation.
- [LowLevelDeformation.Mesh](mesh.md): A handle to the input or output vertex data of a [LowLevelDeformation](../lowleveldeformation.md).
- [vertexCount](vertexcount.md): The number of vertices in the mesh.
- [LowLevelDeformation.VertexSemantic](vertexsemantic.md): Designates the intended usage of a vertex attribute.
