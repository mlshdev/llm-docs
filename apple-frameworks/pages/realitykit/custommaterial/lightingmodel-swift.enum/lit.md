> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/lightingmodel-swift.enum/lit](https://developer.apple.com/documentation/realitykit/custommaterial/lightingmodel-swift.enum/lit)

# CustomMaterial.LightingModel.lit

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

The entity renders using physically based rendering techniques without a clearcoat.

## Declaration

```swift
case lit
```

<a id="discussion"></a>

## Discussion

A custom material using the [CustomMaterial.LightingModel.lit](lit.md) lighting model uses physically based rendering techniques, but doesn’t render a clearcoat. If a [CustomMaterial.LightingModel.lit](lit.md) material’s surface shader calls `params.surface().set_clearcoat()` or `params.surface().set_clearcoat_roughness(),` ReallityKit ignores it.

## See Also

### Specifying the lighting model

- [CustomMaterial.LightingModel.clearcoat](clearcoat.md): The entity renders using physically based rendering techniques with a clearcoat.
- [CustomMaterial.LightingModel.unlit](unlit.md): The entity renders with no light or shadow calculations.
