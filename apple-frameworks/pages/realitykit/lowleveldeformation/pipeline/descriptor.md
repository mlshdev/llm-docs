> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/pipeline/descriptor](https://developer.apple.com/documentation/realitykit/lowleveldeformation/pipeline/descriptor)

# LowLevelDeformation.Pipeline.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that describes the vertex layouts and deformer stages for a pipeline.

## Declaration

```swift
struct Descriptor
```

## Topics

### Specifying vertex attributes

- [inputAttributes](descriptor/inputattributes.md): The vertex attributes for the input mesh.
- [outputAttributes](descriptor/outputattributes.md): The vertex attributes for the output mesh.

### Configuring skinning

- [skinning](descriptor/skinning-swift.property.md): Skinning parameters, or `nil` to omit skinning.
- [LowLevelDeformation.Pipeline.Descriptor.Skinning](descriptor/skinning-swift.struct.md): The skinning stage configuration for a deformation pipeline.

### Structures

- [LowLevelDeformation.Pipeline.Descriptor.BlendShape](descriptor/blendshape-swift.struct.md): The blend-shape configuration for a deformation pipeline.
- [LowLevelDeformation.Pipeline.Descriptor.Renormalization](descriptor/renormalization-swift.struct.md): An object that describes which vertex attributes to renormalize to unit length after deformation.

### Initializers

- [init(inputAttributes:outputAttributes:blendShape:skinning:renormalization:)](descriptor/init%28inputattributes_outputattributes_blendshape_skinning_renormalization_%29.md): Creates a pipeline descriptor.

### Instance Properties

- [blendShape](descriptor/blendshape-swift.property.md): Blend-shape parameters, or `nil` to omit blend-shape deformation.
- [renormalization](descriptor/renormalization-swift.property.md): Renormalization parameters, or `nil` to omit renormalization.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
