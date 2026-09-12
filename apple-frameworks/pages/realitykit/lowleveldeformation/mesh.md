> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/mesh](https://developer.apple.com/documentation/realitykit/lowleveldeformation/mesh)

# LowLevelDeformation.Mesh

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A handle to the input or output vertex data of a [LowLevelDeformation](../lowleveldeformation.md).

## Declaration

```swift
struct Mesh
```

## Topics

### Setting vertex data

- [setVertices(\_:offset:semantic:)](mesh/setvertices%28__offset_semantic_%29.md): Binds a Metal buffer to the vertex attribute with the specified semantic.

## See Also

### Accessing mesh data

- [input](input.md): The input vertex data for this deformation.
- [output](output.md): The output vertex data for this deformation.
- [vertexCount](vertexcount.md): The number of vertices in the mesh.
- [LowLevelDeformation.VertexSemantic](vertexsemantic.md): Designates the intended usage of a vertex attribute.
- [LowLevelDeformation.VertexAttribute](vertexattribute.md): An object that describes the format and stride of a single vertex attribute.
