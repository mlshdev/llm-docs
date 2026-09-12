> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/clearcoat-swift.property](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/clearcoat-swift.property)

# clearcoat

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The transparent highlights that simulate a clear, shiny coating on an entity.

## Declaration

```swift
var clearcoat: PhysicallyBasedMaterial.Clearcoat { get set }
```

<a id="discussion"></a>

## Discussion

An entity in RealityKit can display a clearcoat, which is a separate layer of transparent specular highlights used to simulate a clear transparent coating, like the paint on a car, or the surface of lacquered objects. By default, materials don’t have clearcoat enabled.

Use this property to enable clearcoat rendering. Specifying any value greater than `0.0` turns clearcoat rendering on. A value of `1.0` indicates a full clearcoat. RealityKit treats values above `1.0` as if they’re `1.0`.

You can specify [clearcoat](clearcoat-swift.property.md) using a single `Float` that applies to the entire material, or a UV-mapped grayscale image to provide different values for different parts of an entity.

The following example specifies `clearcoat` using a single value:

```swift
material.clearcoat = .init(floatLiteral: 0.8)
```

And this example shows how to specify `clearcoat` using a UV-mapped image texture:

```swift
if let clearcoatResource = try? TextureResource.load(named:"entity_clearcoat") {
    let clearcoatMap = MaterialParameters.Texture(clearcoatResource)
    material.clearcoat = .init(texture: clearcoatMap)
}
```

## See Also

### Setting the core properties

- [baseColor](basecolor-swift.property.md): The color of an entity unmodified by lighting.
- [roughness](roughness-swift.property.md): The amount the surface of the 3D object scatters reflected light.
- [metallic](metallic-swift.property.md): The reflectiveness of an entity.
- [normal](normal-swift.property.md): The normal map for the entity.
- [ambientOcclusion](ambientocclusion-swift.property.md): The ambient occlusion values for a material.
- [specular](specular-swift.property.md): The specular highlight applied to the entity.
- [clearcoatRoughness](clearcoatroughness-swift.property.md): The degree to which an entity’s clear, shiny coating scatters light to create soft highlights.
- [clearcoatNormal](clearcoatnormal-swift.property.md): Waviness and imperfections for the top clearcoat.
