> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/blending-swift.enum](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/blending-swift.enum)

# PhysicallyBasedMaterial.Blending

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The object that defines the transparency of an entity.

## Declaration

```swift
enum Blending
```

## Topics

### Creating transparency objects

- [init(blending:)](blending-swift.enum/init%28blending_%29.md): Creates an object from a custom material’s blending property.

### Specifying opacity

- [PhysicallyBasedMaterial.Blending.opaque](blending-swift.enum/opaque.md): An opaque surface.
- [PhysicallyBasedMaterial.Blending.transparent(opacity:)](blending-swift.enum/transparent%28opacity_%29.md): A surface that’s transparent.
- [opacityThreshold](opacitythreshold.md): A threshold below which RealityKit ignores opacity.
- [PhysicallyBasedMaterial.Opacity](opacity.md): An object that defines the opacity of an entity.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

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
- [PhysicallyBasedMaterial.AmbientOcclusion](ambientocclusion-swift.struct.md): An object that defines the ambient occlusion of an entity’s surface.
- [PhysicallyBasedMaterial.Specular](specular-swift.struct.md): An object that defines the specular highlights of an entity.
- [PhysicallyBasedMaterial.SheenColor](sheencolor.md): An object that defines the color of an entity’s sheen.
- [PhysicallyBasedMaterial.Clearcoat](clearcoat-swift.struct.md): An object that defines the intensity of an entity’s clear, shiny coating.
- [PhysicallyBasedMaterial.ClearcoatRoughness](clearcoatroughness-swift.struct.md): An object that defines the degree to which an entity’s clear, shiny coating scatters light to create soft highlights.
- [PhysicallyBasedMaterial.AnisotropyLevel](anisotropylevel-swift.struct.md): An object that defines the degree to which an entity reflects light to create stretched or oblong highlights.
- [PhysicallyBasedMaterial.AnisotropyAngle](anisotropyangle-swift.struct.md): An object used to define a material’s anisotropy angle.
