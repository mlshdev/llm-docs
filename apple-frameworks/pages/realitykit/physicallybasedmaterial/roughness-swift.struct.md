> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/roughness-swift.struct](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/roughness-swift.struct)

# PhysicallyBasedMaterial.Roughness

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that defines the roughness of an entity’s surface.

## Declaration

```swift
struct Roughness
```

<a id="overview"></a>

## Overview

Use this struct to specify the roughness of the entity. The `roughness` property represents how much the surface of the entity scatters light that it reflects. A material with a high roughness has a matte appearance, whereas one with a low roughness has a shiny appearance.

For more information, see [roughness](roughness-swift.property.md).

## Topics

### Creating a roughness object

- [init(floatLiteral:)](roughness-swift.struct/init%28floatliteral_%29.md): Creates an object from a single value.
- [init(scale:texture:)](roughness-swift.struct/init%28scale_texture_%29.md): Creates a roughness object from a color or texture.
- [init(\_:)](roughness-swift.struct/init%28__%29.md): Creates a roughness object from a custom material’s roughness property.

### Accessing roughness data

- [texture](roughness-swift.struct/texture.md): The roughness values as a UV-mapped image texture.
- [textureSemantic](roughness-swift.struct/texturesemantic.md): The intended use of the object’s texture property.
- [scale](roughness-swift.struct/scale.md): The roughness value for the entire entity.

## Relationships

### Conforms To

- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)

## See Also

### Realistic materials

- [Applying realistic material and lighting effects to entities](../applying-realistic-material-and-lighting-effects-to-entities.md): Enhance the appearance of objects in a RealityKit scene with Physically Based Rendering (PBR).
- [Rendering high-fidelity characters](../rendering-high-fidelity-characters.md): Configure material and lighting properties to avoid flat, dull skin and static hair on your characters.
- [Generating procedural textures](../../visionos/generating-procedural-textures-in-visionos.md): Display a 3D model that generates procedural textures in a reality view.
- [PhysicallyBasedMaterial](../physicallybasedmaterial.md): A material that simulates the appearance of real-world objects.
- [PhysicallyBasedMaterial.BaseColor](basecolor-swift.struct.md): An object that defines an entity’s base color.
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
