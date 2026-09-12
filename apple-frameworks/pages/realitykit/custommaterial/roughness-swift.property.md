> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/roughness-swift.property](https://developer.apple.com/documentation/realitykit/custommaterial/roughness-swift.property)

# roughness

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

The amount the surface of the 3D object scatters reflected light.

## Declaration

```swift
var roughness: CustomMaterial.Roughness { get set }
```

<a id="discussion"></a>

## Discussion

In physically based rendering, the `roughness` property represents how much the surface of an entity scatters the light that it reflects. A material with a high roughness has a matte appearance, whereas one with a low roughness has a shiny appearance. With custom materials, RealityKit doesn’t automatically use the values set on this property. To render a custom material using roughness, set [lightingModel](lightingmodel-swift.property.md) to [CustomMaterial.LightingModel.lit](lightingmodel-swift.enum/lit.md) or [CustomMaterial.LightingModel.clearcoat](lightingmodel-swift.enum/clearcoat.md), and specify a roughness value by calling `params.surface().set_roughness()` from the surface shader.

![An illustration showing three spheres with different amounts of](https://developer.apple.com/images/com.apple.RealityKit/CustomMaterial-roughness-swift-property-1@2x.png)

With custom materials, the `texture` and `scale` values from the [roughness](roughness-swift.property.md) property are available in your surface shader function, but RealityKit doesn’t automatically use them to render your entity. Your surface shader is responsible for calculating or setting the actual roughness value for rendering.

The following example shows how to use an image and a scale value to specify roughness:

```swift
if let roughnessResource = try? TextureResource.load(named: "entity_roughness") {
    let roughness = MaterialParameters.Texture(roughnessResource)
    material.roughness = PhysicallyBasedMaterial.Roughness(tint: .green, texture:roughness)
}
```

The following surface shader takes the scale and texture from the [roughness](roughness-swift.property.md) property, multiplies them together, and sets the resulting value as the roughness for rendering, which emulates the behavior of [PhysicallyBasedMaterial](../physicallybasedmaterial.md):

```cpp
#include <metal_stdlib>
#include <RealityKit/RealityKit.h>
using namespace metal;

// Samplers are used to retrieve a color value from a texture based on
// the entity's UV coordinates. Samplers can be reused with different textures.
// Surface shader functions should define no more than eight samplers.
constexpr sampler textureSampler(address::clamp_to_edge, filter::bicubic);

[[visible]] void mySurfaceShader(realitykit::surface_parameters params)
{
    // Retrieve the roughness scale from the CustomMaterial.
    float roughnessScale = params.material_constants().roughness_scale();

    // Retrieve the sampled value from the CustomMaterial's base color texture.
    auto uv = getFlippedUVs(params);
    auto tex = params.textures();
    half roughness = tex.roughness().sample(textureSampler, uv).r;

    // Multiply the tint and the sampled value from the texture, and assign it
    // to the shader's base color property.
    roughness *= roughnessScale;

    // Set the roughness value to be used by the custom material shader.
    params.surface().set_roughness(roughness);
}
```

For more information on creating custom materials and writing shader functions, see [Modifying RealityKit rendering using custom materials](../modifying-realitykit-rendering-using-custom-materials.md).

## See Also

### Setting the core properties

- [baseColor](basecolor-swift.property.md): The color of an entity unmodified by lighting.
- [metallic](metallic-swift.property.md): The reflectiveness of an entity.
- [normal](normal-swift.property.md): A texture map that stores fine surface details for the entity.
- [emissiveColor](emissivecolor-swift.property.md): The color of light this material emits.
- [ambientOcclusion](ambientocclusion-swift.property.md): The ambient light exposure for a material.
- [specular](specular-swift.property.md): The bright highlights to apply to the entity.
- [clearcoat](clearcoat-swift.property.md): The transparent highlights that simulate a clear, shiny coating on an entity.
- [clearcoatRoughness](clearcoatroughness-swift.property.md): The degree to which an entity’s clear, shiny coating scatters light to create soft highlights.
- [clearcoatNormal](clearcoatnormal-swift.property.md): Waviness and imperfections for the top clearcoat.
