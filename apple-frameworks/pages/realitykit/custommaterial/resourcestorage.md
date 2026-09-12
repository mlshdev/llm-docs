> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/resourcestorage](https://developer.apple.com/documentation/realitykit/custommaterial/resourcestorage)

# CustomMaterial.ResourceStorage

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

A container for resources that will be encoded into a CustomMaterial’s custom uniforms argument buffer.

## Declaration

```swift
struct ResourceStorage<UniformsType>
```

<a id="overview"></a>

## Overview

An object of this type is passed to you in the callback closure passed to [withMutableUniforms(ofType:stage:\_:)](withmutableuniforms%28oftype_stage___%29.md) and allows you to set [TextureResource](../textureresource.md) values within your custom uniforms argument buffer.

## Topics

### Subscripts

- [subscript(buffer:)](resourcestorage/subscript%28buffer_%29.md)
- [subscript(textureResource:)](resourcestorage/subscript%28textureresource_%29.md)

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
- [CustomMaterial.Blending](blending-swift.enum.md): An object that specifies the transparency of an entity.
- [CustomMaterial.Opacity](opacity.md): An object that defines the transparency options for a custom material.
- [CustomMaterial.AmbientOcclusion](ambientocclusion-swift.struct.md): An object that defines an entity’s exposure to ambient light.
- [CustomMaterial.Specular](specular-swift.struct.md): An object that defines the specular highlights of an entity.
- [CustomMaterial.Clearcoat](clearcoat-swift.struct.md): An object that defines the intensity of an entity’s clear, shiny coating.
- [CustomMaterial.ClearcoatNormal](clearcoatnormal-swift.struct.md): An object that defines the clearcoat normal map texture.
- [CustomMaterial.TextureCoordinateTransform](texturecoordinatetransform-swift.typealias.md): The object type that custom material use to hold UV texture coordinates.
