> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/litlightingmodel/specularmodel-swift.enum](https://developer.apple.com/documentation/realitykit/litlightingmodel/specularmodel-swift.enum)

# LitLightingModel.SpecularModel

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The specular lighting algorithm used in a [LitLightingModel](../litlightingmodel.md).

## Declaration

```swift
enum SpecularModel
```

## Topics

### Choosing a specular model

- [LitLightingModel.SpecularModel.ggx](specularmodel-swift.enum/ggx.md): GGX (Trowbridge-Reitz) specular, a physically based microfacet model.
- [LitLightingModel.SpecularModel.anisotropicGGX](specularmodel-swift.enum/anisotropicggx.md): Anisotropic GGX specular, for surfaces with directional highlight variation such as brushed metal.
- [LitLightingModel.SpecularModel.blinnPhong](specularmodel-swift.enum/blinnphong.md): Blinn-Phong specular, a simple and performant approximation.
- [LitLightingModel.SpecularModel.sheen](specularmodel-swift.enum/sheen.md): Sheen specular, designed for cloth and fabric surfaces.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring shading models

- [diffuseModel](diffusemodel-swift.property.md): The diffuse algorithm to use.
- [LitLightingModel.DiffuseModel](diffusemodel-swift.enum.md): The diffuse lighting algorithm used in a [LitLightingModel](../litlightingmodel.md).
- [specularModel](specularmodel-swift.property.md): The specular algorithm to use.
