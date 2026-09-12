> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdeformer](https://developer.apple.com/documentation/realitykit/meshdeformer)

# MeshDeformer

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An interface for all deformation types in a deformation definition, both built-in and custom. The users overrides all functions to implement a custom `MeshDeformer`, and can in general ignore all but the constructors for built-in deformers.

## Declaration

```swift
protocol MeshDeformer : Decodable, Encodable, Equatable, Sendable
```

## Topics

### Identifying the deformer

- [type](meshdeformer/type-swift.type.property.md): Provide a unique identifier for type of deformer. There can only be one `deform` function associated with each type String. However, each `deform` can vary greatly based on run time options and input.
- [type](meshdeformer/type-nxsx.md): provide a unique identifier for type of deformer, default implementation provided

### Configuring deformation options

- [options](meshdeformer/options.md): provide options for the deformer, default implementation is provided

### Deforming the mesh

- [deform(parameter:encoder:)](meshdeformer/deform%28parameter_encoder_%29.md): deform the mesh on the GPU (the preferred method)
- [deform(parameter:)](meshdeformer/deform%28parameter_%29.md): deform the mesh on the CPU (may be useful for debugging), a no-op is allowed, default implementation is provided

### Comparing deformers

- [isDeformerEqual(other:)](meshdeformer/isdeformerequal%28other_%29.md): default implementation is provided

### Instance Properties

- [mode](meshdeformer/mode-6ci1w.md): specify which `deform` function will be called, default implementation is provided

### Type Properties

- [mode](meshdeformer/mode-v9mj.md): specify which `deform` function will be called, default implementation is provided

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [BlendShapeDeformer](blendshapedeformer.md)
- [BoundingBoxCalculator](boundingboxcalculator.md)
- [RenormalizingDeformer](renormalizingdeformer.md)
- [SkinningDeformer](skinningdeformer.md)
- [SubdivisionSurfaceDeformer](subdivisionsurfacedeformer.md)

## See Also

### Deformers

- [MeshDeformerComponent](meshdeformercomponent.md): The component that applies mesh deformations to an `Entity`.
- [SkinningDeformer](skinningdeformer.md): A deformation that binds a 3D mesh to an underlying skeleton.
- [BlendShapeDeformer](blendshapedeformer.md): A blend-shape deformation that interpolates between N meshes according to a weighted sum. Consumes information from the `BlendShapeWeightsComponent`
