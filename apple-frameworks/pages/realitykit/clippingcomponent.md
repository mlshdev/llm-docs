> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clippingcomponent](https://developer.apple.com/documentation/realitykit/clippingcomponent)

# ClippingComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A component that clips entities and their children to a customizable bounding box volume with feathered edges.

## Declaration

```swift
struct ClippingComponent
```

<a id="overview"></a>

## Overview

The `ClippingComponent` provides a powerful and performant way to clip content in RealityKit. It’s particularly useful for:

- Creating soft-edge effects with feathered boundaries instead of hard cuts
- Creating polished spatial experiences with hierarchical clipping control

Add a `ClippingComponent` to an entity by passing it to an entity’s `Entity/ComponentSet/set()` method.

```swift
let windowEntity = Entity()

let bounds = BoundingBox(min: SIMD3<Float>(-10, -10, -10), max: SIMD3<Float>(10, 10, 10))
var clipping = ClippingComponent(bounds: bounds)
clipping.featheredEdge.falloff = .linear
clipping.featheredEdge.positiveEdgeInset = [2, 2, 0.0]  // 2-unit feather zone on +X & +Y edges
clipping.featheredEdge.negativeEdgeInset = [0.0, 0.0, 0.0]  // no feathering on negative edges
clipping.shouldClipSelf = true
clipping.shouldClipChildren = true

windowEntity.components.set(clipping)
```

## Topics

### Creating a clipping component

- [init(bounds:)](clippingcomponent/init%28bounds_%29.md)

### Configuring clipping behavior

- [shouldClipChildren](clippingcomponent/shouldclipchildren.md): Controls whether child entities are clipped by this component’s bounds.
- [shouldClipSelf](clippingcomponent/shouldclipself.md): Controls whether the entity itself is clipped by this component’s bounds.

### Feathering clipped edges

- [featheredEdge](clippingcomponent/featherededge-swift.property.md): The feathering configuration for the clipping boundaries.
- [ClippingComponent.FeatheredEdge](clippingcomponent/featherededge-swift.struct.md): Configuration for feathering the clipping boundaries.

### Instance Properties

- [bounds](clippingcomponent/bounds.md): The bounding box that defines the clipping region in the entity’s local coordinate space.

## Relationships

### Conforms To

- [Component](component.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Portals, clipping, and occlusion

- [RenderLayerComponent](renderlayercomponent.md): A component that defines which layers an entity participates in.
- [RenderLayer](renderlayer.md): A named identifier for a group of meshes and lights.
- [OcclusionCullingComponent](occlusioncullingcomponent.md): A component that controls whether the system performs occlusion culling on the owning Entity and its descendants.
