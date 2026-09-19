> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowleveldeformation/input

# input

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The input vertex data for this deformation.

## Declaration

```swift
final var input: LowLevelDeformation.Mesh { get }
```

## See Also

### Accessing mesh data

- [output](output.md): The output vertex data for this deformation.
- [LowLevelDeformation.Mesh](mesh.md): A handle to the input or output vertex data of a [LowLevelDeformation](../lowleveldeformation.md).
- [vertexCount](vertexcount.md): The number of vertices in the mesh.
- [LowLevelDeformation.VertexSemantic](vertexsemantic.md): Designates the intended usage of a vertex attribute.
- [LowLevelDeformation.VertexAttribute](vertexattribute.md): An object that describes the format and stride of a single vertex attribute.
