> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation](https://developer.apple.com/documentation/realitykit/lowleveldeformation)

# LowLevelDeformation

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that encodes blend-shape, skinning, and renormalization passes into a Metal compute command encoder.

## Declaration

```swift
final class LowLevelDeformation
```

## Topics

### Creating a deformation

- [descriptor](lowleveldeformation/descriptor-swift.property.md): The descriptor used to create this deformation.
- [LowLevelDeformation.Descriptor](lowleveldeformation/descriptor-swift.struct.md): An object that describes the per-frame data requirements for a [LowLevelDeformation](lowleveldeformation.md).

### Accessing mesh data

- [input](lowleveldeformation/input.md): The input vertex data for this deformation.
- [output](lowleveldeformation/output.md): The output vertex data for this deformation.
- [LowLevelDeformation.Mesh](lowleveldeformation/mesh.md): A handle to the input or output vertex data of a [LowLevelDeformation](lowleveldeformation.md).
- [vertexCount](lowleveldeformation/vertexcount.md): The number of vertices in the mesh.
- [LowLevelDeformation.VertexSemantic](lowleveldeformation/vertexsemantic.md): Designates the intended usage of a vertex attribute.
- [LowLevelDeformation.VertexAttribute](lowleveldeformation/vertexattribute.md): An object that describes the format and stride of a single vertex attribute.

### Configuring deformation stages

- [skinning](lowleveldeformation/skinning-swift.property.md): The skinning data accessors for this deformation.
- [LowLevelDeformation.Skinning](lowleveldeformation/skinning-swift.struct.md): An accessor for the skinning buffers of a [LowLevelDeformation](lowleveldeformation.md).

### Encoding deformation work

- [encode(into:)](lowleveldeformation/encode%28into_%29.md): Encodes the configured deformation passes into the given command encoder.
- [LowLevelDeformation.Pipeline](lowleveldeformation/pipeline.md): A compiled compute pipeline for a specific combination of mesh layouts and deformer stages.
- [LowLevelDeformation.Error](lowleveldeformation/error.md): The error type thrown by every throwing method and initializer.

### Structures

- [LowLevelDeformation.BlendShape](lowleveldeformation/blendshape-swift.struct.md): An accessor for the blend-shape buffers of a [LowLevelDeformation](lowleveldeformation.md).
- [LowLevelDeformation.Renormalization](lowleveldeformation/renormalization-swift.struct.md): An accessor for the renormalization buffers of a [LowLevelDeformation](lowleveldeformation.md).

### Instance Properties

- [blendShape](lowleveldeformation/blendshape-swift.property.md): The blend-shape data accessors for this deformation.
- [renormalization](lowleveldeformation/renormalization-swift.property.md): The renormalization data accessors for this deformation.

## See Also

### Low-level deformation

- [LowLevelDeformationContext](lowleveldeformationcontext.md): An object that manages shared resources for [LowLevelDeformation](lowleveldeformation.md) instances.
