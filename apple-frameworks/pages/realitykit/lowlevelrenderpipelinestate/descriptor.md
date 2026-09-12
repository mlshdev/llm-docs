> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderpipelinestate/descriptor](https://developer.apple.com/documentation/realitykit/lowlevelrenderpipelinestate/descriptor)

# LowLevelRenderPipelineState.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The inputs required to compile a render pipeline state.

## Declaration

```swift
struct Descriptor
```

## Topics

### Creating a descriptor

- [init(mesh:material:renderTargets:blending:)](descriptor/init%28mesh_material_rendertargets_blending_%29.md): Creates a descriptor for the given mesh format, material, render targets, and optional blending configuration.

### Configuring the pipeline

- [mesh](descriptor/mesh.md): The vertex format of the mesh this pipeline renders.
- [renderTargets](descriptor/rendertargets.md): The set of render target descriptors this pipeline state is compatible with.
- [blending](descriptor/blending-swift.property.md): The blending configuration, or `nil` for opaque draws.
- [LowLevelRenderPipelineState.Descriptor.Blending](descriptor/blending-swift.struct.md): An alpha blending mode for transparent draw calls.
- [writeMask](descriptor/writemask.md): The color channels written to the output attachment.

### Instance Properties

- [material](descriptor/material.md): The compiled material for this pipeline state.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
