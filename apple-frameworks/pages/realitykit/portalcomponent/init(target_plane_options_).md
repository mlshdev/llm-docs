> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/init(target:plane:options:)](https://developer.apple.com/documentation/realitykit/portalcomponent/init(target:plane:options:))

# init(target:plane:options:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a portal component with a target entity, a single planar definition, and portal options.

## Declaration

```swift
init(target: Entity, plane: PortalComponent.Plane, options: PortalComponent.Options)
```

## Parameters

- `target`: A target world entity the portal is looking into.
- `plane`: A plane for configuring clipping and crossing features.
- `options`: An option set that determines which clipping and crossing features to enable.

<a id="discussion"></a>

## Discussion

Use this initializer to toggle [clippingMode](clippingmode-swift.property.md) and [crossingMode](crossingmode-swift.property.md) with the same [PortalComponent.Plane](plane.md).

For new code, prefer [init(target:clippingMode:crossingMode:)](init%28target_clippingmode_crossingmode_%29.md), which lets you configure clipping and crossing independently and supports [PortalComponent.ClippingMode.volume(\_:)](clippingmode-swift.enum/volume%28__%29.md) and [PortalComponent.CrossingMode.volume(\_:)](crossingmode-swift.enum/volume%28__%29.md) for box-shaped boundaries.
