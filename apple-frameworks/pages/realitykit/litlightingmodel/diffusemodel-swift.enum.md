> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/litlightingmodel/diffusemodel-swift.enum](https://developer.apple.com/documentation/realitykit/litlightingmodel/diffusemodel-swift.enum)

# LitLightingModel.DiffuseModel

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The diffuse lighting algorithm used in a [LitLightingModel](../litlightingmodel.md).

## Declaration

```swift
enum DiffuseModel
```

## Topics

### Choosing a diffuse model

- [LitLightingModel.DiffuseModel.lambertian](diffusemodel-swift.enum/lambertian.md): Lambertian diffuse, a simple and performant constant-factor model.
- [LitLightingModel.DiffuseModel.orenNayar](diffusemodel-swift.enum/orennayar.md): Oren-Nayar diffuse, a roughness-aware model suited to matte surfaces.
- [LitLightingModel.DiffuseModel.hammon](diffusemodel-swift.enum/hammon.md): Hammon diffuse, a physically based model that accounts for roughness.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring shading models

- [diffuseModel](diffusemodel-swift.property.md): The diffuse algorithm to use.
- [specularModel](specularmodel-swift.property.md): The specular algorithm to use.
- [LitLightingModel.SpecularModel](specularmodel-swift.enum.md): The specular lighting algorithm used in a [LitLightingModel](../litlightingmodel.md).
