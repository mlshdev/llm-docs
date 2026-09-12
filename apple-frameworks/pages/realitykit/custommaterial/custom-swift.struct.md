> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/custom-swift.struct](https://developer.apple.com/documentation/realitykit/custommaterial/custom-swift.struct)

# CustomMaterial.Custom

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

An object that defines the custom properties for the material.

## Declaration

```swift
struct Custom
```

## Topics

### Creating a custom object

- [init(value:texture:)](custom-swift.struct/init%28value_texture_%29.md): Creates a custom object from a vector and texture.

### Accessing custom values

- [value](custom-swift.struct/value.md): A custom vector that the framework sends to the material’s shader functions.
- [texture](custom-swift.struct/texture.md): A custom UV-mapped image texture that the framework sends to the material’s shader functions.

## See Also

### Custom material types

- [CustomMaterial.CustomMaterialTexture](custommaterialtexture.md): A texture object that you use to create custom materials.
- [CustomMaterial.LightingModel](lightingmodel-swift.enum.md): An object that defines how the framework renders a custom material.
- [CustomMaterial.BaseColor](basecolor-swift.struct.md): An object that defines an entity’s base color.
- [CustomMaterial.Roughness](roughness-swift.struct.md): An object that defines how the surface of an entity scatters the light it reflects.
- [CustomMaterial.Metallic](metallic-swift.struct.md): An object that defines an entity’s reflectiveness.
- [CustomMaterial.Normal](normal-swift.struct.md): An object that stores fine surface details for an entity in an image texture.
- [CustomMaterial.EmissiveColor](emissivecolor-swift.struct.md): An object that defines the color of the light an entity emits.
- [CustomMaterial.Blending](blending-swift.enum.md): An object that specifies the transparency of an entity.
- [CustomMaterial.Opacity](opacity.md): An object that defines the transparency options for a custom material.
- [CustomMaterial.AmbientOcclusion](ambientocclusion-swift.struct.md): An object that defines an entity’s exposure to ambient light.
- [CustomMaterial.Specular](specular-swift.struct.md): An object that defines the specular highlights of an entity.
- [CustomMaterial.Clearcoat](clearcoat-swift.struct.md): An object that defines the intensity of an entity’s clear, shiny coating.
- [CustomMaterial.ClearcoatNormal](clearcoatnormal-swift.struct.md): An object that defines the clearcoat normal map texture.
- [CustomMaterial.ResourceStorage](resourcestorage.md): A container for resources that will be encoded into a CustomMaterial’s custom uniforms argument buffer.
- [CustomMaterial.TextureCoordinateTransform](texturecoordinatetransform-swift.typealias.md): The object type that custom material use to hold UV texture coordinates.
