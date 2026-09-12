> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/basecolor-swift.struct](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/basecolor-swift.struct)

# PhysicallyBasedMaterial.BaseColor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that defines an entity’s base color.

## Declaration

```swift
struct BaseColor
```

<a id="overview"></a>

## Overview

Use this struct to specify an entity’s base color, which defines the entity’s appearance before RealityKit calculates the effect of lighting or material properties such as [roughness](roughness-swift.property.md) or [metallic](metallic-swift.property.md). For more information, see [baseColor](basecolor-swift.property.md).

## Topics

### Creating a base color object

- [init(tint:texture:)](basecolor-swift.struct/init%28tint_texture_%29-2wriz.md): Creates a base color object from a color or texture on macOS.
- [init(tint:texture:)](basecolor-swift.struct/init%28tint_texture_%29-5jeqr.md): Creates a base color object from a color or texture on macOS.
- [init(\_:)](basecolor-swift.struct/init%28__%29.md): Creates a base color object from a custom material’s base color property.

### Accessing texture data

- [texture](basecolor-swift.struct/texture.md): The base color as a UV Image map.
- [textureSemantic](basecolor-swift.struct/texturesemantic.md): The intended use of this object’s texture property.

### Initializers

- [init(tint:texture:)](basecolor-swift.struct/init%28tint_texture_%29.md): Creates a base color object from a color or texture on macOS.

### Instance Properties

- [tint](basecolor-swift.struct/tint-2znu0.md)
- [tint](basecolor-swift.struct/tint-6heih.md)

## See Also

### Realistic materials

- [Applying realistic material and lighting effects to entities](../applying-realistic-material-and-lighting-effects-to-entities.md): Enhance the appearance of objects in a RealityKit scene with Physically Based Rendering (PBR).
- [Rendering high-fidelity characters](../rendering-high-fidelity-characters.md): Configure material and lighting properties to avoid flat, dull skin and static hair on your characters.
- [Generating procedural textures](../../visionos/generating-procedural-textures-in-visionos.md): Display a 3D model that generates procedural textures in a reality view.
- [PhysicallyBasedMaterial](../physicallybasedmaterial.md): A material that simulates the appearance of real-world objects.
- [PhysicallyBasedMaterial.Roughness](roughness-swift.struct.md): An object that defines the roughness of an entity’s surface.
- [PhysicallyBasedMaterial.Metallic](metallic-swift.struct.md): An object that defines the reflectiveness of an entity.
- [PhysicallyBasedMaterial.Normal](normal-swift.struct.md): An object that specifies an entity’s normal map.
- [PhysicallyBasedMaterial.Blending](blending-swift.enum.md): The object that defines the transparency of an entity.
- [PhysicallyBasedMaterial.AmbientOcclusion](ambientocclusion-swift.struct.md): An object that defines the ambient occlusion of an entity’s surface.
- [PhysicallyBasedMaterial.Specular](specular-swift.struct.md): An object that defines the specular highlights of an entity.
- [PhysicallyBasedMaterial.SheenColor](sheencolor.md): An object that defines the color of an entity’s sheen.
- [PhysicallyBasedMaterial.Clearcoat](clearcoat-swift.struct.md): An object that defines the intensity of an entity’s clear, shiny coating.
- [PhysicallyBasedMaterial.ClearcoatRoughness](clearcoatroughness-swift.struct.md): An object that defines the degree to which an entity’s clear, shiny coating scatters light to create soft highlights.
- [PhysicallyBasedMaterial.AnisotropyLevel](anisotropylevel-swift.struct.md): An object that defines the degree to which an entity reflects light to create stretched or oblong highlights.
- [PhysicallyBasedMaterial.AnisotropyAngle](anisotropyangle-swift.struct.md): An object used to define a material’s anisotropy angle.
