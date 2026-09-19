> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lightingmodel/lit(diffusemodel:specularmodel:issubsurfacescatteringenabled:ismultiscatteringenabled:isbentnormalenabled:isclearcoatenabled:)

# lit(diffuseModel:specularModel:isSubsurfaceScatteringEnabled:isMultiscatteringEnabled:isBentNormalEnabled:isClearcoatEnabled:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
static func lit(diffuseModel: LitLightingModel.DiffuseModel = .hammon, specularModel: LitLightingModel.SpecularModel = .ggx, isSubsurfaceScatteringEnabled: Bool = false, isMultiscatteringEnabled: Bool = true, isBentNormalEnabled: Bool = false, isClearcoatEnabled: Bool = false) -> LightingModel
```

## See Also

### Creating a lit model

- [LightingModel.lit(\_:)](lit%28__%29.md)
