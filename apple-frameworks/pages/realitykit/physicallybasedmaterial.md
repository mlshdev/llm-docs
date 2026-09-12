> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial)

# PhysicallyBasedMaterial

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A material that simulates the appearance of real-world objects.

## Declaration

```swift
struct PhysicallyBasedMaterial
```

## Mentioned In

- [Applying realistic material and lighting effects to entities](applying-realistic-material-and-lighting-effects-to-entities.md)
- [Rendering high-fidelity characters](rendering-high-fidelity-characters.md)
- [Modifying RealityKit rendering using custom materials](modifying-realitykit-rendering-using-custom-materials.md)

<a id="overview"></a>

## Overview

In RealityKit, a *material* is an object that defines the surface properties of a rendered 3D object. A Physically Based Rendering (PBR) material is a material that closely approximates the way light reflects off of real-world objects. Use [PhysicallyBasedMaterial](physicallybasedmaterial.md) to create highly realistic-looking objects for your AR scenes.

Many of the properties for [PhysicallyBasedMaterial](physicallybasedmaterial.md) provide the option to use more than one type of data to specify that property. You can set an object’s [baseColor](physicallybasedmaterial/basecolor-swift.property.md) using a specific color for the entire material, or you can use an image that UV-maps on to the entity.

[PhysicallyBasedMaterial](physicallybasedmaterial.md) includes all material properties supported by USDZ. On iOS 15 and later, RealityKit automatically uses [PhysicallyBasedMaterial](physicallybasedmaterial.md) when importing an entity from a USDZ file.

For more information on using [PhysicallyBasedMaterial](physicallybasedmaterial.md), see [Applying realistic material and lighting effects to entities](applying-realistic-material-and-lighting-effects-to-entities.md).

## Topics

### Creating a physically based material

- [init()](physicallybasedmaterial/init%28%29.md): Creates a physically based material.
- [init(program:)](physicallybasedmaterial/init%28program_%29.md)

### Setting the core properties

- [baseColor](physicallybasedmaterial/basecolor-swift.property.md): The color of an entity unmodified by lighting.
- [roughness](physicallybasedmaterial/roughness-swift.property.md): The amount the surface of the 3D object scatters reflected light.
- [metallic](physicallybasedmaterial/metallic-swift.property.md): The reflectiveness of an entity.
- [normal](physicallybasedmaterial/normal-swift.property.md): The normal map for the entity.
- [ambientOcclusion](physicallybasedmaterial/ambientocclusion-swift.property.md): The ambient occlusion values for a material.
- [specular](physicallybasedmaterial/specular-swift.property.md): The specular highlight applied to the entity.
- [clearcoat](physicallybasedmaterial/clearcoat-swift.property.md): The transparent highlights that simulate a clear, shiny coating on an entity.
- [clearcoatRoughness](physicallybasedmaterial/clearcoatroughness-swift.property.md): The degree to which an entity’s clear, shiny coating scatters light to create soft highlights.
- [clearcoatNormal](physicallybasedmaterial/clearcoatnormal-swift.property.md): Waviness and imperfections for the top clearcoat.

### Configuring transparency and highlights

- [blending](physicallybasedmaterial/blending-swift.property.md): The transparency of an entity.
- [sheen](physicallybasedmaterial/sheen.md): The intensity of an entity’s sheen.

### Adding anisotropy

- [anisotropyLevel](physicallybasedmaterial/anisotropylevel-swift.property.md): The degree to which an entity reflects light to create stretched or oblong highlights.
- [anisotropyAngle](physicallybasedmaterial/anisotropyangle-swift.property.md): The angle at which the anisotropic direction of the material is oriented, influencing the reflection and appearance of surface highlights.

### Adding light emission

- [emissiveIntensity](physicallybasedmaterial/emissiveintensity.md): The intensity of light emitted by the entity.
- [emissiveColor](physicallybasedmaterial/emissivecolor-swift.property.md): The color of the light the entity emits.

### Modifying texture coordinates

- [textureCoordinateTransform](physicallybasedmaterial/texturecoordinatetransform-swift.property.md): A two-dimensional transformation to apply to the entity’s primary texture coordinates.
- [secondaryTextureCoordinateTransform](physicallybasedmaterial/secondarytexturecoordinatetransform.md): A two-dimensional transformation to apply to the entity’s secondary texture coordinates.

