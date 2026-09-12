> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/specular-swift.struct/init(_:)](https://developer.apple.com/documentation/realitykit/custommaterial/specular-swift.struct/init(_:))

# init(\_:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

Creates an object from a physically based material’s specular property.

## Declaration

```swift
init(_ value: PhysicallyBasedMaterial.Specular)
```

## Parameters

- `value`: The [specular](../../physicallybasedmaterial/specular-swift.property.md) property from a [PhysicallyBasedMaterial](../../physicallybasedmaterial.md).

<a id="discussion"></a>

## Discussion

This initializer creates an object by copying the values from an existing [PhysicallyBasedMaterial.Specular](../../physicallybasedmaterial/specular-swift.struct.md) object.

RealityKit automatically draws *specular highlights* for physically based materials using the values of various properties, primarily [roughness](../../physicallybasedmaterial/roughness-swift.property.md) and [metallic](../../physicallybasedmaterial/metallic-swift.property.md). Specular highlights are bright spots of reflected light that appear on shiny objects.

![An illustration showing a sphere and a cube with rounded corners.](https://developer.apple.com/images/com.apple.RealityKit/CustomMaterial-Specular-swift-struct-init%28_:%29-1@2x.png)

While many real-world objects can be accurately and realistically simulated with just the core physically based rendering (PBR) properties, you can create additional realistic effects by augmenting the specular highlights.

The specular [scale](scale.md) and [texture](texture.md) values are available to the material’s surface shader, but RealityKit doesn’t add specular highlights unless the surface shader function calls `params.surface().set_specular()`.

The following Metal code demonstrates using the specular `scale` and `texture` values in a surface shader function to calculate additional specular highlights, emulating the behavior of [PhysicallyBasedMaterial](../../physicallybasedmaterial.md):

```other
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

    // Multiply the tint and the sampled value from the texture, and
    // assign the result.
    specular *= specularScale;
    params.surface().set_specular(specular);
```

## See Also

### Creating a specular object

- [init(floatLiteral:)](init%28floatliteral_%29.md): Creates an object from a single value.
- [init(scale:texture:)](init%28scale_texture_%29.md): Creates an object from a single value, a UV-mapped texture, or both.
