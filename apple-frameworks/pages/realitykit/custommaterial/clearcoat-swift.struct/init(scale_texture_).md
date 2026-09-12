> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/clearcoat-swift.struct/init(scale:texture:)](https://developer.apple.com/documentation/realitykit/custommaterial/clearcoat-swift.struct/init(scale:texture:))

# init(scale:texture:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

Creates a clearcoat object using a single value or a texture.

## Declaration

```swift
init(scale: Float = 1.0, texture: CustomMaterial.Texture? = nil)
```

## Parameters

- `scale`: The clearcoat value for the entire material.
- `texture`: The clearcoat values as the texture of a UV-mapped image.

<a id="discussion"></a>

## Discussion

A clearcoat is a separate layer of transparent specular highlights used to simulate a clear coating, like on a car or the surface of lacquered objects. Use this initializer to create an object to specify the amount of clearcoat for a material using a single value for the entire material, a UV-mapped image to specify different values for different parts of the entity, or both.

The copied values for [scale](scale.md) and [texture](texture.md) are available in the material’s surface shader function, regardless of the material’s lighting model; however RealityKit only renders a clearcoat when [lightingModel](../lightingmodel-swift.property.md) is [CustomMaterial.LightingModel.clearcoat](../lightingmodel-swift.enum/clearcoat.md) and the material’s surface shader function calls `params.surface().set_clearcoat()`.

The following Metal code demonstrates how to retrieve the clearcoat `scale` and `texture` in a surface shader function and use them to calculate the final clearcoat value for rendering:

```other
    // Retrieve the base color tint from the CustomMaterial.
    float clearcoatScale = params.material_constants().clearcoat_scale();

    // Retrieve the entity's primary texture coordinates.
    float2 uv = params.geometry().uv0();

    // Models loaded from a USDZ of .reality file use texture coordinates
    // with a flipped y-axis. This compensates for that.
    uv.y = 1.0 - uv.y;

    // Sample the clearcoat texture to get the value UV-mapped to this pixel.
    auto tex = params.textures();
    half clearcoat = tex.clearcoat().sample(textureSampler, uv).r;

    // Multiply the tint and the sampled value from the texture, and assign it
    // to the shader's base color property.
    clearcoat *= clearcoatScale;
    params.surface().set_clearcoat(clearcoat);
```

## See Also

### Creating a clearcoat object

- [init(floatLiteral:)](init%28floatliteral_%29.md): Creates a clearcoat object using a single value.
- [init(\_:)](init%28__%29.md): Creates a custom clearcoat object from a physically based material’s clearcoat property.
