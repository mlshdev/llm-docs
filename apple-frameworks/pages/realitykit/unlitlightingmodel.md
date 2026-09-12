> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/unlitlightingmodel](https://developer.apple.com/documentation/realitykit/unlitlightingmodel)

# UnlitLightingModel

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Configuration for an unlit lighting model, which renders without any light interaction.

## Declaration

```swift
struct UnlitLightingModel
```

## Topics

### Configuring tone mapping

- [isTonemappingEnabled](unlitlightingmodel/istonemappingenabled.md): Whether to apply tonemapping to this material’s output.

### Initializers

- [init()](unlitlightingmodel/init%28%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Lighting models

- [LightingModel](lightingmodel.md): The lighting model used by a [ShaderGraphMaterial.Program](shadergraphmaterial/program-swift.struct.md).
- [LitLightingModel](litlightingmodel.md): Configuration for RealityKit’s physically based lighting model.
- [HairLightingModel](hairlightingmodel.md): Configuration for RealityKit’s hair lighting model.
