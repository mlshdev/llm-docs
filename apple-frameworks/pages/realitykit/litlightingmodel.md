> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/litlightingmodel](https://developer.apple.com/documentation/realitykit/litlightingmodel)

# LitLightingModel

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Configuration for RealityKit’s physically based lighting model.

## Declaration

```swift
struct LitLightingModel
```

## Topics

### Configuring shading models

- [diffuseModel](litlightingmodel/diffusemodel-swift.property.md): The diffuse algorithm to use.
- [LitLightingModel.DiffuseModel](litlightingmodel/diffusemodel-swift.enum.md): The diffuse lighting algorithm used in a [LitLightingModel](litlightingmodel.md).
- [specularModel](litlightingmodel/specularmodel-swift.property.md): The specular algorithm to use.
- [LitLightingModel.SpecularModel](litlightingmodel/specularmodel-swift.enum.md): The specular lighting algorithm used in a [LitLightingModel](litlightingmodel.md).

### Enabling lighting features

- [isSubsurfaceScatteringEnabled](litlightingmodel/issubsurfacescatteringenabled.md): Whether to include subsurface scattering in the lighting calculation.
- [isClearcoatEnabled](litlightingmodel/isclearcoatenabled.md): Whether to include a clearcoat layer in the lighting calculation.
- [isMultiscatteringEnabled](litlightingmodel/ismultiscatteringenabled.md): Whether to account for multiple scattering between microfacets.
- [isBentNormalEnabled](litlightingmodel/isbentnormalenabled.md): Whether to apply bent normal maps to improve ambient occlusion accuracy.

### Initializers

- [init()](litlightingmodel/init%28%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Lighting models

- [LightingModel](lightingmodel.md): The lighting model used by a [ShaderGraphMaterial.Program](shadergraphmaterial/program-swift.struct.md).
- [UnlitLightingModel](unlitlightingmodel.md): Configuration for an unlit lighting model, which renders without any light interaction.
- [HairLightingModel](hairlightingmodel.md): Configuration for RealityKit’s hair lighting model.
