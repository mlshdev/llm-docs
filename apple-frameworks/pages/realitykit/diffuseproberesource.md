> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/diffuseproberesource](https://developer.apple.com/documentation/realitykit/diffuseproberesource)

# DiffuseProbeResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A resource containing baked diffuse lighting data organized as a tetrahedral probe mesh.

## Declaration

```swift
final class DiffuseProbeResource
```

<a id="overview"></a>

## Overview

Diffuse probe resources store spherical harmonic coefficients at discrete 3D positions, connected via a tetrahedral mesh for efficient runtime interpolation. This compact representation enables high probe density throughout a scene, allowing dynamic objects to receive accurate diffuse lighting as they move through different lighting conditions.

<a id="Probe-Data-Format"></a>

## Probe Data Format

Each probe stores first-order (L0 + L1) spherical harmonics: 4 coefficients per RGB channel, for a total of 12 floats (48 bytes) per probe. The tetrahedral mesh adds minimal per-tetrahedron overhead. This compact representation enables high probe density within typical memory budgets.

## Topics

### Initializers

- [init(positions:coefficients:tetrahedronIndices:)](diffuseproberesource/init%28positions_coefficients_tetrahedronindices_%29.md): Creates a diffuse probe resource from arrays of probe data.

## Relationships

### Conforms To

- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [DiffuseLightProbeGroupComponent](diffuselightprobegroupcomponent.md): A component that stores diffuse probe data for a spatial region.
- [DiffuseLightProbeReceiverComponent](diffuselightprobereceivercomponent.md): A component that receives diffuse lighting from a referenced probe group.

### Lightmaps and light probes

- [LightmapResource](lightmapresource.md): A resource containing references to lightmap texture atlases and descriptions of how parts of the atlases map to meshes in the scene.
- [LightmapComponent](lightmapcomponent.md): Describes how a lightmap is applied to parts of the scene.
- [DiffuseLightProbeGroupComponent](diffuselightprobegroupcomponent.md): A component that stores diffuse probe data for a spatial region.
- [DiffuseLightProbeReceiverComponent](diffuselightprobereceivercomponent.md): A component that receives diffuse lighting from a referenced probe group.
