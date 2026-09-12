> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendshapedeformer](https://developer.apple.com/documentation/realitykit/blendshapedeformer)

# BlendShapeDeformer

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A blend-shape deformation that interpolates between N meshes according to a weighted sum. Consumes information from the `BlendShapeWeightsComponent`

## Declaration

```swift
struct BlendShapeDeformer
```

## Topics

### Initializers

- [init()](blendshapedeformer/init%28%29.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [MeshDeformer](meshdeformer.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deformers

- [MeshDeformerComponent](meshdeformercomponent.md): The component that applies mesh deformations to an `Entity`.
- [MeshDeformer](meshdeformer.md): An interface for all deformation types in a deformation definition, both built-in and custom. The users overrides all functions to implement a custom `MeshDeformer`, and can in general ignore all but the constructors for built-in deformers.
- [SkinningDeformer](skinningdeformer.md): A deformation that binds a 3D mesh to an underlying skeleton.
