> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/lightingmodel-swift.enum/clearcoat](https://developer.apple.com/documentation/realitykit/custommaterial/lightingmodel-swift.enum/clearcoat)

# CustomMaterial.LightingModel.clearcoat

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

The entity renders using physically based rendering techniques with a clearcoat.

## Declaration

```swift
case clearcoat
```

<a id="discussion"></a>

## Discussion

A custom material using the [CustomMaterial.LightingModel.clearcoat](clearcoat.md) lighting model uses physically based rendering, including a clearcoat if the material’s surface shader calls `params.surface().set_clearcoat()`.

## See Also

### Specifying the lighting model

- [CustomMaterial.LightingModel.lit](lit.md): The entity renders using physically based rendering techniques without a clearcoat.
- [CustomMaterial.LightingModel.unlit](unlit.md): The entity renders with no light or shadow calculations.
