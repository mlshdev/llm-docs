> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/pipeline/descriptor/renormalization-swift.struct](https://developer.apple.com/documentation/realitykit/lowleveldeformation/pipeline/descriptor/renormalization-swift.struct)

# LowLevelDeformation.Pipeline.Descriptor.Renormalization

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that describes which vertex attributes to renormalize to unit length after deformation.

## Declaration

```swift
struct Renormalization
```

## Topics

### Structures

- [LowLevelDeformation.Pipeline.Descriptor.Renormalization.VertexSemanticOutputs](renormalization-swift.struct/vertexsemanticoutputs.md): Identifies which vertex attributes are renormalized to unit length.

### Initializers

- [init(outputs:triangleIndexType:adjacencyIndexType:adjacencyEndIndexType:)](renormalization-swift.struct/init%28outputs_triangleindextype_adjacencyindextype_adjacencyendindextype_%29.md): Creates a renormalization descriptor.

### Instance Properties

- [adjacencyEndIndexType](renormalization-swift.struct/adjacencyendindextype.md): The data type of the per-vertex adjacency end-indices buffer.
- [adjacencyIndexType](renormalization-swift.struct/adjacencyindextype.md): The data type of the per-vertex adjacencies buffer.
- [outputs](renormalization-swift.struct/outputs.md): The vertex attributes to renormalize to unit length.
- [triangleIndexType](renormalization-swift.struct/triangleindextype.md): The data type of the triangle index buffer.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
