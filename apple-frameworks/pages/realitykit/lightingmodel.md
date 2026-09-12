> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lightingmodel](https://developer.apple.com/documentation/realitykit/lightingmodel)

# LightingModel

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The lighting model used by a [ShaderGraphMaterial.Program](shadergraphmaterial/program-swift.struct.md).

## Declaration

```swift
enum LightingModel
```

<a id="overview"></a>

## Overview

This must match the type of the surface output node in the [ShaderGraph](shadergraph.md). For example, a graph whose surface node is a PBR surface shader requires `.lit`.

## Topics

### Creating a lit model

- [lit(diffuseModel:specularModel:isSubsurfaceScatteringEnabled:isMultiscatteringEnabled:isBentNormalEnabled:isClearcoatEnabled:)](lightingmodel/lit%28diffusemodel_specularmodel_issubsurfacescatteringenabled_ismultiscatteringenabled_isbentnormalenabled_isclearcoatenabled_%29.md)
- [LightingModel.lit(\_:)](lightingmodel/lit%28__%29.md)

### Creating an unlit model

- [unlit(isTonemappingEnabled:)](lightingmodel/unlit%28istonemappingenabled_%29.md)
- [LightingModel.unlit(\_:)](lightingmodel/unlit%28__%29.md)

### Creating a hair model

- [hair()](lightingmodel/hair%28%29.md)
- [LightingModel.hair(\_:)](lightingmodel/hair%28__%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Lighting models

- [LitLightingModel](litlightingmodel.md): Configuration for RealityKit’s physically based lighting model.
- [UnlitLightingModel](unlitlightingmodel.md): Configuration for an unlit lighting model, which renders without any light interaction.
- [HairLightingModel](hairlightingmodel.md): Configuration for RealityKit’s hair lighting model.
