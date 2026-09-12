> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/basecolor-swift.property](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/basecolor-swift.property)

# baseColor

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The color of an entity unmodified by lighting.

## Declaration

```swift
var baseColor: PhysicallyBasedMaterial.BaseColor { get set }
```

## Mentioned In

- [Applying realistic material and lighting effects to entities](../applying-realistic-material-and-lighting-effects-to-entities.md)

<a id="discussion"></a>

## Discussion

The base color of an entity is either a solid color or a UV-mapped image texture. This property represents the color of the entity before RealityKit applies any lighting or rendering calculations.

To determine the appearance of the entity, RealityKit modifies the entity’s base color using its material properties and the light sources in the scene.

You can define an entity’s base color using a `CGColor`, a UV-mapped image texture, or both. If you only provide a color, RealityKit uses that as the base color for the entire entity. If you specify only an image texture, it applies that texture as the base color of the entity. If you provide both a color and a texture, RealityKit tints the image texture using the color.

Here’s an example of using a single color to specify base color:

```swift
var material = PhysicallyBasedMaterial()
material.baseColor = PhysicallyBasedMaterial.BaseColor(tint:.red)
```

The following example demonstrates how to use an image to specify base color:

```swift
var material = PhysicallyBasedMaterial()

    // Load entity_basecolor.png from the app's bundle.
    if let baseResource = try? TextureResource.load(named: "entity_basecolor") {
        // Create a material parameter and assign it.
        let baseColor = MaterialParameters.Texture(baseResource)
        material.baseColor = PhysicallyBasedMaterial.BaseColor(texture:baseColor)
    }
```

## See Also

### Setting the core properties

- [roughness](roughness-swift.property.md): The amount the surface of the 3D object scatters reflected light.
- [metallic](metallic-swift.property.md): The reflectiveness of an entity.
- [normal](normal-swift.property.md): The normal map for the entity.
- [ambientOcclusion](ambientocclusion-swift.property.md): The ambient occlusion values for a material.
- [specular](specular-swift.property.md): The specular highlight applied to the entity.
- [clearcoat](clearcoat-swift.property.md): The transparent highlights that simulate a clear, shiny coating on an entity.
- [clearcoatRoughness](clearcoatroughness-swift.property.md): The degree to which an entity’s clear, shiny coating scatters light to create soft highlights.
- [clearcoatNormal](clearcoatnormal-swift.property.md): Waviness and imperfections for the top clearcoat.
