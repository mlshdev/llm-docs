> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/diffuselightprobereceivercomponent](https://developer.apple.com/documentation/realitykit/diffuselightprobereceivercomponent)

# DiffuseLightProbeReceiverComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A component that receives diffuse lighting from a referenced probe group.

## Declaration

```swift
struct DiffuseLightProbeReceiverComponent
```

<a id="overview"></a>

## Overview

Attach this component to entities that should receive spatially-varying diffuse indirect lighting. As the entity moves through the scene, the system automatically interpolates diffuse lighting from the probe group based on the entity’s current position.

This follows the same receiver pattern as `ImageBasedLightReceiverComponent`.

```swift
character.components[DiffuseLightProbeReceiverComponent.self] =
    DiffuseLightProbeReceiverComponent(probeGroup: probeGroupEntity)
```

## Topics

### Initializers

- [init(probeGroup:)](diffuselightprobereceivercomponent/init%28probegroup_%29.md): Creates a diffuse light probe receiver component.

### Instance Properties

- [probeGroup](diffuselightprobereceivercomponent/probegroup.md): The entity providing diffuse probe lighting to this receiver.

## Relationships

### Conforms To

- [Component](component.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Related Documentation

- [DiffuseLightProbeGroupComponent](diffuselightprobegroupcomponent.md): A component that stores diffuse probe data for a spatial region.
- [DiffuseProbeResource](diffuseproberesource.md): A resource containing baked diffuse lighting data organized as a tetrahedral probe mesh.

### Lightmaps and light probes

- [LightmapResource](lightmapresource.md): A resource containing references to lightmap texture atlases and descriptions of how parts of the atlases map to meshes in the scene.
- [LightmapComponent](lightmapcomponent.md): Describes how a lightmap is applied to parts of the scene.
- [DiffuseProbeResource](diffuseproberesource.md): A resource containing baked diffuse lighting data organized as a tetrahedral probe mesh.
- [DiffuseLightProbeGroupComponent](diffuselightprobegroupcomponent.md): A component that stores diffuse probe data for a spatial region.
