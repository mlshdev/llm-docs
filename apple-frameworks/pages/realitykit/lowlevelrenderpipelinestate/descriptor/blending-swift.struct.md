> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderpipelinestate/descriptor/blending-swift.struct](https://developer.apple.com/documentation/realitykit/lowlevelrenderpipelinestate/descriptor/blending-swift.struct)

# LowLevelRenderPipelineState.Descriptor.Blending

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An alpha blending mode for transparent draw calls.

## Declaration

```swift
struct Blending
```

## Topics

### Creating a blending mode

- [sourceOver](blending-swift.struct/sourceover.md): Standard source-over alpha blending with pre-multiplied alpha.
- [add](blending-swift.struct/add.md): Additive blending that combines source and destination colors.

### Type Methods

- [custom(sourceRGBBlendFactor:destinationRGBBlendFactor:rgbBlendOperation:sourceAlphaBlendFactor:destinationAlphaBlendFactor:alphaBlendOperation:)](blending-swift.struct/custom%28sourcergbblendfactor_destinationrgbblendfactor_rgbblendoperation_sourcealphablendfactor_destinationalphablendfactor_alphablendoperation_%29.md): Creates a custom blending configuration with explicit Metal blend factors and operations.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the pipeline

- [mesh](mesh.md): The vertex format of the mesh this pipeline renders.
- [renderTargets](rendertargets.md): The set of render target descriptors this pipeline state is compatible with.
- [blending](blending-swift.property.md): The blending configuration, or `nil` for opaque draws.
- [writeMask](writemask.md): The color channels written to the output attachment.
