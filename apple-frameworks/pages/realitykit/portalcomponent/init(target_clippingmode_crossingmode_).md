> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/init(target:clippingmode:crossingmode:)](https://developer.apple.com/documentation/realitykit/portalcomponent/init(target:clippingmode:crossingmode:))

# init(target:clippingMode:crossingMode:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a portal component with a target entity, clipping mode, and crossing mode.

## Declaration

```swift
init(target: Entity, clippingMode: PortalComponent.ClippingMode, crossingMode: PortalComponent.CrossingMode)
```

## Parameters

- `target`: A target world entity the portal is looking into.
- `clippingMode`: A configuration for the portal’s clipping feature.
- `crossingMode`: A configuration for the portal’s crossing feature.

<a id="discussion"></a>

## Discussion

To render a portal, an entity needs a [PortalComponent](../portalcomponent.md) and a [ModelComponent](../modelcomponent.md), using one or more [PortalMaterial](../portalmaterial.md) instances.

The target entity needs to have a [WorldComponent](../worldcomponent.md) or the portal does not render.

Provide [PortalComponent.ClippingMode](clippingmode-swift.enum.md) and [PortalComponent.CrossingMode](crossingmode-swift.enum.md) to configure the corresponding clipping and crossing features.

Using this initializer is equivalent to setting [targetEntity](targetentity.md), [clippingMode](clippingmode-swift.property.md) and [crossingMode](crossingmode-swift.property.md) properties directly.

See [PortalComponent](../portalcomponent.md) for example usage.
