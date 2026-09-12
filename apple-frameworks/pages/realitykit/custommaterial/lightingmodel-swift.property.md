> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/lightingmodel-swift.property](https://developer.apple.com/documentation/realitykit/custommaterial/lightingmodel-swift.property)

# lightingModel

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

The lighting model that the material uses.

## Declaration

```swift
var lightingModel: CustomMaterial.LightingModel { get }
```

## Mentioned In

- [Modifying RealityKit rendering using custom materials](../modifying-realitykit-rendering-using-custom-materials.md)

<a id="discussion"></a>

## Discussion

A custom material’s lighting model determines exactly how RealityKit uses the values set in your surface shader’s to render the entity.

Custom materials supports the following lighting models:

| Lighting Model | Description | Supported Shader Outputs |
| --- | --- | --- |
| `.lit` | Uses physically based rendering techniques, but excludes clearcoat. | All except `set_clearcoat()` and `set_clearcoat_roughness()` |
| `.clearcoat` | Uses physically based rendering techniques, including clearcoat. | All |
| `.unlit` | Renders without any shading or lighting calculations. The result is similar to using an [UnlitMaterial](../unlitmaterial.md). | Uses `set_emissive_color()` only |

## See Also

### Setting shader properties

- [program](program-swift.property.md)
- [custom](custom-swift.property.md): User-defined properties for the material’s shader functions.
- [withMutableUniforms(ofType:\_:)](withmutableuniforms%28oftype___%29.md): Calls the given closure with an inout reference to the underlying storage bound to the custom uniforms argument of a surface shader and geometry modifier.
- [withMutableUniforms(ofType:stage:\_:)](withmutableuniforms%28oftype_stage___%29.md): Calls the given closure with an inout reference to the underlying storage bound to the custom uniforms argument of a surface shader or geometry modifier.
