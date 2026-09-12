> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/blending-swift.enum](https://developer.apple.com/documentation/realitykit/custommaterial/blending-swift.enum)

# CustomMaterial.Blending

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

An object that specifies the transparency of an entity.

## Declaration

```swift
enum Blending
```

## Topics

### Creating a blending object

- [init(blending:)](blending-swift.enum/init%28blending_%29.md): Creates a custom blending object from an existing physically based material’s blending object.

### Specifying transparency

- [CustomMaterial.Blending.opaque](blending-swift.enum/opaque.md): An opaque surface.
- [CustomMaterial.Blending.transparent(opacity:)](blending-swift.enum/transparent%28opacity_%29.md): A transparent or translucent surface.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Custom material types

- [CustomMaterial.Custom](custom-swift.struct.md): An object that defines the custom properties for the material.
- [CustomMaterial.CustomMaterialTexture](custommaterialtexture.md): A texture object that you use to create custom materials.
- [CustomMaterial.LightingModel](lightingmodel-swift.enum.md): An object that defines how the framework renders a custom material.
- [CustomMaterial.BaseColor](basecolor-swift.struct.md): An object that defines an entity’s base color.
- [CustomMaterial.Roughness](roughness-swift.struct.md): An object that defines how the surface of an entity scatters the light it reflects.
- [CustomMaterial.Metallic](metallic-swift.struct.md): An object that defines an entity’s reflectiveness.
- [CustomMaterial.Normal](normal-swift.struct.md): An object that stores fine surface details for an entity in an image texture.
- [CustomMaterial.EmissiveColor](emissivecolor-swift.struct.md): An object that defines the color of the light an entity emits.
- [CustomMaterial.Opacity](opacity.md): An object that defines the transparency options for a custom material.
- [CustomMaterial.AmbientOcclusion](ambientocclusion-swift.struct.md): An object that defines an entity’s exposure to ambient light.
- [CustomMaterial.Specular](specular-swift.struct.md): An object that defines the specular highlights of an entity.
- [CustomMaterial.Clearcoat](clearcoat-swift.struct.md): An object that defines the intensity of an entity’s clear, shiny coating.
- [CustomMaterial.ClearcoatNormal](clearcoatnormal-swift.struct.md): An object that defines the clearcoat normal map texture.
- [CustomMaterial.ResourceStorage](resourcestorage.md): A container for resources that will be encoded into a CustomMaterial’s custom uniforms argument buffer.
- [CustomMaterial.TextureCoordinateTransform](texturecoordinatetransform-swift.typealias.md): The object type that custom material use to hold UV texture coordinates.
