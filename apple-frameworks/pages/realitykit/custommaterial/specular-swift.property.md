> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/specular-swift.property](https://developer.apple.com/documentation/realitykit/custommaterial/specular-swift.property)

# specular

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

The bright highlights to apply to the entity.

## Declaration

```swift
var specular: CustomMaterial.Specular { get set }
```

<a id="discussion"></a>

## Discussion

In physically based rendering (PBR), specular highlights primarily come from the object’s [roughness](../physicallybasedmaterial/roughness-swift.property.md) value. RealityKit renders materials that have a low roughness value with specular highlights based on the environment, lighting, and shape of the entity. As a result, for most materials, you don’t need to specify a `specular` value.

For some types of dielectric (nonmetallic) materials, like facet-cut glass or gems, PBR algorithms don’t create bright enough specular highlights using just roughness. To accurately simulate those types of materials, the [specular](../physicallybasedmaterial/specular-swift.property.md) property allows you to specify additional specularity for the entity.

The following example demonstrates how to add specularity using a single value for the entire material:

```swift
material.specular = .init(floatLiteral: 0.8)
```

The following code shows how to add specularity using a UV-mapped image texture:

```swift
if let specularResource = try? TextureResource.load(named: "entity_specular") {
    let specularMap = MaterialParameters.Texture(specularResource)
    material.specular = .init(texture: specularMap)
}
```

With custom materials, the specular [scale](specular-swift.struct/scale.md) and [texture](specular-swift.struct/texture.md) are available to the material’s shader functions, but RealityKit doesn’t automatically use the values you set. To render a custom material with additional specular highlights, set [lightingModel](lightingmodel-swift.property.md) to [CustomMaterial.LightingModel.lit](lightingmodel-swift.enum/lit.md) or [CustomMaterial.LightingModel.clearcoat](lightingmodel-swift.enum/clearcoat.md), and call `params().surface().set_specular()` from its surface shader.

The following Metal code demonstrates using the specular scale and texture values, simulating the behavior of the shaders that render a [PhysicallyBasedMaterial](../physicallybasedmaterial.md):

```cpp
// Retrieve the opacity scale from the CustomMaterial.
float specularScale = params.material_constants().specular_scale();

// Retrieve the entity's texture coordinates.
float2 uv = params.geometry().uv0();

// Entities loaded from a USDZ or .reality file use texture coordinates
// with a flipped y-axis. This compensates for that.
uv.y = 1.0 - uv.y;

// Sample the specular texture.
auto tex = params.textures();
half specular = tex.specular().sample(textureSampler, uv).r;

// Multiply the tint and the sampled value from the texture and assign
// the result.
specular *= specularScale;
params.surface().set_specular(specular);
```

For more information on creating custom materials and writing shader functions, see [Modifying RealityKit rendering using custom materials](../modifying-realitykit-rendering-using-custom-materials.md).

## See Also

### Setting the core properties

- [baseColor](basecolor-swift.property.md): The color of an entity unmodified by lighting.
- [roughness](roughness-swift.property.md): The amount the surface of the 3D object scatters reflected light.
- [metallic](metallic-swift.property.md): The reflectiveness of an entity.
- [normal](normal-swift.property.md): A texture map that stores fine surface details for the entity.
- [emissiveColor](emissivecolor-swift.property.md): The color of light this material emits.
- [ambientOcclusion](ambientocclusion-swift.property.md): The ambient light exposure for a material.
- [clearcoat](clearcoat-swift.property.md): The transparent highlights that simulate a clear, shiny coating on an entity.
- [clearcoatRoughness](clearcoatroughness-swift.property.md): The degree to which an entity’s clear, shiny coating scatters light to create soft highlights.
- [clearcoatNormal](clearcoatnormal-swift.property.md): Waviness and imperfections for the top clearcoat.
