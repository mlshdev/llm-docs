> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hairlightingmodel](https://developer.apple.com/documentation/realitykit/hairlightingmodel)

# HairLightingModel

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Configuration for RealityKit’s hair lighting model.

## Declaration

```swift
struct HairLightingModel
```

## Mentioned In

- [Rendering high-fidelity characters](rendering-high-fidelity-characters.md)

<a id="overview"></a>

## Overview

`LitLightingModel` doesn’t accurately represent hair and fur, since their thin, nearly cylindrical strands scatter light differently than a typical opaque surface. Use this lighting model for materials that shade hair or fur.

To render with the hair lighting model, set a `ShaderGraphMaterial.Program.Descriptor`’s `lightingModel` to `.hair()`:

```
let descriptor = ShaderGraphMaterial.Program.Descriptor(shaderGraph: graph, lightingModel: .hair())
let program = try await ShaderGraphMaterial.Program(descriptor: descriptor)
```

The surface output node in the descriptor’s `ShaderGraph` must produce hair-shading output for this model to take effect.

## Topics

### Initializers

- [init()](hairlightingmodel/init%28%29.md)

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
- [UnlitLightingModel](unlitlightingmodel.md): Configuration for an unlit lighting model, which renders without any light interaction.