### Culling unnecessary polygons

- [faceCulling](physicallybasedmaterial/faceculling-swift.property.md): A process in which the system specifies polygons to remove before rendering a mesh using this material.

### Setting depth testing properties

- [readsDepth](physicallybasedmaterial/readsdepth.md): A boolean value that determines whether this material performs the depth test by reading RealityKit’s depth buffer.
- [writesDepth](physicallybasedmaterial/writesdepth.md): A boolean value that determines whether this material writes its depth into RealityKit’s depth buffer.

### Setting shader properties

- [program](physicallybasedmaterial/program-swift.property.md)

### Configuring subsurface scattering

- [subsurfaceColor](physicallybasedmaterial/subsurfacecolor-swift.property.md)
- [PhysicallyBasedMaterial.SubsurfaceColor](physicallybasedmaterial/subsurfacecolor-swift.struct.md)
- [subsurfaceWeight](physicallybasedmaterial/subsurfaceweight-swift.property.md)
- [PhysicallyBasedMaterial.SubsurfaceWeight](physicallybasedmaterial/subsurfaceweight-swift.struct.md)
- [subsurfaceRadius](physicallybasedmaterial/subsurfaceradius-swift.property.md)
- [PhysicallyBasedMaterial.SubsurfaceRadius](physicallybasedmaterial/subsurfaceradius-swift.struct.md)
- [subsurfaceRadiusScale](physicallybasedmaterial/subsurfaceradiusscale-swift.property.md)
- [PhysicallyBasedMaterial.SubsurfaceRadiusScale](physicallybasedmaterial/subsurfaceradiusscale-swift.struct.md)
- [subsurfaceScatterAnisotropy](physicallybasedmaterial/subsurfacescatteranisotropy-swift.property.md)
- [PhysicallyBasedMaterial.SubsurfaceScatterAnisotropy](physicallybasedmaterial/subsurfacescatteranisotropy-swift.struct.md)

### Configuring occlusion shading

- [bentNormal](physicallybasedmaterial/bentnormal-swift.property.md): The bent normal map for the entity.
- [PhysicallyBasedMaterial.BentNormal](physicallybasedmaterial/bentnormal-swift.struct.md): The bent normal map for the entity.
- [enableSpecularOcclusion](physicallybasedmaterial/enablespecularocclusion.md): Enables specular occlusion computations.

### Classes

- [PhysicallyBasedMaterial.Program](physicallybasedmaterial/program-swift.class.md): An object that represents the backing shader compilation required for physically based materials.

### Structures

- [PhysicallyBasedMaterial.AmbientOcclusion](physicallybasedmaterial/ambientocclusion-swift.struct.md): An object that defines the ambient occlusion of an entity’s surface.
- [PhysicallyBasedMaterial.AnisotropyAngle](physicallybasedmaterial/anisotropyangle-swift.struct.md): An object used to define a material’s anisotropy angle.
- [PhysicallyBasedMaterial.AnisotropyLevel](physicallybasedmaterial/anisotropylevel-swift.struct.md): An object that defines the degree to which an entity reflects light to create stretched or oblong highlights.
- [PhysicallyBasedMaterial.BaseColor](physicallybasedmaterial/basecolor-swift.struct.md): An object that defines an entity’s base color.
- [PhysicallyBasedMaterial.Clearcoat](physicallybasedmaterial/clearcoat-swift.struct.md): An object that defines the intensity of an entity’s clear, shiny coating.
- [PhysicallyBasedMaterial.ClearcoatNormal](physicallybasedmaterial/clearcoatnormal-swift.struct.md): An object that defines the clearcoat normal map texture.
- [PhysicallyBasedMaterial.ClearcoatRoughness](physicallybasedmaterial/clearcoatroughness-swift.struct.md): An object that defines the degree to which an entity’s clear, shiny coating scatters light to create soft highlights.
- [PhysicallyBasedMaterial.EmissiveColor](physicallybasedmaterial/emissivecolor-swift.struct.md): An object that defines the color of the light an entity emits.
- [PhysicallyBasedMaterial.Metallic](physicallybasedmaterial/metallic-swift.struct.md): An object that defines the reflectiveness of an entity.
- [PhysicallyBasedMaterial.Normal](physicallybasedmaterial/normal-swift.struct.md): An object that specifies an entity’s normal map.
- [PhysicallyBasedMaterial.Opacity](physicallybasedmaterial/opacity.md): An object that defines the opacity of an entity.
- [PhysicallyBasedMaterial.Roughness](physicallybasedmaterial/roughness-swift.struct.md): An object that defines the roughness of an entity’s surface.
- [PhysicallyBasedMaterial.SheenColor](physicallybasedmaterial/sheencolor.md): An object that defines the color of an entity’s sheen.
- [PhysicallyBasedMaterial.Specular](physicallybasedmaterial/specular-swift.struct.md): An object that defines the specular highlights of an entity.

