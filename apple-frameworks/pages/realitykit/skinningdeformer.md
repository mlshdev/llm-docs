> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skinningdeformer](https://developer.apple.com/documentation/realitykit/skinningdeformer)

# SkinningDeformer

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A deformation that binds a 3D mesh to an underlying skeleton.

## Declaration

```swift
struct SkinningDeformer
```

## Topics

### Creating a deformer

- [init(skinsTangentFrame:)](skinningdeformer/init%28skinstangentframe_%29.md)

### Configuring tangent skinning

- [skinsTangentFrame](skinningdeformer/skinstangentframe.md): Specifies whether to skin normals, tangents, and bitangents.

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
- [BlendShapeDeformer](blendshapedeformer.md): A blend-shape deformation that interpolates between N meshes according to a weighted sum. Consumes information from the `BlendShapeWeightsComponent`
