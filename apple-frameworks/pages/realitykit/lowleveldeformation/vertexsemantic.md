> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/vertexsemantic](https://developer.apple.com/documentation/realitykit/lowleveldeformation/vertexsemantic)

# LowLevelDeformation.VertexSemantic

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Designates the intended usage of a vertex attribute.

## Declaration

```swift
enum VertexSemantic
```

## Topics

### Identifying vertex attributes

- [LowLevelDeformation.VertexSemantic.position](vertexsemantic/position.md): The semantic for vertex position data.
- [LowLevelDeformation.VertexSemantic.normal](vertexsemantic/normal.md): The semantic for surface normal data.
- [LowLevelDeformation.VertexSemantic.tangent](vertexsemantic/tangent.md): The semantic for surface tangent vector data.
- [LowLevelDeformation.VertexSemantic.bitangent](vertexsemantic/bitangent.md): The semantic for surface bitangent vector data.
- [LowLevelDeformation.VertexSemantic.uv](vertexsemantic/uv.md): Texture coordinate (for input to renormalization).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing mesh data

- [input](input.md): The input vertex data for this deformation.
- [output](output.md): The output vertex data for this deformation.
- [LowLevelDeformation.Mesh](mesh.md): A handle to the input or output vertex data of a [LowLevelDeformation](../lowleveldeformation.md).
- [vertexCount](vertexcount.md): The number of vertices in the mesh.
- [LowLevelDeformation.VertexAttribute](vertexattribute.md): An object that describes the format and stride of a single vertex attribute.