### Instance Properties

- [opacityThreshold](physicallybasedmaterial/opacitythreshold.md): A threshold below which RealityKit ignores opacity.
- [triangleFillMode](physicallybasedmaterial/trianglefillmode-swift.property.md): The object that controls how RealityKit draws triangles.

### Type Aliases

- [PhysicallyBasedMaterial.FaceCulling](physicallybasedmaterial/faceculling-swift.typealias.md): An alias for the face culling object that’s appropriate for this material class.
- [PhysicallyBasedMaterial.Texture](physicallybasedmaterial/texture.md): The texture type to use for materials of this class.
- [PhysicallyBasedMaterial.TextureCoordinateTransform](physicallybasedmaterial/texturecoordinatetransform-swift.typealias.md): An alias for the texture coordinate transform that’s appropriate for this material class.
- [PhysicallyBasedMaterial.TriangleFillMode](physicallybasedmaterial/trianglefillmode-swift.typealias.md): An alias for the triangle fill mode object that’s appropriate for this material class.

### Enumerations

- [PhysicallyBasedMaterial.Blending](physicallybasedmaterial/blending-swift.enum.md): The object that defines the transparency of an entity.

## Relationships

### Conforms To

- [Material](material.md)

## See Also

### Realistic materials

- [Applying realistic material and lighting effects to entities](applying-realistic-material-and-lighting-effects-to-entities.md): Enhance the appearance of objects in a RealityKit scene with Physically Based Rendering (PBR).
- [Rendering high-fidelity characters](rendering-high-fidelity-characters.md): Configure material and lighting properties to avoid flat, dull skin and static hair on your characters.
- [Generating procedural textures](../visionos/generating-procedural-textures-in-visionos.md): Display a 3D model that generates procedural textures in a reality view.
- [PhysicallyBasedMaterial.BaseColor](physicallybasedmaterial/basecolor-swift.struct.md): An object that defines an entity’s base color.
- [PhysicallyBasedMaterial.Roughness](physicallybasedmaterial/roughness-swift.struct.md): An object that defines the roughness of an entity’s surface.
- [PhysicallyBasedMaterial.Metallic](physicallybasedmaterial/metallic-swift.struct.md): An object that defines the reflectiveness of an entity.
- [PhysicallyBasedMaterial.Normal](physicallybasedmaterial/normal-swift.struct.md): An object that specifies an entity’s normal map.
- [PhysicallyBasedMaterial.Blending](physicallybasedmaterial/blending-swift.enum.md): The object that defines the transparency of an entity.
- [PhysicallyBasedMaterial.AmbientOcclusion](physicallybasedmaterial/ambientocclusion-swift.struct.md): An object that defines the ambient occlusion of an entity’s surface.
- [PhysicallyBasedMaterial.Specular](physicallybasedmaterial/specular-swift.struct.md): An object that defines the specular highlights of an entity.
- [PhysicallyBasedMaterial.SheenColor](physicallybasedmaterial/sheencolor.md): An object that defines the color of an entity’s sheen.
- [PhysicallyBasedMaterial.Clearcoat](physicallybasedmaterial/clearcoat-swift.struct.md): An object that defines the intensity of an entity’s clear, shiny coating.
- [PhysicallyBasedMaterial.ClearcoatRoughness](physicallybasedmaterial/clearcoatroughness-swift.struct.md): An object that defines the degree to which an entity’s clear, shiny coating scatters light to create soft highlights.
- [PhysicallyBasedMaterial.AnisotropyLevel](physicallybasedmaterial/anisotropylevel-swift.struct.md): An object that defines the degree to which an entity reflects light to create stretched or oblong highlights.
- [PhysicallyBasedMaterial.AnisotropyAngle](physicallybasedmaterial/anisotropyangle-swift.struct.md): An object used to define a material’s anisotropy angle.
