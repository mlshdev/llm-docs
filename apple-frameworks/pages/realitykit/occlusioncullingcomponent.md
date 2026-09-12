> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/occlusioncullingcomponent](https://developer.apple.com/documentation/realitykit/occlusioncullingcomponent)

# OcclusionCullingComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A component that controls whether the system performs occlusion culling on the owning Entity and its descendants.

## Declaration

```swift
struct OcclusionCullingComponent
```

<a id="overview"></a>

## Overview

Occlusion culling can improve performance by skipping rendering for entities that are fully hidden behind other geometry. Entities are opted into this system by default.

This component can be used to disable occlusion culling for an Entity hierarchy if it’s observed that culling produces incorrect visuals. Such scenarios may include:

- Content that quickly moves in and out of occluded areas.
- Content that uses a Geometry Modifier to warp vertices outside of the mesh’s reported bounds.
- A camera teleports to a new location in a single frame and starts viewing the scene from a drastically different angle or position.

The enablement setting on this component will be applied recursively to descendant Entities. A component added to a descendant Entity will override any settings inherited from its parent.

## Topics

### Creating a component

- [init(isEnabled:)](occlusioncullingcomponent/init%28isenabled_%29.md)

### Enabling occlusion culling

- [isEnabled](occlusioncullingcomponent/isenabled.md): Whether occlusion culling should be performed on this Entity and its children.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Portals, clipping, and occlusion

- [RenderLayerComponent](renderlayercomponent.md): A component that defines which layers an entity participates in.
- [RenderLayer](renderlayer.md): A named identifier for a group of meshes and lights.
- [ClippingComponent](clippingcomponent.md): A component that clips entities and their children to a customizable bounding box volume with feathered edges.
