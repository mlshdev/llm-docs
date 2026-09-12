> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/emissivecolor-swift.struct](https://developer.apple.com/documentation/realitykit/custommaterial/emissivecolor-swift.struct)

# CustomMaterial.EmissiveColor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

An object that defines the color of the light an entity emits.

## Declaration

```swift
struct EmissiveColor
```

## Topics

### Creating an emissive color object

- [init(\_:)](emissivecolor-swift.struct/init%28__%29.md): Creates a color of emitted light based on the emissive color property from a physically based material.
- [init(color:texture:)](emissivecolor-swift.struct/init%28color_texture_%29-xkh3.md): Creates a color of emitted light in macOS.
- [init(color:texture:)](emissivecolor-swift.struct/init%28color_texture_%29-81kgh.md): Creates a color of emitted light in macOS.

### Accessing emissive color data

- [texture](emissivecolor-swift.struct/texture.md): An optional image texture that defines the color of light emission.
- [color](emissivecolor-swift.struct/color-5hrho.md)
- [color](emissivecolor-swift.struct/color-9scic.md)

### Initializers

- [init(color:texture:)](emissivecolor-swift.struct/init%28color_texture_%29.md): Creates a color of emitted light in macOS.

## See Also

### Custom material types

- [CustomMaterial.Custom](custom-swift.struct.md): An object that defines the custom properties for the material.
- [CustomMaterial.CustomMaterialTexture](custommaterialtexture.md): A texture object that you use to create custom materials.
- [CustomMaterial.LightingModel](lightingmodel-swift.enum.md): An object that defines how the framework renders a custom material.
- [CustomMaterial.BaseColor](basecolor-swift.struct.md): An object that defines an entity’s base color.
- [CustomMaterial.Roughness](roughness-swift.struct.md): An object that defines how the surface of an entity scatters the light it reflects.
- [CustomMaterial.Metallic](metallic-swift.struct.md): An object that defines an entity’s reflectiveness.
- [CustomMaterial.Normal](normal-swift.struct.md): An object that stores fine surface details for an entity in an image texture.
- [CustomMaterial.Blending](blending-swift.enum.md): An object that specifies the transparency of an entity.
- [CustomMaterial.Opacity](opacity.md): An object that defines the transparency options for a custom material.
- [CustomMaterial.AmbientOcclusion](ambientocclusion-swift.struct.md): An object that defines an entity’s exposure to ambient light.
- [CustomMaterial.Specular](specular-swift.struct.md): An object that defines the specular highlights of an entity.
- [CustomMaterial.Clearcoat](clearcoat-swift.struct.md): An object that defines the intensity of an entity’s clear, shiny coating.
- [CustomMaterial.ClearcoatNormal](clearcoatnormal-swift.struct.md): An object that defines the clearcoat normal map texture.
- [CustomMaterial.ResourceStorage](resourcestorage.md): A container for resources that will be encoded into a CustomMaterial’s custom uniforms argument buffer.
- [CustomMaterial.TextureCoordinateTransform](texturecoordinatetransform-swift.typealias.md): The object type that custom material use to hold UV texture coordinates.
