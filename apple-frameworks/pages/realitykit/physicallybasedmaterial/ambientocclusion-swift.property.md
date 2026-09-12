> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/ambientocclusion-swift.property](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/ambientocclusion-swift.property)

# ambientOcclusion

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The ambient occlusion values for a material.

## Declaration

```swift
var ambientOcclusion: PhysicallyBasedMaterial.AmbientOcclusion { get set }
```

<a id="discussion"></a>

## Discussion

Ambient occlusion represents the entity’s exposure to ambient light.

Specify ambient occlusion using a UV-mapped image called an *ambient occlusion map*. A value of black (`0.0`) represents parts of the model that receive less ambient light because that part of the model is a crevice, dent, or recessed area, or because another part of the same entity is preventing ambient light from reaching it. Ambient occlusion values of white (`1.0`) represent flat portions of the model that receive full ambient light. You generate ambient occlusion maps using a 3D software package.

The following code loads an ambient occlusion map:

````swift if let aoResource = try? TextureResource.load(named:
"entity_ao") {
    let aoMap = MaterialParameters.Texture(aoResource)
    material.emissiveColor = .init(texture: aoMap)
} ```
````

## See Also

### Setting the core properties

- [baseColor](basecolor-swift.property.md): The color of an entity unmodified by lighting.
- [roughness](roughness-swift.property.md): The amount the surface of the 3D object scatters reflected light.
- [metallic](metallic-swift.property.md): The reflectiveness of an entity.
- [normal](normal-swift.property.md): The normal map for the entity.
- [specular](specular-swift.property.md): The specular highlight applied to the entity.
- [clearcoat](clearcoat-swift.property.md): The transparent highlights that simulate a clear, shiny coating on an entity.
- [clearcoatRoughness](clearcoatroughness-swift.property.md): The degree to which an entity’s clear, shiny coating scatters light to create soft highlights.
- [clearcoatNormal](clearcoatnormal-swift.property.md): Waviness and imperfections for the top clearcoat.
