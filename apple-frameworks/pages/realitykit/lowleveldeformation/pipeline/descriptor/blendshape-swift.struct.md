> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/pipeline/descriptor/blendshape-swift.struct](https://developer.apple.com/documentation/realitykit/lowleveldeformation/pipeline/descriptor/blendshape-swift.struct)

# LowLevelDeformation.Pipeline.Descriptor.BlendShape

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The blend-shape configuration for a deformation pipeline.

## Declaration

```swift
struct BlendShape
```

## Topics

### Structures

- [LowLevelDeformation.Pipeline.Descriptor.BlendShape.VertexSemanticOutputs](blendshape-swift.struct/vertexsemanticoutputs.md): Identifies which tangent-frame attributes are blended in addition to positions.

### Initializers

- [init(blendsOutputs:computesBitangent:)](blendshape-swift.struct/init%28blendsoutputs_computesbitangent_%29.md): Creates a blend-shape descriptor.

### Instance Properties

- [blendsOutputs](blendshape-swift.struct/blendsoutputs.md): Indicates which vertices of the tangent frame are blended in addition to positions. Currently supported: \[normal|tangent\]
- [computesBitangent](blendshape-swift.struct/computesbitangent.md): Indicates if bitangents should be recomputed from blended normals and tangents. Only valid if blendsOutputs = \[normal, tangent\].

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
