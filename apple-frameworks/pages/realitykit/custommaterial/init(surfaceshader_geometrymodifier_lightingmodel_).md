> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/init(surfaceshader:geometrymodifier:lightingmodel:)](https://developer.apple.com/documentation/realitykit/custommaterial/init(surfaceshader:geometrymodifier:lightingmodel:))

# init(surfaceShader:geometryModifier:lightingModel:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

Creates a custom material from a lighting model, surface shader, and geometry modifier.

## Declaration

```swift
init(surfaceShader: CustomMaterial.SurfaceShader, geometryModifier: CustomMaterial.GeometryModifier? = nil, lightingModel: CustomMaterial.LightingModel) throws
```

## Parameters

- `surfaceShader`: The surface shader function.
- `geometryModifier`: The geometry modifier shader function.
- `lightingModel`: The lighting model.

## Mentioned In

- [Modifying RealityKit rendering using custom materials](../modifying-realitykit-rendering-using-custom-materials.md)

<a id="discussion"></a>

## Discussion

This initializer creates a custom material using a lighting model you specify, which determines how RealityKit renders the output of your shader functions. The [CustomMaterial.LightingModel.lit](lightingmodel-swift.enum/lit.md) and [CustomMaterial.LightingModel.clearcoat](lightingmodel-swift.enum/clearcoat.md) use RealityKit’s physically-based shaders to render the entity based on the output of your shader functions. When using these lighting models, RealityKit uses all provided material attributes like [baseColor](basecolor-swift.property.md), [metallic](metallic-swift.property.md) and [normal](normal-swift.property.md).

The [CustomMaterial.LightingModel.unlit](lightingmodel-swift.enum/unlit.md) lighting model renders the entity with no shadows or surface effects. This lighting model only supports [baseColor](basecolor-swift.property.md) and [blending](blending-swift.property.md).

## See Also

### Creating custom materials

- [init(from:geometryModifier:)](init%28from_geometrymodifier_%29.md): Creates a custom material from an existing material and a geometry modifier.
- [init(from:surfaceShader:geometryModifier:)](init%28from_surfaceshader_geometrymodifier_%29.md): Creates a custom material from an existing material, surface shader, and geometry modifier.
- [init(program:)](init%28program_%29.md)
