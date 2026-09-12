> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lightmapcomponent](https://developer.apple.com/documentation/realitykit/lightmapcomponent)

# LightmapComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Describes how a lightmap is applied to parts of the scene.

## Declaration

```swift
struct LightmapComponent
```

<a id="overview"></a>

## Overview

[LightmapComponent](lightmapcomponent.md) specifies which children of its owning entity should have a lightmap applied to them, and connects those children to their corresponding data in a [LightmapResource](lightmapresource.md).

To use [LightmapComponent](lightmapcomponent.md), first create a [LightmapResource](lightmapresource.md) using textures produced by an offline baking process. Then, create a new [LightmapComponent](lightmapcomponent.md) backed by the [LightmapResource](lightmapresource.md), and use the [entityIndexInLightmapResource](lightmapcomponent/entityindexinlightmapresource.md) property to map each entity that you wish to be lightmapped, to its corresponding slot in the lightmap resource. Finally, add the [LightmapComponent](lightmapcomponent.md) to an entity that sits above all of the lightmapped entities in the hierachy.

## Topics

### Classes

- [LightmapComponent.SurfaceExtractor](lightmapcomponent/surfaceextractor.md): This is a helper for extracting certain surface properties from entities within a lightmapped scene and rendering them out into the atlas defined by the light map.

### Structures

- [LightmapComponent.FinalShadedColorBakeMaterial](lightmapcomponent/finalshadedcolorbakematerial.md): Material that should be used on lightmapped entities using the “beauty” bake type. This material only reads the lightmap data and does not perform shading calculations at runtime.

### Initializers

- [init(resource:)](lightmapcomponent/init%28resource_%29.md): Creates a new LightmapComponent backed by the given LightmapResource.

### Instance Properties

- [entityIndexInLightmapResource](lightmapcomponent/entityindexinlightmapresource.md): A dictionary mapping the descendants of the LightmapComponent-holding entity to their corresponding slot in the Lightmap resource.
- [indirectIrradianceContributionScale](lightmapcomponent/indirectirradiancecontributionscale.md): Multiplies the indirect irradiance contribution stored in the lightmap by the given value.
- [lightmap](lightmapcomponent/lightmap.md): The LightmapResource backing this component.

### Type Aliases

- [LightmapComponent.EntityIndex](lightmapcomponent/entityindex.md)

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Related Documentation

- [LightmapResource](lightmapresource.md): A resource containing references to lightmap texture atlases and descriptions of how parts of the atlases map to meshes in the scene.

### Lightmaps and light probes

- [LightmapResource](lightmapresource.md): A resource containing references to lightmap texture atlases and descriptions of how parts of the atlases map to meshes in the scene.
- [DiffuseProbeResource](diffuseproberesource.md): A resource containing baked diffuse lighting data organized as a tetrahedral probe mesh.
- [DiffuseLightProbeGroupComponent](diffuselightprobegroupcomponent.md): A component that stores diffuse probe data for a spatial region.
- [DiffuseLightProbeReceiverComponent](diffuselightprobereceivercomponent.md): A component that receives diffuse lighting from a referenced probe group.
