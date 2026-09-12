> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/sheencolor](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/sheencolor)

# PhysicallyBasedMaterial.SheenColor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that defines the color of an entity’s sheen.

## Declaration

```swift
struct SheenColor
```

<a id="overview"></a>

## Overview

Use `sheen` to add specular highlights that simulate subtle reflections, like the ones that occur on materials such as fabrics. Use this object to define the color of the highlights.

## Topics

### Creating a sheen color

- [init(tint:texture:)](sheencolor/init%28tint_texture_%29-6kcl7.md): Creates a sheen color in macOS.
- [init(tint:texture:)](sheencolor/init%28tint_texture_%29-12ev9.md): Creates a sheen color in macOS.

### Accessing texture data

- [texture](sheencolor/texture.md): An optional image texture for defining the property.
- [textureSemantic](sheencolor/texturesemantic.md): The intended use of the object’s texture property.

### Initializers

- [init(tint:texture:)](sheencolor/init%28tint_texture_%29.md): Creates a sheen color in macOS.

### Instance Properties

- [tint](sheencolor/tint-20njd.md)
- [tint](sheencolor/tint-8az9f.md)

## See Also

### Realistic materials

- [Applying realistic material and lighting effects to entities](../applying-realistic-material-and-lighting-effects-to-entities.md): Enhance the appearance of objects in a RealityKit scene with Physically Based Rendering (PBR).
- [Rendering high-fidelity characters](../rendering-high-fidelity-characters.md): Configure material and lighting properties to avoid flat, dull skin and static hair on your characters.
- [Generating procedural textures](../../visionos/generating-procedural-textures-in-visionos.md): Display a 3D model that generates procedural textures in a reality view.
- [PhysicallyBasedMaterial](../physicallybasedmaterial.md): A material that simulates the appearance of real-world objects.
- [PhysicallyBasedMaterial.BaseColor](basecolor-swift.struct.md): An object that defines an entity’s base color.
- [PhysicallyBasedMaterial.Roughness](roughness-swift.struct.md): An object that defines the roughness of an entity’s surface.
- [PhysicallyBasedMaterial.Metallic](metallic-swift.struct.md): An object that defines the reflectiveness of an entity.
- [PhysicallyBasedMaterial.Normal](normal-swift.struct.md): An object that specifies an entity’s normal map.
- [PhysicallyBasedMaterial.Blending](blending-swift.enum.md): The object that defines the transparency of an entity.
- [PhysicallyBasedMaterial.AmbientOcclusion](ambientocclusion-swift.struct.md): An object that defines the ambient occlusion of an entity’s surface.
- [PhysicallyBasedMaterial.Specular](specular-swift.struct.md): An object that defines the specular highlights of an entity.
- [PhysicallyBasedMaterial.Clearcoat](clearcoat-swift.struct.md): An object that defines the intensity of an entity’s clear, shiny coating.
- [PhysicallyBasedMaterial.ClearcoatRoughness](clearcoatroughness-swift.struct.md): An object that defines the degree to which an entity’s clear, shiny coating scatters light to create soft highlights.
- [PhysicallyBasedMaterial.AnisotropyLevel](anisotropylevel-swift.struct.md): An object that defines the degree to which an entity reflects light to create stretched or oblong highlights.
- [PhysicallyBasedMaterial.AnisotropyAngle](anisotropyangle-swift.struct.md): An object used to define a material’s anisotropy angle.
