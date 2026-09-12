> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/renderlayercomponent](https://developer.apple.com/documentation/realitykit/renderlayercomponent)

# RenderLayerComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A component that defines which layers an entity participates in.

## Declaration

```swift
struct RenderLayerComponent
```

<a id="overview"></a>

## Overview

Add a [RenderLayerComponent](renderlayercomponent.md) to an entity to control which lights illuminate it and which lights it casts shadows from. A light affects this entity when the entity’s [layers](renderlayercomponent/layers.md) intersect with the light’s layers, for example [layers](directionallightcomponent/layers.md), [layers](pointlightcomponent/layers.md), or [layers](spotlightcomponent/layers.md).

Entities without a [RenderLayerComponent](renderlayercomponent.md) are treated as members of [defaultLayer](renderlayer/defaultlayer.md).

## Topics

### Creating a component

- [init(layer:)](renderlayercomponent/init%28layer_%29.md): Creates a layer component with a single layer.
- [init(layers:)](renderlayercomponent/init%28layers_%29.md): Creates a layer component with the specified layers.

### Accessing render layers

- [layers](renderlayercomponent/layers.md): The layers this entity participates in.
- [defaultLayer](renderlayercomponent/defaultlayer.md): A render layer component that contains only [defaultLayer](renderlayer/defaultlayer.md).

### Initializers

- [init(\_:)](renderlayercomponent/init%28__%29.md): Creates a layer component with the specified layers.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Portals, clipping, and occlusion

- [RenderLayer](renderlayer.md): A named identifier for a group of meshes and lights.
- [ClippingComponent](clippingcomponent.md): A component that clips entities and their children to a customizable bounding box volume with feathered edges.
- [OcclusionCullingComponent](occlusioncullingcomponent.md): A component that controls whether the system performs occlusion culling on the owning Entity and its descendants.
