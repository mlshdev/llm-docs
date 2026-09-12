> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/clearcoatroughness-swift.struct](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/clearcoatroughness-swift.struct)

# PhysicallyBasedMaterial.ClearcoatRoughness

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that defines the degree to which an entity’s clear, shiny coating scatters light to create soft highlights.

## Declaration

```swift
struct ClearcoatRoughness
```

<a id="overview"></a>

## Overview

This object specifies clearcoat roughness for entities that have clearcoat enabled. A clearcoat is a separate layer of transparent specular highlights used to simulate a clear coating, like on a car or the surface of lacquered objects. When you enable clearcoat rendering for a material, RealityKit renders the clearcoat as a separate layer just above the surface of the entity. You can specify a clearcoat roughness value to indicate how much the clearcoat scatters light that bounces off of it, which softens and spreads out the highlights.

## Topics

### Creating a clearcoat roughness object

- [init(floatLiteral:)](clearcoatroughness-swift.struct/init%28floatliteral_%29.md): Creates a clearcoat roughness object using a single value.
- [init(scale:texture:)](clearcoatroughness-swift.struct/init%28scale_texture_%29.md): Creates a clearcoat roughness object using a single value or a texture.
- [init(\_:)](clearcoatroughness-swift.struct/init%28__%29.md): Creates a clearcoat roughness object from a custom material’s clearcoat roughness property.

### Accessing clearcoat roughness values

- [texture](clearcoatroughness-swift.struct/texture.md): The clearcoat roughness specified using a UV-mapped image.
- [textureSemantic](clearcoatroughness-swift.struct/texturesemantic.md): The intended use of the object’s texture property.
- [scale](clearcoatroughness-swift.struct/scale.md): The clearcoat roughness specified as a single value.

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
- [PhysicallyBasedMaterial.Roughness](roughness-swift.struct.md): An object that defines the roughness of an entity’s surface.
- [PhysicallyBasedMaterial.Metallic](metallic-swift.struct.md): An object that defines the reflectiveness of an entity.
- [PhysicallyBasedMaterial.Normal](normal-swift.struct.md): An object that specifies an entity’s normal map.
- [PhysicallyBasedMaterial.Blending](blending-swift.enum.md): The object that defines the transparency of an entity.
- [PhysicallyBasedMaterial.AmbientOcclusion](ambientocclusion-swift.struct.md): An object that defines the ambient occlusion of an entity’s surface.
- [PhysicallyBasedMaterial.Specular](specular-swift.struct.md): An object that defines the specular highlights of an entity.
- [PhysicallyBasedMaterial.SheenColor](sheencolor.md): An object that defines the color of an entity’s sheen.
- [PhysicallyBasedMaterial.Clearcoat](clearcoat-swift.struct.md): An object that defines the intensity of an entity’s clear, shiny coating.
- [PhysicallyBasedMaterial.AnisotropyLevel](anisotropylevel-swift.struct.md): An object that defines the degree to which an entity reflects light to create stretched or oblong highlights.
- [PhysicallyBasedMaterial.AnisotropyAngle](anisotropyangle-swift.struct.md): An object used to define a material’s anisotropy angle.
