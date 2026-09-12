> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/descriptor-swift.struct](https://developer.apple.com/documentation/realitykit/lowleveldeformation/descriptor-swift.struct)

# LowLevelDeformation.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that describes the per-frame data requirements for a [LowLevelDeformation](../lowleveldeformation.md).

## Declaration

```swift
struct Descriptor
```

## Topics

### Specifying the vertex count

- [vertexCount](descriptor-swift.struct/vertexcount.md): The number of vertices in the input and output meshes.

### Configuring skinning

- [skinning](descriptor-swift.struct/skinning-swift.property.md): The skinning configuration, or `nil` if skinning is not used.
- [LowLevelDeformation.Descriptor.Skinning](descriptor-swift.struct/skinning-swift.struct.md): The skinning data dimensions for a [LowLevelDeformation](../lowleveldeformation.md).

### Structures

- [LowLevelDeformation.Descriptor.BlendShape](descriptor-swift.struct/blendshape-swift.struct.md): The blend-shape data dimensions for a [LowLevelDeformation](../lowleveldeformation.md).
- [LowLevelDeformation.Descriptor.Renormalization](descriptor-swift.struct/renormalization-swift.struct.md): The renormalization data dimensions for a [LowLevelDeformation](../lowleveldeformation.md).

### Initializers

- [init(vertexCount:blendShape:skinning:renormalization:)](descriptor-swift.struct/init%28vertexcount_blendshape_skinning_renormalization_%29.md): Creates a deformation descriptor.

### Instance Properties

- [blendShape](descriptor-swift.struct/blendshape-swift.property.md): The blend-shape configuration, or `nil` if blend-shape deformation is not used.
- [renormalization](descriptor-swift.struct/renormalization-swift.property.md): The renormalization configuration, or `nil` if renormalization is not used.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a deformation

- [descriptor](descriptor-swift.property.md): The descriptor used to create this deformation.
