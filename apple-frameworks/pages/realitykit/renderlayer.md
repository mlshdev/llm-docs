> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/renderlayer](https://developer.apple.com/documentation/realitykit/renderlayer)

# RenderLayer

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A named identifier for a group of meshes and lights.

## Declaration

```swift
struct RenderLayer
```

<a id="overview"></a>

## Overview

Use a [RenderLayer](renderlayer.md) to associate a light with the entities it should illuminate, or to mark which entities a light affects. Every entity belongs to [defaultLayer](renderlayer/defaultlayer.md) unless its [RenderLayerComponent](renderlayercomponent.md) specifies otherwise.

Define your own layers as static constants in an extension so they’re easy to reuse:

```swift
extension RenderLayer {
    static let hero = RenderLayer("com.myapp.hero")
    static let background = RenderLayer("com.myapp.background")
}
```

## Topics

### Accessing default layers

- [defaultLayer](renderlayer/defaultlayer.md): The default layer.

### Grouping render layers

- [RenderLayer.Set](renderlayer/set.md): An unordered collection of unique render layers.

### Initializers

- [init(\_:)](renderlayer/init%28__%29.md): Creates a custom render layer with the specified compile-time constant name.
- [init(rawValue:)](renderlayer/init%28rawvalue_%29.md): Creates a custom render layer with the specified runtime name.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Portals, clipping, and occlusion

- [RenderLayerComponent](renderlayercomponent.md): A component that defines which layers an entity participates in.
- [ClippingComponent](clippingcomponent.md): A component that clips entities and their children to a customizable bounding box volume with feathered edges.
- [OcclusionCullingComponent](occlusioncullingcomponent.md): A component that controls whether the system performs occlusion culling on the owning Entity and its descendants.
