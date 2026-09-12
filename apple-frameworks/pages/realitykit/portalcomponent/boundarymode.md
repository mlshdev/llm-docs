> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/boundarymode](https://developer.apple.com/documentation/realitykit/portalcomponent/boundarymode)

# PortalComponent.BoundaryMode

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A combination of clipping and crossing behaviors to apply to a portal boundary.

## Declaration

```swift
enum BoundaryMode
```

<a id="overview"></a>

## Overview

Pass this value to the factory entry points to configure [clippingMode](clippingmode-swift.property.md) and [crossingMode](crossingmode-swift.property.md) together.

## Topics

### Enumeration Cases

- [PortalComponent.BoundaryMode.clippingAndCrossing](boundarymode/clippingandcrossing.md): The portal clips its content to the boundary, and entities with [PortalCrossingComponent](../portalcrossingcomponent.md) cross the boundary.
- [PortalComponent.BoundaryMode.clippingOnly](boundarymode/clippingonly.md): The portal clips its content to the boundary.
- [PortalComponent.BoundaryMode.crossingOnly](boundarymode/crossingonly.md): Entities with [PortalCrossingComponent](../portalcrossingcomponent.md) cross the boundary.
- [PortalComponent.BoundaryMode.none](boundarymode/none.md): The portal renders without clipping or crossing.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
